/**
 * review.constants.js
 *
 * Centralizes all static values used by the review module.
 * Keeping strings here prevents magic literals scattered across
 * controllers and services, and makes future updates a one-line change.
 */

// ─── Response messages ────────────────────────────────────────────────────────

const REVIEW_MESSAGES = {
  // Success
  ADDED:   "Review added successfully.",
  FETCHED: "Reviews fetched successfully.",
  UPDATED: "Review updated successfully.",
  DELETED: "Review deleted successfully.",

  // Client errors
  NOT_FOUND:          "Review not found.",
  WORKFLOW_NOT_FOUND: "Workflow not found.",
  UNAUTHORIZED:       "You are not authorized to modify this review.",
  ALREADY_REVIEWED:   "You have already reviewed this workflow.",
  REVIEW_REQUIRED:    "Review text cannot be empty.",
  RATING_REQUIRED:    "A rating between 1 and 5 is required.",
};

// ─── Rating constraints ───────────────────────────────────────────────────────

/**
 * Mongoose's min/max enforce these at the schema level.
 * Exported so the frontend can mirror the same limits without duplicating them.
 */
const REVIEW_RATING = {
  MIN: 1,
  MAX: 5,
};

// ─── Review text constraints ──────────────────────────────────────────────────

const REVIEW_CONTENT = {
  MAX_LENGTH: 1000, // characters
};

// ─── Pagination defaults ──────────────────────────────────────────────────────

const REVIEW_PAGINATION = {
  DEFAULT_LIMIT: 10,
  MAX_LIMIT:     50,
};

module.exports = {
  REVIEW_MESSAGES,
  REVIEW_RATING,
  REVIEW_CONTENT,
  REVIEW_PAGINATION,
};
