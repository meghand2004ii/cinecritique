import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Cine Critique</h2>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Review</Link></li>
        <li><Link to="/reviews">Movie Reviews</Link></li>
        {isAuthenticated ? (
          <li>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Log Out
            </button>
          </li>
        ) : (
          <li><Link to="/login">Sign In</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
