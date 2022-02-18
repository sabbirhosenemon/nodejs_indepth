const friends = require("../models/friends.model.js");

// it is better to use function name rather than arrow function. 
// if we use arrow function node will not show the function name at the time of debugging.
function postFriends(req, res) {
  if (!req.body.name) {
    // validate the request body to make sure that the name is there.
    return res.status(400).json({ error: "Name is required" });
  }

  const friend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(friend);
  res.json(friend);
}

function getFriends(req, res) {
  res.send(friends); // we can also use res.json(friends)
}

function getFriendById(req, res) {
  const id = Number(req.params.id);
  if (friends[id]) {
    // undefined is a falsy value
    res.status(200).json(friends[id]); // res.send(friends[id]) is also valid but we are doing specifically. by using json() -> text is converted to json
  } else {
    res.status(404).json({ error: "id does not exist" });
  }
}

module.exports = {
    postFriends,
    getFriends,
    getFriendById
};