// Importing the Product model
const Product = require("../models/Product");

// Defining resolvers for GraphQL queries and mutations
const resolvers = {
  Query: {
    // Resolver for fetching a single product by its ID
    product: async (_, { id }) => {
      return await Product.findById(id);
    },
    // Resolver for fetching all products
    products: async () => {
      const response = await Product.find();
      console.log(response, "response from Product");
      return response;
    },
  },

  Mutation: {
    // Resolver for adding a new product
    addProduct: async (_, { input }) => {
      try {
        const product = new Product(input);
        const response = await product.save(); // Saving the new product to the database
        console.log(response, product, "response");
        return response;
      } catch (e) {
        console.log(e, "error in addProduct");
        return {
          success: false,
          message: "Failed to add product.",
          error: e.message,
        };
      }
    },
  },
};

module.exports = resolvers; // Exporting resolvers
