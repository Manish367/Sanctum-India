import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export const env = {
  port: Number(process.env.PORT ?? 4100),
  mongoUri: process.env.MONGO_URI ?? 'mongodb://localhost:27017/sanctum-india',
  // Zero-setup dev experience: spin up an in-process MongoDB via mongodb-memory-server unless a
  // real Mongo instance is explicitly configured. Set USE_MEMORY_MONGO=false once you have Docker
  // or a native Mongo instance running (see docker-compose.yml) to persist data across restarts.
  useMemoryMongo: process.env.USE_MEMORY_MONGO !== 'false',
  // Allowed CORS origin(s) for the browser client. Accepts a comma-separated list so a single
  // deployment can permit both localhost and the production frontend URL.
  clientOrigins: (process.env.CLIENT_ORIGIN ?? 'http://localhost:5190')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean),
};
