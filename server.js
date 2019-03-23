const express = require("express");
const morg = require("morgan");
const projectsRouter = require("./routes/projectsRouter.js");

const server = express();

server.use(express.json(), morg("dev"));
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Zachs Sprint Challenge</h1>`);
});

module.exports = server;
