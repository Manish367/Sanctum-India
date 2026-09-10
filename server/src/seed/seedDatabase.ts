import { Temple } from '../models/Temple';
import { temples } from './data/temples';

export async function seedDatabase(): Promise<void> {
  for (const temple of temples) {
    await Temple.updateOne({ slug: temple.slug }, { $set: temple }, { upsert: true });
  }
  console.log(`Seeded ${temples.length} temples`);
}
