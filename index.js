require("dotenv").config();

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const message = {
  from: "test@testmail.com",
  to: "user@testmail.com",
  subject: "Test Mail From Nodemailer",
  text: "Hello, This is amazing.",
};

transport.sendMail(message, function (err, info) {
  if (err) {
    console.err(err);
  } else {
    console.log(info);
  }
});
