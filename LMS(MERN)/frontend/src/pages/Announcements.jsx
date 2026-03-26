import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const Announcements = () => {
  const [user, setUser] = useState(null);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
      fetchAnnouncements(userInfo.token);
    }
  }, []);

  const fetchAnnouncements = async (token) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/student/announcements', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAnnouncements(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface">
      <Sidebar user={user} isAdmin={user?.role === 'admin'} />
      <main className="md:ml-72 min-h-screen flex flex-col">
        <header className="px-8 h-20 w-full flex items-center bg-white/80 backdrop-blur-md shadow-sm">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Announcements</h1>
        </header>

        <div className="p-8 lg:p-12 max-w-4xl mx-auto w-full space-y-8">
          {announcements.map((ann) => (
            <section key={ann._id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${ann.targetAudience === 'all' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                    {ann.targetAudience}
                  </span>
                  <h3 className="text-2xl font-headline font-black mt-2">{ann.title}</h3>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">{new Date(ann.createdAt).toLocaleDateString()}</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-8">{ann.content}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-on-surface-variant">person</span>
                </div>
                <span className="text-xs font-bold">{ann.author?.name || 'Administrator'}</span>
              </div>
            </section>
          ))}
          {announcements.length === 0 && (
            <div className="py-40 text-center text-on-surface-variant italic font-medium">No announcements yet.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Announcements;
