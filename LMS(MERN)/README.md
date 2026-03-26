# UniLMS - University Learning Management System

UniLMS is a high-fidelity, full-stack Learning Management System built using the MERN stack (MongoDB, Express, React, Node.js). It offers a premium educational experience with specialized portals for students and administrators, featuring real-time announcements, resource management, and academic performance tracking.

## ✨ Features

### 🎓 For Students
- **Smart Dashboard**: Real-time overview of academic progress, upcoming classes, and recent announcements.
- **Resource Repository**: Access lecture materials, PDFs, and videos categorized by module.
- **Results Ledger**: View exam marks and performance analytics instantly.
- **Academic Schedule**: A beautifully organized timetable for tracking weekly classes.
- **Personal Profile**: Manage academic details and customize the learning experience.

### 🛡️ For Administrators
- **Command Center**: Unified dashboard for managing the institutional ecosystem.
- **Bulletin Broadcast**: Post announcements to the entire student body or specific groups.
- **Marks Management**: Securely release and update exam results using student database IDs.
- **Curriculum Upload**: Share lecture resources and course materials seamlessly.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS 4, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Atlas/Local) with Mongoose.
- **Authentication**: JSON Web Tokens (JWT) with role-based access control (RBAC).

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or a MongoDB Atlas URI)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd unilms
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
   Run the backend:
   ```bash
   npm run dev
   ```

3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## 📸 Preview

The application features a modern "Academic Curator" design with glassmorphism effects and high-contrast typography for optimal readability.

- **Landing Page**: A professional gateway to the LMS.
- **Schedule**: Card-based timetable for student focus.
- **Dashboards**: Streamlined data visualization for both roles.

## 📄 License
This project is licensed under the MIT License.
