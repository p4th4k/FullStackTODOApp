const express = require("express");
const { unknownEndpoint, requestLogger } = require("./utils/middleware");
const apiRouter = require("./controller/api");

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use("/api/", apiRouter);
app.use(unknownEndpoint);

module.exports = app;
