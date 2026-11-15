import React, { useState } from 'react';
import { Layers, AlertTriangle, ShieldCheck, RefreshCw, BarChart2, CheckCircle2 } from 'lucide-react';
import { SATELLITE_DATA, TOTAL_OBSERVATIONS } from '../data/mockData';

export const ContinuityLab: React.FC = () => {
  // Track disabled satellites
  const [disabledSats, setDisabledSats] = useState<string[]>([]);

  const toggleSatellite = (satName: string) => {
    if (disabledSats.includes(satName)) {
      setDisabledSats(disabledSats.filter(s => s !== satName));
    } else {
      setDisabledSats([...disabledSats, satName]);
    }
  };

  const activeSats = SATELLITE_DATA.filter(s => !disabledSats.includes(s.name));
  const lostObservations = disabledSats.reduce((acc, satName) => {
    const found = SATELLITE_DATA.find(s => s.name === satName);
    return acc + (found ? found.value : 0);
  }, 0);

  const remainingObservations = TOTAL_OBSERVATIONS - lostObservations;
  const coveragePercent = Math.round((remainingObservations / TOTAL_OBSERVATIONS) * 100);

  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-orange-600" />
          <h1 className="text-2xl font-bold text-[#0F1E36]">Continuity Lab</h1>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Simulate orbital sensor retirement or outage and quantify fire observation degradation.
        </p>
      </div>

      {/* Continuity Health Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">Active Constellation</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {activeSats.length} / 5 <span className="text-xs text-slate-400 font-normal">Sensors</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">Effective Coverage</span>
          <div className={`text-2xl font-bold mt-1 ${coveragePercent < 70 ? 'text-red-600' : 'text-teal-600'}`}>
            {coveragePercent}%
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">Preserved Observations</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {remainingObservations.toLocaleString()}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">Detection Gap Risk</span>
          <div className="text-2xl font-bold mt-1 text-slate-900 flex items-center space-x-1.5">
            {disabledSats.length === 0 ? (
              <span className="text-emerald-600 flex items-center text-lg font-bold"><ShieldCheck className="w-5 h-5 mr-1" /> Low (Nominal)</span>
            ) : disabledSats.length <= 2 ? (
              <span className="text-amber-600 flex items-center text-lg font-bold"><AlertTriangle className="w-5 h-5 mr-1" /> Moderate Impact</span>
            ) : (
              <span className="text-red-600 flex items-center text-lg font-bold"><AlertTriangle className="w-5 h-5 mr-1" /> Critical Gap</span>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Satellite Removal Simulation */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#0F1E36]">
            Toggle Satellites to Test Continuity
          </h2>
          {disabledSats.length > 0 && (
            <button
              onClick={() => setDisabledSats([])}
              className="text-xs text-teal-600 font-semibold flex items-center space-x-1 hover:text-teal-800"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All to Active</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {SATELLITE_DATA.map((sat) => {
            const isRemoved = disabledSats.includes(sat.name);
            return (
              <div
                key={sat.name}
                onClick={() => toggleSatellite(sat.name)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isRemoved
                    ? 'border-red-300 bg-red-50/50 opacity-60'
                    : 'border-slate-200 hover:border-teal-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: sat.color }}
                  ></span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isRemoved ? 'bg-red-200 text-red-800' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {isRemoved ? 'DEACTIVATED' : 'ONLINE'}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{sat.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {sat.value.toLocaleString()} observations
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
