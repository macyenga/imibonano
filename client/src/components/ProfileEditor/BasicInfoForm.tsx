// prettier-ignore
import { validateFirstame, validateLastname, validateBio, validateProfileEditorForm } from '../../utils/inputValidators';
import React, { useContext, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

// prettier-ignore
import { Button, Box, TextField, Grid, Stack, ToggleButton, styled, ToggleButtonGroup, Typography, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useControlledField } from '../../hooks/useControlledField';
import { NewUserData, UserData } from '../../types';
import { useToggleButton } from '../../hooks/useToggleButton';
import { Link } from 'react-router-dom';
import type {} from '@mui/x-date-pickers/themeAugmentation';

import Tags from './Tags';
import Location from './Location';
import FameRating from './FameRating';

import profileService from '../../services/profile';
import { useStateValue } from '../../state';
import { AlertContext } from '../AlertProvider';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	'& .MuiToggleButtonGroup-grouped': {
		margin: theme.spacing(0.5),
		border: 3,
		'&.Mui-disabled': {
			border: 3
		},
		'&:not(:first-of-type)': {
			borderRadius: theme.shape.borderRadius
		},
		'&:first-of-type': {
			borderRadius: theme.shape.borderRadius
		}
	}
}));

const StyledRow = styled('div')`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: baseline;
	justify-content: space-between;
`;

export const StyledLink = styled(Link)`
	color: #ffc600;
	text-decoration: none;
`;

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: theme.shadows[1],
		fontSize: 11
	}
}));

const BasicInfoForm: React.FC<{ userData: UserData }> = ({ userData }) => {
	const [{ loggedUser }] = useStateValue();
	const { success: successCallback, error: errorCallback } = useContext(AlertContext);

	const firstname = useControlledField('text', userData.firstname, validateFirstame);
	const lastname = useControlledField('text', userData.lastname, validateLastname);
	const birthday = userData.birthday ? dayjs(userData.birthday) : null;
	const [date, setDateValue] = useState<Dayjs | null>(birthday);
	const gender = useToggleButton(userData.gender);
	const orientation = useToggleButton(userData.orientation);
	const [selectedTags, setSelectedTags] = useState<string[] | undefined>(userData.tags);
	const bio = useControlledField('text', userData.bio, validateBio);
	const [coordinates, setCoordinates] = useState<[number, number]>([
		userData.coordinates.lat,
		userData.coordinates.lon
	]);
	const [locationString, setLocationString] = useState<string>('');
	if (locationString === '') setLocationString(`${coordinates[0]}, ${coordinates[1]}`);

	const handleDateChange = (newValue: Dayjs | null) => setDateValue(newValue);

	let eighteenYearsAgo = dayjs().subtract(18, 'year');

	const updateUserData = async (newUserData: NewUserData) => {
		try {
			loggedUser && (await profileService.updateProfile(loggedUser.id, newUserData));
			successCallback(`Profile settings were updated!.`);
		} catch (err) {
			errorCallback(
				err.response?.data?.error ||
					'Unable to update profile settings. Please try again.'
			);
		}
	};

	const handleUserDataUpdate = (event: any) => {
		event.preventDefault();
		const newUserData: NewUserData = {
			firstname: firstname.value,
			lastname: lastname.value,
			birthday: date,
			gender: gender.value,
			orientation: orientation.value,
			tags: selectedTags,
			bio: bio?.value?.replace(/\s\s+/g, ' '),
			coordinates: { lat: coordinates[0], lon: coordinates[1] }
		};
		updateUserData(newUserData);
	};

	return (
		<>
			<Box component="form" noValidate sx={{ mt: 3, ml: 2, mr: 2 }}>
				<StyledRow style={{ marginBottom: 20 }}>
					<LightTooltip title="Visit own profile page" placement="top-start">
						<Typography sx={{ typography: { xs: 'h6', lg: 'h5' } }}>
							<StyledLink to={`/profile/${loggedUser?.id}`}>
								@{loggedUser?.username.toUpperCase()}
							</StyledLink>
						</Typography>
					</LightTooltip>
					<FameRating fameRating={userData.fameRating} />
				</StyledRow>

				<Grid container spacing={2}>
					<Grid item xs={12} mt={1}>
						<strong>First name*</strong>
						<TextField
							{...firstname}
							required
							fullWidth
							autoComplete="given-name"
						/>
					</Grid>
					<Grid item xs={12} mt={1}>
						<strong>Surname*</strong>
						<TextField
							{...lastname}
							required
							fullWidth
							autoComplete="family-name"
						/>
					</Grid>
					<Grid item xs={12} mt={1}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Stack>
								<DesktopDatePicker
									inputFormat="DD/MM/YYYY"
									value={date}
									maxDate={eighteenYearsAgo}
									minDate={dayjs('01/01/1900')}
									onChange={handleDateChange}
									renderInput={(params) => (
										<>
											<strong>Birthday*</strong>
											<TextField
												required
												error
												helperText="User must be at least 18 years old"
												{...params}
											/>
										</>
									)}
								/>
							</Stack>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={12} sm={6} mt={1}>
						<strong>Gender*</strong>
						<Box sx={{ flexDirection: 'column' }}>
							<StyledToggleButtonGroup exclusive {...gender}>
								<ToggleButton value="male">BOY</ToggleButton>
								<ToggleButton value="female">GIRL</ToggleButton>
							</StyledToggleButtonGroup>
						</Box>
					</Grid>
					<Grid item sm={'auto'} mt={1}>
						<strong>Orientation*</strong>
						<Box sx={{ flexDirection: 'column' }}>
							<StyledToggleButtonGroup exclusive {...orientation}>
								<ToggleButton value="straight">STRAIGHT</ToggleButton>
								<ToggleButton value="gay">GAY</ToggleButton>
								<ToggleButton value="bi">BI</ToggleButton>
							</StyledToggleButtonGroup>
						</Box>
					</Grid>
					<Grid container>
						<Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
					</Grid>
					<Grid item xs={12}>
						<strong>Bio*</strong>
						<TextField {...bio} required fullWidth multiline rows={4} />
					</Grid>
					<Grid item xs={12}>
						<Location
							coordinates={coordinates}
							setCoordinates={setCoordinates}
							locationString={locationString}
							setLocationString={setLocationString}
						/>
					</Grid>
				</Grid>
				{firstname.value &&
				lastname.value &&
				date &&
				gender.value &&
				orientation.value &&
				selectedTags &&
				selectedTags.length &&
				bio.value &&
				coordinates &&
				validateProfileEditorForm(firstname.value, lastname.value, date, bio.value) ? (
					<Button
						type="submit"
						onClick={handleUserDataUpdate}
						variant="contained"
						fullWidth
						sx={{ mt: 3, mb: 2 }}
					>
						Update Profile
					</Button>
				) : (
					<LightTooltip title="Please fill all the required filds">
						<span>
							<Button
								disabled
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Update Profile
							</Button>
						</span>
					</LightTooltip>
				)}
			</Box>
		</>
	);
};

export default BasicInfoForm;
