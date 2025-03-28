const express = require('express');
const app = express();

app.use(express.json());

// Een eenvoudige endpoint om te bevestigen dat de API werkt
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'HuntAI API is online', timestamp: new Date().toISOString() });
});

// Fallback voor alle andere routes
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;