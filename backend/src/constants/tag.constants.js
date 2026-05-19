/**
 * tag.constants.js
 *
 * Centralizes all static values used by the tag module.
 * Keeping strings here avoids magic literals scattered across
 * controllers and services, and makes future updates a one-line change.
 */

// ─── Response messages ────────────────────────────────────────────────────────

const TAG_MESSAGES = {
  // Success
  CREATED: "Tag created successfully.",
  FETCHED: "Tags fetched successfully.",

  // Client errors
  NOT_FOUND:      "Tag not found.",
  ALREADY_EXISTS: "A tag with this name already exists.",
  NAME_REQUIRED:  "Tag name is required.",
};

// ─── Field constraints ────────────────────────────────────────────────────────

/**
 * Mongoose schema enforces these limits at the database level.
 * Exporting them here lets the frontend mirror the same rules
 * without duplicating the values.
 */
const TAG_LIMITS = {
  NAME_MAX_LENGTH:        50,  // characters
  DESCRIPTION_MAX_LENGTH: 200, // characters
};

module.exports = {
  TAG_MESSAGES,
  TAG_LIMITS,
};
