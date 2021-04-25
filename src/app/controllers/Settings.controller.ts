import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/Settings.repository';
class SettingsController {
  async post(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
      chat,
      username,
    });

    try {
      await settingsRepository.save(settings);
      return response.status(201).json(settings.id);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Internal server error', error });
    }
  }
}

export { SettingsController };
