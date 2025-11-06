const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'T-shirt', price: 299 },
    { id: 2, name: 'Shoes', price: 999 },
    { id: 3, name: 'Watch', price: 1499 }
  ]);
});

// Start server
app.listen(5000, () => {
  console.log('Backend server running on port 5000');
});
