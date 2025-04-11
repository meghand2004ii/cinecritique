import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const dummyReviews = [
  { id: 1, title: "Inception", reviewer: "Alice", rating: 4.5, review: "Mind-bending and thrilling!" },
  { id: 2, title: "The Dark Knight", reviewer: "Bob", rating: 5, review: "One of the best superhero movies ever." },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = dummyReviews.find((m) => m.id === parseInt(id));

  if (!movie) return <h2 style={{ padding: '2rem' }}>Review not found.</h2>;

  return (
    <div className={styles.container}>
      <h2>{movie.title}</h2>
      <p><strong>Reviewed by:</strong> {movie.reviewer}</p>
      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
      <p>{movie.review}</p>
    </div>
  );
};

export default MovieDetails;
