import { Repository, EntityRepository } from 'typeorm';
import { Messages } from '../entities/Messages.entity';

@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages> {}

export { MessagesRepository };
