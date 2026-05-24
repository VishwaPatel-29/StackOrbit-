const express = require("express");
const { archive, restore, getArchives } = require("../controllers/archive.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// POST /api/v1/archives/:workflowId — Archive a workflow (protected)
router.post("/:workflowId", protect, archive);

// PATCH /api/v1/archives/:workflowId/restore — Restore an archived workflow (protected)
router.patch("/:workflowId/restore", protect, restore);

// GET /api/v1/archives — Fetch all archived workflows (protected)
router.get("/", protect, getArchives);

module.exports = router;
