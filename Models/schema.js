// Importing buildSchema from graphql
const { buildSchema } = require("graphql");

// Defining GraphQL schema using buildSchema
const schema = buildSchema(`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    imageUrl: String!
  }

  input ProductInput {
    name: String!
    description: String!
    price: Float!
    imageUrl: String!
  }

  type Query {
    product(id: ID!): Product
    products: [Product]
  }

  type Mutation {
    addProduct(input: ProductInput): Product
  }
`);

module.exports = schema; // Exporting the schema
