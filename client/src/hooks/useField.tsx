import { SetStateAction, useState } from 'react';

export const useField = (
	type: string,
	label: string,
	validationFn: (value: string) => string | undefined
) => {
	const [value, setValue] = useState('');

	const onChange = (event: { target: { value: SetStateAction<string> } }) =>
		setValue(event.target.value);

	let errorMessage;
	if (value !== '') {
		errorMessage = validationFn(value);
	}

	return {
		type,
		label,
		value,
		onChange,
		error: !!errorMessage,
		helperText: errorMessage
	};
};

export const useFieldWithReset = (
	type: string,
	label: string,
	validationFn: (value: string) => string | undefined
) => {
	const [value, setValue] = useState('');

	const onChange = (event: { target: { value: SetStateAction<string> } }) =>
		setValue(event.target.value);

	let errorMessage;
	if (value !== '') {
		errorMessage = validationFn(value);
	}

	const reset = () => setValue('');

	return {
		type,
		label,
		value,
		onChange,
		reset,
		error: !!errorMessage,
		helperText: errorMessage
	};
};
