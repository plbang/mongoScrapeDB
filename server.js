// Require dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// PORT
const PORT = process.env.PORT || 3000;

// Express App
const app = express();
// Express Router
const router = express.Router();
// Require route file for router object
require('./config/routes')(router);

// Handlebars
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true}));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Have every request go through router middleware
app.use(router);

// MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScrape";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });




// Listen
app.listen(PORT, () => {
    console.log('Listening on port:' + PORT);
})