const express = require("express");
const path = require('path');
const app = express();
const PORT = 3000;

// Import and initialize the routes
const friendsRouter = require("./routes/friends.route.js");
const otherRouter = require("./routes/other.route.js");

// app.set is use to modify the settings of express. Here we are setting up the Handlebars view engine as the template engine.
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// all the requests will go in through the middlewares and then process by the server and then again go through middlewares as response.
// this logger middleware should be at the top of the stack so that as much as possible time is logged.
app.use((req, res, next) => {
  const start = Date.now(); // time when the request was made
  next(); // then by calling this next() function, the request will be processed by the server.
  const last = Date.now() - start; // after calling next the request goes to server and finish processing and then come here. last time after processing the request when the response is sent.
  console.log(`${req.method} ${req.baseUrl}${req.url} - took ${last}ms`); // this is the time that server took to run the request. this is the time that is logged.
});

// this is the middleware that parses the incoming request body and converts it into json.
app.use(express.json()); 

// middleware for serving static files like images, css, js etc.
app.use('/site', express.static(path.join(__dirname, 'public')));

// use imported routes as middleware.
app.use("/friends", friendsRouter);
app.use("/", otherRouter);

// this route wil be rendered by the view engine.
app.get('/hbs', (req, res) => {
  res.render('index', {
    title: 'Express Server',
    message: 'Hello Express'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
