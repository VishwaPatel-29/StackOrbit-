const mongoose = require("mongoose");

/**
 * Category Schema
 *
 * Represents a workflow category in the database.
 * Categories help organize and classify workflows.
 */
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
