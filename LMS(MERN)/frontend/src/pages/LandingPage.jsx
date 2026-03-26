import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_50px_rgba(44,47,49,0.06)] flex justify-between items-center px-8 h-20 w-full sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl">menu_open</span>
          <span className="text-xl font-bold tracking-tight text-primary">The Academic Curator</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-primary font-semibold font-manrope text-sm transition-all hover:bg-slate-100/50 px-4 py-2 rounded-xl" href="#">Home</a>
          <a className="text-on-surface-variant font-manrope text-sm transition-all hover:bg-slate-100/50 px-4 py-2 rounded-xl" href="#">Curriculum</a>
          <a className="text-on-surface-variant font-manrope text-sm transition-all hover:bg-slate-100/50 px-4 py-2 rounded-xl" href="#">Resources</a>
          <a className="text-on-surface-variant font-manrope text-sm transition-all hover:bg-slate-100/50 px-4 py-2 rounded-xl" href="#">Support</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/auth" className="hidden sm:block text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Login</Link>
          <Link to="/auth" className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all active:scale-95">Register</Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-[5%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container/30 text-secondary font-medium rounded-full text-xs uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Next Gen Learning
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
                Elevate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Academic Journey.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                A sophisticated, intentional workspace for the modern student. Curate your materials, track your progress, and excel through editorial design and structural logic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2">
                  Explore Curriculum
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-surface-container-highest text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all flex items-center justify-center">
                  Institutional Access
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(44,47,49,0.12)] border border-white/20">
                <img alt="Student working" className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwvt742R_zIjoMTy0Zpt_RY_6T24IDn0KpFffXe2RNpXrzg16Cn6DxhMs6VlXsQN2_f4GafOgajYSPVL-RC9gkTDAcgb1F3WkNQIB_4t4rSUTb1gevRcOx7FggplzoztY2QPlnRzU_aQT1O2RjaF524ukZrXHWdLJCYHpOkpITVx7X9zdG7ZqcxugfZOvkUp7rjIf5U6EYAtaAMIKuVe0xx_GdJ10oeil12T3Nq-nz6hnjUX2-Y92Ci6lyuPS_SBojjpgN6rwAmYVi" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {/* Floating Glass Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Course Completion</p>
                      <p className="text-xs text-on-surface-variant">Data Structures & Algorithms</p>
                    </div>
                    <div className="ml-auto text-primary font-bold">85%</div>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-tertiary-container/40 rounded-full blur-xl -z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/30 rounded-full blur-2xl -z-0"></div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Engineered for Focus</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Eliminate academic noise with tools designed for intentional learning and structured progress.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-primary/10 transition-all group flex flex-col justify-between overflow-hidden relative">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">campaign</span>
                  <h3 className="text-2xl font-bold mb-3">Live Announcements</h3>
                  <p className="text-on-surface-variant leading-relaxed">Stay synchronized with campus updates through our real-time notification engine. From lecture changes to event alerts.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-on-secondary-container p-8 rounded-xl shadow-lg text-on-secondary flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl mb-6 block">grade</span>
                  <h3 className="text-2xl font-bold mb-3">Instant Results</h3>
                  <p className="text-on-secondary/80 leading-relaxed">Interactive grade breakdowns and performance analytics to visualize your academic growth.</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-primary/10 transition-all group">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-6 block group-hover:rotate-12 transition-transform">menu_book</span>
                <h3 className="text-2xl font-bold mb-3">Smart Repository</h3>
                <p className="text-on-surface-variant leading-relaxed">Centralized access to high-fidelity course materials and notes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <span className="font-black text-2xl text-slate-900 tracking-tighter uppercase">The Curator</span>
          <p className="text-slate-400 text-[10px] uppercase tracking-widest">© 2024 University LMS. Designed for intentional learning.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
