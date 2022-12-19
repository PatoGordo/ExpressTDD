import { Product } from "../../../../domain/entities/Product";
import { IProductRepository } from "../../interfaces/IProductRepository";

export class FakeDBProductRepository implements IProductRepository {
  public products: Product[] = [];

  async create(product: Product): Promise<Product> {
    this.products.push(product);

    return product;
  }

  async findByID(id: string): Promise<Product | null> {
    const product = this.products.find((p) => p.id === id);

    return product ? product : null;
  }

  async findMany(): Promise<Product[]> {
    return this.products;
  }
}
