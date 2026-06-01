/**
 * Infrastructure Configuration
 *
 * Centralizes configuration settings for the infrastructure module.
 * Update here and it reflects everywhere — no magic numbers in business logic.
 */

const INFRA_CONFIG = {
  // Pagination settings
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 50,
  },

  // Search settings
  SEARCH: {
    MIN_QUERY_LENGTH: 2,
    MAX_RESULTS: 20,
  },

  // Cache settings (in seconds)
  CACHE: {
    TTL: 300, // 5 minutes
  },

  // Validation settings
  VALIDATION: {
    TITLE_MIN_LENGTH: 3,
    TITLE_MAX_LENGTH: 100,
    DESCRIPTION_MAX_LENGTH: 1000,
    TAGS_MAX_COUNT: 10,
  },

  // Rate limiting
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100,
  },
};

module.exports = INFRA_CONFIG;
