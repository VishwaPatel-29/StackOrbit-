/**
 * Archive Constants
 *
 * Centralizes all static values used across the archive module.
 * Update here and it reflects everywhere — no magic strings in business logic.
 */

// Response messages for archive operations
const ARCHIVE_MESSAGES = {
  ARCHIVED: "Workflow archived successfully",
  RESTORED: "Workflow restored successfully",
  FETCHED: "Archived workflows fetched successfully",
  NOT_FOUND: "Archive record not found",
  ALREADY_ARCHIVED: "Workflow already archived",
};

// Default archive settings
const ARCHIVE_DEFAULTS = {
  REASON: "Manual archive",
};

module.exports = {
  ARCHIVE_MESSAGES,
  ARCHIVE_DEFAULTS,
};
