import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["festival", "sport", "service"],
      default: "festival",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
      default: "cultural",
    },
    date: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    venue: {
      type: String,
      trim: true,
    },
    teams: {
      type: String,
      trim: true,
    },
    result: {
      type: String,
      trim: true,
    },
    winner: {
      type: String,
      trim: true,
    },
    runnerUp: {
      type: String,
      trim: true,
    },
    manOfMatch: {
      type: String,
      trim: true,
    },
    highlights: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      trim: true,
    },
    participants: {
      type: String,
      trim: true,
    },
    tag: {
      type: String,
      trim: true,
    },
    badgeColor: {
      type: String,
      default: "bg-amber-400 text-stone-900",
    },
    image: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Program = mongoose.model("Program", programSchema);
