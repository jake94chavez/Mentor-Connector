var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../models');

router.get('/', function(req, res, next) {
  res.render('form', { title: 'Mentor Connector' });
});

module.exports = router;