import { Router } from 'express';
import {SettingsController} from './app/controllers/Settings.controller';

const routes = Router();

const settings = new SettingsController();

routes.get('/settings', settings.post);

export default routes;
