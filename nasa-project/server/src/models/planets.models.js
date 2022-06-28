// model handles the data for the planets from a file or database
const { parse } = require("csv-parse");
const fs = require("fs");

const planets = [];

function habitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

// Read the file as buffer which is raw data (binary). then pipe it to the parser to get an array of json objects and push it to the results array.
fs.createReadStream("./data/kepler_data.csv") // search in package.json root folder for the file
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (habitable(data)) {
      planets.push(data);
    }
  })
  .on("error", (err) => console.log(err))
  .on("end", () => {
    console.log("Total habitable planets found ", planets.length);
  });

module.exports = {
  planets,
};
