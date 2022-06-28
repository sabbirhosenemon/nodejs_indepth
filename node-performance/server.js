const express = require("express");
const cluster = require("cluster");

const app = express();

function delay(duration) {
  start = Date.now();
  while (Date.now() - start < duration) {}
  // even loop is blocked by this while loop
}

app.get("/", (req, res) => {
  res.send(`/ - This request is running on process id: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(5000);
  res.send(`/timer - This request is running on process id: ${process.pid}`);
});

console.log(`Starting server... pid: ${process.pid}`);
if (cluster.isMaster) {
  console.log(`Master is running on pid: ${process.pid}`);
  const numWorkers = require("os").cpus().length;
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker server running on port 3000 and pid: ${process.pid}`);
  app.listen(3000);
}
