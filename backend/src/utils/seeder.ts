// src/utils/seeder.ts
import { Product } from "../entities/Product";
import { AppDataSource } from "../data-source"; // Import TypeORM data source

export async function seedDatabase() {
  const productRepo = AppDataSource.getRepository(Product);

  const productCount = await productRepo.count();
  if (productCount === 0) {
    // Seed the database with initial products
    const products = [
      {
        name: "Flight to Mallorca",
        category: "flight",
        description: "A relaxing flight from Dusseldorf to Mallorca.",
        price: 299,
        available: true,
      },
      {
        name: "Hotel in Mallorca",
        category: "hotel",
        description: "A luxurious hotel stay in Mallorca.",
        price: 499,
        available: true,
      },
      {
        name: "Car Rental in Mallorca",
        category: "car rental",
        description: "Rent a car to explore Mallorca.",
        price: 150,
        available: true,
      },
    ];

    await productRepo.save(
      products.map((productData) => productRepo.create(productData))
    );
    console.log("Database seeded with initial products.");
  }
}
