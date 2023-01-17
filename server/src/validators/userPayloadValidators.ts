import { Coordinates, Gender, NewUser, Orientation, UpdateUserProfileWithoutLocation } from '../types';
import { Tags } from '../utils/tags';
import { isDate, isString, isStringArray, isStringRepresentedInteger } from './basicTypeValidators';
import { ValidationError } from '../errors';
import { checkIfDuplicatesExist, getAge } from '../utils/helpers';

const usernameRegex = /^[a-zA-Z0-9_\-.ÄÖäöÅåßÜü]{4,21}$/;
const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,42})/;
const nameRegex = /^[a-zA-Z'\-ÄÖäöÅåßÜü\s]*$/;
// eslint-disable-next-line no-useless-escape
const tokenRegex = /[a-z0-9\-]{36}/;

export const parseUsername = (username: unknown): string => {
	if (!username || !isString(username)) {
		throw new ValidationError(`Missing username / Expected username to be string, got: ${typeof username}`);
	}
	const trimmedUsername = username.trim();
	if (!trimmedUsername) {
		throw new ValidationError('Missing username');
	}
	if (trimmedUsername.length < 4) {
		throw new ValidationError('Username is too short');
	}
	if (trimmedUsername.length > 21) {
		throw new ValidationError('Username is too long');
	}
	if (!usernameRegex.test(trimmedUsername)) {
		throw new ValidationError('Invalid username');
	}
	return trimmedUsername;
};

export const parseEmail = (email: unknown): string => {
	if (!email || !isString(email)) {
		throw new ValidationError(`Missing email / Expected email to be string, got: ${typeof email}`);
	}
	const trimmedEmail = email.toLowerCase().trim();
	if (!trimmedEmail) {
		throw new ValidationError('Missing email');
	}
	if (!emailRegex.test(trimmedEmail)) {
		throw new ValidationError('Invalid email');
	}
	return trimmedEmail;
};

export const validatePassword = (passwordPlain: unknown): string => {
	if (!passwordPlain || !isString(passwordPlain)) {
		throw new ValidationError(`Missing password / Expected password to be string, got: ${typeof passwordPlain}`);
	}
	if (passwordPlain.length < 8) {
		throw new ValidationError('Password is too short');
	}
	if (passwordPlain.length > 42) {
		throw new ValidationError('Password is too long');
	}
	if (!passwordRegex.test(passwordPlain)) {
		throw new ValidationError('Weak password');
	}
	return passwordPlain;
};

export const parseFirstname = (firstname: unknown): string => {
	if (!firstname || !isString(firstname)) {
		throw new ValidationError(`Missing first name / Expected firstname to be string, got: ${typeof firstname}`);
	}
	const trimmedFirstname = firstname.trim().replace(/\s\s+/g, ' ');
	if (!trimmedFirstname) {
		throw new ValidationError('Missing firstname');
	}
	if (trimmedFirstname.length > 21) {
		throw new ValidationError('First name is too long');
	}
	if (!nameRegex.test(trimmedFirstname)) {
		throw new ValidationError('Invalid firstname');
	}
	return trimmedFirstname;
};

export const parseLastname = (lastname: unknown): string => {
	if (!lastname || !isString(lastname)) {
		throw new ValidationError(`Missing last name / Expected lastname to be string, got: ${typeof lastname}`);
	}
	const trimmedLastname = lastname.trim().replace(/\s\s+/g, ' ');
	if (!trimmedLastname) {
		throw new ValidationError('Missing lastname');
	}
	if (trimmedLastname.length > 41) {
		throw new ValidationError('Lastname is too long');
	}
	if (!nameRegex.test(trimmedLastname)) {
		throw new ValidationError('Invalid lastname');
	}
	return trimmedLastname;
};

export const validateToken = (token: unknown): string => {
	if (!token || !isString(token)) {
		throw new ValidationError(`Missing token or not string: ${typeof token}`);
	}
	const trimmedToken = token.trim();
	if (!trimmedToken) {
		throw new ValidationError('Missing token');
	}
	if (trimmedToken.length !== 36) {
		throw new ValidationError('Invalid password reset code');
	}
	if (!tokenRegex.test(trimmedToken)) {
		throw new ValidationError('Invalid password reset code format');
	}
	return trimmedToken;
};
export const validateEmailToken = (token: unknown): string => {
	if (!token || !isString(token)) {
		throw new ValidationError(`Missing token or not string: ${typeof token}`);
	}
	const trimmedToken = token.trim();
	if (!trimmedToken) {
		throw new ValidationError('Missing token');
	}
	if (trimmedToken.length !== 36) {
		throw new ValidationError('Invalid email reset code');
	}
	if (!tokenRegex.test(trimmedToken)) {
		throw new ValidationError('Invalid email reset code format');
	}
	return trimmedToken;
};

type Fields = { username: unknown; email: unknown; passwordPlain: unknown; firstname: unknown; lastname: unknown };

export const parseNewUserPayload = ({ username, email, passwordPlain, firstname, lastname }: Fields): NewUser => {
	const newUser: NewUser = {
		username: parseUsername(username),
		email: parseEmail(email),
		passwordPlain: validatePassword(passwordPlain),
		firstname: parseFirstname(firstname),
		lastname: parseLastname(lastname)
	};
	return newUser;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
	return gender === 'male' || gender === 'female';
};

const parseGender = (gender: unknown): Gender => {
	if (!gender) {
		throw new ValidationError('Missing gender');
	}
	if (!isString(gender) || !isGender(gender)) {
		throw new ValidationError('Invalid gender');
	}
	return gender;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isOrientation = (orientation: any): orientation is Orientation => {
	return orientation === 'straight' || orientation === 'gay' || orientation === 'bi';
};

export const parseOrientation = (orientation: unknown): Orientation => {
	if (!orientation) {
		throw new ValidationError(`Missing orientation`);
	}
	if (!isString(orientation) || !isOrientation(orientation)) {
		throw new ValidationError(`Invalid orientation. Choose from : straight, gay, bi`);
	}
	return orientation;
};

const parseBirthday = (date: unknown): Date => {
	if (!date) {
		throw new ValidationError('Missing birthay date');
	}
	if (!isString(date) || !isDate(date)) {
		throw new ValidationError('Invalid birthday date format');
	}
	const age = getAge(date);
	const limit = new Date('1900-01-01');
	if (age < 18) throw new ValidationError('User must be at least 18 y.o.');
	const bd = new Date(date);
	if (bd < limit) throw new ValidationError('Maximum age is exceeded');

	return bd;
};

export const parseBio = (bio: unknown): string => {
	if (!bio) {
		throw new ValidationError(`Missing bio`);
	}
	if (!isString(bio)) {
		throw new ValidationError(`Expected bio to be string, got: ${typeof bio}`);
	}
	const trimmedBio = bio.trim().replace(/\s\s+/g, ' ');
	if (trimmedBio.length > 100 || trimmedBio.length < 10) {
		throw new ValidationError(`Invalid bio format: min 10, max 100 chars`);
	}
	return trimmedBio;
};

export const parseTags = (tags: unknown): string[] => {
	if (!tags) {
		throw new ValidationError(`Missing tags`);
	}
	if (!isStringArray(tags)) throw new ValidationError(`Invalid tags format: tags must be strings`);
	if (tags.length === 0 || tags.length > 5) throw new ValidationError(`Invalid tags format! Array of 1 to 5 tags expected`);
	for (let i = 0; i < tags.length; i++) {
		if (!Tags.find((t) => t === tags[i])) {
			throw new ValidationError(`Invalid tags format: tag '${tags[i]}' is not on the list`);
		}
	}
	if (checkIfDuplicatesExist(tags)) throw new ValidationError(`Invalid tags format: tags should not have duplicates`);
	return tags;
};

export const parseCoordinates = (coorditates: unknown): Coordinates => {
	if (coorditates && typeof coorditates === 'object' && 'lat' in coorditates && 'lon' in coorditates) {
		const { lat, lon } = coorditates as { lat: number; lon: number };
		if (isFinite(lat) && Math.abs(lat) <= 90 && isFinite(lon) && Math.abs(lon) <= 180) return { lat, lon };
		else throw new ValidationError(`Invalid coordinates.`);
	} else {
		throw new ValidationError(`Error in coordinates parser.`);
	}
};

export const parseLocationString = (location: unknown): string => {
	if (location === null || location === undefined) {
		throw new ValidationError(`Missing location string.`);
	}
	if (!isString(location)) {
		throw new ValidationError(`Expected location to be string, got: ${typeof location}`);
	}
	return location;
};

export const parseIdList = (idList: unknown): string[] => {
	if (!idList) {
		throw new ValidationError(`Missing user id list`);
	}
	if (!isStringArray(idList)) throw new ValidationError(`Invalid user list format: strings expected`);
	idList.map((id) => {
		if (!isStringRepresentedInteger(id)) throw new ValidationError('Wrong user id format');
	});
	return idList;
};

type Fields1 = {
	username: unknown;
	email: unknown;
	firstname: unknown;
	lastname: unknown;
	birthday: unknown;
	gender: unknown;
	orientation: unknown;
	bio: unknown;
	tags: unknown;
	coordinates: unknown;
};

export const parseUserProfilePayload = ({
	firstname,
	lastname,
	birthday,
	gender,
	orientation,
	bio,
	tags,
	coordinates
}: Fields1): UpdateUserProfileWithoutLocation => {
	const updatedUser: UpdateUserProfileWithoutLocation = {
		firstname: parseFirstname(firstname),
		lastname: parseLastname(lastname),
		birthday: parseBirthday(birthday),
		gender: parseGender(gender),
		orientation: parseOrientation(orientation),
		bio: parseBio(bio),
		tags: parseTags(tags),
		coordinates: parseCoordinates(coordinates)
	};
	return updatedUser;
};
