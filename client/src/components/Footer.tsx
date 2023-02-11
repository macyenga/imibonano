import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
	return (
		<Typography sx={{ mt: 8, mb: 4 }} variant="body2" color="text.secondary" align="center">
			{'© '}
			<Link color="inherit" href="/">
				imibonano
			</Link>{'  by Ilona Shakurova & Aleksei Shatalov  '}
			{new Date().getFullYear()}.
		</Typography>
	);
}

export default Footer;
