import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://ecommerce-project-ten-henna.vercel.app', // Replace with your frontend origin
  credentials: true,
}));

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another example route


// Additional headers
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
  });
// Export the app (no need to start the server here)
export default app;
