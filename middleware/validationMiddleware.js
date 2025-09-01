import { body, param } from "express-validator";

export const validateMessage = [
  body("message")
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage("Message must be between 1 and 2000 characters"),
  body("tone")
    .optional()
    .isIn(["default", "technical", "mentor", "casual", "corporate"])
    .withMessage("Invalid tone option"),
  body("temperature")
    .optional()
    .isFloat({ min: 0, max: 2 })
    .withMessage("Temperature must be between 0 and 2"),
  body("conversationId")
    .optional()
    .isUUID()
    .withMessage("Invalid conversation ID format"),
];

export const validateConversationId = [
  param("conversationId")
    .isUUID()
    .withMessage("Invalid conversation ID format"),
];

export const validateTone = [
  body("tone")
    .isIn(["default", "technical", "mentor", "casual", "corporate"])
    .withMessage("Invalid tone option"),
];
