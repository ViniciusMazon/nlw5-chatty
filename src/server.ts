import { load } from 'ts-dotenv';
import app from './app';

const env = load({
  PORT: Number,
});

app.listen(env.PORT || 3333, () =>
  console.log(`⚡️ Server is running on port ${env.PORT || 3333}`)
);
