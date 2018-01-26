// This page handles all requests to the database, GET POST PUT and DELETE
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../models');

// MENTOR ROUTES
router.get('/mentors', function api_index (req, res){
  db.Mentor.find(function (err, mentors) {
    if (err) {
      console.log('index error:' + err);
      res.sendStatus(500);
    }
    res.json(mentors);
  });
});

// post new mentor into database
router.post('/mentors', (req, res) => {
  console.log('body', req.body);

  let mentor = new db.Mentor(req.body);
  mentor.save((err, createdMentorObject) => {  //.save, saves the info
    if (err) {
        res.status(500).send(err);
    }                                        //numeric codes that tie in with the success and error in ajax
    res.status(200).send(createdMentorObject);
  });
})


//get one mentor
router.get('/mentors/:id', function (req, res) {
  //get mentor id from params
  let mentorId = req.params.id;

  db.Mentor.find(function (err, mentors) {
    if (err) {
      console.log('index error:' + error);
      res.sendStatus(500);
    }
    for (var i = 0; i < mentors.length; i++) {
      if (mentors[i]._id == mentorId) {
        res.json(mentors[i]);
        break;
      }
    }
  });
});

// delete a mentor from database
router.delete('/mentors/:id', function deleteMentor(req, res) {
  console.log('deleting id: ', req.params.id);
  db.Mentor.remove({_id: req.params.id}, function(err) {
    if (err) { return console.log(err); }
    console.log("removal of id=" + req.params.id  + " successful.");
    res.status(200).send(); // everything is a-OK
  });
});

// update a mentor in the database
router.put('/mentors/:id', function updateMentor(req, res) {
  console.log('updating id ', req.params.id);
  console.log('received body ', req.body);

  db.Mentor.findOne({_id: req.params.id}, function(err, foundMentor) {
    if (err) { console.log('error', err); }
    foundMentor. = req.body.;
    foundMentor. = req.body.;
    foundMentor. = req.body.;
    if (req.body.) {
      foundMentor. = req.body.
    }
    foundMentor.save(function(err, saved) {
      if(err) { console.log('error', err); }
      res.json(saved);
    });
  });
});

// MENTEE ROUTES
router.get('/mentees', function api_index (req, res){
  db.Mentee.find(function (err, mentees) {
    if (err) {
      console.log('index error:' + err);
      res.sendStatus(500);
    }
    res.json(mentees);
  });
});

// post new mentee into database
router.post('/mentees', (req, res) => {
  console.log('body', req.body);

  let mentee = new db.Mentee(req.body);
  mentee.save((err, createdMenteeObject) => {  //.save, saves the info
    if (err) {
        res.status(500).send(err);
    }                                        //numeric codes that tie in with the success and error in ajax
    res.status(200).send(createdMenteeObject);
  });
})


//get one mentee
router.get('/mentees/:id', function (req, res) {
  //get mentee id from params
  let menteeId = req.params.id;

  db.Mentee.find(function (err, mentees) {
    if (err) {
      console.log('index error:' + error);
      res.sendStatus(500);
    }
    for (var i = 0; i < mentees.length; i++) {
      if (mentees[i]._id == menteeId) {
        res.json(mentees[i]);
        break;
      }
    }
  });
});

// delete a mentee from database
router.delete('/mentees/:id', function deleteMentee(req, res) {
  console.log('deleting id: ', req.params.id);
  db.Mentee.remove({_id: req.params.id}, function(err) {
    if (err) { return console.log(err); }
    console.log("removal of id=" + req.params.id  + " successful.");
    res.status(200).send(); // everything is a-OK
  });
});

// update a mentee in the database
router.put('/mentees/:id', function updateMentee(req, res) {
  console.log('updating id ', req.params.id);
  console.log('received body ', req.body);

  db.Mentee.findOne({_id: req.params.id}, function(err, foundMentee) {
    if (err) { console.log('error', err); }
    foundMentee. = req.body.;
    foundMentee. = req.body.;
    foundMentee. = req.body.;
    if (req.body.) {
      foundMentee. = req.body.
    }
    foundMentee.save(function(err, saved) {
      if(err) { console.log('error', err); }
      res.json(saved);
    });
  });
});
module.exports = router;