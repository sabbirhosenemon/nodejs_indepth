const express = require("express");

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
console.log(`Worker is running on port 3000 and pid: ${process.pid}`);
app.listen(3000);


/*
pm2 essential command list:
pm2 start server.js
pm2 stop server
pm2 delete server
pm2 list
pm2 start server.js -i max
pm2 start server.js -i 2
pm2 logs
pm2 restart server # restart all instances at once
pm2 show 0 # shows process details of no 0
pm2 stop 0 # stops process no 0
pm2 start 0 # starts process no 0
pm2 monit
pm2 reload server # not restart. it'll keep some processes/instances alive and restart one by one. it's the best way for live online server so that our server is always running 24x7.
*/