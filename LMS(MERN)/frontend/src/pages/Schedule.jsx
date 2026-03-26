import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Schedule = () => {
  const [user, setUser] = useState(null);
  const scheduleData = [
    { day: 'Monday', classes: [{ time: '08:30 - 10:30', subject: 'Advanced Mathematics', room: 'Hall A' }, { time: '13:00 - 15:00', subject: 'Data Structures', room: 'Lab 2' }] },
    { day: 'Tuesday', classes: [{ time: '10:45 - 12:45', subject: 'Operating Systems', room: 'Hall C' }] },
    { day: 'Wednesday', classes: [{ time: '08:30 - 10:30', subject: 'Software Engineering', room: 'Online' }, { time: '11:00 - 13:00', subject: 'Database Systems', room: 'Hall B' }] },
    { day: 'Thursday', classes: [{ time: '14:00 - 16:00', subject: 'Artificial Intelligence', room: 'Hall A' }] },
    { day: 'Friday', classes: [{ time: '09:00 - 11:00', subject: 'Network Security', room: 'Lab 1' }] },
  ];

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) setUser(userInfo);
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface">
      <Sidebar user={user} isAdmin={user?.role === 'admin'} />
      <main className="md:ml-72 min-h-screen flex flex-col">
        <header className="px-8 h-20 w-full flex items-center bg-white/80 backdrop-blur-md shadow-sm">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Academic Schedule</h1>
        </header>

        <div className="p-8 lg:p-12 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 gap-8">
            {scheduleData.map((item) => (
              <section key={item.day} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8">
                <div className="md:w-32 shrink-0">
                  <h3 className="text-2xl font-black font-headline text-primary">{item.day}</h3>
                  <div className="w-8 h-1 bg-primary-container mt-2 rounded-full"></div>
                </div>
                <div className="flex-1 space-y-4">
                  {item.classes.map((cls, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-primary/20 transition-all group">
                      <div className="flex items-center gap-6">
                        <div className="px-4 py-2 bg-white rounded-xl shadow-sm text-xs font-black text-secondary">
                          {cls.time}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{cls.subject}</h4>
                          <p className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            {cls.room}
                          </p>
                        </div>
                      </div>
                      <button className="mt-4 sm:mt-0 px-6 py-2 bg-primary/10 text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all">
                        View Resources
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Schedule;
