import express from 'express';
import path from 'path';
import { httpServer } from './app';

const PORT = process.env.PORT || 3001;

const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, '../build')));

// Route all requests to the index.html file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
