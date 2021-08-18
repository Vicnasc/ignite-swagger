import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const createdUser = new User();

    createdUser.name = name;
    createdUser.email = email;

    this.users.push(createdUser);

    return createdUser;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const findUser = this.users.find((user) => user.id === receivedUser.id);

    findUser.admin = true;

    return findUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
