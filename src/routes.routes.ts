import { Router } from 'express';
import { SettingsController } from './v1/controllers/Settings.controller';
import { UsersController } from './v1/controllers/Users.controller';
import { MessagesController } from './v1/controllers/Messages.controller';

const routes = Router();

const settings = new SettingsController();
const users = new UsersController();
const messages = new MessagesController();

routes.get('/', (request, response) => response.render('html/client.html'));

// Settings
routes.post('/v1/settings', settings.post);

// Users
routes.post('/v1/users', users.post);

// Messages
routes.post('/v1/messages', messages.post);
routes.get('/v1/messages/:user_id', messages.showByUser);

export default routes;
