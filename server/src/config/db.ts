import mongoose from 'mongoose';
import { env } from './env';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let memoryServer: any = null;

async function resolveMongoUri(): Promise<string> {
  if (!env.useMemoryMongo) return env.mongoUri;

  // Loaded dynamically because it's a devDependency — production deployments (USE_MEMORY_MONGO=false)
  // should never need this package installed.
  const { MongoMemoryServer } = await import('mongodb-memory-server');
  memoryServer = await MongoMemoryServer.create();
  console.log('Started in-memory MongoDB for development/testing');
  return memoryServer.getUri('sanctum-india');
}

export async function connectDB(): Promise<typeof mongoose> {
  mongoose.set('strictQuery', true);
  const uri = await resolveMongoUri();
  return mongoose.connect(uri);
}

export async function disconnectDB(): Promise<void> {
  await mongoose.disconnect();
  if (memoryServer) {
    await memoryServer.stop();
    memoryServer = null;
  }
}
