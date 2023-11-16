const mongodb = require('mongodb')
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/assn3-100874202', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Set up view engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Route for the home page
app.get('/', (req, res) => {
  res.render('index');
});
// CRUD Routes

// Item Model (Assuming Item is a mongoose model)
const Item = require('./models/items'); // Update with your actual Item model

// Create Item
app.post('/items', async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all Items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Item by ID
app.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Item by ID
app.delete('/items/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise Model 
const exercise = require('./models/exercise');
// Create Exercise
app.post('/exercises', async (req, res) => {
  try {
    const newExercise = await exercise.create(req.body);
    res.json(newExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all Exercises
app.get('/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const Workout = require('./models/workout'); 

// Create Workout
app.post('/workouts', async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all Workouts
app.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route to lead to the form to create an exercise
app.get('/createExercise', (req, res) => {
  res.render('createExercise');
});

// Route to lead to the form to create a workout
app.get('/createWorkout', (req, res) => {
  res.render('createWorkout');
});
app.get('/exercises', (req, res) => {
  res.render('exercises');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
