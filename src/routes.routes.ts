import { Router } from 'express';
import {SettingsController} from './v1/controllers/Settings.controller';

const routes = Router();

const settings = new SettingsController();

routes.post('/settings', settings.post);

export default routes;
