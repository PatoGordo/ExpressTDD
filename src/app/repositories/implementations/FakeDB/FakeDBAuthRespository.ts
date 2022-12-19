import { User } from "../../../../domain/entities/User";
import { IAuthRepository } from "../../interfaces/IAuthRepository";

export class FakeDBAuthRepository implements IAuthRepository {
  public users: User[] = [];

  async create(user: User): Promise<User> {
    try {
      this.users.push(user);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((u) => u.props.email === email);

    return user ? user : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((u) => u.id === id);

    return user ? user : null;
  }
}
