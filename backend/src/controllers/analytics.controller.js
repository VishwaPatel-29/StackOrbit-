/**
 * analytics.controller.js
 *
 * Controller layer for the analytics module.
 * Receives Express requests, calls services, formats payloads, and sends responses.
 */

const asyncHandler = require("../utils/asyncHandler");
const { sendResponse } = require("../utils/apiResponse");
const analyticsService = require("../services/analytics.service");
const { formatSummaryStats, formatLatestWorkflows } = require("../utils/analyticsFormatter");
const { ANALYTICS_MESSAGES, ANALYTICS_DEFAULTS } = require("../constants/analytics.constants");
const HTTP_STATUS = require("../constants/httpStatus");

/**
 * GET /api/v1/analytics/summary
 *
 * Returns overall counts of active workflows, reviews, and bookmarks.
 * Public endpoint.
 */
const getSummary = asyncHandler(async (req, res) => {
  const { totalWorkflows, totalReviews, totalBookmarks } = await analyticsService.getSummaryStats();

  const formattedStats = formatSummaryStats(totalWorkflows, totalReviews, totalBookmarks);

  return sendResponse(res, HTTP_STATUS.OK, ANALYTICS_MESSAGES.SUMMARY_FETCHED, formattedStats);
});

/**
 * GET /api/v1/analytics/latest
 *
 * Returns a list of the most recently created workflows.
 * Supports optional `limit` query parameter (default: 5).
 */
const getLatest = asyncHandler(async (req, res) => {
  // Parse and clamp optional limit query parameter
  let limit = parseInt(req.query.limit);
  if (isNaN(limit) || limit <= 0) {
    limit = ANALYTICS_DEFAULTS.LATEST_LIMIT;
  }

  const workflows = await analyticsService.getLatestWorkflows(limit);
  const formattedWorkflows = formatLatestWorkflows(workflows);

  return sendResponse(res, HTTP_STATUS.OK, ANALYTICS_MESSAGES.LATEST_FETCHED, formattedWorkflows);
});

module.exports = {
  getSummary,
  getLatest,
};
