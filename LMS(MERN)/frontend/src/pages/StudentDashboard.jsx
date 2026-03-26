import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({ announcements: [], marks: [] });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
      fetchDashboardData(userInfo.token);
    }
  }, []);

  const fetchDashboardData = async (token) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/student/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface">
      <Sidebar user={user} isAdmin={false} />
      <main className="md:ml-72 min-h-screen flex flex-col">
        <header className="flex justify-between items-center px-8 h-20 w-full sticky top-0 bg-white/80 backdrop-blur-md z-40 shadow-[0_20px_50px_rgba(44,47,49,0.06)]">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Dashboard</h1>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            <img className="w-10 h-10 rounded-full border-2 border-primary/10" src={user?.avatar} alt="Profile" />
          </div>
        </header>

        <div className="p-8 lg:p-12 space-y-12 max-w-7xl mx-auto w-full">
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 text-white shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold mb-4 leading-tight">Welcome back, {user?.name?.split(' ')[0]}.</h2>
              <p className="text-on-primary text-lg opacity-90 font-body">You have {data.announcements.length} new announcements and recent marks released.</p>
            </div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-surface-container-low rounded-3xl p-8">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-8">Performance Analytics</h3>
                <div className="flex items-end justify-between h-48 gap-4 px-2">
                  {/* Bar Chart Mockup */}
                  {[75, 82, 90, 95, 10].map((h, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 gap-4">
                      <div className="w-full bg-slate-300/30 rounded-t-lg relative h-32">
                        <div 
                          className={`absolute bottom-0 w-full rounded-t-lg transition-all ${i === 3 ? 'bg-primary shadow-lg' : 'bg-primary-container/40'}`} 
                          style={{ height: `${h}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-outline">SEM {i+1}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-12">
              <section className="bg-white rounded-3xl shadow-sm p-8">
                <h3 className="text-lg font-headline font-bold text-on-surface mb-8">Announcements</h3>
                <div className="space-y-6">
                  {data.announcements.map((ann, i) => (
                    <div key={ann._id} className="flex gap-4">
                      <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${i === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
                      <div>
                        <h5 className="text-sm font-bold text-on-surface">{ann.title}</h5>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{ann.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
