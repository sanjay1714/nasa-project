import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { FireMapPage } from './pages/FireMapPage';
import { FireCalendarPage } from './pages/FireCalendarPage';
import { ContinuityLab } from './pages/ContinuityLab';
import { AgreementLab } from './pages/AgreementLab';
import { EventExplorer } from './pages/EventExplorer';
import { DataDownload } from './pages/DataDownload';
import { ApiAccess } from './pages/ApiAccess';
import { Methodology } from './pages/Methodology';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08101E] flex flex-col font-sans">
      {/* 1. Master Exact Header */}
      <Header />

      {/* 2. Main Workspace: Sidebar + Route Views */}
      <div className="flex flex-1 relative bg-[#EEF2F6]">
        {/* Left Dark Navy Sidebar */}
        <Sidebar />

        {/* Right Dashboard Body */}
        <main className="flex-1 p-3 sm:p-4 overflow-y-auto min-h-[calc(100vh-51px)] bg-[#EEF2F6]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fire-map" element={<FireMapPage />} />
            <Route path="/fire-calendar" element={<FireCalendarPage />} />
            <Route path="/continuity-lab" element={<ContinuityLab />} />
            <Route path="/agreement-lab" element={<AgreementLab />} />
            <Route path="/event-explorer" element={<EventExplorer />} />
            <Route path="/research-tools/download" element={<DataDownload />} />
            <Route path="/research-tools/api" element={<ApiAccess />} />
            <Route path="/research-tools/methodology" element={<Methodology />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
