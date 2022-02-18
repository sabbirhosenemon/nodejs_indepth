const express = require("express");

const otherController = require("../controllers/other.controller.js");

// we use Router() to group routes together. It gives us more modularity.
const otherRouter = express.Router();

otherRouter.get("/", otherController.getHome);
otherRouter.get("/about", otherController.getAbout);
otherRouter.get("/photo", otherController.getPhoto);

module.exports = otherRouter;