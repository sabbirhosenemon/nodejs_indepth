const express = require("express");
const cluster = require("cluster");

const app = express();

function delay(duration) {
  start = Date.now();
  while (Date.now() - start < duration) {}
  // even loop is blocked by this while loop
}

app.get("/", (req, res) => {
  res.send(`Hello World!: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(5000);
  res.send(`Took too long!: ${process.pid}`);
});

console.log("Starting server...");
if (cluster.isMaster) {
  console.log(`Master is running on pid: ${process.pid}`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`app listening on port 3000 and pid: ${process.pid}`);
  app.listen(3000);
}
