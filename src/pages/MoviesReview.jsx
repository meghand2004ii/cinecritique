import React, { useState, useEffect } from 'react';
import styles from './MoviesReview.module.css';
import StarRating from '../components/StarRating';

const MoviesReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:500/api/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.reviewList}>
      <h2>All Movie Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to add one!</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className={styles.reviewCard}>
            <h3>{review.title}</h3>
            <p><strong>Reviewer:</strong> {review.reviewer}</p>
            <p><strong>Rating:</strong> <StarRating rating={review.rating} setRating={() => {}} /></p>
            <p>{review.reviewText}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MoviesReview;
