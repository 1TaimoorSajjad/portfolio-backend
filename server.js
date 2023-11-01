const nodemailer = require('nodemailer');

// Create a transporter object using your email service provider's SMTP settings.
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'taimoorsajjad980@gmail.com',
    pass: 'my new password is very strong@123'
  }
});

// Define your email content.
const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'taimoorsajjad980@gmail.com', // Receiver's email address
  subject: 'New Contact Form Submission',
  text: 'You have a new contact form submission on your website.',
};

// Send the email.
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
