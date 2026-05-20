/**
 * Category Constants
 *
 * Centralizes all static values used across the category module.
 * Update here and it reflects everywhere — no magic strings in business logic.
 */

// Response messages for category operations
const CATEGORY_MESSAGES = {
  CREATED: "Category created successfully",
  FETCHED_ALL: "Categories fetched successfully",
  NOT_FOUND: "Category not found",
};

// Default field values
const CATEGORY_DEFAULTS = {
  DESCRIPTION: "",
};

module.exports = {
  CATEGORY_MESSAGES,
  CATEGORY_DEFAULTS,
};
