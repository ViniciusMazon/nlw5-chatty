import { Router } from 'express';
import { SettingsController } from './v1/controllers/Settings.controller';
import { UsersController } from './v1/controllers/Users.controller';

const routes = Router();

const settings = new SettingsController();
const users = new UsersController();

// Settings
routes.post('/settings', settings.post);

// Users
routes.post('/users', users.post);

export default routes;
