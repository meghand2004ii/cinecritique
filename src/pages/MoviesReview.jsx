import React from 'react';
import styles from './MoviesReview.module.css';

const MoviesReview = ({ reviews }) => {
  return (
    <div className={styles.reviewList}>
      <h2>All Movie Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to add one!</p>
      ) : (
        reviews.map((movie) => (
          <div key={movie.id} className={styles.reviewCard}>
            <h3>{movie.title}</h3>
            <p><strong>Reviewer:</strong> {movie.reviewer}</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
            <p>{movie.review}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MoviesReview;
