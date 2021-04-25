import { getCustomRepository, Repository } from 'typeorm';
import { SettingsRepository } from '../repositories/Settings.repository';
import { Settings } from '../entities/Settings.entity';
import errorService from './Error.service';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Settings>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: ISettingsCreate) {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });
    if (userAlreadyExists) {
      errorService.throw('400', 'User already exists');
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(settings);
    return settings.id;
  }
}

export { SettingsService };
