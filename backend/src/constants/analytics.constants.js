/**
 * analytics.constants.js
 *
 * Centralizes all response messages and default configuration values
 * for the analytics module.
 */

// ─── Response messages ────────────────────────────────────────────────────────

const ANALYTICS_MESSAGES = {
  // Success
  SUMMARY_FETCHED: "Analytics summary fetched successfully.",
  LATEST_FETCHED:  "Latest workflows summary fetched successfully.",

  // Client errors
  INVALID_LIMIT:   "Limit parameter must be a positive integer.",
};

// ─── Default limits ───────────────────────────────────────────────────────────

const ANALYTICS_DEFAULTS = {
  LATEST_LIMIT: 5,
};

module.exports = {
  ANALYTICS_MESSAGES,
  ANALYTICS_DEFAULTS,
};
