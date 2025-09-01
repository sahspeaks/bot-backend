# Abhishek Kumar's Chatbot API

A comprehensive Express.js REST API for Abhishek Kumar's AI persona chatbot. This API provides endpoints for chatting with an AI version of Abhishek, a Software Engineer at TCS with expertise in both enterprise and personal development.

## 🚀 Features

- **AI-Powered Chat**: Chat with Abhishek's AI persona using OpenAI GPT-4
- **Multiple Personality Tones**: Switch between default, technical, mentor, casual, and corporate tones
- **Conversation Management**: Create, manage, and track multiple conversations
- **Persona Information**: Get detailed information about Abhishek's background, skills, projects, and career
- **Rate Limiting & Security**: Built-in security with helmet, rate limiting, and CORS
- **Input Validation**: Comprehensive validation for all endpoints
- **Error Handling**: Proper error handling and logging

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **AI Integration**: OpenAI GPT-4 Mini
- **Validation**: express-validator
- **Security**: Helmet, CORS, Rate Limiting
- **Storage**: In-memory (easily extensible to database)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd abhishek-chatbot-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   NODE_ENV=development
   CORS_ORIGIN=*
   ```

4. **Start the server**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 🔗 API Endpoints

### Health Check

- `GET /health` - API health status

### Chat Endpoints

- `POST /api/chat/message` - Send message and get AI response
- `GET /api/chat/:conversationId/history` - Get chat history

### Persona Endpoints

- `GET /api/persona` - Get complete persona information
- `GET /api/persona/projects` - Get projects (corporate + personal)
- `GET /api/persona/skills` - Get technical skills
- `GET /api/persona/career` - Get career information
- `GET /api/persona/social` - Get social media links

### Conversation Management

- `POST /api/conversations` - Create new conversation
- `GET /api/conversations` - Get all conversations
- `GET /api/conversations/:id` - Get specific conversation
- `PUT /api/conversations/:id/tone` - Update conversation tone
- `PUT /api/conversations/:id/reset` - Reset conversation
- `DELETE /api/conversations/:id` - Delete conversation
- `GET /api/conversations/:id/stats` - Get conversation stats

## 📝 Usage Examples

### Start a Conversation

```bash
curl -X POST http://localhost:3000/api/conversations \
  -H "Content-Type: application/json" \
  -d '{"tone": "casual"}'
```

### Send a Message

```bash
curl -X POST http://localhost:3000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hey Abhishek! Tell me about your work at TCS",
    "conversationId": "your-conversation-id",
    "tone": "casual"
  }'
```

### Get Persona Information

```bash
curl http://localhost:3000/api/persona/projects
```

## 🎨 Personality Tones

- **default**: Natural and balanced conversation
- **technical**: Tech-focused with implementation details
- **mentor**: Guidance-oriented and supportive
- **casual**: Relaxed, fun, and personal (supports Hinglish & Telugu)
- **corporate**: Professional enterprise focus

## 🏗️ Project Structure

```
├── server.js                 # Main server file
├── config/
│   └── persona.js            # Persona configuration
├── controllers/
│   ├── chatController.js     # Chat functionality
│   ├── personaController.js  # Persona information
│   └── conversationController.js # Conversation management
├── middleware/
│   ├── errorMiddleware.js    # Error handling
│   ├── loggerMiddleware.js   # Request logging
│   └── validationMiddleware.js # Input validation
├── models/
│   └── conversationModel.js # In-memory conversation storage
├── routes/
│   ├── chatRoutes.js        # Chat routes
│   ├── personaRoutes.js     # Persona routes
│   └── conversationRoutes.js # Conversation routes
├── services/
│   └── aiService.js         # OpenAI integration
├── package.json
├── .env.example
└── README.md
```

## 🚦 Response Format

All API responses follow this structure:

```json
{
  "status": "success|error",
  "data": {
    /* response data */
  },
  "message": "Optional message",
  "errors": [
    /* validation errors if any */
  ]
}
```

## 🔒 Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Helmet**: Security headers
- **CORS**: Configurable cross-origin requests
- **Input Validation**: Comprehensive request validation
- **Error Handling**: Secure error responses

## 🎯 About Abhishek Kumar

- **Current Role**: Software Engineer at TCS (5+ months)
- **Location**: Bengaluru, Karnataka (originally from Tirupati)
- **Enterprise Skills**: Java, Spring Boot, Apache Camel, Microservices
- **Personal Skills**: React, React Native, Node.js, MongoDB, Express.js
- **Projects**: 15+ personal projects + enterprise solutions at TCS
- **Personality**: Professional yet friendly, uses Hinglish naturally

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Website**: [sahspeaks.com](https://sahspeaks.com)
- **GitHub**: [sahspeaks](https://github.com/sahspeaks)
- **LinkedIn**: [sahspeaks](https://www.linkedin.com/in/sahspeaks/)

---

Made with ❤️ by Abhishek Kumar Sah
