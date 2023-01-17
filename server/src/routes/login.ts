import express from 'express';
import asyncHandler from 'express-async-handler';

import bcrypt from 'bcrypt';

import { findUserByUsername } from '../repositories/userRepository';
import { parseUsername, validatePassword } from '../validators/userPayloadValidators';
import { addSession } from '../repositories/sessionRepository';

const router = express.Router();

router.post(
	'/',
	asyncHandler(async (req, res) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { username, password } = req.body;

		const parsedUsername = parseUsername(username);
		const parsedPassword = validatePassword(password);

		const user = await findUserByUsername(parsedUsername);
		if (!user) {
			res.status(401).json({ error: 'User not found' });
			return;
		}

		const passwordCorrect = await bcrypt.compare(parsedPassword, user.passwordHash);
		if (!passwordCorrect) {
			res.status(401).json({ error: 'Wrong password' });
			return;
		}

		if (!user.isActive) {
			res.status(401).json({ error: 'Account is not active' });
			return;
		}

		if (user.reportsCount > 10) {
			res.status(401).json({ error: 'Account is blocked due to too many reports. We are sorry.' });
			return;
		}

		const session = await addSession({ userId: user.id, username: user.username, email: user.email });
		res.status(200).send({ token: session.sessionId, username: user?.username, id: user?.id, complete: user?.complete });
	})
);

export default router;
