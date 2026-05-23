/**
 * report.service.js
 *
 * Contains business logic for workflow reporting operations.
 * This service handles data retrieval and formatting for reports.
 */

const Workflow = require("../models/workflow.model");
const {
  formatWorkflowReport,
  formatReportSummary,
} = require("../utils/reportFormatter");

/**
 * Generates detailed workflow report by ID.
 *
 * @param {string} workflowId - Workflow MongoDB _id
 * @returns {Object|null} - Formatted report data or null if not found
 */
const generateWorkflowReport = async (workflowId) => {
  if (!workflowId) {
    throw new Error("Workflow ID is required");
  }

  const workflow = await Workflow.findById(workflowId)
    .populate("createdBy", "name email")
    .lean();

  if (!workflow || workflow.isArchived) {
    return null;
  }

  return formatWorkflowReport(workflow);
};

/**
 * Generates workflow report summary by ID.
 *
 * @param {string} workflowId - Workflow MongoDB _id
 * @returns {Object|null} - Formatted summary data or null if not found
 */
const generateReportSummary = async (workflowId) => {
  if (!workflowId) {
    throw new Error("Workflow ID is required");
  }

  const workflow = await Workflow.findById(workflowId).lean();

  if (!workflow || workflow.isArchived) {
    return null;
  }

  return formatReportSummary(workflow);
};

module.exports = {
  generateWorkflowReport,
  generateReportSummary,
};
