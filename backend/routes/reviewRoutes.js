const express = require('express');
const router = express.Router();
const Review = require('../models/Review'); // ✅ assumes Review model is in models folder

// Get all reviews
router.get('/', async (req, res) => {
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add a review
router.post('/add', async (req, res) => {
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { title, reviewer, userId, reviewText, rating } = req.body;

    const newReview = new Review({
      title,
      reviewer,
      userId,
      reviewText,
      rating
    });

    await newReview.save();
    res.status(201).json({ msg: 'Review added successfully' });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
