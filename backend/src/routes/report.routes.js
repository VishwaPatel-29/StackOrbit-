const express = require("express");
const { getWorkflowReport, getReportSummary } = require("../controllers/report.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// GET /api/v1/reports/workflows/:id — Generate detailed workflow report (protected)
router.get("/workflows/:id", protect, getWorkflowReport);

// GET /api/v1/reports/workflows/:id/summary — Generate report summary (protected)
router.get("/workflows/:id/summary", protect, getReportSummary);

module.exports = router;
