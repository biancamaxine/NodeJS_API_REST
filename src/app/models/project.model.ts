import mongoose from 'mongoose';

export const Project = mongoose.model(
  'Project',
  new mongoose.Schema({
    title: String,
    description: String,
    created_at: Number,
  }),
);
