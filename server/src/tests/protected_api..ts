// import supertest from 'supertest';
// import { app } from '../app';
// import { describe, expect } from '@jest/globals';
// import { ipAddress, defaultCoordinates } from './test_helper';
// import { clearSessions, findSessionsByUserId } from '../repositories/sessionRepository';
// import { clearUsers, findUserByUsername } from '../repositories/userRepository';
// import { requestCoordinatesByIp } from '../services/location';
// import { createNewUser } from '../services/users';
// import { newUser, credentialsNewUser } from './test_helper_users';

// const api = supertest(app);

// jest.setTimeout(10000);

// jest.mock('../services/location');
// const requestCoordinatesByIpMock = jest.mocked(requestCoordinatesByIp);

// describe('visit protected page', () => {
// 	beforeEach(async () => {
// 		await clearUsers();
// 		requestCoordinatesByIpMock.mockReturnValue(Promise.resolve(defaultCoordinates));
// 		await createNewUser(newUser, ipAddress);
// 	});

// 	test('activated and logged user can visit protected page', async () => {
// 		const user = await findUserByUsername(newUser.username);
// 		const activationCode = user?.activationCode;

// 		await api.post(`/api/users/activate/${activationCode}`).expect(200);

// 		const activeUser = await findUserByUsername(newUser.username);
// 		if (activeUser) {
// 			expect(activeUser.isActive).toBe(true);
// 		}

// 		const res = await api
// 			.post('/api/login')
// 			.send(credentialsNewUser)
// 			.expect(200)
// 			.expect('Content-Type', /application\/json/);

// 		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
// 		const sessions = await findSessionsByUserId(res.body.id);
// 		expect(sessions).toBeTruthy();
// 		expect(sessions?.length).toBe(1);
// 		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// 		expect(res.body).toHaveProperty('token');

// 		const resFromProtectedPage = await api
// 			.get('/api/testAuth')
// 			.set({ Authorization: `bearer ${res.body.token}` })
// 			.expect(200)
// 			.expect('Content-Type', /application\/json/);

// 		expect(resFromProtectedPage.body).toBeTruthy();
// 		expect(resFromProtectedPage.text).toContain('sessionId');
// 	});

// 	test('not logged user cannot access protected page', async () => {
// 		const resFromProtectedPage = await api
// 			.get('/api/testAuth')
// 			.expect(401)
// 			.expect('Content-Type', /application\/json/);

// 		expect(resFromProtectedPage.body.error).toContain('Access denied, no token provided');
// 	});

// 	test('fails when no session in db', async () => {
// 		const user = await findUserByUsername(newUser.username);
// 		const activationCode = user?.activationCode;

// 		await api.post(`/api/users/activate/${activationCode}`).expect(200);

// 		const activeUser = await findUserByUsername(newUser.username);
// 		if (activeUser) {
// 			expect(activeUser.isActive).toBe(true);
// 		}

// 		const res = await api
// 			.post('/api/login')
// 			.send(credentialsNewUser)
// 			.expect(200)
// 			.expect('Content-Type', /application\/json/);

// 		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
// 		const sessions = await findSessionsByUserId(res.body.id);
// 		expect(sessions).toBeTruthy();
// 		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// 		expect(res.body).toHaveProperty('token');

// 		await clearSessions();
// 		const resFromProtectedPage = await api
// 			.get('/api/testAuth')
// 			.set({ Authorization: `bearer ${res.body.token}` })
// 			.expect(401)
// 			.expect('Content-Type', /application\/json/);

// 		expect(resFromProtectedPage.body.error).toContain('No sessions found');
// 	});
// });
