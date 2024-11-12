// models/feedback.js

import mongoose from "mongoose";

// Define the feedback schema
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  feedbackType: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  suggestions: {
    type: String
  },
  createdAt: {
    timestamps: true,
  }
});

// Create a Feedback model from the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Export the model to be used in other files
module.exports = Feedback;
