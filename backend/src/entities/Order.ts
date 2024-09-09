import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Product } from "./Product";

// Define the Order entity to represent the 'orders' table in the database
@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number; // Primary key

  @Column()
  customerName?: string; // Name of the customer who placed the order

  @ManyToOne(() => Product,{eager:true})
  product?: Product; // Foreign key relation to the Product entity, initialized with '!'
}
