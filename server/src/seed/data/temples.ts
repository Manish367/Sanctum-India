import type { TempleSeed, TempleSeedInput } from './types';
import { normalizeTemple } from './types';
import { jyotirlingas } from './jyotirlingas';
import { shaktiPeethas } from './shaktiPeethas';
import { shaktiPeethasBatch2 } from './shaktiPeethasBatch2';
import { templeImages } from './images';
import { deityImages } from './deityImages';

const allTemples: TempleSeedInput[] = [...jyotirlingas, ...shaktiPeethas, ...shaktiPeethasBatch2];

export const temples: TempleSeed[] = allTemples.map((temple) => ({
  ...normalizeTemple(temple),
  gallery: templeImages[temple.slug] ?? temple.gallery,
  deityImages: deityImages[temple.slug] ?? [],
}));
