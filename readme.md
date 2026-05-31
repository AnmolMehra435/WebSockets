# Web-Socket :- Real-Time Notice Board System

A real-time broadcast messaging application built using **React**, **Express.js**, **MongoDB**, and **Socket.IO**.

The application allows users to send broadcast messages from a client interface and instantly display them on a server-side notice board without refreshing the page.

---

## Features

* Real-time message broadcasting using Socket.IO
* Persistent message storage with MongoDB
* Automatic timestamp generation for each message
* Client page for sending broadcast messages
* Server page for viewing all broadcast messages
* REST API for message retrieval and storage
* React Router based navigation

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Socket.IO Client
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB
* Mongoose

---

## Project Structure

```text
project-root/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Client.jsx
│   │   │   └── Server.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── messageController.js
│   │
│   ├── models/
│   │   └── Message.js
│   │
│   ├── routes/
│   │   └── messageRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Application Workflow

### Client Page

1. User enters a broadcast message.
2. Message is sent to the backend using Axios.
3. Message is stored in MongoDB.
4. Socket.IO emits the new message event.

### Server Page

1. Existing messages are loaded from MongoDB.
2. Server listens for incoming Socket.IO events.
3. New messages appear instantly on the notice board.
4. Each message displays its timestamp.

---

## API Endpoints

### Send Message

```http
POST /api/messages/sendmessage
```

Request Body:

```json
{
  "message": "Hello Everyone"
}
```

Response:

```json
{
  "message": "success"
}
```

---

### Get All Messages

```http
GET /api/messages/getmessage
```

Response:

```json
{
  "messages": [
    {
      "_id": "123",
      "message": "Hello Everyone",
      "createdAt": "2026-05-31T10:44:54.211Z"
    }
  ]
}
```

---

## MongoDB Schema

```javascript
const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
```

---

## Socket.IO Events

### Client → Server

```javascript
socket.emit("send-message", message);
```

### Server → Clients

```javascript
io.emit("receive-message", message);
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/realtime-notice-board.git
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Start Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Screens

### Home Page

* Select Client
* Select Server

### Client Page

* Enter Broadcast Message
* Send Message

### Server Page

* View Notice Board
* Real-Time Message Updates
* Timestamp Display

---

## Learning Outcomes

This project demonstrates:

* REST API development with Express
* MongoDB integration using Mongoose
* Real-time communication using Socket.IO
* React state management with Hooks
* React Router navigation
* Full-stack application development

---

## Author

**Anmol Mehra**

Built as a learning project to understand real-time communication using Socket.IO and full-stack web development with the MERN ecosystem.
