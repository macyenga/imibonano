import React from 'react';
import styled from 'styled-components';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
const FooterContainer = styled.footer`
  background-color: #fafafa;
  padding: 20px;
`;

const FooterLink = styled(Link)`
  margin-right: 10px;
  color: #000;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Typography variant="body2" align="center">
				<FooterLink href="/">imibonano</FooterLink> by Macyenga & supernover
			</Typography>
			<Typography variant="body2" align="center">
				<FooterLink href="/privacy-policy">Privacy Policy</FooterLink> | <FooterLink href="/terms-of-use">Terms of Use</FooterLink> | <FooterLink href="/safety-tips">Safety Tips</FooterLink>
			</Typography>
			<Typography variant="body2" align="center">
				<FooterLink href="mailto:support@imibonano.com">support@imibonano.com</FooterLink> | <FooterLink href="tel:+1234567890">(123) 456-7890</FooterLink> | 123 Main St, Anytown USA 12345
			</Typography>
			<Typography variant="body2" align="center">
				Follow us on: <FooterLink href="https://www.facebook.com/imibonano">Facebook</FooterLink> | <FooterLink href="https://www.instagram.com/imibonano">Instagram</FooterLink> | <FooterLink href="https://twitter.com/imibonano">Twitter</FooterLink>
			</Typography>
			<Typography variant="body2" align="center">
				<FooterLink href="/faq">Frequently Asked Questions</FooterLink> | <FooterLink href="/blog">Blog</FooterLink>
			</Typography>
			<Typography variant="body2" align="center">
				&copy; {new Date().getFullYear()}
			</Typography>
		</FooterContainer>
	);
};

export default Footer;
