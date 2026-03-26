import { NavLink } from 'react-router-dom';

const Sidebar = ({ user, isAdmin }) => {
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-6 z-50 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl w-72 rounded-r-3xl border-r shadow-xl hidden md:flex transition-transform duration-300 ease-in-out">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined">{isAdmin ? 'account_balance' : 'menu_book'}</span>
        </div>
        <span className="text-lg font-extrabold text-primary font-headline">The Academic Curator</span>
      </div>

      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-1">
          <NavLink to={isAdmin ? "/admin" : "/dashboard"} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl font-manrope font-medium text-sm transition-all ${isActive ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:translate-x-1 hover:bg-primary/10'}`}>
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/announcements" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl font-manrope font-medium text-sm transition-all ${isActive ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:translate-x-1 hover:bg-primary/10'}`}>
            <span className="material-symbols-outlined">campaign</span>
            <span>Announcements</span>
          </NavLink>
          <NavLink to="/materials" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl font-manrope font-medium text-sm transition-all ${isActive ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:translate-x-1 hover:bg-primary/10'}`}>
            <span className="material-symbols-outlined">menu_book</span>
            <span>Course Materials</span>
          </NavLink>
          <NavLink to="/results" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl font-manrope font-medium text-sm transition-all ${isActive ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:translate-x-1 hover:bg-primary/10'}`}>
            <span className="material-symbols-outlined">grade</span>
            <span>Results</span>
          </NavLink>
          <NavLink to="/schedule" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl font-manrope font-medium text-sm transition-all ${isActive ? 'bg-white text-primary shadow-sm' : 'text-slate-600 hover:translate-x-1 hover:bg-primary/10'}`}>
            <span className="material-symbols-outlined">calendar_month</span>
            <span>Schedule</span>
          </NavLink>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-200/50">
          <button 
            onClick={() => { localStorage.removeItem('userInfo'); window.location.href = '/auth'; }}
            className="w-full flex items-center gap-3 p-3 text-error hover:translate-x-1 hover:bg-error/10 font-manrope font-medium text-sm transition-all mb-4"
          >
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
          <div className="flex items-center gap-3 px-2">
            <img className="w-12 h-12 rounded-full object-cover" src={user?.avatar} alt={user?.name} />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-on-surface">{user?.name}</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">{isAdmin ? 'Administrator' : 'Student'}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
