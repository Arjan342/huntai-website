import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Helper function to simulate a website scan
export function simulateWebsiteScan(url: string) {
  const randomScore = Math.floor(Math.random() * 30) + 60; // Score between 60-90
  const hasCSP = Math.random() > 0.5;
  const hasXContentType = Math.random() > 0.7;
  const hasXFrame = Math.random() > 0.6;
  const hasHSTS = Math.random() > 0.5;
  const hasXSS = Math.random() > 0.7;
  
  // SSL Expiry between 30-365 days
  const sslExpiry = Math.floor(Math.random() * 335) + 30;
  
  // SSL grades based on score
  let sslGrade = 'C';
  if (randomScore > 85) sslGrade = 'A+';
  else if (randomScore > 80) sslGrade = 'A';
  else if (randomScore > 75) sslGrade = 'B+';
  else if (randomScore > 70) sslGrade = 'B';
  
  // Outdated libraries (may or may not have some)
  const libs = [];
  if (Math.random() > 0.3) {
    libs.push({
      name: 'jQuery',
      version: '1.11.3',
      latestVersion: '3.6.0',
      severity: 'high'
    });
  }
  if (Math.random() > 0.5) {
    libs.push({
      name: 'Bootstrap',
      version: '4.3.1',
      latestVersion: '5.2.3',
      severity: 'medium'
    });
  }
  if (Math.random() > 0.7) {
    libs.push({
      name: 'React',
      version: '16.8.0',
      latestVersion: '18.2.0',
      severity: 'low'
    });
  }
  
  // Recommendations based on findings
  const recommendations = [];
  if (!hasCSP) {
    recommendations.push('Implementeer een Content Security Policy (CSP)');
  }
  if (!hasHSTS) {
    recommendations.push('Configureer HTTP Strict Transport Security (HSTS)');
  }
  if (!hasXContentType) {
    recommendations.push('Voeg de X-Content-Type-Options header toe');
  }
  if (!hasXFrame) {
    recommendations.push('Voeg de X-Frame-Options header toe');
  }
  if (!hasXSS) {
    recommendations.push('Configureer X-XSS-Protection');
  }
  if (libs.length > 0) {
    recommendations.push('Update verouderde libraries naar de nieuwste versies');
  }
  if (sslExpiry < 60) {
    recommendations.push('Verleng uw SSL certificaat (verloopt binnen 60 dagen)');
  }
  
  return {
    url,
    scanDate: new Date().toISOString(),
    securityScore: randomScore,
    headers: {
      'Content-Security-Policy': hasCSP,
      'X-Content-Type-Options': hasXContentType,
      'X-Frame-Options': hasXFrame,
      'Strict-Transport-Security': hasHSTS,
      'X-XSS-Protection': hasXSS
    },
    ssl: {
      valid: true,
      grade: sslGrade,
      expiresIn: sslExpiry
    },
    outdatedLibraries: libs,
    recommendations
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Website scanner endpoint
  app.post('/api/scan-website', (req: Request, res: Response) => {
    try {
      const { url } = req.body;
      
      if (!url) {
        return res.status(400).json({ error: 'URL is vereist' });
      }
      
      // Validate URL format
      try {
        new URL(url);
      } catch (e) {
        return res.status(400).json({ error: 'Ongeldige URL' });
      }
      
      // Simulate scanning
      // In a real implementation, this would call your WebSecurityScanner API
      const scanResults = simulateWebsiteScan(url);
      
      // Add a small delay to simulate processing time
      setTimeout(() => {
        res.json(scanResults);
      }, 1500);
      
    } catch (error) {
      console.error('Error scanning website:', error);
      res.status(500).json({ error: 'Er is een fout opgetreden bij het scannen' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
