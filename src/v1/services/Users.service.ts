import { getCustomRepository, Repository } from 'typeorm';
import { UsersRepository } from '../repositories/Users.repository';
import { Users } from '../entities/Users.entity';

interface IUsersCreate {
  email: string;
}

class UsersService {
  private usersRepository: Repository<Users>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create({ email }: IUsersCreate) {
    const userAlreadyExists = await this.usersRepository.findOne({ email });
    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = this.usersRepository.create({ email });
    await this.usersRepository.save(user);
    return user.id;
  }
}

export { UsersService };
