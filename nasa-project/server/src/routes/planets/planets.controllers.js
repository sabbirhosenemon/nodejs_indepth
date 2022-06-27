const { planets } = require("../../models/planets.models");

function getPlanets(req, res) {
  res.json(planets);
}

module.exports = { getPlanets };
