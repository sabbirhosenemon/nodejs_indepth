const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({id: 1, name: 'Emon'}));
//   }).listen(3000, () => console.log("Server running on port 3000"));

const server = http.createServer();

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

server.on("request", (req, res) => {
  const url = req.url.split("/");
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome home" }));
  } else if (url[1] === "person") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (url.length === 3) {
      res.end(JSON.stringify(person[Number(url[2])]));
    } else {
      res.end(JSON.stringify(person));
    }
  } else if (url[1] === "about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
