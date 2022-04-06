const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

async function sendMail(message) {
  let ko, ok;
  await transport.sendMail(message, function (err, info) {
    ko = err;
    ok = info;
  });

  if (ko) return new Promise.reject(ko);
  else return new Promise.resolve(ok);
}

module.exports = { sendMail };
