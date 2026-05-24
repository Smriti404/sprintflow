import { NavLink } from "react-router-dom";
import { navItems } from "../constants/nav";

const Sidebar = () => (
  <aside className="hidden w-64 flex-col bg-slate-950 text-white md:flex">
    <div className="px-6 py-6">
      <h1 className="font-display text-2xl font-semibold">SprintFlow</h1>
      <p className="mt-1 text-xs text-white/60">Agile Command Center</p>
    </div>
    <nav className="flex-1 px-4">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `mb-2 flex items-center rounded-lg px-3 py-2 text-sm transition ${
              isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
            }`
          }
          end={item.path === "/"}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
    <div className="px-6 py-6 text-xs text-white/50">Version 1.0</div>
  </aside>
);

export default Sidebar;
