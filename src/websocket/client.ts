import { io } from '../app';

io.on('connect', (socket) => {
  socket.on('client_first_access', (params) => {
    console.log(params);
  });
});
