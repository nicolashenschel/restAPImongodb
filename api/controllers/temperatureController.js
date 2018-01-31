'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');
var Temperature = mongoose.model('Temperatures');

exports.add_temperature = function(req, res) {
  console.log('in add_temperature');
  var new_temperature = new Temperature(req.body);
  new_temperature.save(function(err, temperature) {
    if (err) 
      res.send(err);
    res.json(temperature);
  });
};

exports.list_all_temperatures = function(req, res) {
  Temperature.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);

  });
};

exports.delete_a_task = function(req, res) {

  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
