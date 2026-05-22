const express = require("express");
const { getAll, create, deleteBackupHandler } = require("../controllers/backup.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// GET /api/v1/backups — Fetch all backups (protected)
router.get("/", protect, getAll);

// POST /api/v1/backups — Create a new backup (protected)
router.post("/", protect, create);

// DELETE /api/v1/backups/:id — Delete a backup by ID (protected)
router.delete("/:id", protect, deleteBackupHandler);

module.exports = router;
