import express from "express";
import { sendMessage, getChatHistory } from "../controllers/chatController.js";
import {
  validateMessage,
  validateConversationId,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

// @desc    Send a message and get AI response
// @route   POST /api/chat/message
// @access  Public
router.post("/message", validateMessage, sendMessage);

// @desc    Get chat history for a conversation
// @route   GET /api/chat/:conversationId/history
// @access  Public
router.get("/:conversationId/history", validateConversationId, getChatHistory);

export default router;
