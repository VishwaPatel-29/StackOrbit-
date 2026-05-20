const Category = require("../models/category.model");

/**
 * Fetches all categories from the database.
 *
 * @returns {Array} - Array of category documents
 */
const getAllCategories = async () => {
  const categories = await Category.find().sort({ name: 1 });
  return categories;
};

/**
 * Creates a new category document in the database.
 *
 * @param {Object} data - Category fields from the request body
 * @returns {Object} - Newly created category document
 */
const createCategory = async (data) => {
  const { name, slug, description } = data;

  const category = await Category.create({
    name,
    slug,
    description,
  });

  return category;
};

module.exports = {
  getAllCategories,
  createCategory,
};
