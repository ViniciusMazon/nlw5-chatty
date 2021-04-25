import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/Users.repository';

interface IUsersCreate {
  email: string;
}

class UsersService {
  async create({ email }: IUsersCreate) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = usersRepository.create({ email });
    await usersRepository.save(user);
    return user.id;
  }
}

export { UsersService };
