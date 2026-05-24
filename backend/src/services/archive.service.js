/**
 * archive.service.js
 *
 * Contains business logic for archive management operations.
 * This service handles archiving, restoring, and fetching archived workflows.
 */

const Archive = require("../models/archive.model");
const Workflow = require("../models/workflow.model");

/**
 * Archives a workflow by creating an archive record and marking workflow as archived.
 *
 * @param {string} workflowId - Workflow MongoDB _id
 * @param {string} userId - User MongoDB _id
 * @param {string} reason - Reason for archiving
 * @returns {Object} - Newly created archive document
 */
const archiveWorkflow = async (workflowId, userId, reason) => {
  if (!workflowId) {
    throw new Error("Workflow ID is required");
  }

  if (!userId) {
    throw new Error("User ID is required");
  }

  // Create archive record
  const archive = await Archive.create({
    workflowId,
    archivedBy: userId,
    reason,
  });

  // Mark workflow as archived
  await Workflow.findByIdAndUpdate(workflowId, {
    isArchived: true,
  });

  return archive;
};

/**
 * Restores an archived workflow by deleting the archive record and marking workflow as active.
 *
 * @param {string} workflowId - Workflow MongoDB _id
 * @returns {Object|null} - Deleted archive document or null if not found
 */
const restoreWorkflow = async (workflowId) => {
  if (!workflowId) {
    throw new Error("Workflow ID is required");
  }

  // Delete archive record
  const archive = await Archive.findOneAndDelete({ workflowId });

  if (!archive) {
    return null;
  }

  // Mark workflow as active
  await Workflow.findByIdAndUpdate(workflowId, {
    isArchived: false,
  });

  return archive;
};

/**
 * Fetches all archived workflows.
 *
 * @returns {Array} - Array of archive documents with populated workflow and user data
 */
const getArchivedWorkflows = async () => {
  const archives = await Archive.find()
    .populate("workflowId")
    .populate("archivedBy", "name email")
    .sort({ archivedAt: -1 }) // Most recently archived first
    .lean();

  return archives;
};

module.exports = {
  archiveWorkflow,
  restoreWorkflow,
  getArchivedWorkflows,
};
