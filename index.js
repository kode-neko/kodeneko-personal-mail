require("dotenv").config();
const { init } = require("./src/server");

init(process.env.SERVER_PORT);
