import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/Settings.repository';
import errorService from './Error.service';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);

    const userAlreadyExists = await settingsRepository.findOne({ username });
    if (userAlreadyExists) {
      errorService.throw('400', 'User already exists');
    }

    const settings = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(settings);
    return settings.id;
  }
}

export { SettingsService };
