import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [announcement, setAnnouncement] = useState({ title: '', content: '', targetAudience: 'all' });
  const [mark, setMark] = useState({ studentId: '', moduleId: '', examName: '', score: '', comments: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) setUser(userInfo);
  }, []);

  const handlePostAnnouncement = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/announcements', announcement, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setStatus('Announcement posted successfully!');
      setAnnouncement({ title: '', content: '', targetAudience: 'all' });
    } catch (err) {
      setStatus('Error posting announcement');
    }
  };

  const handleReleaseMark = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/marks', mark, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setStatus('Mark released successfully!');
      setMark({ studentId: '', moduleId: '', examName: '', score: '', comments: '' });
    } catch (err) {
      setStatus('Error releasing mark');
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <Sidebar user={user} isAdmin={true} />
      <main className="md:ml-72 min-h-screen pb-20">
        <header className="flex justify-between items-center px-8 h-20 w-full sticky top-0 bg-white/80 backdrop-blur-md z-40 shadow-[0_20px_50px_rgba(44,47,49,0.06)]">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Command Center</h1>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            <img className="w-10 h-10 rounded-full border-2 border-primary/20" src={user?.avatar} alt="Admin" />
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-8 pt-12">
          <div className="mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest font-headline block mb-2">Administrator Hub</span>
            <h2 className="text-4xl font-extrabold text-on-surface tracking-tight">Admin Dashboard</h2>
          </div>

          {status && <div className="mb-6 p-4 bg-primary/10 text-primary font-bold rounded-xl">{status}</div>}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Curriculum Upload */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">upload_file</span>
                Curriculum Upload
              </h3>
              <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-12 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-primary">add_circle</span>
                </div>
                <h4 className="text-lg font-bold mb-1">Drag & drop your files here</h4>
                <p className="text-sm text-on-surface-variant mb-6">PDF, MP4, or DOCX files supported</p>
                <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
                  Browse Local Files
                </button>
              </div>
            </div>

            {/* Post Announcement */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">campaign</span>
                Post Bulletin
              </h3>
              <form onSubmit={handlePostAnnouncement} className="space-y-6">
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary" 
                  placeholder="Announcement Title" 
                  value={announcement.title}
                  onChange={(e) => setAnnouncement({...announcement, title: e.target.value})}
                  required
                />
                <textarea 
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary h-32" 
                  placeholder="Write your announcement content here..." 
                  value={announcement.content}
                  onChange={(e) => setAnnouncement({...announcement, content: e.target.value})}
                  required
                />
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
                  Broadcast Now
                </button>
              </form>
            </div>

            {/* Release Marks */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">grade</span>
                Release Marks
              </h3>
              <form onSubmit={handleReleaseMark} className="space-y-6">
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary" 
                  placeholder="Student Database ID (24-char hex)" 
                  value={mark.studentId}
                  onChange={(e) => setMark({...mark, studentId: e.target.value})}
                  required
                />
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary" 
                  placeholder="Module Database ID (24-char hex)" 
                  value={mark.moduleId}
                  onChange={(e) => setMark({...mark, moduleId: e.target.value})}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary" 
                    placeholder="Exam Name" 
                    value={mark.examName}
                    onChange={(e) => setMark({...mark, examName: e.target.value})}
                    required
                  />
                  <input 
                    className="bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary" 
                    placeholder="Score" 
                    type="number"
                    value={mark.score}
                    onChange={(e) => setMark({...mark, score: e.target.value})}
                    required
                  />
                </div>
                <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
                  Release Grade
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
