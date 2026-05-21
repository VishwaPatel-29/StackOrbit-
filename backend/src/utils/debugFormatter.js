/**
 * Debug Formatter Utility
 *
 * Provides reusable functions to format debug and troubleshooting responses.
 * Ensures consistent output structure across debug endpoints.
 */

/**
 * Formats common issues response with helpful suggestions.
 *
 * @param {Object} issues - Common issues object
 * @returns {Object} - Formatted response with issues and metadata
 */
const formatCommonIssues = (issues) => {
  return {
    issues,
    count: Object.keys(issues).length,
    timestamp: new Date().toISOString(),
    suggestion: "Review these common issues when troubleshooting backend problems",
  };
};

/**
 * Formats logs information response with available log levels.
 *
 * @param {Object} logLevels - Log levels object
 * @returns {Object} - Formatted response with log information
 */
const formatLogsInfo = (logLevels) => {
  return {
    availableLevels: logLevels,
    note: "This endpoint provides log level information - not actual server logs",
    timestamp: new Date().toISOString(),
  };
};

/**
 * Formats connectivity check response with system status.
 *
 * @param {Object} status - Connectivity status object
 * @returns {Object} - Formatted response with connectivity details
 */
const formatConnectivity = (status) => {
  return {
    status,
    timestamp: new Date().toISOString(),
    message: "Basic connectivity check completed successfully",
  };
};

module.exports = {
  formatCommonIssues,
  formatLogsInfo,
  formatConnectivity,
};
