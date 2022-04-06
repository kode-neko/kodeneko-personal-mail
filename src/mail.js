const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function sendMail(message) {
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.err(err);
    } else {
      console.log(info);
    }
  });
}

module.exports = { sendMail };
