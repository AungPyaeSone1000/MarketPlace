const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = 3000;

app.use('/api',productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Marketplace API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
