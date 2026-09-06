# 🤖 AI Chatbot (Groq & LLaMA 3.3)

A fast, lightweight, and modern AI Chatbot web application built with **Node.js**, **Express**, and the **Groq Cloud API** running Meta's `llama-3.3-70b-versatile` model.

---

## 🚀 Features

- **Ultra-Fast AI Responses**: Powered by Groq's high-speed inference engine using the `llama-3.3-70b-versatile` model.
- **Clean & Responsive UI**: Custom modern chat interface designed with clean CSS styling.
- **Lightweight Backend**: Minimalist Express.js server providing a clean `/chat` REST API endpoint.
- **Zero Heavy Frontend Dependencies**: Built with vanilla HTML, CSS, and JavaScript.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [dotenv](https://www.npmjs.com/package/dotenv)
- **AI Model & Provider**: [Groq Cloud](https://groq.com/) (`llama-3.3-70b-versatile`)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (Fetch API)

---

## 📁 Project Structure

```text
ai-chatboat/
├── public/
│   └── index.html       # Frontend chat user interface
├── .env                 # Environment variables (API keys)
├── package.json         # Project metadata and dependencies
├── server.js            # Express server and Groq API handler
└── README.md            # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- A Groq API key (Obtain one for free at [Groq Console](https://console.groq.com/))

### 1. Installation

Clone or download the project repository, navigate into the project directory, and install dependencies:

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory (if not already present) and add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Running the Application

You can start the server in development mode (with auto-reload using Node's watch mode) or standard mode:

**Development Mode (Auto-restart on changes):**
```bash
npm run dev
```

**Production / Normal Mode:**
```bash
npm start
```

Once started, open your browser and navigate to:
```
http://localhost:3000
```

---

## 🔌 API Reference

### Send Message

- **Endpoint**: `POST /chat`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "message": "Hello, how are you?"
  }
  ```
- **Response**:
  ```json
  {
    "reply": "Hello! I am doing well, how can I help you today?"
  }
  ```

---

## 👨‍💻 Developed By

**RAJAN SHARMA**
