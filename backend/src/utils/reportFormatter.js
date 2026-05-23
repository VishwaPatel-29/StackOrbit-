/**
 * reportFormatter utility
 *
 * Provides reusable functions to format workflow data for reporting.
 * Ensures consistent report structure across the report module.
 */

/**
 * Formats detailed workflow report.
 *
 * @param {Object} workflow - Workflow document from database
 * @returns {Object} - Formatted report data
 */
const formatWorkflowReport = (workflow) => {
  if (!workflow) {
    return null;
  }

  const daysSinceCreation = Math.floor(
    (new Date() - new Date(workflow.createdAt)) / (1000 * 60 * 60 * 24)
  );

  return {
    workflow: {
      id: workflow._id,
      title: workflow.title,
      description: workflow.description,
      category: workflow.category,
      tags: workflow.tags,
    },
    engagement: {
      views: workflow.views || 0,
      likes: workflow.likes || 0,
      averageViewsPerDay: daysSinceCreation > 0 
        ? (workflow.views / daysSinceCreation).toFixed(2) 
        : workflow.views,
    },
    metadata: {
      createdAt: workflow.createdAt,
      updatedAt: workflow.updatedAt,
      daysSinceCreation,
    },
    creator: workflow.createdBy
      ? {
          id: workflow.createdBy._id,
          name: workflow.createdBy.name,
          email: workflow.createdBy.email,
        }
      : null,
  };
};

/**
 * Formats workflow report summary.
 *
 * @param {Object} workflow - Workflow document from database
 * @returns {Object} - Formatted summary data
 */
const formatReportSummary = (workflow) => {
  if (!workflow) {
    return null;
  }

  return {
    workflowId: workflow._id,
    title: workflow.title,
    category: workflow.category,
    engagement: {
      views: workflow.views || 0,
      likes: workflow.likes || 0,
    },
    status: workflow.isArchived ? "archived" : "active",
    lastUpdated: workflow.updatedAt,
  };
};

module.exports = {
  formatWorkflowReport,
  formatReportSummary,
};
