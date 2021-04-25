import express from 'express';

const app = express();

app.get('/ping', (request, response) => response.send('pong'))

export default app;
