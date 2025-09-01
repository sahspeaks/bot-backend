import express from "express";
import {
  createConversation,
  getConversation,
  updateConversationTone,
  resetConversation,
  deleteConversation,
  getAllConversations,
  getConversationStats,
} from "../controllers/conversationController.js";
import {
  validateConversationId,
  validateTone,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

// @desc    Create a new conversation
// @route   POST /api/conversations
// @access  Public
router.post("/", createConversation);

// @desc    Get all conversations (summary)
// @route   GET /api/conversations
// @access  Public
router.get("/", getAllConversations);

// @desc    Get specific conversation
// @route   GET /api/conversations/:conversationId
// @access  Public
router.get("/:conversationId", validateConversationId, getConversation);

// @desc    Update conversation tone
// @route   PUT /api/conversations/:conversationId/tone
// @access  Public
router.put(
  "/:conversationId/tone",
  validateConversationId,
  validateTone,
  updateConversationTone
);

// @desc    Reset conversation messages
// @route   PUT /api/conversations/:conversationId/reset
// @access  Public
router.put("/:conversationId/reset", validateConversationId, resetConversation);

// @desc    Delete conversation
// @route   DELETE /api/conversations/:conversationId
// @access  Public
router.delete("/:conversationId", validateConversationId, deleteConversation);

// @desc    Get conversation statistics
// @route   GET /api/conversations/:conversationId/stats
// @access  Public
router.get(
  "/:conversationId/stats",
  validateConversationId,
  getConversationStats
);

export default router;
