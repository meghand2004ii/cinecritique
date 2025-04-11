import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddReview from './pages/AddReview';
import MoviesReview from './pages/MoviesReview';
import MovieDetails from './pages/MovieDetails';

const App = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddReview addReview={addReview} />} />
        <Route path="/reviews" element={<MoviesReview reviews={reviews} />} />
        <Route path="/reviews/:id" element={<MovieDetails reviews={reviews} />} />
      </Routes>
    </Router>
  );
};

export default App;
