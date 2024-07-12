const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

console.log('MongoDB URI:', process.env.MONGO_URI);
// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/Users'));
app.use('/api/products', require('./routes/Products'));
app.use('/api/orders', require('./routes/Orders'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../frontend/build')));

// // Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
