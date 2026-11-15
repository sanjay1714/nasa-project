import React, { useState } from 'react';
import { Layers, Search, Filter, Flame, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { MOCK_FIRE_OBSERVATIONS } from '../data/mockData';
import { FireObservation } from '../types';

export const EventExplorer: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<FireObservation>(MOCK_FIRE_OBSERVATIONS[0]);

  const filteredEvents = MOCK_FIRE_OBSERVATIONS.filter(e =>
    e.satellite.toLowerCase().includes(filterQuery.toLowerCase()) ||
    e.location.toLowerCase().includes(filterQuery.toLowerCase()) ||
    e.dateTime.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-slate-800" />
          <h1 className="text-2xl font-bold text-[#0F1E36]">Event Explorer</h1>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Deep-dive inspection of synchronized single-fire events, FRP, confidence, and sensor overpasses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Events List */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col h-[600px]">
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter by satellite, coordinates, or date..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {filteredEvents.map((event) => {
              const isSelected = selectedEvent.id === event.id;
              return (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-teal-500 bg-teal-50/40 shadow-xs'
                      : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1.5">
                      <Flame className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-xs font-bold text-slate-900">{event.satellite}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        event.confidence === 'High'
                          ? 'bg-emerald-100 text-emerald-800'
                          : event.confidence === 'Medium'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {event.confidence} Conf.
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>{event.dateTime}</span>
                    <span className="font-mono text-slate-600">{event.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Event Detailed View */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between h-[600px]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <h3 className="text-base font-bold text-[#0F1E36]">Event #{selectedEvent.id}</h3>
              </div>
              <span className="text-xs px-2.5 py-1 bg-teal-100 text-teal-800 font-semibold rounded-md">
                Co-observed Hotspot
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] text-slate-500">Observing Instrument</span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedEvent.satellite}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] text-slate-500">Fire Radiative Power (FRP)</span>
                <div className="text-sm font-bold text-orange-600 mt-0.5">{selectedEvent.frp} MW</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] text-slate-500">Geodetic Location</span>
                <div className="text-sm font-bold font-mono text-slate-900 mt-0.5">{selectedEvent.location}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] text-slate-500">Observation UTC</span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedEvent.dateTime}</div>
              </div>
            </div>

            <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-2">
              <div className="font-semibold text-cyan-400">Harmonized Metadata Snapshot</div>
              <pre className="font-mono text-[11px] text-slate-300 overflow-x-auto">
{JSON.stringify({
  event_id: selectedEvent.id,
  satellite: selectedEvent.satellite,
  coordinates: { lat: selectedEvent.lat, lon: selectedEvent.lng },
  confidence: selectedEvent.confidence,
  confidence_score: selectedEvent.confidenceVal,
  frp_mw: selectedEvent.frp,
  harmonization_status: 'COINCIDENT_MATCH'
}, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
