const {
  getAllBackups,
  createBackup,
  deleteBackup,
} = require("../services/backup.service");
const { sendResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const HTTP_STATUS = require("../constants/httpStatus");
const { BACKUP_MESSAGES } = require("../constants/backup.constants");

/**
 * GET /api/v1/backups
 * Returns all backups.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const getAll = asyncHandler(async (req, res) => {
  const backups = await getAllBackups();
  sendResponse(res, HTTP_STATUS.OK, BACKUP_MESSAGES.LIST_FETCHED, backups);
});

/**
 * POST /api/v1/backups
 * Creates a new backup record.
 *
 * TODO (future PR): Add request body validation before calling service
 */
const create = asyncHandler(async (req, res) => {
  const backup = await createBackup(req.body);
  sendResponse(res, HTTP_STATUS.CREATED, BACKUP_MESSAGES.CREATED, backup);
});

/**
 * DELETE /api/v1/backups/:id
 * Deletes a backup by ID.
 */
const deleteBackupHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBackup(id);
  sendResponse(res, HTTP_STATUS.OK, BACKUP_MESSAGES.DELETED, result);
});

module.exports = { getAll, create, deleteBackupHandler };
