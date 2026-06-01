/**
 * Infrastructure Constants
 *
 * Centralizes all static values used across the infrastructure module.
 * Update here and it reflects everywhere — no magic strings in business logic.
 */

// Infrastructure categories
const INFRA_CATEGORIES = [
  "kubernetes",
  "docker",
  "helm",
  "terraform",
  "aws",
  "gcp",
  "azure",
  "pods",
  "services",
  "deployments",
  "ingress",
  "configmaps",
  "secrets",
  "volumes",
  "networking",
  "autoscaling",
  "security",
  "monitoring",
  "logging",
  "templates",
];

// Infrastructure difficulty levels
const INFRA_DIFFICULTY = ["beginner", "intermediate", "advanced"];

// Default field values
const INFRA_DEFAULTS = {
  VIEWS: 0,
  LIKES: 0,
  IS_ARCHIVED: false,
};

// Response messages for infrastructure operations
const INFRA_MESSAGES = {
  FETCHED_ALL: "Infrastructure guides fetched successfully",
  FETCHED: "Infrastructure guide fetched successfully",
  CREATED: "Infrastructure guide created successfully",
  UPDATED: "Infrastructure guide updated successfully",
  DELETED: "Infrastructure guide deleted successfully",
  BY_CATEGORY: "Infrastructure guides by category fetched successfully",
  BY_PLATFORM: "Infrastructure guides by platform fetched successfully",
  NOT_FOUND: "Infrastructure guide not found",
};

// Query limits
const QUERY_LIMITS = {
  LATEST: 10,
  POPULAR: 10,
  TRENDING: 10,
};

// Sort field whitelist
const ALLOWED_SORT_FIELDS = [
  "createdAt",
  "updatedAt",
  "views",
  "likes",
  "title",
  "category",
  "platform",
];

// Sort direction constants
const SORT_ORDER = {
  ASC: 1,
  DESC: -1,
};

module.exports = {
  INFRA_CATEGORIES,
  INFRA_DIFFICULTY,
  INFRA_DEFAULTS,
  INFRA_MESSAGES,
  QUERY_LIMITS,
  ALLOWED_SORT_FIELDS,
  SORT_ORDER,
};
