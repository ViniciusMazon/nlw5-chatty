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
}

export { MessagesController };
