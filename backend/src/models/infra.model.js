/**
 * Infrastructure Model
 *
 * Defines the schema for infrastructure guides and templates.
 * Includes fields for category, platform, content, and metadata.
 */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const infraSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: [
          "kubernetes",
          "docker",
          "helm",
          "terraform",
          "aws",
          "gcp",
          "azure",
          "pods",
          "services",
          "deployments",
          "ingress",
          "configmaps",
          "secrets",
          "volumes",
          "networking",
          "autoscaling",
          "security",
          "monitoring",
          "logging",
          "templates",
        ],
        message: "Invalid category value",
      },
    },
    platform: {
      type: String,
      required: [true, "Platform is required"],
      enum: {
        values: ["kubernetes", "docker", "aws", "gcp", "azure", "terraform", "helm"],
        message: "Invalid platform value",
      },
    },
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: function (v) {
          return v.length <= 10;
        },
        message: "Cannot have more than 10 tags",
      },
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    difficulty: {
      type: String,
      required: [true, "Difficulty is required"],
      enum: {
        values: ["beginner", "intermediate", "advanced"],
        message: "Invalid difficulty value",
      },
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Creator is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
infraSchema.index({ category: 1, platform: 1 });
infraSchema.index({ createdAt: -1 });
infraSchema.index({ views: -1 });
infraSchema.index({ likes: -1 });

module.exports = mongoose.model("Infrastructure", infraSchema);
