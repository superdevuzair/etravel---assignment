// src/schema/typeDefs.ts
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: String!
    description: String!
    price: Float!
    available: Boolean!
  }

  type Order {
    id: ID!
    customerName: String!
    product: Product!
  }

  type Query {
    products: [Product!]!
    orders: [Order!]!
  }

  type Mutation {
    addProduct(
      name: String!
      category: String!
      description: String!
      price: Float!
      available: Boolean!
    ): Product!

    removeProduct(id: ID!): Boolean!

    placeOrder(customerName: String!, productId: ID!): Order!
  }
`;
