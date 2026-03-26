import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const Results = () => {
  const [user, setUser] = useState(null);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
      fetchMarks(userInfo.token);
    }
  }, []);

  const fetchMarks = async (token) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/student/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMarks(data.marks);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface">
      <Sidebar user={user} isAdmin={user?.role === 'admin'} />
      <main className="md:ml-72 min-h-screen flex flex-col">
        <header className="px-8 h-20 w-full flex items-center bg-white/80 backdrop-blur-md shadow-sm">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Academic Results</h1>
        </header>

        <div className="p-8 lg:p-12 max-w-5xl mx-auto w-full">
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-black font-headline">Examination Ledger</h3>
                <p className="text-xs text-on-surface-variant font-medium">Your module-wise grade breakdown</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-outline uppercase tracking-widest font-bold block">Current GPA</span>
                <span className="text-2xl font-black text-primary">3.82</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50">
                  <tr className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
                    <th className="py-4 px-8">Module Code</th>
                    <th className="py-4 px-8">Module Name</th>
                    <th className="py-4 px-8">Exam</th>
                    <th className="py-4 px-8 text-center">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {marks.map((m) => (
                    <tr key={m._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-6 px-8 font-bold text-primary">{m.module?.code || 'N/A'}</td>
                      <td className="py-6 px-8 font-medium">{m.module?.name || 'Unknown Module'}</td>
                      <td className="py-6 px-8 text-on-surface-variant">{m.examName}</td>
                      <td className="py-6 px-8 text-center">
                        <span className="bg-primary/10 text-primary font-black px-4 py-2 rounded-lg">{m.score}%</span>
                      </td>
                    </tr>
                  ))}
                  {marks.length === 0 && (
                    <tr>
                      <td colSpan="4" className="py-20 text-center text-on-surface-variant font-medium italic">No marks released yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Results;
