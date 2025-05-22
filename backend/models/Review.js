const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  reviewer: { type: String, required: true },
  userId: { type: String },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);
