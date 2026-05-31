import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import noteRoutes from "./routes/notes";
import { AppError } from "./errors/AppError";
import { loggingMiddleware } from "./middleware";

dotenv.config();

const app = express();
app.use(express.json());
app.use(loggingMiddleware);

app.use("/api/notes", noteRoutes);

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI as string;

mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});