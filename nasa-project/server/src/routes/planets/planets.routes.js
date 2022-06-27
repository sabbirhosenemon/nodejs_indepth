const express = require("express");
const { getPlanets } = require("./planets.controllers");

const planetsRouter = express.Router(); // for grouping routes

planetsRouter.get("/planets", getPlanets);

module.exports = { planetsRouter };
