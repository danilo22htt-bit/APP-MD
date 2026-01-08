
import React, { useState } from 'react';
import { View, Task, CavePhase, CaveSetup } from './types';
import { NAV_ITEMS, CAVE_PHASES, INITIAL_ROUTINE } from './constants';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CaveModeSelection from './components/CaveModeSelection';
import RoutinePlanner from './components/RoutinePlanner';
import CaveGuide from './components/CaveGuide';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.OVERVIEW);
  const [caveSetup, setCaveSetup] = useState<CaveSetup | null>(null);
  const [routine, setRoutine] = useState<Task[]>(INITIAL_ROUTINE);

  const handleActivateCave = (phase: CavePhase, goals: string[]) => {
    setCaveSetup({
      phase,
      goals,
      active: true,
      startDate: new Date().toISOString()
    });
    setActiveView(View.OVERVIEW);
  };

  const renderContent = () => {
    switch (activeView) {
      case View.OVERVIEW:
        return <Dashboard routine={routine} caveSetup={caveSetup} />;
      case View.CAVE_MODE:
        return <CaveModeSelection currentSetup={caveSetup} onActivate={handleActivateCave} />;
      case View.ROUTINE:
        return <RoutinePlanner routine={routine} setRoutine={setRoutine} />;
      case View.GUIDE:
        return <CaveGuide />;
      case View.HISTORY:
        return (
          <div className="flex flex-col items-center justify-center h-full text-zinc-500 animate-pulse">
            <p>Estatísticas de evolução em desenvolvimento...</p>
          </div>
        );
      default:
        return <Dashboard routine={routine} caveSetup={caveSetup} />;
    }
  };

  return (
    <div className="flex h-screen bg-black text-white selection:bg-emerald-500/30">
      <Sidebar activeView={activeView} onNavigate={setActiveView} />
      
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
