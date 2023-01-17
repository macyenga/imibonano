import supertest from 'supertest';
import { app } from '../app';
import { describe, expect } from '@jest/globals';
import { clearUsers, findUserByUsername, setUserAsActive } from '../repositories/userRepository';
import { requestCoordinatesByIp } from '../services/location';
import { createNewUser } from '../services/users';
import { defaultCoordinates, ipAddress } from './test_helper';
import { newUser } from './test_helper_users';

const api = supertest(app);

jest.setTimeout(30000);

jest.mock('../services/location');
const requestCoordinatesByIpMock = jest.mocked(requestCoordinatesByIp);

describe('account activation', () => {
	beforeEach(async () => {
		await clearUsers();
		requestCoordinatesByIpMock.mockReturnValue(Promise.resolve(defaultCoordinates));
		await createNewUser(newUser, ipAddress);
	});

	test('activation succeeds with valid activaton code', async () => {
		const user = await findUserByUsername(newUser.username);
		if (user) {
			const activationCode = user.activationCode;

			await api.post(`/api/users/activate/${activationCode}`).expect(200);

			const activeUser = await findUserByUsername(newUser.username);
			if (!activeUser) fail();
			expect(activeUser.isActive).toBe(true);
		}
	});

	test('activation fails on already active account', async () => {
		const user = await findUserByUsername(newUser.username);
		if (user) {
			const activationCode = user.activationCode;
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			await setUserAsActive(activationCode);

			const res = await api
				.post(`/api/users/activate/${activationCode}`)
				.expect(400)
				.expect('Content-Type', /application\/json/);

			expect(res.body.error).toContain('Account already activated');
		}
	});

	test('activation fails on non-existing activation code', async () => {
		const user = await findUserByUsername(newUser.username);
		if (user) {
			const res = await api
				.post(`/api/users/activate/81e33e3c8f03678da23232323322f1e29979d63}`)
				.expect(400)
				.expect('Content-Type', /application\/json/);

			expect(res.body.error).toContain("Activation code doesn't exist");
		}
	});
});
