import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express } from 'express';
import { env } from './config/env';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { templeRoutes } from './routes/templeRoutes';

export function createApp(): Express {
  const app = express();

  app.use(cors({ origin: env.clientOrigins, credentials: true }));
  app.use(express.json());
  app.use(cookieParser());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/api/temples', templeRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
