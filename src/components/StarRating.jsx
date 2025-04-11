// StarRating.jsx
import React from 'react';
import styles from './StarRating.module.css'; // optional styling

const StarRating = ({ rating, setRating }) => {
  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className={styles.starContainer}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          className={index < rating ? styles.filledStar : styles.emptyStar}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
