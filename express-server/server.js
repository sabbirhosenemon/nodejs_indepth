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
  },
  {
    id: 2,
    name: "Raj",
  },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friends/:id", (req, res) => {
    const id = Number(req.params.id)
    if(friends[id]){ // undefined is a falsy value
        res.status(200).json(friends[id]) // res.send(friends[id]) is also valid but we are doing specifically. by using json() -> text is converted to json
    } else {
        res.status(404).json({error: "id does not exist"})
    }
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
