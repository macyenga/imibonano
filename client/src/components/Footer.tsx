import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
	return (
		<footer>
			<Typography variant="body2" align="center">
				<Link href="/">imibonano</Link> by Macyenga & supernover
			</Typography>
			<Typography variant="body2" align="center">
				<Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-use">Terms of Use</Link> | <Link href="/safety-tips">Safety Tips</Link>
			</Typography>
			<Typography variant="body2" align="center">
				<Link href="mailto:support@yourdatingsite.com">support@yourdatingsite.com</Link> | <Link href="tel:+1234567890">(123) 456-7890</Link> | 123 Main St, Anytown USA 12345
			</Typography>
			<Typography variant="body2" align="center">
				Follow us on: <Link href="https://www.facebook.com/yourdatingsite">Facebook</Link> | <Link href="https://www.instagram.com/yourdatingsite">Instagram</Link> | <Link href="https://twitter.com/yourdatingsite">Twitter</Link>
			</Typography>
			<Typography variant="body2" align="center">
				<Link href="/faq">Frequently Asked Questions</Link> | <Link href="/blog">Blog</Link>
			</Typography>
			<Typography variant="body2" align="center">
				© {new Date().getFullYear()}
			</Typography>
		</footer>
	);
};

export default Footer;
