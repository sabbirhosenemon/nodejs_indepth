const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({id: 1, name: 'Emon'}));
  }).listen(3000, () => console.log("Server running on port 3000"));