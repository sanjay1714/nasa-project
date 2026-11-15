import React, { useState } from 'react';
import { Search, Crosshair, Globe, Calendar, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  onSearchChange?: (val: string) => void;
  onRegionChange?: (region: string) => void;
  onDateRangeClick?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onSearchChange,
  onRegionChange,
  onDateRangeClick
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('Global');
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

  const regions = ['Global', 'South Asia (India)', 'Southeast Asia', 'North America', 'South America', 'Europe', 'Africa', 'Australia'];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearchChange?.(e.target.value);
  };

  const handleSelectRegion = (r: string) => {
    setRegion(r);
    setIsRegionDropdownOpen(false);
    onRegionChange?.(r);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 my-2 select-none">
      {/* Search Input Box */}
      <div className="flex-1 relative flex items-center bg-white rounded-xl border border-slate-300/80 shadow-xs px-3.5 py-2 transition-all focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
        <Search className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search country, state, city, or location (e.g., Chennai, India)"
          className="w-full bg-transparent text-slate-800 text-[13px] placeholder:text-slate-400 focus:outline-none"
        />
        <button
          onClick={() => {
            setSearchTerm('Chennai, India');
            onSearchChange?.('Chennai, India');
          }}
          title="Current target / GPS location"
          className="text-slate-400 hover:text-slate-700 ml-2 p-0.5 rounded transition-colors"
        >
          <Crosshair className="w-4 h-4 stroke-[1.8]" />
        </button>
      </div>

      {/* Region Selector */}
      <div className="relative shrink-0 flex items-center space-x-2">
        <span className="text-[12.5px] text-slate-700 font-medium">Region</span>
        <button
          onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
          className="flex items-center space-x-1.5 bg-white rounded-xl border border-slate-300/80 shadow-xs px-3 py-2 text-xs font-semibold text-slate-800 hover:text-slate-950 transition-colors"
        >
          <Globe className="w-3.5 h-3.5 text-slate-500" />
          <span>{region}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        {isRegionDropdownOpen && (
          <div className="absolute right-0 top-full mt-1.5 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => handleSelectRegion(r)}
                className={`w-full text-left px-3.5 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${
                  region === r ? 'font-semibold text-teal-600 bg-teal-50/50' : 'text-slate-700'
                }`}
              >
                <span>{r}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Study Period Selector */}
      <div className="shrink-0 flex items-center space-x-2">
        <span className="text-[12.5px] text-slate-700 font-medium">Study Period</span>
        <button
          onClick={onDateRangeClick}
          className="flex items-center space-x-1.5 bg-white rounded-xl border border-slate-300/80 shadow-xs px-3 py-2 text-xs font-semibold text-slate-800 hover:text-slate-950 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          <span>Jan 1 – Jan 31, 2025</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    </div>
  );
};
