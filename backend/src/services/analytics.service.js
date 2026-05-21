/**
 * analytics.service.js
 *
 * Service layer for the analytics module.
 * Handles database operations to fetch workflow statistics and latest uploads.
 */

const Workflow = require("../models/workflow.model");
const Review   = require("../models/review.model");
const Bookmark = require("../models/bookmark.model");

/**
 * Fetches overall workflow database statistics in parallel.
 *
 * @returns {Promise<{totalWorkflows: number, totalReviews: number, totalBookmarks: number}>}
 */
const getSummaryStats = async () => {
  // Query all counts concurrently to prevent blocking and optimize database response times
  const [totalWorkflows, totalReviews, totalBookmarks] = await Promise.all([
    Workflow.countDocuments({ isArchived: false }),
    Review.countDocuments(),
    Bookmark.countDocuments(),
  ]);

  return {
    totalWorkflows,
    totalReviews,
    totalBookmarks,
  };
};

/**
 * Fetches the most recently created active workflows.
 *
 * @param {number} limit - Maximum number of workflows to fetch
 * @returns {Promise<Array>} - List of raw workflow documents
 */
const getLatestWorkflows = async (limit) => {
  return await Workflow.find({ isArchived: false })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
};

module.exports = {
  getSummaryStats,
  getLatestWorkflows,
};
