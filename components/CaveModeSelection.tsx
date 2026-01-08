
import React, { useState } from 'react';
import { CavePhase, CaveSetup } from '../types';
import { CAVE_PHASES } from '../constants';
import { Check, ShieldCheck, Flame, Target, ChevronRight, Lock, Sparkles } from 'lucide-react';

interface CaveModeSelectionProps {
  currentSetup: CaveSetup | null;
  onActivate: (phase: CavePhase, goals: string[]) => void;
}

const CaveModeSelection: React.FC<CaveModeSelectionProps> = ({ currentSetup, onActivate }) => {
  const [selectedPhase, setSelectedPhase] = useState<CavePhase | null>(currentSetup?.phase || null);
  const [goals, setGoals] = useState<string[]>(currentSetup?.goals || ['', '', '']);

  const handleGoalChange = (index: number, value: string) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  const isFormValid = selectedPhase !== null && goals.every(g => g.trim().length >= 3);

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-8 duration-1000 pb-24">
      <header className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <Sparkles className="w-3 h-3 text-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Configuração de Protocolo</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[0.9]">
          PREPARE SUA <br />
          <span className="text-emerald-500 italic">ASCENSÃO.</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          O Modo Caverna não é apenas um timer. É uma declaração de guerra contra a sua versão comum. Selecione o tempo e defina seus alvos.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Step 1: Time selection */}
        <section className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 font-black text-sm">01</div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Ciclo de Intensidade</h2>
          </div>
          
          <div className="space-y-4">
            {CAVE_PHASES.map((phase) => {
              const isSelected = selectedPhase?.id === phase.id;
              return (
                <button 
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase)}
                  className={`w-full text-left relative transition-all duration-500 p-8 rounded-[2.5rem] border flex items-center justify-between group overflow-hidden ${
                    isSelected 
                      ? 'bg-emerald-500 border-emerald-500 text-black shadow-[0_20px_40px_rgba(16,185,129,0.2)]' 
                      : 'bg-zinc-900/50 border-zinc-800 text-white hover:border-zinc-700 hover:bg-zinc-900'
                  }`}
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-black text-emerald-500' : 'bg-zinc-800 text-zinc-500'
                    }`}>
                      {phase.days === 30 ? <ShieldCheck className="w-6 h-6" /> : phase.days === 60 ? <Flame className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black tracking-tighter">{phase.days} DIAS</h3>
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? 'text-black/70' : 'text-emerald-500'}`}>
                        {phase.label}
                      </p>
                    </div>
                  </div>
                  {isSelected && <Check className="w-6 h-6 text-black relative z-10" />}
                  
                  {/* Decorative background shape */}
                  <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full transition-all duration-700 ${isSelected ? 'bg-black/5 scale-150' : 'bg-zinc-800/20 scale-0'}`}></div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Goal declaration */}
        <section className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 font-black text-sm">02</div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Pilares de Conquista</h2>
          </div>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none">
                   <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${goal ? 'bg-emerald-500 border-emerald-500 text-black scale-110' : 'border-zinc-800 text-zinc-800'}`}>
                     <span className="text-[10px] font-black">{index + 1}</span>
                   </div>
                </div>
                <input 
                  type="text"
                  value={goal}
                  onChange={(e) => handleGoalChange(index, e.target.value)}
                  placeholder={`Defina seu objetivo #${index + 1}...`}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-[2rem] py-8 pl-16 pr-8 text-white text-lg focus:outline-none focus:border-emerald-500 focus:bg-zinc-900 transition-all placeholder:text-zinc-700 font-medium"
                />
                {goal && (
                   <div className="absolute right-6 top-1/2 -translate-y-1/2 animate-in fade-in zoom-in">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                   </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-3xl">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Mentalidade</h4>
               <p className="text-xs text-zinc-500 leading-relaxed italic">
                 "Não adicione tarefas, adicione marcos que mudam o seu jogo."
               </p>
            </div>
            <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-3xl flex items-center justify-center">
               <div className="text-center">
                 <p className="text-2xl font-black text-emerald-500/20 uppercase tracking-tighter">FOCO TOTAL</p>
               </div>
            </div>
          </div>
        </section>
      </div>

      {/* Action Footer */}
      <footer className="pt-12 flex flex-col items-center">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="space-y-2">
            <div className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${isFormValid ? 'text-emerald-500' : 'text-zinc-700'}`}>
              Sistema Pronto para Ativação
            </div>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`h-1 w-8 rounded-full transition-all duration-700 ${isFormValid ? 'bg-emerald-500' : 'bg-zinc-900'}`} style={{ transitionDelay: `${i * 100}ms` }}></div>
              ))}
            </div>
          </div>

          <button 
            disabled={!isFormValid}
            onClick={() => selectedPhase && onActivate(selectedPhase, goals)}
            className={`w-full group relative overflow-hidden px-8 py-8 rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-4 ${
              isFormValid 
                ? 'bg-white text-black hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]' 
                : 'bg-zinc-900 text-zinc-700 cursor-not-allowed border border-zinc-800'
            }`}
          >
            {isFormValid ? 'INICIAR PROTOCOLO' : 'PREENCHA OS REQUISITOS'}
            <ChevronRight className={`w-6 h-6 transition-transform group-hover:translate-x-1 ${isFormValid ? 'opacity-100' : 'opacity-20'}`} />
          </button>
          
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600">
            A dor da disciplina é temporária, o arrependimento é eterno.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaveModeSelection;
