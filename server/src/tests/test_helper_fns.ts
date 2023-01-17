/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import supertest from 'supertest';
import { app } from '../app';
import { DataURL } from './test_helper_images';
import { createNewUser } from '../services/users';
import { CallbackSucess, CallbackTimeout, NewUser } from '../types';
import { requestCoordinatesByIp, getLocation } from '../services/location';
import { checkLikeEntry } from '../repositories/likesRepository';
import { checkBlockEntry } from '../repositories/blockEntriesRepository';
import { checkReportEntry } from '../repositories/reportEntriesRepository';
import { clearUsers, findUserByUsername } from '../repositories/userRepository';
import { getMatchesByUserId, checkMatchEntry } from '../repositories/matchesRepository';
import { defaultCoordinates, ipAddress, TokenAndId } from './test_helper';
import { credentialsNewUser, ProfileData, Credentials, profileDataNewUser } from './test_helper_users';

export const api = supertest(app);

export let id = <string>'';
export let token = <string>'';
export let loginRes = <supertest.Response>{};

jest.mock('../services/location');
export const requestCoordinatesByIpMock = jest.mocked(requestCoordinatesByIp);
export const getLocationMock = jest.mocked(getLocation);

export const initLoggedUser = async (username: string, credentials: Credentials) => {
	const user = await findUserByUsername(username);
	const activationCode = user?.activationCode;
	await api.post(`/api/users/activate/${activationCode}`);
	const res = await api.post('/api/login').send(credentials).expect(200);
	return res;
};

export const putToProfile = async (id: string) => {
	getLocationMock.mockReturnValue(Promise.resolve('Helsinki, Finland'));
	await api
		.put(`/api/users/${id}/profile`)
		.set({ Authorization: `bearer ${loginRes.body.token}` })
		.send(profileDataNewUser)
		.expect(200);
	// if (res.body.error)
	// 	console.log(res.body.error);
};

export const postToPhotos = async (id: string) => {
	await api
		.post(`/api/users/${id}/photos`)
		.set({ Authorization: `bearer ${loginRes.body.token}` })
		.send({ images: [{ dataURL: DataURL }] })
		.expect(200);
};

export const createAndLoginUser = async (user: NewUser) => {
	await clearUsers();
	requestCoordinatesByIpMock.mockReturnValue(Promise.resolve(defaultCoordinates));
	await createNewUser(user, ipAddress);
	loginRes = await initLoggedUser(user.username, credentialsNewUser);
	id = <string>JSON.parse(loginRes.text).id;
	token = <string>JSON.parse(loginRes.text).token;
	return { id, token };
};

export const loginAndPrepareUser = async (user: NewUser, credentials: Credentials, profileData: ProfileData) => {
	requestCoordinatesByIpMock.mockReturnValue(Promise.resolve(defaultCoordinates));
	await createNewUser(user, ipAddress);
	const loginData = await initLoggedUser(user.username, credentials);
	await prepareTestUser(loginData.body, profileData);
	return { id: loginData.body.id, token: loginData.body.token };
};

export const prepareTestUser = async (loginData: TokenAndId, profileData: object) => {
	getLocationMock.mockReturnValue(Promise.resolve('Helsinki, Finland'));

	await api
		.put(`/api/users/${loginData.id}/profile`)
		.set({ Authorization: `bearer ${loginData.token}` })
		.send(profileData)
		.expect(200);

	await api
		.post(`/api/users/${loginData.id}/photos`)
		.set({ Authorization: `bearer ${loginData.token}` })
		.send({ images: [{ dataURL: DataURL }] })
		.expect(200);
};

export const userVisitsAnotherUsersProfile = async (visited: TokenAndId, visitor: TokenAndId) => {
	const resFromProfilePage = await api
		.get(`/api/users/${visited.id}/public_profile`)
		.set({ Authorization: `bearer ${visitor.token}` })
		.expect('Content-Type', /application\/json/);

	expect(resFromProfilePage.statusCode).toBe(200);
	expect(resFromProfilePage.body).toBeTruthy();
};

export const putLike = async (visited: TokenAndId, visitor: TokenAndId) => {
	const resFromProfilePage = await api.post(`/api/users/${visited.id}/like`).set({ Authorization: `bearer ${visitor.token}` });

	// console.log(resFromProfilePage.error);
	expect(resFromProfilePage.statusCode).toBe(200);
	expect(resFromProfilePage.body).toBeTruthy();
};

export const removeLike = async (visited: TokenAndId, visitor: TokenAndId) => {
	const resFromProfilePage = await api.delete(`/api/users/${visited.id}/like`).set({ Authorization: `bearer ${visitor.token}` });

	// console.log(resFromProfilePage.error);
	expect(resFromProfilePage.statusCode).toBe(200);
	expect(resFromProfilePage.body).toBeTruthy();
};

export const twoUserLikeEachOther = async (userOne: TokenAndId, userTwo: TokenAndId) => {
	const totalMatchesAtStart = await getMatchesByUserId(userOne.id);
	expect(totalMatchesAtStart).toStrictEqual([]);

	const likeStatusAtStart = await checkLikeEntry(userOne.id, userTwo.id);
	expect(likeStatusAtStart).toBeFalsy();
	const likeStatusAtStartFromUserTwo = await checkLikeEntry(userTwo.id, userOne.id);
	expect(likeStatusAtStartFromUserTwo).toBeFalsy();

	await putLike(userOne, userTwo);

	const likeStatusAtEnd = await checkLikeEntry(userOne.id, userTwo.id);
	expect(likeStatusAtEnd).toBeTruthy();

	await putLike(userTwo, userOne);
	const likeStatusAtEndFromUserTwo = await checkLikeEntry(userTwo.id, userOne.id);
	expect(likeStatusAtEndFromUserTwo).toBeTruthy();

	const [res1, res2] = await Promise.all([checkMatchEntry(userOne.id, userTwo.id), checkMatchEntry(userTwo.id, userOne.id)]);
	expect(res1).toBeTruthy();
	expect(res2).toBeTruthy();
};

export const userBlocksAnotherUser = async (userToBlock: TokenAndId, userThatBlocks: TokenAndId) => {
	await api
		.post(`/api/users/${userToBlock.id}/block`)
		.set({ Authorization: `bearer ${userThatBlocks.token}` })
		.expect(200);

	const blockStatusAtEnd = await checkBlockEntry(userToBlock.id, userThatBlocks.id);
	expect(blockStatusAtEnd).toBeTruthy();
};

export const userReportsAnotherUser = async (userToRepot: TokenAndId, reportingUser: TokenAndId) => {
	await api
		.post(`/api/users/${userToRepot.id}/report`)
		.set({ Authorization: `bearer ${reportingUser.token}` })
		.expect(200);

	const reportStatusAtEnd = await checkReportEntry(userToRepot.id, reportingUser.id);
	expect(reportStatusAtEnd).toBeTruthy();
};

export const socketAuth = (id: string, token: string) => {
	return {
		sessionId: token,
		user_id: id
	};
};

export const withTimeout = (onSuccess: CallbackSucess, onTimeout: CallbackTimeout, timeout: number) => {
	let called = false;

	const timer = setTimeout(() => {
		if (called) return;
		called = true;
		onTimeout();
	}, timeout);

	return (...args: [{ online: boolean; lastActive: number }]) => {
		if (called) return;
		called = true;
		clearTimeout(timer);
		onSuccess.apply(this, args);
	};
};
