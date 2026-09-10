import { createApp } from './app';
import { connectDB } from './config/db';
import { env } from './config/env';
import { Temple } from './models/Temple';
import { seedDatabase } from './seed/seedDatabase';

async function main(): Promise<void> {
  await connectDB();
  console.log('Connected to MongoDB');

  // Auto-seed whenever the database is empty — covers both the in-memory dev DB and a fresh
  // local MongoDB. The empty-count guard keeps this a no-op once content exists (e.g. prod).
  const templeCount = await Temple.countDocuments();
  if (templeCount === 0) {
    console.log('Database is empty — auto-seeding temple content');
    await seedDatabase();
  }

  const app = createApp();
  app.listen(env.port, () => {
    console.log(`Sanctum India server listening on port ${env.port}`);
  });
}

main().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});
