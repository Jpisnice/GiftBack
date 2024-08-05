// lib/mailer.js
const nodemailer = require('nodemailer');
import dotenv from 'dotenv';

dotenv.config({ path: '.env.production' });

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: '', // No authentication required for this free server
    pass: ''
  },
  tls: {
    rejectUnauthorized: false // Accept self-signed certificates
  }
});

async function sendEmail(from, to, subject, text) {
  try {
    let info = await transporter.sendMail({
      from: from, // sender address (user's email)
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email: %s', error);
    throw error;
  }
}

module.exports = { sendEmail };
