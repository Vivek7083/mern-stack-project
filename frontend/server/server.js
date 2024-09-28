const express = require('express');
const cors = require('cors');
const routes = require('./routes/authRoutes');
const db = require('./config/db');

const app = express();

// Connect to the database
db.connect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
