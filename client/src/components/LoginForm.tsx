//prettier-ignore
import { Avatar, Box, Button, styled, Paper, TextField, Checkbox, Grid, FormControlLabel, Container, Link, Typography } from '@mui/material';
//prettier-ignore
import { validatePassword, validateUsername, validateLoginForm } from '../utils/inputValidators';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setLoggedUser, StateContext } from '../state';
import { AlertContext } from './AlertProvider';
import { useField } from '../hooks/useField';
import userService from '../services/users';
import loginService from '../services/login';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';



const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	margin: '0 auto',
	padding: '1rem 2.5rem 4rem 2.5rem',
	// minWidth: '320px',
	maxWidth: '420px',
	textAlign: 'left',
	color: theme.palette.text.secondary
}));

const LoginForm = () => {
	const username = useField('text', 'Username', validateUsername);
	const password = useField('text', 'Password', validatePassword);

	const [showPassword, setShow] = useState(false);

	const navigate = useNavigate();

	const [, dispatch] = useContext(StateContext);

	const [searchParams] = useSearchParams();
	const activationCode = searchParams.get('activate');
	const alert = useContext(AlertContext);

	useEffect(() => {
		const activateAccount = async () => {
			if (activationCode) {
				try {
					await userService.activate(activationCode);
					navigate('/login');
					alert.success('Account activated successfully!');
				} catch (err) {
					alert.error(
						err.response?.data?.error ||
						'Unable to activate account. Please try again.'
					);
					navigate('/login');
				}
			}
		};
		activateAccount();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleLogin = async (event: any) => {
		event.preventDefault();

		const userToLogin = {
			username: username.value,
			password: password.value
		};

		try {
			const loggedInUser = await loginService.login(userToLogin);
			alert.success(`Logged in successfuly. Welcome!`);
			dispatch(setLoggedUser(loggedInUser));
			navigate('/');
		} catch (err) {
			alert.error(err.response?.data?.error || 'Unable to login. Please try again.');
		}
	};

	return (
		<Box sx={{ mt: 5, mb: 8 }}>
			<Container component="main" sx={{ maxWidth: "100%" }}>
				<Item>
					<Box
						sx={{
							marginTop: 6,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: '#e3dee1' }} />
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin}>
							<TextField
								{...username}
								margin="normal"
								required
								fullWidth
								autoFocus
								InputLabelProps={{ shrink: true }}
								autoComplete="username"
							/>
							<TextField
								{...password}
								margin="normal"
								required
								fullWidth
								type={showPassword ? 'text' : 'password'}
								autoComplete="current-password"
								InputLabelProps={{ shrink: true }}
							/>
							<Grid item xs={12} sx={{ marginLeft: '5px' }}>
								<FormControlLabel
									label={
										<Box component="div" fontSize={'0.9rem'}>
											Show password
										</Box>
									}
									control={
										<Checkbox
											color="primary"
											onChange={() => setShow(!showPassword)}
											icon={
												<VisibilityOffOutlinedIcon fontSize="small" />
											}
											checkedIcon={<VisibilityOutlinedIcon />}
										/>
									}
								/>
							</Grid>
							{validateLoginForm(username.value, password.value) ? (
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 2, mb: 2 }}
								>
									Sign In
								</Button>
							) : (
								<Button
									type="submit"
									fullWidth
									disabled
									variant="contained"
									sx={{ mt: 2, mb: 2 }}
								>
									Sign In
								</Button>
							)}
							<Grid container>
								<Grid item xs>
									<Link href="/forgot_password" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href="/signup" variant="body2">
										Don't have an account? Sign Up
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Item>
			</Container>
		</Box>
	);
};

export default LoginForm;
