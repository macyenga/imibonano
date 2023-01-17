/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { describe, expect } from '@jest/globals';
import { checkLikeEntry, clearLikes, getLikesByVisitedId, getLikesCount } from '../repositories/likesRepository';
import { api, initLoggedUser, loginAndPrepareUser, putLike, removeLike, requestCoordinatesByIpMock } from './test_helper_fns';
import { newUser, secondUser, credentialsNewUser, credentialsSecondUser, profileDataNewUser, profileDataSecondUser } from './test_helper_users';
import { defaultCoordinates, ipAddress, TokenAndId } from './test_helper';
import { clearUsers } from '../repositories/userRepository';
import { createNewUser } from '../services/users';

jest.setTimeout(10000);
jest.mock('../services/location');

let visitor: { id: string; token: string };
let visited: { id: string; token: string };

export const checkLikesHistoryStats = async (owner: TokenAndId) => {
	const resFromStatsPage = await api
		.get(`/api/users/${owner.id}/likes`)
		.set({ Authorization: `bearer ${owner.token}` })
		.expect('Content-Type', /application\/json/);

	expect(resFromStatsPage.statusCode).toBe(200);
	return resFromStatsPage.body;
};

describe('like history tests', () => {
	beforeEach(async () => {
		await clearUsers();
		await clearLikes();
		visitor = await loginAndPrepareUser(newUser, credentialsNewUser, profileDataNewUser);
		visited = await loginAndPrepareUser(secondUser, credentialsSecondUser, profileDataSecondUser);
	});

	test('like value is false on GET when no like from visitor on visited profile', async () => {
		const visitedStats = await checkLikesHistoryStats(visited);
		expect(visitedStats).toStrictEqual([[], []]);

		const visitorStats = await checkLikesHistoryStats(visitor);
		expect(visitorStats).toStrictEqual([[], []]);

		const res = await api
			.get(`/api/users/${visited.id}/like`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(res.body.like).toBeFalsy();
	});

	test('valid user can like another valid user', async () => {
		const likeStatusAtStart = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtStart).toBeFalsy();

		await putLike(visited, visitor);

		const likeStatusAtEnd = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtEnd).toBeTruthy();
		const likesByVisited = await getLikesByVisitedId(visited.id);
		expect(likesByVisited).toBeDefined();
		expect(likesByVisited?.[0].likingUserId).toBe(visitor.id);

		const visitedStats = await checkLikesHistoryStats(visited);
		expect(visitedStats).toStrictEqual([[{ likedUserId: visited.id, likingUserId: visitor.id }], []]);

		const visitorStats = await checkLikesHistoryStats(visitor);
		expect(visitorStats).toStrictEqual([[], [{ likedUserId: visited.id, likingUserId: visitor.id }]]);
	});

	test('like value is true on GET when visitor already liked visited profile', async () => {
		await putLike(visited, visitor);

		const res = await api
			.get(`/api/users/${visited.id}/like`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(res.body.like).toBeTruthy();
	});

	test('user can like another user only once', async () => {
		const likeStatusAtStart = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtStart).toBeFalsy();

		await putLike(visited, visitor);

		const likesCountAfterLike = await getLikesCount(visited.id);
		expect(likesCountAfterLike).toBe(1);

		const likeStatusAtEnd = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtEnd).toBeTruthy();

		const visitedStats = await checkLikesHistoryStats(visited);
		expect(visitedStats).toStrictEqual([[{ likedUserId: visited.id, likingUserId: visitor.id }], []]);

		const visitorStats = await checkLikesHistoryStats(visitor);
		expect(visitorStats).toStrictEqual([[], [{ likedUserId: visited.id, likingUserId: visitor.id }]]);

		await putLike(visited, visitor);
		await putLike(visited, visitor);

		const likesCountAtEnd = await getLikesCount(visited.id);
		expect(likesCountAtEnd).toBe(1);

		const visitedStatsEnd = await checkLikesHistoryStats(visited);
		expect(visitedStatsEnd).toStrictEqual(visitedStats);

		const visitorStatsEnd = await checkLikesHistoryStats(visitor);
		expect(visitorStatsEnd).toStrictEqual(visitorStats);
	});

	test('user can remove a like that he put to another user', async () => {
		const likeStatusAtStart = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtStart).toBeFalsy();

		await putLike(visited, visitor);

		const likeStatus = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatus).toBeTruthy();

		const likesByVisited = await getLikesByVisitedId(visited.id);
		expect(likesByVisited).toBeDefined();
		expect(likesByVisited?.[0].likingUserId).toBe(visitor.id);

		const visitedStats = await checkLikesHistoryStats(visited);
		expect(visitedStats).toStrictEqual([[{ likedUserId: visited.id, likingUserId: visitor.id }], []]);

		const visitorStats = await checkLikesHistoryStats(visitor);
		expect(visitorStats).toStrictEqual([[], [{ likedUserId: visited.id, likingUserId: visitor.id }]]);

		await removeLike(visited, visitor);
		const likeStatusAtEnd = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtEnd).toBeFalsy();

		const visitedStatsEnd = await checkLikesHistoryStats(visited);
		expect(visitedStatsEnd).toStrictEqual([[], []]);

		const visitorStatsEnd = await checkLikesHistoryStats(visitor);
		expect(visitorStatsEnd).toStrictEqual([[], []]);
	});

	test('no errors if user sends request to remove like that wasnt there', async () => {
		const likeStatus = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatus).toBeFalsy();

		await removeLike(visited, visitor);
		const likeStatusAtEnd = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtEnd).toBeFalsy();
	});

	test('user can like, then remove like and like again', async () => {
		const likeStatusAtStart = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtStart).toBeFalsy();

		await putLike(visited, visitor);
		const likeStatus = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatus).toBeTruthy();

		await removeLike(visited, visitor);
		const likeStatusAfterRemove = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAfterRemove).toBeFalsy();

		await putLike(visited, visitor);
		const likeStatusAtEnd = await checkLikeEntry(visited.id, visitor.id);
		expect(likeStatusAtEnd).toBeTruthy();
	});
});

