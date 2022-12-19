import { FakeDBAuthRepository } from "../../../repositories/implementations/FakeDB/FakeDBAuthRespository";
import { SignUpUseCase } from "./sign-up.useCase";

describe("Create user use case", () => {
  const fakeDBAuthRepository = new FakeDBAuthRepository();

  it("should be able to create a new user", async () => {
    const sut = new SignUpUseCase(fakeDBAuthRepository);

    const res = await sut.execute({
      name: "Test user",
      email: "test@test.com",
      password: "12345678",
    });

    expect(res).toBeTruthy();
  });

  it("should throw error because email is already used", async () => {
    const signUpUseCase = new SignUpUseCase(fakeDBAuthRepository);

    try {
      await signUpUseCase.execute({
        name: "Test user",
        email: "test@test.com",
        password: "12345678",
      });
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
