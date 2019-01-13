// Require dependencies
const express = require('express');
const mongoose = require('mongoose');

// PORT
const PORT = process.env.PORT || 3000;

// Express App
const app = express();

// Express Router
const router = express.Router();

// MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Listen
app.listen(PORT, () => {
    console.log('Listening on port:' + PORT);
})