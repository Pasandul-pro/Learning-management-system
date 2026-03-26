import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const CourseMaterials = () => {
  const [user, setUser] = useState(null);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
      fetchMaterials(userInfo.token);
    }
  }, []);

  const fetchMaterials = async (token) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/student/materials', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMaterials(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface">
      <Sidebar user={user} isAdmin={user?.role === 'admin'} />
      <main className="md:ml-72 min-h-screen flex flex-col">
        <header className="px-8 h-20 w-full flex items-center bg-white/80 backdrop-blur-md shadow-sm">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Course Materials</h1>
        </header>

        <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((mat) => (
              <div key={mat._id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="h-40 bg-slate-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="text-[10px] text-white font-bold bg-primary/40 px-2 py-1 rounded">{mat.module?.name || 'General'}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-headline font-black text-lg mb-2">{mat.title}</h4>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">{mat.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">description</span>
                      <span>{mat.fileType.toUpperCase()}</span>
                    </div>
                    <a href={mat.fileUrl} target="_blank" rel="noreferrer" className="p-3 bg-primary-container/20 text-primary rounded-full hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined">download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseMaterials;
