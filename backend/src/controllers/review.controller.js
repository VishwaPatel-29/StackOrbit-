/**
 * review.controller.js
 *
 * Controller layer for review endpoints.
 * Handles HTTP concerns only — no Mongoose, no business logic.
 *
 * Each handler:
 *   1. Extracts what it needs from req (user id, route params, body).
 *   2. Delegates to the service layer.
 *   3. Sends a standardized API response.
 *   4. Lets asyncHandler forward any thrown errors to Express error middleware.
 *
 * Endpoints:
 *   POST   /api/v1/reviews/:workflowId  → addReview
 *   GET    /api/v1/reviews/:workflowId  → getWorkflowReviews
 *   PATCH  /api/v1/reviews/:reviewId    → updateReview
 *   DELETE /api/v1/reviews/:reviewId    → deleteReview
 */

const asyncHandler    = require("../utils/asyncHandler");
const { sendResponse } = require("../utils/apiResponse");
const reviewService   = require("../services/review.service");
const { REVIEW_MESSAGES } = require("../constants/review.constants");
const HTTP_STATUS     = require("../constants/httpStatus");

// ─── addReview ────────────────────────────────────────────────────────────────

/**
 * POST /api/v1/reviews/:workflowId
 *
 * Adds a review for the workflow specified by :workflowId.
 * Each user may only submit one review per workflow (409 if duplicate).
 * Returns 201 Created with the new review document on success.
 */
const addReview = asyncHandler(async (req, res) => {
  const userId     = req.user._id;
  const workflowId = req.params.workflowId;
  const { rating, review } = req.body;

  const { review: newReview } = await reviewService.addReview(
    userId,
    workflowId,
    rating,
    review
  );

  sendResponse(res, HTTP_STATUS.CREATED, REVIEW_MESSAGES.ADDED, { review: newReview });
});

// ─── getWorkflowReviews ───────────────────────────────────────────────────────

/**
 * GET /api/v1/reviews/:workflowId
 *
 * Returns a paginated list of reviews for the specified workflow.
 * Supports ?page=1&limit=10 query params.
 * Public — no authentication required.
 */
const getWorkflowReviews = asyncHandler(async (req, res) => {
  const workflowId = req.params.workflowId;

  const { reviews, pagination } = await reviewService.getWorkflowReviews(
    workflowId,
    req.query
  );

  sendResponse(res, HTTP_STATUS.OK, REVIEW_MESSAGES.FETCHED, {
    pagination,
    reviews,
  });
});

// ─── updateReview ─────────────────────────────────────────────────────────────

/**
 * PATCH /api/v1/reviews/:reviewId
 *
 * Updates the rating and/or text of an existing review.
 * Only the original author may update their own review (403 otherwise).
 */
const updateReview = asyncHandler(async (req, res) => {
  const userId   = req.user._id;
  const reviewId = req.params.reviewId;
  const { rating, review } = req.body;

  const { review: updatedReview } = await reviewService.updateReview(
    reviewId,
    userId,
    rating,
    review
  );

  sendResponse(res, HTTP_STATUS.OK, REVIEW_MESSAGES.UPDATED, { review: updatedReview });
});

// ─── deleteReview ─────────────────────────────────────────────────────────────

/**
 * DELETE /api/v1/reviews/:reviewId
 *
 * Permanently removes a review.
 * Only the original author may delete their own review (403 otherwise).
 */
const deleteReview = asyncHandler(async (req, res) => {
  const userId   = req.user._id;
  const reviewId = req.params.reviewId;

  await reviewService.deleteReview(reviewId, userId);

  sendResponse(res, HTTP_STATUS.OK, REVIEW_MESSAGES.DELETED);
});

module.exports = {
  addReview,
  getWorkflowReviews,
  updateReview,
  deleteReview,
};
