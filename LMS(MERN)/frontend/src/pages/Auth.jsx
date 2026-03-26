import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const { data } = await axios.post(`http://localhost:5000${endpoint}`, formData);
      localStorage.setItem('userInfo', JSON.stringify(data));
      if (data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/20 rounded-full blur-[120px]"></div>
        
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(44,47,49,0.06)] overflow-hidden relative z-10">
          <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-br from-primary to-secondary text-on-primary">
            <div>
              <div className="flex items-center gap-2 mb-12">
                <span className="material-symbols-outlined text-4xl">auto_stories</span>
                <h1 className="font-headline text-2xl font-extrabold tracking-tight">The Academic Curator</h1>
              </div>
              <h2 className="font-headline text-4xl font-bold leading-tight mb-6">Elevate your scholarly journey.</h2>
              <p className="text-on-primary/80 text-lg max-w-md leading-relaxed">A refined digital ecosystem for intentional learning.</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm font-medium opacity-90 italic">"The most intuitive learning interface I've ever used."</p>
              <p className="text-xs opacity-70 mt-1">— Sarah Jenkins, Year 3 Biology</p>
            </div>
          </div>

          <div className="p-8 md:p-16 flex flex-col justify-center bg-white/40 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-12">
              <div className="flex flex-col">
                <h3 className="font-headline text-2xl font-extrabold text-on-surface">{isLogin ? 'Welcome back' : 'Join the Gateway'}</h3>
                <p className="text-on-surface-variant text-sm mt-1">{isLogin ? 'Access your dashboard' : 'Create your academic profile'}</p>
              </div>
            </div>

            <div className="flex p-1.5 bg-surface-container-low rounded-xl mb-8">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${isLogin ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${!isLogin ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Register
              </button>
            </div>

            {error && <div className="mb-4 text-error text-sm font-medium">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="relative group">
                  <input 
                    className="block w-full pl-4 pr-4 pt-6 pb-2 bg-surface-container-low border-none rounded-xl text-on-surface font-medium focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all peer" 
                    placeholder="Full Name" 
                    required 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              )}
              <div className="relative group">
                <input 
                  className="block w-full pl-4 pr-4 pt-6 pb-2 bg-surface-container-low border-none rounded-xl text-on-surface font-medium focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all peer" 
                  placeholder="University Email" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="relative group">
                <input 
                  className="block w-full pl-4 pr-4 pt-6 pb-2 bg-surface-container-low border-none rounded-xl text-on-surface font-medium focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all peer" 
                  placeholder="Password" 
                  required 
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
              {!isLogin && (
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="role" value="student" checked={formData.role === 'student'} onChange={() => setFormData({...formData, role: 'student'})} className="text-primary focus:ring-primary" />
                    <span className="text-sm">Student</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="role" value="admin" checked={formData.role === 'admin'} onChange={() => setFormData({...formData, role: 'admin'})} className="text-primary focus:ring-primary" />
                    <span className="text-sm">Admin</span>
                  </label>
                </div>
              )}
              <button 
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-white rounded-xl font-bold shadow-lg hover:shadow-primary/40 active:scale-[0.98] transition-all duration-200" 
                type="submit"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
