 import { Router, Request, Response, NextFunction } from "express";
import { Note } from "../models/Note";
import { NotFoundError } from "../errors/AppError";

const router = Router();

// GET /api/notes
router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    next(err);
  }
});

// GET /api/notes/:id
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) throw new NotFoundError();
    res.json(note);
  } catch (err) {
    next(err);
  }
});

// POST /api/notes
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/notes/:id
router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) throw new NotFoundError();
    res.json({ message: "Note deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
