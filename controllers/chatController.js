import aiService from "../services/aiService.js";
import conversationModel from "../models/conversationModel.js";
import { validationResult } from "express-validator";

export const sendMessage = async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      message,
      conversationId,
      tone = "default",
      temperature = 0.7,
    } = req.body;

    // Get or create conversation
    let conversation = conversationModel.getConversation(conversationId);
    if (!conversation) {
      conversation = conversationModel.createConversation(tone);
    }

    // Add user message to conversation
    conversationModel.addMessage(conversation.id, {
      role: "user",
      content: message,
    });

    // Generate AI response
    const aiResponse = await aiService.generateResponse(
      conversation.messages,
      tone,
      temperature
    );

    // Add AI response to conversation
    conversationModel.addMessage(conversation.id, {
      role: "assistant",
      content: aiResponse,
    });

    res.status(200).json({
      status: "success",
      data: {
        conversationId: conversation.id,
        message: aiResponse,
        tone: conversation.tone,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({
      status: "error",
      message:
        error.message || "Sorry yaar, kuch technical issue aa gaya hai! 😅",
    });
  }
};

export const getChatHistory = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const conversation = conversationModel.getConversation(conversationId);
    if (!conversation) {
      return res.status(404).json({
        status: "error",
        message: "Conversation not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        conversationId: conversation.id,
        messages: conversation.messages,
        tone: conversation.tone,
        createdAt: conversation.createdAt,
        updatedAt: conversation.updatedAt,
      },
    });
  } catch (error) {
    console.error("Get Chat History Error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve chat history",
    });
  }
};
