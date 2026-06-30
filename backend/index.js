const express = require("express");
const cors = require("cors");

const products = require("./products"); // Pastikan file products.js ada dan mengekspor data

const app = express();

app.use(express.json());
app.use(cors()); // Sebenernya di Vercel (satu domain) CORS udah ga terlalu perlu, tapi biarin aja aman.

app.get("/products", (req, res) => {
	res.send(products);
});


module.exports = app;