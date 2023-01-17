import { SetStateAction, useState } from 'react';

export const useControlledField = (
	type: string,
	fetchedValue: string | undefined,
	validationFn: (value: string) => string | undefined
) => {
	let [value, setValue] = useState<string | undefined>(fetchedValue);

	const onChange = (event: { target: { value: SetStateAction<string | undefined> } }) => {
		setValue(event.target.value);
	};

	let errorMessage;
	if (value) errorMessage = validationFn(value);
	if (!value && fetchedValue) errorMessage = 'Required field';

	return {
		type,
		value,
		onChange,
		error: !!errorMessage,
		helperText: errorMessage
	};
};
