import { Router } from 'express';

const routes = Router();

routes.get('/ping', (request, response) => response.json({pong: true}));

export default routes;
