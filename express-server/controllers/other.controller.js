function getHome(req, res) {
  res.send("Hello World!");
}

function getAbout(req, res) {
  res.send("<h1>About page</h1>");
}

module.exports = {
    getHome,
    getAbout
};