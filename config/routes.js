const express = require('express');
const router = express.Router();
const db = require('../models');
const request = require('request');
const cheerio = require('cheerio');