import mongoose from "mongoose";
const { Schema, model } = mongoose;

const academicSchema = new Schema({
  student: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  teacher: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Academic = model("Academic", academicSchema);
