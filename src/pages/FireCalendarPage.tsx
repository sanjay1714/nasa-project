import React, { useState } from 'react';
import { BurningCalendar } from '../components/BurningCalendar';
import { Calendar, BarChart2, Flame, ArrowUpRight } from 'lucide-react';
import { CALENDAR_DAYS } from '../data/mockData';
import { DayActivity } from '../types';

export const FireCalendarPage: React.FC = () => {
  const [selectedDayData, setSelectedDayData] = useState<DayActivity | null>(CALENDAR_DAYS.find(d => d.day === 14) || null);

  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-[#0F1E36]" />
          <h1 className="text-2xl font-bold text-[#0F1E36]">Burning Activity Calendar</h1>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Temporal distribution and multi-sensor fire detection frequency over time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7">
          <BurningCalendar onSelectDate={setSelectedDayData} />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-[#0F1E36] mb-3 flex items-center space-x-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>Day Breakdown — January {selectedDayData?.day || 14}, 2025</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
                <span className="text-[11px] text-orange-700 font-medium">Recorded Hotspots</span>
                <div className="text-xl font-bold text-orange-950 mt-1">
                  {selectedDayData?.count || 420} fires
                </div>
              </div>
              <div className="bg-teal-50 rounded-xl p-3 border border-teal-100">
                <span className="text-[11px] text-teal-700 font-medium">Activity Category</span>
                <div className="text-xl font-bold text-teal-950 mt-1">
                  {selectedDayData?.level === 4 ? 'Extreme Peak' : 'Elevated'}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">VIIRS NOAA-20 Overpass</span>
                <span className="font-semibold text-slate-800">142 detections</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">VIIRS Suomi-NPP Overpass</span>
                <span className="font-semibold text-slate-800">118 detections</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">VIIRS NOAA-21 Overpass</span>
                <span className="font-semibold text-slate-800">94 detections</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">MODIS Aqua Overpass</span>
                <span className="font-semibold text-slate-800">46 detections</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">MODIS Terra Overpass</span>
                <span className="font-semibold text-slate-800">20 detections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
