// all the routes for the planets for get, post, put, delete will be here
const express = require("express");
const { getPlanets } = require("./planets.controllers");

const planetsRouter = express.Router(); // for grouping routes

planetsRouter.get("/", getPlanets);

module.exports = { planetsRouter };
