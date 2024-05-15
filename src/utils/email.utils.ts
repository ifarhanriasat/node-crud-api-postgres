import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const sendAccountCreationEmail = async (email: string) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Account Created',
        text: 'Your account has been created successfully.',
    };

    await transporter.sendMail(mailOptions);
};
