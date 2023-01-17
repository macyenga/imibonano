import supertest from 'supertest';
import { app } from '../app';
import { describe, expect } from '@jest/globals';
import { clearVisitHistory } from '../repositories/visitHistoryRepository';
import { clearSessions } from '../repositories/sessionRepository';
import { clearUsers } from '../repositories/userRepository';
import { newUser, credentialsNewUser, profileDataNewUser, secondUser, credentialsSecondUser, profileDataSecondUser } from './test_helper_users';
import { loginAndPrepareUser } from './test_helper_fns';
import { infoProfilePublic } from './test_helper';

const api = supertest(app);
jest.setTimeout(10000);
jest.mock('../services/location');

let visitor: { id: string; token: string };
let visited: { id: string; token: string };
const baseFameRating = 47;

describe('check access to profile page', () => {
	beforeEach(async () => {
		await clearUsers();
		await clearVisitHistory();
		visited = await loginAndPrepareUser(newUser, credentialsNewUser, profileDataNewUser);
		visitor = await loginAndPrepareUser(secondUser, credentialsSecondUser, profileDataSecondUser);
	});
	test('logged user can visit public profile page of other user', async () => {
		const resFromProfilePage = await api
			.get(`/api/users/${visited.id}/public_profile`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect('Content-Type', /application\/json/);

		expect(resFromProfilePage.statusCode).toBe(200);
		expect(resFromProfilePage.body).toBeTruthy();
		//console.log(resFromProfilePage.text);

		expect(resFromProfilePage.text).toContain('lorem');
		expect(JSON.parse(resFromProfilePage.text)).toEqual({ ...infoProfilePublic, fameRating: baseFameRating + 1, id: visited.id });
	});
	test('logged user can visit own public profile page', async () => {
		const resFromProfilePage = await api
			.get(`/api/users/${visited.id}/public_profile`)
			.set({ Authorization: `bearer ${visited.token}` })
			.expect('Content-Type', /application\/json/);

		expect(resFromProfilePage.statusCode).toBe(200);
		expect(resFromProfilePage.body).toBeTruthy();
		//console.log(resFromProfilePage.text);

		expect(resFromProfilePage.text).toContain('lorem');
		expect(JSON.parse(resFromProfilePage.text)).toEqual({ ...infoProfilePublic, fameRating: baseFameRating, id: visited.id });
	});
	test('not logged user cannot access profile page', async () => {
		const resFromProfilePage = await api
			.get(`/api/users/${visited.id}/public_profile`)
			.expect(401)
			.expect('Content-Type', /application\/json/);

		expect(resFromProfilePage.body.error).toContain('Access denied, no token provided');
	});
	test('should fail when no id in request', async () => {
		const resFromProfilePage = await api
			.get(`/api/users//public_profile`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect(404);
		expect(resFromProfilePage.body.error).toContain('Unknown endpoint');
	});
	test('should fail request with wrong id in request', async () => {
		const resFromProfilePage = await api
			.get(`/api/users/11111111/public_profile`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect(400);
		expect(resFromProfilePage.body.error).toContain('No user with provided id');
	});

	test('should fail request with string passed as id in request', async () => {
		const resFromProfilePage = await api
			.get(`/api/users/fghjk/public_profile`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect(400);
		expect(resFromProfilePage.body.error).toContain('Id path parameter is requried to find profile');
	});

	test('fails when no session in db', async () => {
		await clearSessions();
		const resFromProfilePage = await api
			.get(`/api/users/${visited.id}/public_profile`)
			.set({ Authorization: `bearer ${visitor.token}` })
			.expect(401)
			.expect('Content-Type', /application\/json/);

		expect(resFromProfilePage.body.error).toContain('No sessions found');
	});
});
