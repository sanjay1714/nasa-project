import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { SATELLITE_DATA, TOTAL_OBSERVATIONS } from '../data/mockData';

export const QuickAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'satellite' | 'trend'>('overview');

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between select-none">
      {/* Top Header */}
      <div>
        <div className="flex items-center space-x-2 mb-2.5">
          <BarChart3 className="w-5 h-5 text-teal-500" />
          <h2 className="text-[17px] font-bold text-[#0B1528]">Quick Analysis</h2>
        </div>

        {/* 3 Tabs */}
        <div className="flex items-center space-x-1.5 p-1 bg-slate-100/70 rounded-lg w-fit mb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-[#D6F4F5] text-[#0A646C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('satellite')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'satellite'
                ? 'bg-[#D6F4F5] text-[#0A646C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            By Satellite
          </button>
          <button
            onClick={() => setActiveTab('trend')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'trend'
                ? 'bg-[#D6F4F5] text-[#0A646C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Trend
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 flex items-center justify-center my-auto">
        {activeTab === 'overview' && (
          <div className="w-full flex items-center justify-center gap-3">
            {/* Donut Chart with Center Text */}
            <div className="relative w-44 h-44 shrink-0 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={SATELLITE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={2}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {SATELLITE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                <span className="text-[20px] font-extrabold text-[#0B1528] leading-tight">
                  {TOTAL_OBSERVATIONS.toLocaleString()}
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  Observations
                </span>
              </div>
            </div>

            {/* Satellite Legend */}
            <div className="space-y-2 select-none">
              {SATELLITE_DATA.map((item) => (
                <div key={item.name} className="flex items-center space-x-2 text-xs">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="text-slate-700 font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'satellite' && (
          <div className="w-full flex flex-col justify-center px-2 space-y-2">
            <span className="text-xs font-semibold text-slate-600 mb-1">Observations by Platform</span>
            {SATELLITE_DATA.map((item) => {
              const percent = Math.round((item.value / TOTAL_OBSERVATIONS) * 100);
              return (
                <div key={item.name} className="space-y-0.5">
                  <div className="flex justify-between text-[11px] font-medium text-slate-700">
                    <span>{item.name}</span>
                    <span>{item.value.toLocaleString()} ({percent}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${percent}%`, backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'trend' && (
          <div className="w-full py-4 text-center">
            <span className="text-xs font-semibold text-slate-600">Daily Observation Trend Peak</span>
            <div className="text-2xl font-bold text-orange-600 mt-2">Jan 14, 2025</div>
            <p className="text-xs text-slate-500 mt-1">420 harmonized hot spot detections recorded across network.</p>
          </div>
        )}
      </div>

      <div className="h-2"></div>
    </div>
  );
};
