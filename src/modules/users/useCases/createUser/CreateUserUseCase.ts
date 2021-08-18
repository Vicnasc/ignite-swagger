import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const findIfEmailIsUsed = this.usersRepository.findByEmail(email);

    if (!findIfEmailIsUsed) return this.usersRepository.create({ name, email });

    throw new Error('Email not available');
  }
}

export { CreateUserUseCase };
