import React from 'react';
import { Users, Sun, User, Flame } from 'lucide-react';

interface HeaderProps {
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleTheme }) => {
  return (
    <header className="w-full bg-[#08101E] text-white px-5 py-2.5 flex items-center justify-between z-30 select-none">
      {/* Left branding */}
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center space-x-1">
          {/* Satellite icon */}
          <div className="flex items-center justify-center w-7 h-7 text-cyan-400">
            <svg
              className="w-6 h-6 -rotate-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 7 9 3 5 7l4 4" />
              <path d="m17 11 4 4-4 4-4-4" />
              <path d="m8 12 4 4" />
              <path d="m16 8-4-4" />
              <path d="m3 21 3-3" />
              <path d="m21 3-3 3" />
            </svg>
          </div>
          {/* Fire icon */}
          <div className="flex items-center justify-center w-6 h-6">
            <Flame className="w-6 h-6 fill-orange-500 text-orange-500" />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[17px] font-bold tracking-tight text-white leading-tight">
            Fire Continuity Ledger
          </span>
          <span className="text-[11px] text-slate-300/80 tracking-wide font-normal">
            MODIS & VIIRS Fire Analysis
          </span>
        </div>

        {/* Thin vertical divider line */}
        <div className="h-6 w-[1px] bg-slate-700/80 mx-3" />

        {/* NASA Challenge Section */}
        <div className="flex items-center space-x-2.5">
          <img
            src="/assets/nasa_badge.png"
            alt="NASA Emblem"
            className="w-6 h-6 rounded-full object-cover shrink-0"
          />

          <div className="flex flex-col">
            <span className="text-[12.5px] font-semibold text-white leading-tight">
              NASA Space Apps Challenge 2026
            </span>
            <span className="text-[10.5px] text-slate-400 leading-tight">
              Challenge 9: Harmonization of MODIS and VIIRS Hot Spots
            </span>
          </div>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center space-x-3.5">
        {/* Team name */}
        <div className="flex items-center space-x-1.5 text-slate-200">
          <Users className="w-4 h-4 text-slate-200" />
          <span className="text-xs font-bold tracking-wider text-white uppercase">
            STORMBREAKERS
          </span>
        </div>

        {/* Development badge */}
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#081924] border border-[#0d9488]/80 text-[#2dd4bf] text-[11px] font-mono font-medium shadow-xs">
          <span className="font-bold">&lt;/&gt;</span>
          <span>Development</span>
        </div>

        {/* Sun theme icon button */}
        <button
          onClick={onToggleTheme}
          title="Theme Toggle"
          className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-amber-400 transition-colors"
        >
          <Sun className="w-3.5 h-3.5" />
        </button>

        {/* Profile icon button */}
        <button
          title="User Account"
          className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors"
        >
          <User className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
