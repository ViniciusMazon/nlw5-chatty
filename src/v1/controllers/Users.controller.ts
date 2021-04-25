import { Request, Response } from 'express';
import { UsersService } from '../services/Users.service';

class UsersController {
  async post(request: Request, response: Response): Promise<Response> {
    const usersService = new UsersService();

    try {
      const result = await usersService.create(request.body);
      return response.status(201).send({result});
    } catch (err) {
      return response.status(err.code).json({ message: err.message });
    }
  }
}

export { UsersController };
