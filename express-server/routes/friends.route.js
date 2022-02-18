const express = require("express");
const { append } = require("express/lib/response");

const friendsController = require("../controllers/friends.controller.js");

// we use Router() to group routes together. It gives us more modularity.
const friendsRouter = express.Router()

// this middleware will be applied to this friendsRouter only. 
friendsRouter.use((req, res, next) => {
    console.log("IP IS", req.ip);
    next()
})

friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriendById);

module.exports = friendsRouter;