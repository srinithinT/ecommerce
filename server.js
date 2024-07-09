// Importing necessary modules
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./Models/schema"); // Importing GraphQL schema definitions
const resolvers = require("./Resolvers/resolver"); // Importing GraphQL resolvers

require("dotenv").config(); // Loading environment variables from a .env file

// Setting up the port for the server
const PORT = process.env.PORT || 5000;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION); // Connecting to MongoDB
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err); // Logging any connection errors
  }
};
connectDB(); // Executing the MongoDB connection function

// Creating an instance of ApolloServer with type definitions and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Starting the Apollo Server
server
  .listen(PORT)
  .then(({ url }) => {
    console.log(`Server is running on ${url}`); // Logging the server URL once it starts
  })
  .catch((err) => {
    console.error("Error starting Apollo Server:", err); // Logging any errors that occur while starting the server
  });
