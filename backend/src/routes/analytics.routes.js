/**
 * analytics.routes.js
 *
 * Defines the REST API endpoints for the basic workflow analytics module.
 *
 * Routes:
 *   GET /api/v1/analytics/summary - Get counts of workflows, reviews, bookmarks (public)
 *   GET /api/v1/analytics/latest  - Get latest created workflows (public)
 */

const express = require("express");
const { getSummary, getLatest } = require("../controllers/analytics.controller");

const router = express.Router();

// GET /api/v1/analytics/summary — Returns general counts
router.get("/summary", getSummary);

// GET /api/v1/analytics/latest — Returns latest workflow summaries
router.get("/latest", getLatest);

module.exports = router;
