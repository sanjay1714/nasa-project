import React, { useState } from 'react';
import { FireMap } from '../components/FireMap';
import { FilterBar } from '../components/FilterBar';
import { Map, Layers, Sliders, Info } from 'lucide-react';
import { SatelliteId } from '../types';

export const FireMapPage: React.FC = () => {
  const [satellite, setSatellite] = useState<SatelliteId>('all');

  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <Map className="w-5 h-5 text-teal-600" />
            <h1 className="text-2xl font-bold text-[#0F1E36]">Interactive Fire Map</h1>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Full geospatial viewport of synchronized Terra, Aqua, Suomi-NPP, NOAA-20, and NOAA-21 active fire detections.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 shadow-xs flex items-center space-x-1.5">
            <Sliders className="w-3.5 h-3.5 text-teal-600" />
            <span>Harmonized Resolution: 375m & 1km</span>
          </div>
        </div>
      </div>

      <FilterBar />

      <div className="h-[600px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <FireMap selectedSatellite={satellite} onSatelliteChange={setSatellite} />
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-start space-x-3 text-xs text-slate-600">
        <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-900">NASA FIRMS Sensor Harmonization:</span> Spatial clustering accounts for footprint differences between MODIS (1 km at nadir) and VIIRS (375 m I-bands). Detections within a 15-minute observation window and 1 km radius are clustered as co-observed fire events.
        </div>
      </div>
    </div>
  );
};
