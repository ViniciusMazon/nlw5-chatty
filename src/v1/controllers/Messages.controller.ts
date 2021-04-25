import { Request, Response } from 'express';
import { MessagesService } from '../services/Messages.service';

class MessagesController {
  async post(request: Request, response: Response): Promise<Response> {
    const messagesService = new MessagesService();

    try {
      const result = await messagesService.create(request.body);
      return response.status(201).send(result);
    } catch (err) {
      return response.status(err.code).json({ message: err.message });
    }
  }

  async showByUser(request: Request, response: Response) {
    const messagesService = new MessagesService();
    try {
      const list = await messagesService.listByUser(request.params.user_id);
      return response.status(200).json({ list });
    } catch (err) {
      return response.status(err.code).json(err.message);
    }
  }
}

export { MessagesController };
