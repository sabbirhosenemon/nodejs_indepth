const express = require("express");
const app = express();
const PORT = 3000;

const friendsController = require("./controllers/friends.controller.js");
const otherController = require("./controllers/other.controller.js");

// all the requests will go in through the middlewares and then process by the server and then again go through middlewares as response.
// this logger middleware should be at the top of the stack so that as much as possible time is logged.
app.use((req, res, next) => {
  const start = Date.now(); // time when the request was made
  next();
  const last = Date.now() - start; // this is the time that server took to run the request. last time after processing the request when the response is sent.
  console.log(`${req.method} ${req.url} - took ${last}ms`);
});

app.use(express.json()); // this is the middleware that parses the incoming request body and converts it into json.

app.post("/friends", friendsController.postFriends);
app.get("/friends", friendsController.getFriends);
app.get("/friends/:id", friendsController.getFriendById);

app.get("/", otherController.getHome);
app.get("/about", otherController.getAbout);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
