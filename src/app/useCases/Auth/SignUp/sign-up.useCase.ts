import { User } from "../../../../domain/entities/User";
import { IAuthRepository } from "../../../repositories/interfaces/IAuthRepository";

type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export class SignUpUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute({ name, email, password }: SignUpRequest) {
    const emailAlreadyUsed = await this.authRepository.findByEmail(email);

    if (emailAlreadyUsed) {
      throw new Error("This email is already used!");
    }

    const user = User.create({
      name,
      email,
      password,
    });

    await this.authRepository.create(user);

    return user;
  }
}
