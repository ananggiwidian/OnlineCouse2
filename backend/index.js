const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();
app.use(express.json());
app.use(cors());

// Ubah dari "/products" menjadi "/api/products"
app.get("/api/products", (req, res) => {
  res.send(products);
});

module.exports = app;