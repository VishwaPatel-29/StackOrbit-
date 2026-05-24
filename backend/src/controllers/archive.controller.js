const {
  archiveWorkflow,
  restoreWorkflow,
  getArchivedWorkflows,
} = require("../services/archive.service");
const { sendResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const HTTP_STATUS = require("../constants/httpStatus");
const { ARCHIVE_MESSAGES } = require("../constants/archive.constants");

/**
 * POST /api/v1/archives/:workflowId
 * Archives a workflow.
 *
 * req.user is attached by the protect middleware before this runs.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const archive = asyncHandler(async (req, res) => {
  const { workflowId } = req.params;
  const { reason } = req.body;

  const archive = await archiveWorkflow(workflowId, req.user._id, reason);

  sendResponse(res, HTTP_STATUS.CREATED, ARCHIVE_MESSAGES.ARCHIVED, archive);
});

/**
 * PATCH /api/v1/archives/:workflowId/restore
 * Restores an archived workflow.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const restore = asyncHandler(async (req, res) => {
  const { workflowId } = req.params;

  const archive = await restoreWorkflow(workflowId);

  if (!archive) {
    return sendResponse(
      res,
      HTTP_STATUS.NOT_FOUND,
      ARCHIVE_MESSAGES.NOT_FOUND
    );
  }

  sendResponse(res, HTTP_STATUS.OK, ARCHIVE_MESSAGES.RESTORED, archive);
});

/**
 * GET /api/v1/archives
 * Fetches all archived workflows.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const getArchives = asyncHandler(async (req, res) => {
  const archives = await getArchivedWorkflows();

  if (!archives || archives.length === 0) {
    return sendResponse(
      res,
      HTTP_STATUS.NOT_FOUND,
      ARCHIVE_MESSAGES.NOT_FOUND
    );
  }

  sendResponse(res, HTTP_STATUS.OK, ARCHIVE_MESSAGES.FETCHED, archives);
});

module.exports = {
  archive,
  restore,
  getArchives,
};
