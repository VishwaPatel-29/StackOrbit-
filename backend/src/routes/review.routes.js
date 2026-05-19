/**
 * review.routes.js
 *
 * Defines all routes for the review feature.
 *
 * Base path (mounted at /api/v1/reviews in index.routes.js):
 *
 *   POST   /api/v1/reviews/:workflowId  — add a review to a workflow     [protected]
 *   GET    /api/v1/reviews/:workflowId  — list reviews for a workflow     [public]
 *   PATCH  /api/v1/reviews/:reviewId    — update a review (owner only)    [protected]
 *   DELETE /api/v1/reviews/:reviewId    — delete a review (owner only)    [protected]
 *
 * Route parameter naming:
 *   :workflowId — used on workflow-scoped routes so the purpose is clear.
 *   :reviewId   — used on review-specific routes to avoid ambiguity.
 *   Both are ObjectId strings resolved by the service layer.
 */

const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const {
  addReview,
  getWorkflowReviews,
  updateReview,
  deleteReview,
} = require("../controllers/review.controller");

const router = express.Router();

// ─── Workflow-scoped review routes ────────────────────────────────────────────

// POST   /api/v1/reviews/:workflowId — create a review (auth required)
router.post("/:workflowId", protect, addReview);

// GET    /api/v1/reviews/:workflowId — read reviews (public)
router.get("/:workflowId", getWorkflowReviews);

// ─── Review-specific routes ───────────────────────────────────────────────────

// PATCH  /api/v1/reviews/:reviewId — edit a review (owner only)
router.patch("/:reviewId", protect, updateReview);

// DELETE /api/v1/reviews/:reviewId — delete a review (owner only)
router.delete("/:reviewId", protect, deleteReview);

module.exports = router;
