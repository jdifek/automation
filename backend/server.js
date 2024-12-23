import express from "express";
import path from "path";
import apiRoutes from "./routes/apiRoutes.js";
import jsonMiddleware from "./middleware/jsonMiddleware.js";

const app = express();
const port = process.env.PORT || 5001;

const __dirname = path.resolve();

// Middleware to parse JSON
app.use(jsonMiddleware);

// Serve static files from the React app located in the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.use("/api", apiRoutes);

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Server is running on port ${port}`);
  console.log(`API endpoint is available at ${url}/api/get-answer`);
});
