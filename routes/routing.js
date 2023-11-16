
const express = require('express');
const router = express.Router();
const Exercise = require('./exercise');

// Render the exercise creation form
router.get('views\createExercise.ejs', (req, res) => {
  res.render('createExercise');
});

// Handle exercise creation
router.post('/exercises', async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);
    res.json(newExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Render the page with a list of exercises
router.get('/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.render('exerciseList', { exercises });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
