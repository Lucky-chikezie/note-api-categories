import { Request, Response, NextFunction } from "express";

// Logging middleware
export const loggingMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Validation middleware
export function validateBody<T>(requiredFields: (keyof T)[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    for (const field of requiredFields) {
      if (!req.body[field]) {
        res.status(400).json({ error: `Missing field: ${String(field)}` });
        return;
      }
    }
    next();
  };
}