import React from 'react';
import { GraduationCap, CheckCircle2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ResearcherTools: React.FC = () => {
  const navigate = useNavigate();

  const researcherItems = [
    {
      title: 'Download processed data (CSV / Parquet)',
      path: '/research-tools/download',
    },
    {
      title: 'Access analysis API',
      path: '/research-tools/api',
    },
    {
      title: 'Adjust matching & clustering parameters',
      path: '/agreement-lab',
    },
    {
      title: 'Reproduce methodology',
      path: '/research-tools/methodology',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-1.5">
        <GraduationCap className="w-5 h-5 text-[#0B1528]" />
        <h2 className="text-[17px] font-bold text-[#0B1528]">For Researchers</h2>
      </div>

      {/* 4 Rows */}
      <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-around">
        {researcherItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="w-full flex items-center justify-between py-2 text-left group hover:bg-slate-50/70 px-1 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100 shrink-0" />
              <span className="text-xs font-semibold text-[#0B1528] group-hover:text-teal-700 transition-colors">
                {item.title}
              </span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </button>
        ))}
      </div>
    </div>
  );
};
