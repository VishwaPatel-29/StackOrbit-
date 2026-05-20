const express = require("express");
const { getAll, create } = require("../controllers/category.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// GET /api/v1/categories — Fetch all categories (public)
router.get("/", getAll);

// POST /api/v1/categories — Create a new category (protected)
router.post("/", protect, create);

module.exports = router;
