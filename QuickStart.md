# UniLMS Quick Start Guide

Welcome to the UniLMS! This quick start guide will help you get the UniLMS MERN stack application and its associated components up and running on your local machine quickly.

## 🚀 1. Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v18 or higher)
- **MongoDB** (Running locally, or a MongoDB Atlas URI)
- **Git**

---

## 🛠️ 2. Repository Setup

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd Learning-management-system
```

The repository structure contains:
- `LMS(MERN)/`: The full-stack web application.

---

## ⚙️ 3. Backend Setup

The backend is built with Node.js and Express, connected to MongoDB.

1. **Navigate to the backend directory and install dependencies:**
   ```bash
   cd LMS(MERN)/backend
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the `backend` folder with the following configuration:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   ```
   *Note: Replace `your_mongodb_connection_string` with your actual MongoDB URI and choose a secure string for `JWT_SECRET`.*

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The backend API will start running on `http://localhost:5000`.

---

## 💻 4. Frontend Setup

The frontend is a modern React application built with Vite and Tailwind CSS.

1. **Open a new terminal window** and navigate to the frontend directory:
   ```bash
   cd LMS(MERN)/frontend
   npm install
   ```

2. **Start the Frontend Development Server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

---

## 🎓 5. Exploring the Application

Once both servers are running, you can explore the application:

### Student Portal
Students can log in to view their:
- Smart dashboard for academic progress.
- Weekly schedules and timetables.
- Lecture materials and uploaded resources.
- Exam marks and performance analytics.

### Administrator Portal
Administrators have access to a command center where they can:
- Post announcements to the student body.
- Upload course materials and curriculum guides.
- Manage and release exam results.

---

## ❓ Troubleshooting

- **MongoDB Connection Error**: Ensure your IP address is whitelisted in MongoDB Atlas, or that your local MongoDB instance is fully running.
- **Port Conflicts**: If port `5000` or `5173` is already in use, you can modify the `PORT` in your `.env` file or vite configuration.
- **Authentication Issues**: Ensure the `JWT_SECRET` in your `.env` perfectly matches the required signature standard.

For more detailed information about the architecture and features, refer to the `README.md` file located in the `LMS(MERN)/` directory.
