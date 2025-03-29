import express, { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import { storage } from './storage';
import { simulateWebsiteScan } from './routes';

// Azure Static Web Apps specifieke adapter
const app = express();

// Middleware configuratie
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'HuntAI API is online', timestamp: new Date().toISOString() });
});

// Website scan API endpoint
app.post('/api/scan-website', (req: Request, res: Response) => {
  const { url } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is vereist' });
  }
  
  try {
    const scanResults = simulateWebsiteScan(url);
    res.json(scanResults);
  } catch (error) {
    console.error('Error tijdens website scan:', error);
    res.status(500).json({ 
      error: 'Er is een fout opgetreden bij het scannen van de website',
      message: error instanceof Error ? error.message : 'Onbekende fout'
    });
  }
});

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