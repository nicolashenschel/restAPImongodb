'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);

var TemperatureSchema = new Schema({
  name: {
    type: String,
    required: 'Temperature reading device'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  temperature: {
    type: Number,
    required: 'Temperature needed'
  },
  goal: {
    type: Number,
    default: 0
  },
  ovnenOn: {
    type: Boolean,
    required: 'Oven state needed'
  },
  PIDEnabled: {
    type: Boolean,
    required: 'PID enabled needed'
  } 
});

module.exports = mongoose.model('Temperatures', TemperatureSchema);