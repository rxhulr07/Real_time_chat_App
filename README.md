# 💬 Real-Time Chat App

A full-stack, real-time chat application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with real-time communication powered by **Socket.io**. The UI is styled using **Tailwind CSS** and **Daisy UI**, offering a responsive and modern User experience.

## 🚀 Features

- 🔁 Real-time messaging with **Socket.io**
- 👤 User authentication (login/register)
- 📜 Chat history with persistent storage in **MongoDB**
- 🧑‍🤝‍🧑 One-on-one and group chat support
- 📱 Fully responsive design for all devices
- 🎨 Clean and modern UI with **Tailwind CSS** and **Daisy UI**

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Daisy UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Real-time Engine:** Socket.io

## ⚙️ Installation

### 1. Clone the repository
```sh
git clone https://github.com/Rahulranjan070/Real_time_chat_App.git
```

###📡 Backend Setup (Express + MongoDB + Socket.io)
Navigate to the backend folder:
cd Backend

Install server dependencies:
```sh
npm install
```

- Create a `.env` file inside server/ and add the following:
```sh
env
MONGO_URI=your_mongodb_connection_string,
JWT_SECRET=your_super_secret_key,
PORT=5000,
```

### Start the backend server:
```sh
npm run dev
```
✅ Backend is now running at http://localhost:5000

*****************************************************************

🖥️ Frontend Setup (React + Tailwind CSS + Daisy UI)
Open a new terminal window and run:

cd frontend         # Navigate to frontend folder
npm install       # Install frontend dependencies
npm run dev       # Start the frontend dev server
🌐 Frontend will run on http://localhost:5173

🎉 All Done!
Now you can:

Sign up or log in 🔐

Chat in real-time with other users 💬

Enjoy a fast and modern UI 🚀

*****************************************************************
### 🔗 Live Demo
https://chat-app-4xez.onrender.com

