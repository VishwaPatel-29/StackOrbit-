const {
  getCommonIssues,
  getLogsInfo,
  checkConnectivity,
} = require("../services/debug.service");
const { sendResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const HTTP_STATUS = require("../constants/httpStatus");
const { DEBUG_MESSAGES } = require("../constants/debug.constants");

/**
 * GET /api/v1/debug/common-issues
 * Returns common backend issues and troubleshooting tips.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const getCommonIssuesHandler = asyncHandler(async (req, res) => {
  const issues = await getCommonIssues();
  sendResponse(res, HTTP_STATUS.OK, DEBUG_MESSAGES.COMMON_ISSUES_FETCHED, issues);
});

/**
 * GET /api/v1/debug/logs
 * Returns logs information (log levels, not actual server logs).
 */
const getLogsInfoHandler = asyncHandler(async (req, res) => {
  const logsInfo = await getLogsInfo();
  sendResponse(res, HTTP_STATUS.OK, DEBUG_MESSAGES.LOGS_INFO_FETCHED, logsInfo);
});

/**
 * GET /api/v1/debug/connectivity
 * Performs basic connectivity check for backend services.
 */
const checkConnectivityHandler = asyncHandler(async (req, res) => {
  const connectivity = await checkConnectivity();
  sendResponse(res, HTTP_STATUS.OK, DEBUG_MESSAGES.CONNECTIVITY_CHECK, connectivity);
});

module.exports = {
  getCommonIssuesHandler,
  getLogsInfoHandler,
  checkConnectivityHandler,
};
