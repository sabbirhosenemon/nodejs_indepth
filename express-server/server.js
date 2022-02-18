const express = require("express");
const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Ahmed",
  },
  {
    id: 1,
    name: "John",
  }
];

// all the requests will go in through the middlewares and then process by the server and then again go through middlewares as response.
// this logger middleware should be at the top of the stack so that as much as possible time is logged.
app.use((req, res, next) => {
  const start = Date.now(); // time when the request was made
  next();
  const last = Date.now() - start; // this is the time that server took to run the request. last time after processing the request when the response is sent.
  console.log(`${req.method} ${req.url} - took ${last}ms`);
});

app.use(express.json()); // this is the middleware that parses the incoming request body and converts it into json.

app.post("/friends", (req, res) => {
  if (!req.body.name) { // validate the request body to make sure that the name is there.
    return res.status(400).json({ error: "Name is required" });
  }

  const friend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(friend);
  res.json(friend);
});

app.get("/friends", (req, res) => {
  res.send(friends); // we can also use res.json(friends)
});

app.get("/friends/:id", (req, res) => {
  const id = Number(req.params.id);
  if (friends[id]) {
    // undefined is a falsy value
    res.status(200).json(friends[id]); // res.send(friends[id]) is also valid but we are doing specifically. by using json() -> text is converted to json
  } else {
    res.status(404).json({ error: "id does not exist" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
