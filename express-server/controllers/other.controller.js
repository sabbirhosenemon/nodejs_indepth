const path = require('path');

function getHome(req, res) {
  res.send("Hello World!");
}

function getAbout(req, res) {
  res.send("<h1>About page</h1>");
}

function getPhoto (req, res) {
  res.sendFile(path.join(__dirname, '../public/images/pizza.jpg'));
}

module.exports = {
    getHome,
    getAbout,
    getPhoto
};