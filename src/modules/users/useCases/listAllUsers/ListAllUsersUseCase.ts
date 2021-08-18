import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const findUser = this.usersRepository.findById(user_id);

    if (findUser && findUser.admin) return this.usersRepository.list();

    throw new Error("User not found or doesn't have access");
  }
}

export { ListAllUsersUseCase };
