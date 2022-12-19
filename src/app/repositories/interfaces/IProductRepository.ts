import { Product } from "../../../domain/entities/Product";

export interface IProductRepository {
  create(product: Product): Promise<Product>;
  findByID(id: string): Promise<Product | null>;
  findMany(): Promise<Product[]>;
}
