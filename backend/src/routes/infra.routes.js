/**
 * Infrastructure Routes
 *
 * Defines REST API endpoints for infrastructure guide operations.
 * All routes are protected with JWT authentication except GET endpoints.
 */

const express = require("express");
const {
  getAll,
  getById,
  getByCategory,
  getByPlatform,
  create,
  update,
  remove,
  archive,
  restore,
} = require("../controllers/infra.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// GET /api/v1/infra — Fetch all infrastructure guides (public)
router.get("/", getAll);

// GET /api/v1/infra/category/:category — Fetch guides by category (public)
router.get("/category/:category", getByCategory);

// GET /api/v1/infra/platform/:platform — Fetch guides by platform (public)
router.get("/platform/:platform", getByPlatform);

// GET /api/v1/infra/:id — Fetch a single guide by ID (public)
router.get("/:id", getById);

// POST /api/v1/infra — Create a new infrastructure guide (protected)
router.post("/", protect, create);

// PUT /api/v1/infra/:id — Update an infrastructure guide (protected)
router.put("/:id", protect, update);

// PATCH /api/v1/infra/:id/archive — Archive a guide (protected)
router.patch("/:id/archive", protect, archive);

// PATCH /api/v1/infra/:id/restore — Restore an archived guide (protected)
router.patch("/:id/restore", protect, restore);

// DELETE /api/v1/infra/:id — Delete a guide permanently (protected)
router.delete("/:id", protect, remove);

module.exports = router;
