const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('Mindfulness Coach API is running...');
});

// Connect to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const analysisRoutes = require('./routes/analysis');
app.use('/api', analysisRoutes);
