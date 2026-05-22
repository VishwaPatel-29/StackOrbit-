/**
 * Backup Constants
 *
 * Centralizes all static values used across the backup module.
 * Update here and it reflects everywhere — no magic strings in business logic.
 */

// Response messages for backup operations
const BACKUP_MESSAGES = {
  LIST_FETCHED: "Backup list fetched successfully",
  CREATED: "Backup created successfully",
  DELETED: "Backup deleted successfully",
  NOT_FOUND: "Backup not found",
};

// Backup types
const BACKUP_TYPES = {
  FULL: "full",
  INCREMENTAL: "incremental",
};

// Backup statuses
const BACKUP_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
};

// Mock backup data for demonstration
const MOCK_BACKUPS = [
  {
    id: "1",
    name: "backup-2024-01-15",
    type: "full",
    status: "completed",
    size: "150 MB",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "backup-2024-01-14",
    type: "incremental",
    status: "completed",
    size: "25 MB",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    name: "backup-2024-01-13",
    type: "full",
    status: "completed",
    size: "145 MB",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

module.exports = {
  BACKUP_MESSAGES,
  BACKUP_TYPES,
  BACKUP_STATUS,
  MOCK_BACKUPS,
};
