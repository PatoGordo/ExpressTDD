import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { Product } from "../../../../domain/entities/Product";
import { IAuthRepository } from "../../../repositories/interfaces/IAuthRepository";

type CreateProductRequest = {
  name: string;
  description: string;
  photoURL: string;
  userID: string;
  quantity: number;
};

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
    private authRepository: IAuthRepository
  ) {}

  async execute(_product: CreateProductRequest) {
    const userExists = await this.authRepository.findById(_product.userID);

    if (!userExists) {
      throw new Error("This user is not associated to an account!");
    }

    const product = Product.create({
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      ..._product,
    });

    await this.productRepository.create(product);

    return product;
  }
}
