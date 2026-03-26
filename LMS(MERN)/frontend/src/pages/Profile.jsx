import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) setUser(userInfo);
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface">
      <Sidebar user={user} isAdmin={user?.role === 'admin'} />
      <main className="md:ml-72 min-h-screen flex flex-col">
        <header className="px-8 h-20 w-full flex items-center bg-white/80 backdrop-blur-md shadow-sm">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Student Profile</h1>
        </header>
        
        <div className="p-8 lg:p-12 max-w-4xl mx-auto w-full">
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="px-8 pb-12 -mt-16 text-center md:text-left md:flex md:items-end md:gap-8">
              <img className="w-40 h-40 rounded-full border-8 border-white shadow-lg object-cover mx-auto md:mx-0" src={user?.avatar} alt={user?.name} />
              <div className="mt-6 md:mt-0 flex-1 pb-4">
                <h2 className="text-3xl font-headline font-black text-on-surface">{user?.name}</h2>
                <p className="text-on-surface-variant font-medium">{user?.email}</p>
              </div>
              <button className="hidden md:block mb-4 px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
                Edit Portfolio
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 border-t border-slate-50 bg-slate-50/30">
              <div className="space-y-1">
                <span className="text-[10px] text-outline uppercase tracking-widest font-bold">Academic Status</span>
                <p className="font-bold text-secondary">Active / Year 3</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-outline uppercase tracking-widest font-bold">Student ID</span>
                <p className="font-bold">#CS-2022094</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-outline uppercase tracking-widest font-bold">Department</span>
                <p className="font-bold">Computer Science & Engineering</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
