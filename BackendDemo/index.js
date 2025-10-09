const express = require('express');
const cors = require('cors');
require('./config/database.js'); 
const router = require('./router.js');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000; 

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// Health check endpoint
app.get('/', (req, res) => {
    res.send('GDG Backend Operational!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
