// src/resolvers/resolvers.ts
import { Product } from "../entities/Product";
import { Order } from "../entities/Order";
import { AppDataSource } from "../data-source"; // Import TypeORM data source

export const resolvers = {
  Query: {
    products: async () => {
      return await AppDataSource.getRepository(Product).find();
    },
    orders: async () => {
      return await AppDataSource.getRepository(Order).find();
    },
  },
  Mutation: {
    addProduct: async (
      _: any,
      args: {
        name: string;
        category: string;
        description: string;
        price: number;
        available: boolean;
      }
    ) => {
      const productRepo = AppDataSource.getRepository(Product);
      const newProduct = productRepo.create(args);
      await productRepo.save(newProduct);
      return newProduct;
    },
    removeProduct: async (_: any, { id }: { id: number }) => {
      const productRepo = AppDataSource.getRepository(Product);
      await productRepo.delete(id);
      return true;
    },
    placeOrder: async (
      _: any,
      { customerName, productId }: { customerName: string; productId: number }
    ) => {
      const productRepo = AppDataSource.getRepository(Product);
      const product = await productRepo.findOneBy({ id: productId });
      if (!product) throw new Error("Product not found");

      const orderRepo = AppDataSource.getRepository(Order);
      const newOrder = orderRepo.create({ customerName, product });
      await orderRepo.save(newOrder);
      return newOrder;
    },
  },
};
