import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddReview.module.css';
import StarRating from '../components/StarRating';

const AddReview = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [reviewer, setReviewer] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      title,
      reviewer,
      rating,
      review,
    };

    addReview(newReview);
    navigate('/reviews');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add Movie Review</h2>
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
        
        <label>Rating:</label>
        <StarRating rating={rating} setRating={setRating} />

        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button> Movie Details (Optional) </button>
        <p type = "description"> Spare a moment to give details about the movie </p>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;
