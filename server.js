const express = require('express');
const cors = require('cors');
const products = require('./data/products.json');

const app = express();
app.use(cors());
const PORT = 5000;

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));