import { Repository, EntityRepository } from 'typeorm';
import { Users } from '../entities/Users.entity';

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {}

export { UsersRepository };