describe('like fails on non-valid users', () => {
	beforeEach(async () => {
		await clearUsers();
		await clearLikes();
	});

	test('fails if user profile that tries to put like is not complete', async () => {
		requestCoordinatesByIpMock.mockReturnValue(Promise.resolve(defaultCoordinates));
		await createNewUser(newUser, ipAddress);
		const loginRes = await initLoggedUser(newUser.username, credentialsNewUser);
		const id = <string>JSON.parse(loginRes.text).id;
		const token = loginRes.body.token;

		visited = await loginAndPrepareUser(secondUser, credentialsSecondUser, profileDataSecondUser);
		const likeStatusAtStart = await checkLikeEntry(visited.id, id);
		expect(likeStatusAtStart).toBeFalsy();

		const res = await api
			.post(`/api/users/${visited.id}/like`)
			.set({ Authorization: `bearer ${token}` })
			.expect(400)
			.expect('Content-Type', /application\/json/);

		// console.log(res.body.error);
		expect(res.body.error).toContain('Please, complete your own profile first');

		const likeStatusAtEnd = await checkLikeEntry(visited.id, id);
		expect(likeStatusAtEnd).toBeFalsy();
		const likesByVisited = await getLikesByVisitedId(visited.id);
		expect(likesByVisited).toStrictEqual([]);
	});

	test('fails if user profile that is getting a like id not complete', async () => {
		visitor = await loginAndPrepareUser(secondUser, credentialsSecondUser, profileDataSecondUser);

		requestCoordinatesByIpMock.mockReturnValue(Promise.resolve(defaultCoordinates));
		await createNewUser(newUser, ipAddress);
		const loginRes = await initLoggedUser(newUser.username, credentialsNewUser);
		const id = <string>JSON.parse(loginRes.text).id;

		const likeStatusAtStart = await checkLikeEntry(id, visitor.id);
		expect(likeStatusAtStart).toBeFalsy();

		const res = await api
			.post(`/api/users/${id}/like`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect(400)
			.expect('Content-Type', /application\/json/);

		// console.log(res.body.error);
		expect(res.body.error).toContain('Profile you are looking for is not complete. Try again later!');

		const likeStatusAtEnd = await checkLikeEntry(id, visitor.id);
		expect(likeStatusAtEnd).toBeFalsy();
		const likesByVisited = await getLikesByVisitedId(id);
		expect(likesByVisited).toStrictEqual([]);
	});
});
