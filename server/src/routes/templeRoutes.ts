import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { getCategories, getTempleBySlug, listTemples } from '../controllers/templeController';

export const templeRoutes = Router();

// /meta/categories must be registered before /:slug so it isn't swallowed as a slug param.
templeRoutes.get('/meta/categories', asyncHandler(getCategories));
templeRoutes.get('/', asyncHandler(listTemples));
templeRoutes.get('/:slug', asyncHandler(getTempleBySlug));
