import React, { useState } from 'react';
import { Network, Sliders, CheckCircle, AlertCircle, ArrowRightLeft } from 'lucide-react';

export const AgreementLab: React.FC = () => {
  const [spatialDistance, setSpatialDistance] = useState<number>(1000);
  const [timeWindow, setTimeWindow] = useState<number>(30);
  const [confidenceFilter, setConfidenceFilter] = useState<'all' | 'high'>('high');

  const calculatedAgreement = Math.min(
    96,
    Math.round(75 + (spatialDistance / 100) * 1.5 + (timeWindow / 10) * 1.2)
  );

  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <Network className="w-5 h-5 text-purple-600" />
          <h1 className="text-2xl font-bold text-[#0F1E36]">Agreement Lab</h1>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Harmonization concordance analysis between MODIS and VIIRS active-fire products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Matching Controls */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-[#0F1E36] flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-purple-600" />
            <span>Harmonization Parameters</span>
          </h2>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>Spatial Matching Buffer</span>
              <span className="text-purple-700">{spatialDistance} meters</span>
            </div>
            <input
              type="range"
              min="250"
              max="3000"
              step="250"
              value={spatialDistance}
              onChange={(e) => setSpatialDistance(Number(e.target.value))}
              className="w-full accent-purple-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>250m (Sub-pixel)</span>
              <span>1000m (MODIS Nadir)</span>
              <span>3000m</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>Coincidence Time Window</span>
              <span className="text-purple-700">{timeWindow} minutes</span>
            </div>
            <input
              type="range"
              min="5"
              max="90"
              step="5"
              value={timeWindow}
              onChange={(e) => setTimeWindow(Number(e.target.value))}
              className="w-full accent-purple-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>5 min (Strict)</span>
              <span>30 min (Nominal)</span>
              <span>90 min</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-700 block mb-2">Confidence Filter</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setConfidenceFilter('high')}
                className={`flex-1 py-1.5 text-xs rounded-lg font-semibold transition-all ${
                  confidenceFilter === 'high'
                    ? 'bg-purple-100 text-purple-900 border border-purple-300'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                High Confidence Only
              </button>
              <button
                onClick={() => setConfidenceFilter('all')}
                className={`flex-1 py-1.5 text-xs rounded-lg font-semibold transition-all ${
                  confidenceFilter === 'all'
                    ? 'bg-purple-100 text-purple-900 border border-purple-300'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                All Confidence Levels
              </button>
            </div>
          </div>
        </div>

        {/* Right: Results & Concordance Matrix */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1E36] mb-3 flex items-center space-x-2">
              <ArrowRightLeft className="w-4 h-4 text-purple-600" />
              <span>Cross-Platform Agreement Concordance</span>
            </h2>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
                <span className="text-[11px] text-purple-700 font-medium">Harmonized Concordance</span>
                <div className="text-2xl font-extrabold text-purple-950 mt-1">
                  {calculatedAgreement}%
                </div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                <span className="text-[11px] text-emerald-700 font-medium">Co-Observed Clusters</span>
                <div className="text-2xl font-extrabold text-emerald-950 mt-1">
                  4,182
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                <span className="text-[11px] text-amber-700 font-medium">Sub-Resolution VIIRS Only</span>
                <div className="text-2xl font-extrabold text-amber-950 mt-1">
                  2,410
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              VIIRS 375m I-bands resolve cooler smoldering fire perimeters and smaller flaming fronts that remain undetectable to MODIS 1 km pixels. At {spatialDistance}m spatial matching, {calculatedAgreement}% of eligible MODIS detections are confirmed by a coincident VIIRS overpass.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
