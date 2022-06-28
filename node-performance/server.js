const express = require("express");
const app = express();

function delay(duration) {
  start = Date.now();
  while (Date.now() - start < duration) {}
  // even loop is blocked by this while loop
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/timer", (req, res) => {
    delay(5000);
  res.send("Took too long!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
