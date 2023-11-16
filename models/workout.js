// workout.js
const mongoose = require('mongoose');
const Exercise = require('./exercise'); 

const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
  }],
});

// Create and export the Workout model
const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
