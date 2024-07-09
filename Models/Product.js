const { mongoose } = require("mongoose");

// Defining the product schema for MongoDB
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

// Creating a model for Product
const Product = mongoose.model("Product", productSchema);

module.exports = Product; // Exporting the Product model
