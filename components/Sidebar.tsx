
import React from 'react';
import { View } from '../types';
import { NAV_ITEMS } from '../constants';
import { Shield } from 'lucide-react';

interface SidebarProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate }) => {
  return (
    <aside className="w-20 md:w-64 border-r border-zinc-900 flex flex-col items-center md:items-stretch h-full bg-black">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <Shield className="text-black w-6 h-6" />
        </div>
        <span className="hidden md:block font-bold text-xl tracking-tight uppercase italic">
          Arben<span className="text-emerald-500">.</span>
        </span>
      </div>

      <nav className="flex-1 px-3 space-y-2 mt-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as View)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
              activeView === item.id 
                ? 'bg-zinc-900 text-white border-l-4 border-emerald-500 shadow-xl' 
                : 'text-zinc-500 hover:text-white hover:bg-zinc-900/50'
            }`}
          >
            <div className={`transition-transform duration-300 ${activeView === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
              {item.icon}
            </div>
            <span className="hidden md:block font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-zinc-900 mt-auto">
        <div className="hidden md:block">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Modo Ativo</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
