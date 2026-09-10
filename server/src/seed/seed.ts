import { connectDB, disconnectDB } from '../config/db';
import { seedDatabase } from './seedDatabase';

async function main(): Promise<void> {
  await connectDB();
  await seedDatabase();
  await disconnectDB();
  process.exit(0);
}

main().catch((err) => {
  console.error('Seed failed', err);
  process.exit(1);
});
