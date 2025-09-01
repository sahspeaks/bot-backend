import conversationModel from "../models/conversationModel.js";

export const createConversation = (req, res) => {
  try {
    const { tone = "default" } = req.body;

    const conversation = conversationModel.createConversation(tone);

    res.status(201).json({
      status: "success",
      data: {
        conversationId: conversation.id,
        tone: conversation.tone,
        createdAt: conversation.createdAt,
        message:
          "🚀 New conversation created! Main Abhishek hun, kaise help kar sakta hun?",
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create conversation",
    });
  }
};

export const getConversation = (req, res) => {
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
      data: conversation,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve conversation",
    });
  }
};

export const updateConversationTone = (req, res) => {
  try {
    const { conversationId } = req.params;
    const { tone } = req.body;

    const conversation = conversationModel.updateTone(conversationId, tone);

    res.status(200).json({
      status: "success",
      data: {
        conversationId: conversation.id,
        tone: conversation.tone,
        message: `✅ Tone changed to: ${tone}`,
      },
    });
  } catch (error) {
    res.status(error.message === "Conversation not found" ? 404 : 500).json({
      status: "error",
      message: error.message || "Failed to update conversation tone",
    });
  }
};

export const resetConversation = (req, res) => {
  try {
    const { conversationId } = req.params;

    const conversation = conversationModel.resetConversation(conversationId);

    res.status(200).json({
      status: "success",
      data: {
        conversationId: conversation.id,
        message: "🔄 Conversation reset successfully! Starting fresh.",
      },
    });
  } catch (error) {
    res.status(error.message === "Conversation not found" ? 404 : 500).json({
      status: "error",
      message: error.message || "Failed to reset conversation",
    });
  }
};

export const deleteConversation = (req, res) => {
  try {
    const { conversationId } = req.params;

    const deleted = conversationModel.deleteConversation(conversationId);
    if (!deleted) {
      return res.status(404).json({
        status: "error",
        message: "Conversation not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Conversation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete conversation",
    });
  }
};

export const getAllConversations = (req, res) => {
  try {
    const conversations = conversationModel.getAllConversations();

    const summaries = conversations.map((conv) => ({
      id: conv.id,
      tone: conv.tone,
      messageCount: conv.messages.length,
      createdAt: conv.createdAt,
      updatedAt: conv.updatedAt,
    }));

    res.status(200).json({
      status: "success",
      data: {
        total: conversations.length,
        conversations: summaries,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve conversations",
    });
  }
};

export const getConversationStats = (req, res) => {
  try {
    const { conversationId } = req.params;

    const stats = conversationModel.getConversationStats(conversationId);

    res.status(200).json({
      status: "success",
      data: stats,
    });
  } catch (error) {
    res.status(error.message === "Conversation not found" ? 404 : 500).json({
      status: "error",
      message: error.message || "Failed to retrieve conversation stats",
    });
  }
};
