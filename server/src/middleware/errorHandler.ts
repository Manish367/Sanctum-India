import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';

export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }
  if (err instanceof Error && err.name === 'ZodError') {
    res.status(400).json({ message: 'Validation failed', details: err.message });
    return;
  }
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
}
