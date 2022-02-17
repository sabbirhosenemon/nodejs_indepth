const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({id: 1, name: 'Emon'}));
//   }).listen(3000, () => console.log("Server running on port 3000"));

const server = http.createServer(); // create server instance

const person = [
  {
    id: 0,
    name: "Emon",
  },
  {
    id: 1,
    name: "John",
  },
];

// event emitter is used to listen to events
server.on("request", (req, res) => { // request emitter callback function takes two arguments req and res
  const url = req.url.split("/"); // split url into array like ['', 'person', '1']
  console.log(url);
  if (req.method === "POST" && url[1] === "person") {
    req.on("data", (data) => { // data emitter callback function takes one argument data
      const per = data.toString(); // convert buffer data to string
      person.push(JSON.parse(per)); // convert string to json
      console.log(per);
    });
  } else if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome home" })); // end the stream and send response
  } else if (req.method === "GET" && url[1] === "person") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (url.length === 3) {
      res.end(JSON.stringify(person[Number(url[2])]));
    } else {
      res.end(JSON.stringify(person));
    }
  } else if (req.method === "GET" && url[1] === "about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" }); // set status code and content type using writeHead()
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));

// POST DATA
// fetch('http://localhost:3000/person', {
//   method: 'POST',
//   body: JSON.stringify({
//     id: 2,
//     name: 'Sinha'
//   })
// })