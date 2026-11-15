import React, { useState } from 'react';
import { Download, FileText, Database, Check, AlertCircle } from 'lucide-react';

export const DataDownload: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const datasets = [
    {
      title: 'Harmonized January 2025 Fire Ledger',
      format: 'CSV (Compressed GZ)',
      size: '28.4 MB',
      description: 'Unified MODIS & VIIRS active fire observations across South Asia and Indochina with cross-sensor confidence calibration.',
    },
    {
      title: 'Full Resolution Clustered Geoparquet',
      format: 'Apache Parquet',
      size: '14.2 MB',
      description: 'Spatial clusters with polygon convex hulls, FRP integrals, and individual overpass sensor attribution.',
    },
    {
      title: 'Satellite Continuity Degradation Metrics',
      format: 'JSON / CSV',
      size: '3.1 MB',
      description: 'Simulated gap analysis matrix evaluating Terra/Aqua de-orbit impact against VIIRS constellation continuity.',
    },
  ];

  const handleDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <Download className="w-5 h-5 text-teal-600" />
          <h1 className="text-2xl font-bold text-[#0F1E36]">Data Download Center</h1>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Export scientific-grade harmonized active-fire datasets in industry standard open formats.
        </p>
      </div>

      {downloadSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl flex items-center space-x-2 text-xs font-semibold">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Demo Data Mode: Initiated export for "{downloadSuccess}". (Download simulated successfully)</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {datasets.map((ds) => (
          <div key={ds.title} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg">
                  {ds.format}
                </span>
                <span className="text-xs text-slate-400 font-mono">{ds.size}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{ds.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{ds.description}</p>
            </div>

            <button
              onClick={() => handleDownload(ds.title)}
              className="w-full py-2 bg-[#0F1E36] hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center space-x-2 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Dataset</span>
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-start space-x-3 text-xs text-slate-500">
        <AlertCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-700">NASA FIRMS Open Data Policy:</span> Active fire products processed under NASA Space Apps Challenge 2026 Challenge 9 are released for research and non-commercial validation.
        </div>
      </div>
    </div>
  );
};
