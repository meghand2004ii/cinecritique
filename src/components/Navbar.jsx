import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Cine Critique</h2>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Review</Link></li>
        <li><Link to="/reviews">Movie Reviews</Link></li>
        <li><Link to="/reviews">Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
