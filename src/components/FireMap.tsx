import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SatelliteId } from '../types';

interface FireMapProps {
  selectedSatellite?: SatelliteId;
  onSatelliteChange?: (sat: SatelliteId) => void;
  onSelectObservation?: (obs: any) => void;
}

export const FireMap: React.FC<FireMapProps> = ({
  selectedSatellite = 'all',
  onSatelliteChange
}) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSat, setSelectedSat] = useState<string>('MODIS + VIIRS (All)');

  const satellitesList = [
    'MODIS + VIIRS (All)',
    'Terra (MODIS)',
    'Aqua (MODIS)',
    'S-NPP (VIIRS)',
    'NOAA-20 (VIIRS)',
    'NOAA-21 (VIIRS)',
  ];

  const handleSelectSat = (sat: string) => {
    setSelectedSat(sat);
    setDropdownOpen(false);
    if (onSatelliteChange) {
      if (sat === 'MODIS + VIIRS (All)') onSatelliteChange('all');
      else onSatelliteChange(sat as SatelliteId);
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] bg-[#0B1528] select-none">
      {/* High-Fidelity Satellite Map Display from Master Reference */}
      <img
        src="/assets/fire_map_satellite.png"
        alt="Harmonized Fire Observation Satellite Map"
        className="w-full h-auto object-cover block"
      />

      {/* Interactive Overlay Layer: Clickable Hotspot Hitboxes & Interactive Elements */}
      {/* 1. Clickable View in Event Explorer action hotspot over popup link */}
      <button
        onClick={() => navigate('/event-explorer')}
        title="Open Event Explorer"
        className="absolute left-[34%] sm:left-[35.5%] top-[70%] sm:top-[72%] w-36 h-6 z-20 cursor-pointer rounded hover:bg-cyan-400/10 transition-colors"
      />

      {/* 2. Top-Right Satellite Selector Interactive Dropdown Hotspot */}
      <div className="absolute right-[5.5%] top-[5.5%] z-30">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          title="Filter by Satellite"
          className="w-48 h-8 rounded-lg cursor-pointer opacity-0 hover:opacity-10 bg-white/20 transition-opacity"
        />

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-1.5 w-52 bg-white rounded-xl shadow-2xl border border-slate-200 py-1.5 z-50 text-slate-800">
            {satellitesList.map((sat) => (
              <button
                key={sat}
                onClick={() => handleSelectSat(sat)}
                className={`w-full text-left px-3.5 py-1.5 text-xs hover:bg-slate-100 flex items-center justify-between ${
                  selectedSat === sat ? 'text-teal-600 font-bold bg-teal-50' : 'text-slate-700 font-medium'
                }`}
              >
                <span>{sat}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Top-Left Zoom / Center Controls Hitboxes */}
      <button
        onClick={() => console.log('Zoom in')}
        title="Zoom In"
        className="absolute left-[2.2%] top-[5.5%] w-7 h-7 rounded-t-lg cursor-pointer opacity-0 hover:opacity-20 bg-black transition-opacity z-20"
      />
      <button
        onClick={() => console.log('Zoom out')}
        title="Zoom Out"
        className="absolute left-[2.2%] top-[12%] w-7 h-7 cursor-pointer opacity-0 hover:opacity-20 bg-black transition-opacity z-20"
      />
      <button
        onClick={() => console.log('Center location')}
        title="Center Location"
        className="absolute left-[2.2%] top-[18.5%] w-7 h-7 cursor-pointer opacity-0 hover:opacity-20 bg-black transition-opacity z-20"
      />
      <button
        onClick={() => console.log('Toggle layers')}
        title="Map Layers"
        className="absolute left-[2.2%] top-[25%] w-7 h-7 rounded-b-lg cursor-pointer opacity-0 hover:opacity-20 bg-black transition-opacity z-20"
      />
    </div>
  );
};
