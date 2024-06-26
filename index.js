import express from "express"
import cors from "cors"
const app = express();
const port = 3000;

// Root route
// app.use(cookieParser());
app.use(express.json());
app.use(cors({  
    origin:'', // Replace with your frontend origin
    credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another example route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
