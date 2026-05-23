/**
 * Report Constants
 *
 * Centralizes all static values used across the report module.
 * Update here and it reflects everywhere — no magic strings in business logic.
 */

// Response messages for report operations
const REPORT_MESSAGES = {
  REPORT_GENERATED: "Workflow report generated successfully",
  SUMMARY_GENERATED: "Report summary generated successfully",
  WORKFLOW_NOT_FOUND: "Workflow not found",
  REPORT_FAILED: "Report generation failed",
};

// Report types
const REPORT_TYPES = {
  DETAILED: "detailed",
  SUMMARY: "summary",
};

// Default report settings
const REPORT_DEFAULTS = {
  INCLUDE_ENGAGEMENT: true,
  INCLUDE_METADATA: true,
};

module.exports = {
  REPORT_MESSAGES,
  REPORT_TYPES,
  REPORT_DEFAULTS,
};
