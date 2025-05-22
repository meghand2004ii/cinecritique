import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import backgroundImage from '../images/martin1.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.homeContainer}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Welcome to Cine Critique 🎬</h1>
        <p className={styles.subtext}>
          Cine Critique is a simple platform to share your thoughts and ratings on movies you watch.
          Whether it's an all-time classic or the latest blockbuster, share your opinion with others!
        </p>
        <button className={styles.reviewButton} onClick={() => navigate("/add")}>
          Go Review the Movies
        </button>
      </div>
    </div>
  );
};

export default Home;
