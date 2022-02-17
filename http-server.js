const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({id: 1, name: 'Emon'}));
//   }).listen(3000, () => console.log("Server running on port 3000"));

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome home" }));
  } else if (req.url === "/about") {
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
