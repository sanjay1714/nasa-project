import React from 'react';
import { User, GraduationCap, HelpCircle } from 'lucide-react';
import { UserMode } from '../types';

interface MainHeaderProps {
  mode: UserMode;
  onModeChange: (mode: UserMode) => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ mode, onModeChange }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-0.5 pb-2">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-[23px] sm:text-[25px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
          Understand Satellite Fire Observations
        </h1>
        <p className="text-[12.5px] text-slate-500 font-normal mt-0.5">
          Explore fire activity, compare satellites, and see what happens if one satellite stops reporting.
        </p>
      </div>

      {/* Mode Selector & Help */}
      <div className="flex items-center space-x-2.5 self-start sm:self-auto shrink-0">
        <div className="flex items-center p-1 bg-[#0A1325] rounded-full border border-slate-700/60 shadow-xs">
          {/* User Mode Button */}
          <button
            onClick={() => onModeChange('user')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
              mode === 'user'
                ? 'bg-[#EDE9FE] text-[#432373] font-bold shadow-xs'
                : 'text-white hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>User Mode</span>
          </button>

          {/* Researcher Mode Button (Active Default) */}
          <button
            onClick={() => onModeChange('researcher')}
            className={`flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all ${
              mode === 'researcher'
                ? 'bg-[#EDE9FE] text-[#432373] font-bold shadow-xs'
                : 'text-white hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#582998]" />
            <span>Researcher Mode</span>
          </button>
        </div>

        {/* Circular Help Button */}
        <button
          title="Information & Guide"
          className="w-7 h-7 rounded-full bg-[#0A1325] hover:bg-slate-800 border border-slate-700/70 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
        >
          <HelpCircle className="w-4 h-4 stroke-[1.8]" />
        </button>
      </div>
    </div>
  );
};
