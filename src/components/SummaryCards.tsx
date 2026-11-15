import React from 'react';
import { Flame, Layers, Calendar, Globe } from 'lucide-react';

interface SummaryCardsProps {
  totalObservations?: number;
  satelliteCount?: number;
  studyPeriod?: string;
  region?: string;
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({
  totalObservations = 12764,
  satelliteCount = 5,
  studyPeriod = 'Jan 1 – Jan 31, 2025',
  region = 'Global',
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-2 select-none">
      {/* Card 1: Total Observations */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_2px_6px_rgba(0,0,0,0.02)] flex items-center space-x-3.5 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-[#FFF3EB] flex items-center justify-center shrink-0">
          <Flame className="w-6 h-6 text-[#F97316] fill-[#F97316]" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-semibold text-slate-500">Total Observations</span>
          <span className="text-[23px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            {totalObservations.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Card 2: Satellites */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_2px_6px_rgba(0,0,0,0.02)] flex items-center space-x-3.5 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-[#EBF5FF] flex items-center justify-center shrink-0">
          <Layers className="w-6 h-6 text-[#2563EB]" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-semibold text-slate-500">Satellites (MODIS & VIIRS)</span>
          <span className="text-[23px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            {satelliteCount}
          </span>
        </div>
      </div>

      {/* Card 3: Study Period */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_2px_6px_rgba(0,0,0,0.02)] flex items-center space-x-3.5 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-[#F5EEFF] flex items-center justify-center shrink-0">
          <Calendar className="w-6 h-6 text-[#8B5CF6]" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-semibold text-slate-500">Study Period</span>
          <span className="text-[18px] font-extrabold text-[#0B1528] tracking-tight leading-tight truncate">
            {studyPeriod}
          </span>
        </div>
      </div>

      {/* Card 4: Region */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_2px_6px_rgba(0,0,0,0.02)] flex items-center space-x-3.5 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-[#E6FAF7] flex items-center justify-center shrink-0">
          <Globe className="w-6 h-6 text-[#0D9488]" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-semibold text-slate-500">Region</span>
          <span className="text-[23px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
            {region}
          </span>
        </div>
      </div>
    </div>
  );
};
