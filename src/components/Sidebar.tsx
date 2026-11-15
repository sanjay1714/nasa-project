import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  Map,
  Calendar,
  FlaskConical,
  Network,
  Layers,
  BarChart3,
  ChevronDown,
  Download,
  Code2,
  BookOpen
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [researchToolsOpen, setResearchToolsOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Fire Map', path: '/fire-map', icon: Map },
    { name: 'Fire Calendar', path: '/fire-calendar', icon: Calendar },
    { name: 'Continuity Lab', path: '/continuity-lab', icon: FlaskConical },
    { name: 'Agreement Lab', path: '/agreement-lab', icon: Network },
    { name: 'Event Explorer', path: '/event-explorer', icon: Layers },
  ];

  const subItems = [
    { name: 'Data Download', path: '/research-tools/download', icon: Download },
    { name: 'API Access', path: '/research-tools/api', icon: Code2 },
    { name: 'Methodology', path: '/research-tools/methodology', icon: BookOpen },
  ];

  return (
    <aside className="w-52 min-w-[13rem] bg-[#0A1325] text-slate-100 flex flex-col justify-between select-none border-r border-slate-900/40 h-[calc(100vh-51px)] sticky top-[51px] z-20 overflow-hidden">
      {/* Navigation menu list */}
      <div className="p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-3 px-3.5 py-2 rounded-xl text-[13px] font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#0d7d87] to-[#0a585f] text-white shadow-md shadow-teal-950/30 font-semibold'
                  : 'text-white/90 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Icon className="w-4 h-4 stroke-[1.8] text-white" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

        {/* Research Tools expandable section */}
        <div className="pt-0.5">
          <button
            onClick={() => setResearchToolsOpen(!researchToolsOpen)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-[13px] font-medium text-white/90 hover:text-white hover:bg-slate-800/40 rounded-xl transition-all"
          >
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-4 h-4 stroke-[1.8] text-white" />
              <span>Research Tools</span>
            </div>
            <ChevronDown
              className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                researchToolsOpen ? 'rotate-0' : '-rotate-90'
              }`}
            />
          </button>

          {researchToolsOpen && (
            <div className="ml-3 pl-3 border-l border-slate-800/60 my-0.5 space-y-0.5">
              {subItems.map((sub) => {
                const SubIcon = sub.icon;
                const isSubActive = location.pathname === sub.path;
                return (
                  <NavLink
                    key={sub.name}
                    to={sub.path}
                    className={`flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-normal transition-all ${
                      isSubActive
                        ? 'bg-teal-900/60 text-teal-300 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    <SubIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{sub.name}</span>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar bottom visual illustration (Earth & Satellite) */}
      <div className="relative w-full overflow-hidden shrink-0 pointer-events-none select-none">
        <img
          src="/assets/sidebar_illustration.png"
          alt="Satellite observing Earth"
          className="w-full h-auto object-cover block"
        />
      </div>
    </aside>
  );
};
