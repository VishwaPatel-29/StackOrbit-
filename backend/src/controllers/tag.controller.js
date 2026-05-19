/**
 * tag.controller.js
 *
 * Controller layer for tag endpoints.
 * Handles HTTP concerns only — no Mongoose, no business logic.
 *
 * Each handler:
 *   1. Extracts what it needs from req (body, params, query).
 *   2. Delegates to the service layer.
 *   3. Sends a standardized API response.
 *   4. Lets asyncHandler forward any thrown errors to Express error middleware.
 *
 * Endpoints:
 *   POST  /api/v1/tags  → createTag
 *   GET   /api/v1/tags  → getAllTags
 */

const asyncHandler      = require("../utils/asyncHandler");
const { sendResponse }  = require("../utils/apiResponse");
const tagService        = require("../services/tag.service");
const { TAG_MESSAGES }  = require("../constants/tag.constants");
const HTTP_STATUS       = require("../constants/httpStatus");

// ─── createTag ────────────────────────────────────────────────────────────────

/**
 * POST /api/v1/tags
 *
 * Creates a new tag from the request body.
 * Returns 201 Created with the new tag document on success.
 * Returns 409 Conflict if a tag with the same name already exists.
 */
const createTag = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const { tag } = await tagService.createTag({ name, description });

  sendResponse(res, HTTP_STATUS.CREATED, TAG_MESSAGES.CREATED, { tag });
});

// ─── getAllTags ───────────────────────────────────────────────────────────────

/**
 * GET /api/v1/tags
 *
 * Returns all tags sorted alphabetically.
 * Public — no authentication required.
 */
const getAllTags = asyncHandler(async (req, res) => {
  const { tags, total } = await tagService.getAllTags();

  sendResponse(res, HTTP_STATUS.OK, TAG_MESSAGES.FETCHED, { total, tags });
});

module.exports = {
  createTag,
  getAllTags,
};
