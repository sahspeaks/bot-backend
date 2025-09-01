import { v4 as uuidv4 } from "uuid";

class ConversationModel {
  constructor() {
    this.conversations = new Map();
  }

  createConversation(tone = "default") {
    const conversationId = uuidv4();
    const conversation = {
      id: conversationId,
      messages: [],
      tone: tone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.conversations.set(conversationId, conversation);
    return conversation;
  }

  getConversation(conversationId) {
    return this.conversations.get(conversationId);
  }

  addMessage(conversationId, message) {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error("Conversation not found");
    }

    conversation.messages.push({
      ...message,
      timestamp: new Date(),
    });
    conversation.updatedAt = new Date();

    // Keep conversation manageable (last 20 messages)
    if (conversation.messages.length > 20) {
      conversation.messages = conversation.messages.slice(-20);
    }

    return conversation;
  }

  updateTone(conversationId, tone) {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error("Conversation not found");
    }

    conversation.tone = tone;
    conversation.updatedAt = new Date();
    return conversation;
  }

  resetConversation(conversationId) {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error("Conversation not found");
    }

    conversation.messages = [];
    conversation.updatedAt = new Date();
    return conversation;
  }

  deleteConversation(conversationId) {
    return this.conversations.delete(conversationId);
  }

  getAllConversations() {
    return Array.from(this.conversations.values());
  }

  getConversationStats(conversationId) {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error("Conversation not found");
    }

    return {
      id: conversation.id,
      messageCount: conversation.messages.length,
      tone: conversation.tone,
      createdAt: conversation.createdAt,
      updatedAt: conversation.updatedAt,
      duration: new Date() - conversation.createdAt,
    };
  }
}

export default new ConversationModel();
