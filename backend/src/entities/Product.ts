import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

// Define the Product entity to represent the 'products' table in the database
@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number; // Primary key

  @Column()
  name?: string; // Name of the product

  @Column()
  category?: string; // Category of the product (e.g., flight, hotel, car rental)

  @Column()
  description?: string; // Description of the product

  @Column("decimal")
  price?: number; // Price of the product

  @Column({ default: true })
  available?: boolean; // Availability status
}
