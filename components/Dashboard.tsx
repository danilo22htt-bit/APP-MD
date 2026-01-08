
import React from 'react';
import { CaveSetup, Task } from '../types';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { Trophy, Zap, Target, TrendingUp, CheckCircle, Flag, Star } from 'lucide-react';

interface DashboardProps {
  routine: Task[];
  caveSetup: CaveSetup | null;
}

const mockData = [
  { name: 'Seg', focus: 65 },
  { name: 'Ter', focus: 59 },
  { name: 'Qua', focus: 80 },
  { name: 'Qui', focus: 81 },
  { name: 'Sex', focus: 56 },
  { name: 'Sáb', focus: 95 },
  { name: 'Dom', focus: 88 },
];

const Dashboard: React.FC<DashboardProps> = ({ routine, caveSetup }) => {
  const completedTasks = routine.filter(t => t.completed).length;
  const progress = routine.length > 0 ? Math.round((completedTasks / routine.length) * 100) : 0;

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Agente em Evolução</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            CENTRO DE <span className="text-emerald-500 uppercase">PODER</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 flex items-center gap-4 min-w-[180px] backdrop-blur-md">
            <div className="bg-emerald-500 text-black p-2 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Execução</p>
              <p className="text-2xl font-black">{progress}%</p>
            </div>
          </div>
        </div>
      </header>

      {/* Objetivos Ativos (Os 3 Pilares) */}
      {caveSetup && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Flag className="text-emerald-500 w-5 h-5" />
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">Pilares da Missão Atual</h2>
            </div>
            <div className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
              <span className="text-[10px] font-black text-emerald-500 uppercase">{caveSetup.phase.days} Dias de Isolamento</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caveSetup.goals.map((goal, idx) => (
              <div key={idx} className="group relative bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2rem] overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="absolute -right-4 -top-4 text-emerald-500/5 rotate-12 transition-transform group-hover:scale-150">
                  <Star className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-black border border-zinc-800 flex items-center justify-center text-emerald-500 font-black mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <p className="text-lg font-bold text-zinc-100 leading-tight mb-2">{goal}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] uppercase font-black text-zinc-600 tracking-widest">Alvo Prioritário</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Phase Progress Card */}
        <div className="lg:col-span-4 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all">
          <div>
            <div className="flex items-center justify-between mb-10">
               <div className="p-3 bg-black rounded-2xl border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                 <Target className="text-emerald-500 w-6 h-6" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Fase Ativa</span>
            </div>
            {caveSetup ? (
              <div className="space-y-8">
                <div>
                  <p className="text-6xl font-black tracking-tighter leading-none mb-2">{caveSetup.phase.days}</p>
                  <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest">{caveSetup.phase.label}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase text-zinc-500">
                    <span>Evolução</span>
                    <span className="text-emerald-500">1%</span>
                  </div>
                  <div className="w-full bg-black border border-zinc-800 rounded-full h-3 p-0.5 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[1%] shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-zinc-500 text-sm font-medium italic mb-6">Nenhum protocolo ativo.</p>
                <button className="w-full text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/5 border border-emerald-500/20 py-4 rounded-2xl hover:bg-emerald-500 hover:text-black transition-all">Ativar Modo Caverna</button>
              </div>
            )}
          </div>
          <div className="mt-10 pt-8 border-t border-zinc-800 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center">
                 <Trophy className="w-4 h-4 text-emerald-500" />
               </div>
               <p className="text-xs text-zinc-400 font-bold uppercase tracking-tight">Dia 01 / {caveSetup?.phase.days || '--'}</p>
             </div>
             <CheckCircle className="w-5 h-5 text-zinc-800" />
          </div>
        </div>

        {/* Intensity Graph Card */}
        <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-emerald-500 w-6 h-6" />
              <h3 className="text-xl font-black uppercase tracking-tight">Sinal de Consistência</h3>
            </div>
            <div className="flex gap-1">
               {[1, 2, 3].map(i => <div key={i} className="w-1 h-4 bg-emerald-500 rounded-full opacity-20" style={{ animation: `pulse 1s ease-in-out infinite ${i * 0.2}s` }}></div>)}
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="focus" 
                  stroke="#10b981" 
                  strokeWidth={5} 
                  fillOpacity={1} 
                  fill="url(#colorFocus)" 
                  animationDuration={2500}
                />
                <XAxis 
                  dataKey="name" 
                  stroke="#27272a" 
                  fontSize={10} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ dy: 15, fontWeight: 'bold' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#000000', 
                    border: '1px solid #27272a', 
                    borderRadius: '20px',
                    fontSize: '12px',
                    padding: '12px'
                  }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                  cursor={{ stroke: '#27272a', strokeWidth: 1 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
