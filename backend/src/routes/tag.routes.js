/**
 * tag.routes.js
 *
 * Defines the REST endpoints for the tag module.
 * Mounted at /api/v1/tags in index.routes.js.
 *
 * Routes:
 *   GET  /api/v1/tags  — Fetch all tags (public)
 *   POST /api/v1/tags  — Create a new tag (protected)
 */

const express    = require("express");
const { getAllTags, createTag } = require("../controllers/tag.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// GET /api/v1/tags — Returns all tags sorted alphabetically (public)
router.get("/", getAllTags);

// POST /api/v1/tags — Creates a new tag (requires authentication)
router.post("/", protect, createTag);

module.exports = router;
