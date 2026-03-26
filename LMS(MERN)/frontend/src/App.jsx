import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import CourseMaterials from './pages/CourseMaterials';
import Results from './pages/Results';
import Announcements from './pages/Announcements';
import Schedule from './pages/Schedule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/materials" element={<CourseMaterials />} />
      <Route path="/results" element={<Results />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
