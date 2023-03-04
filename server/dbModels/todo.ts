import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    todo: { type: String },
    urgency: { type: String },
  },
  { timestamps: true, strict: true, strictQuery: true }
);

export default mongoose.model("Todo", todoSchema, "todo");
