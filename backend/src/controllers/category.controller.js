const {
  getAllCategories,
  createCategory,
} = require("../services/category.service");
const { sendResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const HTTP_STATUS = require("../constants/httpStatus");
const { CATEGORY_MESSAGES } = require("../constants/category.constants");

/**
 * GET /api/v1/categories
 * Returns all categories sorted by name.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const getAll = asyncHandler(async (req, res) => {
  const categories = await getAllCategories();
  sendResponse(res, HTTP_STATUS.OK, CATEGORY_MESSAGES.FETCHED_ALL, categories);
});

/**
 * POST /api/v1/categories
 * Creates a new category.
 *
 * TODO (future PR): Add request body validation before calling service
 */
const create = asyncHandler(async (req, res) => {
  const category = await createCategory(req.body);
  sendResponse(res, HTTP_STATUS.CREATED, CATEGORY_MESSAGES.CREATED, category);
});

module.exports = { getAll, create };
