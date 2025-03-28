import express, { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import { storage } from './storage';

// Azure Static Web Apps specifieke adapter
const app = express();

// API routes
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'HuntAI API is online', timestamp: new Date().toISOString() });
});

// Middleware configuratie
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'UNKNOWN_ERROR',
    },
  });
});

// Exporteer de Express app zodat deze als Azure Function kan worden gebruikt
export default app;