import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';

const app = express();

const __dirname = path.resolve();

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running and api is good' });
});
 
app.get('/arth', (req, res) => {
  res.status(200).json({ message: 'arth is running and api is good' });
});


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log("Server is listening on port :", ENV.PORT);
} );