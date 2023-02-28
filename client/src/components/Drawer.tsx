import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../state';
import { logoutUser } from '../services/logout';
import { AlertContext } from './AlertProvider';
import { socket } from '../services/socket';
//prettier-ignore
import { Box, Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import HistoryIcon from '@mui/icons-material/History';
import BlockIcon from '@mui/icons-material/Block';
import Navbar from './Navbar/Navbar';

const drawerWidth = 240;

export const StyledLink = styled(Link)`
	color: rgba(0, 0, 0, 0.87);
	text-decoration: none;
`;

export default function ResponsiveDrawer() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [{ loggedUser }] = useStateValue();
	const [, dispatch] = useStateValue();
	const alert = useContext(AlertContext);
	const navigate = useNavigate();

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

	const drawer = (
		<div style={{ flexGrow: 1 }}>
			<Toolbar />
			<Box sx={{ overflow: 'auto', mt: 2 }}>
				<List>
					<ListItem disablePadding component={StyledLink} to="/">
						<ListItemButton>
							<ListItemIcon>
								<PersonSearchOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Search" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding component={StyledLink} to="/chats">
						<ListItemButton>
							<ListItemIcon>
								<MailOutlineOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Chats" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding component={StyledLink} to="/visit_history">
						<ListItemButton>
							<ListItemIcon>
								<HistoryIcon />
							</ListItemIcon>
							<ListItemText primary="Visit History" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding component={StyledLink} to="/likes">
						<ListItemButton>
							<ListItemIcon>
								<FavoriteBorderIcon />
							</ListItemIcon>
							<ListItemText primary="Likes" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding component={StyledLink} to="/matches">
						<ListItemButton>
							<ListItemIcon>
								<JoinInnerIcon />
							</ListItemIcon>
							<ListItemText primary="Matches" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding component={StyledLink} to="/blocks">
						<ListItemButton>
							<ListItemIcon>
								<BlockIcon />
							</ListItemIcon>
							<ListItemText primary="Blocks" />
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem disablePadding component={StyledLink} to="/profile">
						<ListItemButton>
							<ListItemIcon>
								<AccountCircleOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItemButton>
					</ListItem>
					<ListItem onClick={handleLogout} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<MeetingRoomOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Logout" />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<Navbar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
			{loggedUser && (
				<Box
					component="nav"
					sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
				>
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						disableScrollLock={true}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', sm: 'block', md: 'block' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth
							}
						}}
					>
						{drawer}
					</Drawer>
					<Drawer
						variant="permanent"
						sx={{
							display: { xs: 'none', sm: 'none', md: 'block' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth
							}
						}}
						open
					>
						{drawer}
					</Drawer>
				</Box>
			)}
		</Box>
	);
}
