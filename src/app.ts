import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import './database';

import routes from './routes.routes';

const app = express();
const http = createServer(app);
const io = new Server(http);

io.on('connection', (socket: Socket) => {
  console.log('Connection ok', socket.id);
});

app.use(express.json());
app.use(routes);

export default http;
