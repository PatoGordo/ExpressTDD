import crypto from "crypto";
import { Entity } from "../../core/domain/Entity";

type UserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: number;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  static create(props: UserProps, id?: string) {
    const user = new User(
      {
        id: crypto.randomUUID(),
        role: 3,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...props,
      },
      id
    );

    return user;
  }
}
