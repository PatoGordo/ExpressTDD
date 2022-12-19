import { Entity } from "../../core/domain/Entity";

type ProductProps = {
  name: string;
  description: string;
  photoURL: string;
  userID: string;
  quantity: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
};

export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps, id?: string) {
    super(props, id);
  }

  static create(props: ProductProps, id?: string) {
    const product = new Product(props, id);

    return product;
  }
}
