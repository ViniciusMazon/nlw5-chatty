import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Users } from './Users.entity';

@Entity('messages')
class Messages {
  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => Users)
  users: Users;

  @Column()
  user_id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Messages };
