import { Request, Response } from 'express';
import { z } from 'zod';
import { ApiError } from '../utils/ApiError';
import { Temple } from '../models/Temple';

const listQuerySchema = z.object({
  type: z.enum(['jyotirlinga', 'shakti-peetha']).optional(),
  state: z.string().optional(),
  deity: z.string().optional(),
});

const listProjection = 'slug name type badgeLabel state city deity order gallery';

export async function listTemples(req: Request, res: Response): Promise<void> {
  const filters = listQuerySchema.parse(req.query);
  const query: Record<string, unknown> = {};
  if (filters.type) query.type = filters.type;
  if (filters.state) query.state = filters.state;
  if (filters.deity) query.deity = filters.deity;

  const temples = await Temple.find(query, listProjection).sort({ order: 1, name: 1 }).lean();
  res.json(temples);
}

export async function getTempleBySlug(req: Request, res: Response): Promise<void> {
  const temple = await Temple.findOne({ slug: req.params.slug }).lean();
  if (!temple) {
    throw new ApiError(404, `No temple found for slug "${req.params.slug}"`);
  }
  res.json(temple);
}

const categoriesQuerySchema = z.object({
  type: z.enum(['jyotirlinga', 'shakti-peetha']).optional(),
});

export async function getCategories(req: Request, res: Response): Promise<void> {
  const { type } = categoriesQuerySchema.parse(req.query);
  const filter = type ? { type } : {};

  const [states, deities, types] = await Promise.all([
    Temple.distinct('state', filter),
    Temple.distinct('deity', filter),
    Temple.distinct('type'),
  ]);
  res.json({
    states: states.sort(),
    deities: deities.sort(),
    types: types.sort(),
  });
}
