// exercise.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Exercise model
const exercise = mongoose.model('exercise', exerciseSchema);
module.exports = exercise;
