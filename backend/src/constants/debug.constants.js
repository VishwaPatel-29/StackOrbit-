/**
 * Debug Constants
 *
 * Centralizes all static values used across the debug module.
 * Update here and it reflects everywhere — no magic strings in business logic.
 */

// Response messages for debug operations
const DEBUG_MESSAGES = {
  COMMON_ISSUES_FETCHED: "Common issues fetched successfully",
  LOGS_INFO_FETCHED: "Logs information fetched successfully",
  CONNECTIVITY_CHECK: "Connectivity check completed",
};

// Common issues that developers might face
const COMMON_ISSUES = {
  DATABASE_CONNECTION: "Database connection failed - Check MongoDB URI and credentials",
  AUTH_TOKEN_MISSING: "Authorization token missing or invalid - Ensure proper login",
  INVALID_REQUEST_BODY: "Invalid request body - Check required fields and data types",
  RATE_LIMIT_EXCEEDED: "Too many requests - Wait before retrying",
  SERVER_ERROR: "Internal server error - Check server logs for details",
};

// Log levels for information
const LOG_LEVELS = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  DEBUG: "debug",
};

module.exports = {
  DEBUG_MESSAGES,
  COMMON_ISSUES,
  LOG_LEVELS,
};
