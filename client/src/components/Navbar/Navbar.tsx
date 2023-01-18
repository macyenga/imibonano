import { Button, AppBar, Toolbar, Box } from '@mui/material';
import { useStateValue } from '../../state';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertContext } from '../AlertProvider';
import { logoutUser } from '../../services/logout';
import { socket } from '../../services/socket';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsButton from './Notifications';
import ChatButton from './Messages';




const buttonStyles = {
	background: 'linear-gradient(45deg, #0000FF 30%, #7FFFD4 90%)',
	borderRadius: '20px',
	border: 'none',
	color: 'white',
	height: '30px',
	padding: ' 20px',
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const loginButtonStyles = {
	backgroundColor: 'purple',
	color: 'white',
	'&:hover': {
		backgroundColor: 'darkpurple',
	},
};

const signupButtonStyles = {
	backgroundColor: 'green',
	color: 'white',
	'&:hover': {
		backgroundColor: 'darkgreen',
	},
};
const LoggedInUserButtons = ({ handleLogout }: { handleLogout: any }) => {
	return (
		<div>
			<ChatButton />
			<NotificationsButton />
			<button style={buttonStyles} onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

const LoggedOutButtons = () => {
	return (
		<>
			<Button style={{ ...buttonStyles, ...loginButtonStyles }} component={Link} to="/login">
				Login
			</Button>
			<Button style={{ ...buttonStyles, ...signupButtonStyles }} component={Link} to="/signup">
				Sign Up
			</Button>
		</>
	);
};

const drawerWidth = 200;

const Navbar = ({ setMobileOpen, mobileOpen }) => {
	// Add a new state variable to track the current mode
	const [lightMode, setLightMode] = useState(true);
  
	// Add a function to toggle the mode
	const toggleMode = () => {
	  setLightMode(!lightMode);
	};
  
	const [, dispatch] = useStateValue();
	  const [{ loggedUser }] = useStateValue();
	  const navigate = useNavigate();
	  const alert = useContext(AlertContext);
  
	  const handleDrawerToggle = () => {
		  setMobileOpen(!mobileOpen);
	  };
  
	  const handleLogout = async (event: any) => {
		  event.preventDefault();
		  logoutUser(dispatch);
		  if (socket.connected) {
			  socket.disconnect();
		  }
		  alert.success('Logged out');
		  navigate('/');
	  };
  

	return (
		<AppBar
			position="fixed"
			color={lightMode ? "secondary" : "primary"}
			sx={{
				ml: { sm: `${drawerWidth}px` },
				mb: 5,
				maxWidth: '100%',
				zIndex: (theme) => theme.zIndex.drawer + 1,
				justifyContent: 'space-between',
				'& .MuiAppBar-root': {
					borderRadius: '0!important'
				}
			}}
		>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
				}}
			>
				
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, ml: 0.5, display: !loggedUser ? 'none' : { md: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Box
					component={Link}
					to="/"
					sx={{
						textDecoration: 'none',
						ml: 1,
						display: !loggedUser ? 'flex' : { xs: 'none', sm: 'none', md: 'flex' },
						alignItems: 'center'
					}}
				>
					<div
						style={{
							fontFamily: "'Paytone One', cursive",
							fontSize: '1.6rem',
							color: '#fff',
							textAlign: 'center'
						}}
					>
						Imibonano
					</div>
					<BrightnessAutoIcon style={{ marginTop: '4px' }} color="primary" />
				</Box>
				<div>
					{loggedUser ? (
						<LoggedInUserButtons handleLogout={handleLogout} />
					) : (
						<LoggedOutButtons />
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
