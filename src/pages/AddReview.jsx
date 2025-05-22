import React, { useState } from 'react';
import styles from './AddReview.module.css';
import StarRating from '../components/StarRating';

const AddReview = () => {
  const [title, setTitle] = useState('');
  const [reviewer, setReviewer] = useState('');
  const [userId, setUserId] = useState(''); // Optional: Set your test user ID
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:500/api/reviews/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, reviewer, userId, reviewText, rating }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Failed to add review');
      }

      setMessage('Review added successfully!');
      setTitle('');
      setReviewer('');
      setReviewText('');
      setRating(0);
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage('Error submitting review');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Name"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
        <div>
          <label>Rating:</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddReview;
