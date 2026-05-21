/**
 * analyticsFormatter.js
 *
 * Reusable utility to format raw database query results for the analytics endpoints.
 * This guarantees a consistent JSON payload structure for the client.
 */

/**
 * Formats a list of workflow documents for a lightweight summary view.
 *
 * @param {Array} workflows - Array of raw Mongoose workflow documents/objects
 * @returns {Array} - Array of formatted workflow summary objects
 */
const formatLatestWorkflows = (workflows) => {
  if (!Array.isArray(workflows)) return [];
  return workflows.map((workflow) => ({
    id:          workflow._id,
    title:       workflow.title,
    category:    workflow.category,
    views:       workflow.views || 0,
    likes:       workflow.likes || 0,
    createdAt:   workflow.createdAt,
  }));
};

/**
 * Formats overall analytics counters into a unified summary object.
 *
 * @param {number} totalWorkflows - Count of all active workflows
 * @param {number} totalReviews - Count of all reviews
 * @param {number} totalBookmarks - Count of all bookmarks
 * @returns {Object} - Formatted summary payload
 */
const formatSummaryStats = (totalWorkflows, totalReviews, totalBookmarks) => {
  return {
    totalWorkflows: totalWorkflows || 0,
    totalReviews:   totalReviews || 0,
    totalBookmarks: totalBookmarks || 0,
  };
};

module.exports = {
  formatLatestWorkflows,
  formatSummaryStats,
};
