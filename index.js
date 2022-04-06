require("dotenv").config();
const { sendMail } = require("./src/mail");

const message = {
  from: "test@testmail.com",
  to: "user@testmail.com",
  subject: "Test Mail From Nodemailer",
  text: "Hello, This is amazing.",
};

sendMail(message);
