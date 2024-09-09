// src/index.ts
import "reflect-metadata";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { AppDataSource } from "./data-source";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./schema/typeDefs";
import { seedDatabase } from "./utils/seeder";

const app: Express = express();

async function startServer() {
  await AppDataSource.initialize(); // Initialize TypeORM Data Source
  await seedDatabase(); // Seed the database

  // Create ApolloServer instance with typeDefs and resolvers
  const server = new ApolloServer({
    typeDefs, // Pass in the typeDefs
    resolvers, // Pass in the resolvers
  });

  await server.start();

  // Apply Apollo Server middleware to Express app
  server.applyMiddleware({ app: app as any, path: "/graphql" });

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
}

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});
