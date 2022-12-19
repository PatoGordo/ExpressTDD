import { FakeDBAuthRepository } from "../../../repositories/implementations/FakeDB/FakeDBAuthRespository";
import { FakeDBProductRepository } from "../../../repositories/implementations/FakeDB/FakeDBProductRepository";
import { SignUpUseCase } from "../../Auth/SignUp/sign-up.useCase";
import { CreateProductUseCase } from "./create.useCase";

describe("Create a new product", () => {
  const fakeDBProductRepository = new FakeDBProductRepository();
  const fakeDBAuthRepository = new FakeDBAuthRepository();

  it("Should to create a new product", async () => {
    const authSut = new SignUpUseCase(fakeDBAuthRepository);
    const productSut = new CreateProductUseCase(fakeDBProductRepository, fakeDBAuthRepository);

    const user = await authSut.execute({
      email: "test@test.com",
      name: "PatoGordo",
      password: "12345678",
    });

    const res = productSut.execute({
      name: "Test product",
      description: "Lorem Lorem Lorem",
      photoURL: "https://www.via.placeholder.com/512",
      quantity: 52,
      userID: user.id,
    });

    expect(res).toBeTruthy();
  });
});
