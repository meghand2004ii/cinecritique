const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// CORS middleware - must be before other middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Other middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Cine Critique!');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reviews', require('./routes/reviewRoutes'));

const PORT = process.env.PORT || 500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
