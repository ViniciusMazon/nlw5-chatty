import { Request, Response } from 'express';
import { SettingsService } from '../services/Settings.service';

class SettingsController {
  async post(request: Request, response: Response): Promise<Response>  {
    const settingsService = new SettingsService();

    try {
      const result = await settingsService.create(request.body);
      return response.status(201).send(result);
    } catch (err) {
      return response.status(err.code).json({ message: err.message });
    }
  }
}

export { SettingsController };
