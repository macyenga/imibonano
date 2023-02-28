import nodemailer from 'nodemailer';

export const sendMail = (to: string, subject: string, text: string) => {
	const transporter = nodemailer.createTransport({
		service: 'hotmail',
		auth: {
			user: 'imibonano@outlook.com',
			pass: 'dmgzqomdsoikozfu'
		}
	});

	transporter.sendMail({ from: 'imibonano@outlook.com', to, subject, html: text }, (err, _info) => {
		if (err) {
			console.error('Error: Failed to send an email');
			return;
		} else {
			// console.log(info); //rm later
			return true;
		}
	});
};
