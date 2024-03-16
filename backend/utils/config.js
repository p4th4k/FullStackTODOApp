const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

module.exports = { PORT, MONGODB_URL };
