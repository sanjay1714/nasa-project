import React, { useState } from 'react';
import { MainHeader } from '../components/MainHeader';
import { FilterBar } from '../components/FilterBar';
import { SummaryCards } from '../components/SummaryCards';
import { FireMap } from '../components/FireMap';
import { QuickAnalysis } from '../components/QuickAnalysis';
import { BurningCalendar } from '../components/BurningCalendar';
import { ResearchModules } from '../components/ResearchModules';
import { ResearcherTools } from '../components/ResearcherTools';
import { UserMode, SatelliteId, FireObservation } from '../types';

export const Home: React.FC = () => {
  // Researcher Mode active by default as shown in reference screenshot
  const [userMode, setUserMode] = useState<UserMode>('researcher');
  const [selectedSatellite, setSelectedSatellite] = useState<SatelliteId>('all');
  const [activeRegion, setActiveRegion] = useState<string>('Global');

  const handleSelectObservation = (obs: FireObservation) => {
    console.log('Selected observation:', obs);
  };

  return (
    <div className="space-y-2.5 pb-4 max-w-[1580px] mx-auto select-none">
      {/* 1. Main Dashboard Header */}
      <MainHeader mode={userMode} onModeChange={setUserMode} />

      {/* 2. Search & Filter Bar */}
      <FilterBar
        onRegionChange={setActiveRegion}
        onSearchChange={(q) => console.log('Search query:', q)}
      />

      {/* 3. Top 4 Summary Cards */}
      <SummaryCards
        totalObservations={12764}
        satelliteCount={5}
        studyPeriod="Jan 1 – Jan 31, 2025"
        region={activeRegion}
      />

      {/* 4. Large Fire Observation Map + Quick Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <FireMap
            selectedSatellite={selectedSatellite}
            onSatelliteChange={setSelectedSatellite}
            onSelectObservation={handleSelectObservation}
          />
        </div>

        <div className="lg:col-span-4 flex flex-col">
          <QuickAnalysis />
        </div>
      </div>

      {/* 5. Bottom 3 Cards: Burning Activity Calendar, Research Modules, For Researchers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
        <BurningCalendar />
        <ResearchModules />
        <ResearcherTools />
      </div>
    </div>
  );
};
