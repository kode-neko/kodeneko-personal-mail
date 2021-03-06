const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { sendMail } = require("./mail");

const server = express();

server.use(morgan("tiny"));
server.use(cors());
server.use(express.json());

server.post("/contact", (req, res) => {
  const { name, mail, content } = req.body;
  const message = {
    from: mail,
    to: "destination@testmail.com",
    subject: `KodeNeko PP | Contact | ${name}`,
    text: content,
  };
  const recipe = {
    from: "destination@testmail.com",
    to: mail,
    subject: `KodeNeko | ¡Gracias por contactar ${name}!`,
    text: "Gracias por enviar el mensaje. La solicitud será procesada con la mayor brevedad posible.",
  };
  sendMail(message)
    .then((info) => {
      sendMail(recipe);
      res.status(200).json({ msg: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Error while sending mail" });
    });
});

function init(port) {
  server.listen(port);
  console.log("Server init on port " + port);
}

module.exports = {
  init,
};
