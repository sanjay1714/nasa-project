import React from 'react';
import { FlaskConical, Network, Layers, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ResearchModules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-2.5">
        <FlaskConical className="w-5 h-5 text-[#0B1528]" />
        <h2 className="text-[17px] font-bold text-[#0B1528]">Research Modules</h2>
      </div>

      {/* 3 Modules Tiles */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        {/* Top 2 side-by-side modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Agreement Lab */}
          <button
            onClick={() => navigate('/agreement-lab')}
            className="text-left bg-[#F0EBFE] hover:bg-[#EAE2FD] border border-purple-100 rounded-xl p-3 flex flex-col justify-between transition-all group shadow-xs"
          >
            <div className="flex items-start justify-between w-full mb-1">
              <Network className="w-6 h-6 text-[#7C3AED]" />
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="text-[13.5px] font-bold text-[#0B1528] leading-tight mb-0.5">
                Agreement Lab
              </h3>
              <p className="text-[10.5px] text-slate-600 leading-tight">
                Compare MODIS & VIIRS observations
              </p>
            </div>
          </button>

          {/* Continuity Lab */}
          <button
            onClick={() => navigate('/continuity-lab')}
            className="text-left bg-[#FFF0E6] hover:bg-[#FFE5D4] border border-orange-100 rounded-xl p-3 flex flex-col justify-between transition-all group shadow-xs"
          >
            <div className="flex items-start justify-between w-full mb-1">
              <Layers className="w-6 h-6 text-[#EA580C]" />
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-orange-700 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="text-[13.5px] font-bold text-[#0B1528] leading-tight mb-0.5">
                Continuity Lab
              </h3>
              <p className="text-[10.5px] text-slate-600 leading-tight">
                Remove a satellite and measure observation impact
              </p>
            </div>
          </button>
        </div>

        {/* Bottom Full-width Event Explorer */}
        <button
          onClick={() => navigate('/event-explorer')}
          className="text-left bg-[#F0F4F9] hover:bg-[#E5ECF4] border border-slate-200/80 rounded-xl p-3 flex items-center justify-between transition-all group shadow-xs"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200/60 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#0B1528]" />
            </div>
            <div>
              <h3 className="text-[13.5px] font-bold text-[#0B1528] leading-tight">
                Event Explorer
              </h3>
              <p className="text-[10.5px] text-slate-600 leading-tight mt-0.5">
                View and analyze individual fire events
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
        </button>
      </div>
    </div>
  );
};
