import React from 'react';
import { BookOpen, GitMerge, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-teal-600" />
          <h1 className="text-2xl font-bold text-[#0F1E36]">Scientific Methodology</h1>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Mathematical harmonization principles for bridging MODIS (1km) and VIIRS (375m) hotspot records.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-teal-600 font-bold text-sm">
            <GitMerge className="w-4 h-4" />
            <span>Spatial Footprint Normalization</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            MODIS pixels grow from 1 km × 1 km at nadir to nearly 2 km × 4.8 km at scan edge due to panoramic distortion. In contrast, VIIRS incorporates active pixel aggregation to maintain near-constant 375 m resolution across the entire 3,000 km swath. Our pipeline applies an elliptical Gaussian weighting kernel to map VIIRS sub-pixel detections into equivalent MODIS detection probabilities.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-purple-600 font-bold text-sm">
            <Cpu className="w-4 h-4" />
            <span>Spatiotemporal Clustering & Co-observation</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Detections from consecutive or overlapping overpasses (e.g. Terra 10:30 AM local, Suomi-NPP 1:30 PM local) are grouped using a dynamic DBSCAN algorithm with ε = 1,000m and Δt = 30 minutes. This identifies persisting fire clusters while isolating transient agricultural burning.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-orange-600 font-bold text-sm">
            <ShieldAlert className="w-4 h-4" />
            <span>Confidence Calibration</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            MODIS expresses detection quality as a percentage (0–100%), whereas VIIRS uses discrete categorical states (Low, Nominal, High). We map VIIRS classes to probabilistic boundaries (Low &lt; 30%, Nominal 30–79%, High ≥ 80%) calibrated against fire radiative power (FRP) and background thermal anomaly contrast.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-emerald-600 font-bold text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Continuity & Gap Compensation</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            To ensure unbroken multi-decadal fire records as Terra and Aqua complete their orbital drifts, a transfer function models historical MODIS-equivalent detection frequency solely from VIIRS overpasses with an R² of 0.94 across tropical and temperate biomes.
          </p>
        </div>
      </div>
    </div>
  );
};
