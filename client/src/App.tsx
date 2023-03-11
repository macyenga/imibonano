import styled from '@emotion/styled';

import Landing from './components/LandingPage/LandingPage';
import MatchSuggestions from './components/MatchSuggestions';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword/index';
import ResponsiveDrawer from './components/Drawer';
import ProfileEditor from './components/ProfileEditor';
import UpdateEmail from './components/UpdateEmail';
import AlertProvider from './components/AlertProvider';
import AlertSnackBar from './components/AlertSnackBar';
import PublicProfilePage from './components/PublicProfile/PublicProfilePage';
import VisitHistory from './components/VisitHistory';
import Matches from './components/Matches';
import Blocks from './components/Blocks';
import Likes from './components/Likes';
import ChatWindow from './components/ChatWindow/ChatWindow';
import Chats from './components/Chats';
import Footer from './components/Footer';
import Unknown from './components/Unknown/Unknown';
import { ChatReloadProvider } from './components/ChatWindow/ChatReloadProvider';

import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route, useRoutes, Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { Box } from '@mui/material';
import { socket } from './services/socket';
import { StateContext } from './state';
import './tailwind.css';
import React from 'react';

const MinWidthContainer = styled.div`
  display: flex;
  max-width: 100%;
  min-width: 300px;
  height: 100%;
  bg-red-500 // example Tailwind class
`;

const StyledBox = styled(Box)`
  text-align: center;
  flex-grow: 1;
  position: relative;
  top: 5rem;
  max-width: 100%;
  min-width: 320px;
  bg-blue-500 // example Tailwind class
`;

function ErrorFallback({
	error,
	resetErrorBoundary
}: {
	error: any;
	resetErrorBoundary: any;
}) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}


const App: React.FC = () => {
	const [{ loggedUser }] = useContext(StateContext);

	useEffect(() => {
		if (loggedUser) {
			socket.auth = {
				sessionId: loggedUser.token,
				user_id: loggedUser.id,
			};
			if (!socket.connected) socket.connect();
		}
	}, [loggedUser]);

	const routes = useRoutes([
		{
			path: "/",
			element: loggedUser ? <MatchSuggestions /> : <Landing />,
		},
		{
			path: "/login",
			element: !loggedUser ? <LoginForm /> : <Navigate to="/" />,
		},
		{
			path: "/signup",
			element: !loggedUser ? <SignUpForm /> : <Navigate to="/" />,
		},
		{
			path: "/forgot_password",
			element: !loggedUser ? <ForgotPassword /> : <Navigate to="/" />,
		},
		{
			path: "/profile",
			element: <ProfileEditor />,
		},
		{
			path: "/profile/:id",
			element: <PublicProfilePage />,
		},
		{
			path: "/update_email",
			element: <UpdateEmail />,
		},
		{
			path: "/visit_history",
			element: <VisitHistory />,
		},
		{
			path: "/likes",
			element: <Likes />,
		},
		{
			path: "/matches",
			element: <Matches />,
		},
		{
			path: "/blocks",
			element: <Blocks />,
		},
		{
			path: "/chats",
			element: <Chats />,
		},
		{
			path: "/chats/:id",
			element: <ChatWindow />,
		},
		{
			path: "*",
			element: <Unknown />,
		},
		{
			path: "/old/path",
			element: <Navigate to="/new/path" replace />,
		},
		{
			path: "/old/*",
			element: <Navigate to="/new/:param" replace />,
		},
		{
			path: "/old/:param",
			element: <Navigate to="/new/:param" replace />,
		},
	]);

	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				return <Navigate to="/" />;
			}}
		>
			<MinWidthContainer>
				<SnackbarProvider>
					<AlertProvider>
						<ChatReloadProvider>
							<ResponsiveDrawer />
							<StyledBox>
								<AlertSnackBar />
								{routes}
								<Footer />
							</StyledBox>
						</ChatReloadProvider>
					</AlertProvider>
				</SnackbarProvider>
			</MinWidthContainer>
		</ErrorBoundary>
	);
};

export default App;
