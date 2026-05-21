const express = require("express");
const {
  getCommonIssuesHandler,
  getLogsInfoHandler,
  checkConnectivityHandler,
} = require("../controllers/debug.controller");

const router = express.Router();

// GET /api/v1/debug/common-issues — Fetch common backend issues (public)
router.get("/common-issues", getCommonIssuesHandler);

// GET /api/v1/debug/logs — Fetch logs information (public)
router.get("/logs", getLogsInfoHandler);

// GET /api/v1/debug/connectivity — Check backend connectivity (public)
router.get("/connectivity", checkConnectivityHandler);

module.exports = router;
