import { Schema, model, Document } from "mongoose";

export interface ICategory {
  id: string;
  name: string;
}

export interface INote extends Document {
  title: string;
  content: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const NoteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: CategorySchema, required: true },
  },
  { timestamps: true }
);

export const Note = model<INote>("Note", NoteSchema);