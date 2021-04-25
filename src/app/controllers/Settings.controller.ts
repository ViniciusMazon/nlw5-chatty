import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/Settings.repository';

class SettingsController {
  private settingsRepository = getCustomRepository(SettingsRepository);

  async post(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    try {
      await this.settingsRepository.save(settings);
      return response.status(201);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Internal server error', error });
    }
  }
}

export { SettingsController };
