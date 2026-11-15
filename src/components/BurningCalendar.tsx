import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { CALENDAR_DAYS } from '../data/mockData';
import { DayActivity } from '../types';

interface BurningCalendarProps {
  onSelectDate?: (day: DayActivity) => void;
}

export const BurningCalendar: React.FC<BurningCalendarProps> = ({ onSelectDate }) => {
  const [selectedDay, setSelectedDay] = useState<number>(14);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Precise heatmap styling matching the reference screenshot
  const getCellBg = (item: DayActivity) => {
    if (!item.isCurrentMonth) {
      return 'bg-slate-100/80 text-slate-400';
    }
    if (item.day === 14) {
      return 'bg-white text-slate-800 border-2 border-cyan-500 font-extrabold shadow-xs';
    }
    switch (item.level) {
      case 4:
        return 'bg-[#F97316] text-white font-bold'; // Deep vibrant orange
      case 3:
        return 'bg-[#FDBA74] text-slate-900 font-medium'; // Warm peach
      case 2:
        return 'bg-[#FED7AA] text-slate-900 font-medium'; // Light peach
      case 1:
        return 'bg-[#FFEDD5] text-slate-800'; // Very pale peach
      default:
        return 'bg-white text-slate-700';
    }
  };

  const handleDayClick = (item: DayActivity) => {
    if (item.isCurrentMonth) {
      setSelectedDay(item.day);
      onSelectDate?.(item);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between select-none">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <CalendarIcon className="w-5 h-5 text-[#0B1528]" />
          <h2 className="text-[17px] font-bold text-[#0B1528]">Burning Activity Calendar</h2>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <button className="p-0.5 rounded hover:bg-slate-100 text-slate-600 transition-colors">
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>
          <span className="text-[14px] font-bold text-[#0B1528]">January 2025</span>
          <button className="p-0.5 rounded hover:bg-slate-100 text-slate-600 transition-colors">
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Calendar Grid + Heatmap Legend */}
      <div className="flex items-start justify-between gap-2">
        {/* Days Table */}
        <div className="flex-1">
          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {daysOfWeek.map((d) => (
              <span key={d} className="text-[11px] font-semibold text-slate-600">
                {d}
              </span>
            ))}
          </div>

          {/* Days Cells (5 rows of 7 days) */}
          <div className="grid grid-cols-7 gap-1">
            {CALENDAR_DAYS.map((item, index) => {
              return (
                <button
                  key={`cal-${index}`}
                  onClick={() => handleDayClick(item)}
                  className={`h-7 sm:h-7.5 flex items-center justify-center text-xs rounded transition-all ${getCellBg(
                    item
                  )}`}
                >
                  <span>{item.day}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Activity Heatmap Vertical Legend */}
        <div className="flex flex-col items-center justify-between h-36 pl-2.5 pt-0.5 select-none">
          <span className="text-[10px] font-medium text-slate-600">Activity</span>
          <span className="text-[10px] font-bold text-red-500">High</span>
          {/* Vertical gradient bar */}
          <div className="w-2.5 h-20 rounded-full bg-gradient-to-b from-[#EA580C] via-[#FDBA74] to-[#FFF7ED] border border-slate-200"></div>
          <span className="text-[10px] font-medium text-slate-600">Low</span>
        </div>
      </div>
    </div>
  );
};
