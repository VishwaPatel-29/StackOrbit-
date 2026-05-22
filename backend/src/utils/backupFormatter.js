/**
 * Backup Formatter Utility
 *
 * Provides reusable functions to format backup responses.
 * Ensures consistent output structure across backup endpoints.
 */

/**
 * Formats backup list response with metadata.
 *
 * @param {Array} backups - Array of backup entries
 * @returns {Object} - Formatted backup list response
 */
const formatBackupList = (backups) => {
  return {
    backups,
    count: backups.length,
    timestamp: new Date().toISOString(),
    note: "This endpoint returns mock backup data for demonstration purposes",
  };
};

/**
 * Formats backup creation response.
 *
 * @param {Object} backup - Created backup entry
 * @returns {Object} - Formatted backup creation response
 */
const formatBackupCreated = (backup) => {
  return {
    backup,
    timestamp: new Date().toISOString(),
    message: "Backup record created successfully",
  };
};

/**
 * Formats backup deletion response.
 *
 * @param {String} backupId - ID of the deleted backup
 * @returns {Object} - Formatted backup deletion response
 */
const formatBackupDeleted = (backupId) => {
  return {
    backupId,
    timestamp: new Date().toISOString(),
    message: "Backup record deleted successfully",
  };
};

module.exports = {
  formatBackupList,
  formatBackupCreated,
  formatBackupDeleted,
};
