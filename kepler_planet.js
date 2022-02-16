const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

function habitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// Read the file as buffer which is raw data (binary). then pipe it to the parser to get an array of json objects and push it to the results array.
fs.createReadStream("kepler_data.csv")
    .pipe(
        parse({
            comment: "#",
            columns: true,
        })
    )
    .on("data", (data) => {
        if(habitable(data)) {
            results.push(data);
        }
    })
    .on("error", (err) => console.log(err))
    .on("end", () => {
        console.log('Total habitable planets found ', results.length);
    });
