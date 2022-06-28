// here goes the all business logic
const { planets } = require("../../models/planets.models");

function getPlanets(req, res) {
  res.json(Number(planets[1].kepid)*5);
}

module.exports = { getPlanets };
