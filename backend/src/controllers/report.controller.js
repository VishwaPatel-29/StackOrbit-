const {
  generateWorkflowReport,
  generateReportSummary,
} = require("../services/report.service");
const { sendResponse } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const HTTP_STATUS = require("../constants/httpStatus");
const { REPORT_MESSAGES } = require("../constants/report.constants");

/**
 * GET /api/v1/reports/workflows/:id
 * Generates detailed workflow report by ID.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const getWorkflowReport = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const report = await generateWorkflowReport(id);

  if (!report) {
    return sendResponse(
      res,
      HTTP_STATUS.NOT_FOUND,
      REPORT_MESSAGES.WORKFLOW_NOT_FOUND
    );
  }

  sendResponse(res, HTTP_STATUS.OK, REPORT_MESSAGES.REPORT_GENERATED, report);
});

/**
 * GET /api/v1/reports/workflows/:id/summary
 * Generates workflow report summary by ID.
 *
 * asyncHandler wraps the function so we don't need try/catch here.
 * Any thrown error is automatically passed to the global error middleware.
 */
const getReportSummary = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const summary = await generateReportSummary(id);

  if (!summary) {
    return sendResponse(
      res,
      HTTP_STATUS.NOT_FOUND,
      REPORT_MESSAGES.WORKFLOW_NOT_FOUND
    );
  }

  sendResponse(res, HTTP_STATUS.OK, REPORT_MESSAGES.SUMMARY_GENERATED, summary);
});

module.exports = {
  getWorkflowReport,
  getReportSummary,
};
