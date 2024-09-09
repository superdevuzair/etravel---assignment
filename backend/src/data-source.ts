// src/data-source.ts
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { Order } from "./entities/Order";

// Create an instance of DataSource and configure it for PostgreSQL
export const AppDataSource = new DataSource({
  type: "postgres", // Specify PostgreSQL as the database type
  host: "localhost", // Database host
  port: 5432, // Default PostgreSQL port
  username: "postgres", // Your PostgreSQL username
  password: "mysecretpassword", // Your PostgreSQL password
  database: "easytravelDB", // Your PostgreSQL database name
  synchronize: true, // Automatically synchronize the database schema with the entities
  logging: true, // Enable logging for debugging
  entities: [Product, Order], // Register entities
});
