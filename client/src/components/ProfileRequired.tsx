import { Alert } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkProfileCompleteness } from '../services/profile';
import { setLoggedUser, StateContext } from '../state';
import { LoggedUser, UserCompletness } from '../types';
import { AuthError } from '../utils/errors';
import { AlertContext } from './AlertProvider';
import LoadingIcon from './LoadingIcon';
import { logoutUser } from '../services/logout';

const withProfileRequired =
	<P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
	(props) => {
		const [{ loggedUser }, dispatch] = useContext(StateContext);
		const navigate = useNavigate();
		const { error: errorCallback } = useContext(AlertContext);
		const [completenessData, setData] = useState<UserCompletness | null>(null);
		const [completenessError, setError] = useState(null);

		useEffect(() => {
			const profileCompleteness = async (loggedUser: LoggedUser) => {
				try {
					const res = await checkProfileCompleteness(loggedUser.id);
					setData(res);
				} catch (e) {
					if (e instanceof AuthError) logoutUser(dispatch);
					setError(e);
					errorCallback(e.message);
				}
			};

			if (!loggedUser) {
				navigate('/login');
				return;
			}
			if (!loggedUser.complete && !completenessData && !completenessError) {
				profileCompleteness(loggedUser);
			}
			if (completenessData && !completenessData.complete) {
				errorCallback(
					'Please, complete all the required fields on your profile in order to use the service!'
				);
				navigate('/profile');
				return;
			}
			if (completenessData && loggedUser.complete !== completenessData.complete) {
				dispatch(
					setLoggedUser({
						...loggedUser,
						complete: completenessData.complete
					})
				);
				localStorage.setItem(
					'loggedUser',
					JSON.stringify({
						...loggedUser,
						complete: completenessData.complete
					})
				);
			}
		}, [
			loggedUser,
			errorCallback,
			navigate,
			dispatch,
			completenessData,
			completenessError
		]);

		if (loggedUser?.complete === true) return <Component {...(props as P)} />;
		else if (completenessError)
			return <Alert severity="error">Error loading page, please try again...</Alert>;
		else return <LoadingIcon />;
	};

export default withProfileRequired;
