const express = require("express");
const mongoose = require("mongoose")
const logger = require("./utils/logger")
const apiRouter = require("./controller/api");
const {MONGODB_URL} = require("./utils/config")
const middleware = require("./utils/middleware");

const app = express();
mongoose.connect(MONGODB_URL)
.then(() => logger.info("Connected to DB"))
.catch((err) => logger.error(err))

app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/", apiRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler)

module.exports = app;