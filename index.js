import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import personaRoutes from "./routes/personaRoutes.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { requestLogger } from "./middleware/loggerMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Security and performance middleware
app.use(helmet());
app.use(compression());
// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Rate limiting
// Only apply rate limiting in production
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later.",
  });
  app.use("/api/", limiter);
}

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Custom middleware
app.use(requestLogger);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Abhishek Chatbot API is running!",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// API routes
app.use("/api/chat", chatRoutes);
app.use("/api/persona", personaRoutes);
app.use("/api/conversations", conversationRoutes);

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Welcome to Abhishek Kumar's Chatbot API!",
    description: "Software Engineer at TCS & Fullstack Developer",
    endpoints: {
      chat: "/api/chat",
      persona: "/api/persona",
      conversations: "/api/conversations",
      health: "/health",
    },
    contact: {
      website: "https://sahspeaks.com",
      github: "https://github.com/sahspeaks",
      linkedin: "https://www.linkedin.com/in/sahspeaks/",
    },
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Abhishek Chatbot API is running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/health`);
});
