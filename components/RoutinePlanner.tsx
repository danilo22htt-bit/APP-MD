
import React, { useState } from 'react';
import { Task } from '../types';
import { Plus, CheckCircle2, Circle, Trash2, X, Clock as ClockIcon } from 'lucide-react';

interface RoutinePlannerProps {
  routine: Task[];
  setRoutine: (routine: Task[]) => void;
}

const RoutinePlanner: React.FC<RoutinePlannerProps> = ({ routine, setRoutine }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');

  const toggleTask = (id: string) => {
    setRoutine(routine.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setRoutine(routine.filter(t => t.id !== id));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskName || !newTaskTime) return;

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      time: newTaskTime,
      activity: newTaskName,
      completed: false
    };

    const updatedRoutine = [...routine, newTask].sort((a, b) => a.time.localeCompare(b.time));
    setRoutine(updatedRoutine);
    
    // Reset and close
    setNewTaskName('');
    setNewTaskTime('');
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-900">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Engenharia de Hábitos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            SUA <span className="text-emerald-500">ROTINA</span>
          </h1>
          <p className="text-zinc-500 font-medium text-sm mt-1 uppercase tracking-widest">Protocolo de Execução Diária</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all shadow-xl active:scale-95 group"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" /> 
            NOVA TAREFA
          </button>
        </div>
      </header>

      {/* Task List */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-3">
          {routine.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-zinc-800 rounded-[2.5rem] bg-zinc-900/10">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6 text-zinc-700 border border-zinc-800">
                <ClockIcon className="w-8 h-8" />
              </div>
              <p className="text-zinc-500 mb-6 font-medium italic">Sua linha do tempo está vazia.</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-emerald-500 hover:text-emerald-400 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 border border-emerald-500/20 px-6 py-3 rounded-full hover:bg-emerald-500/5 transition-colors"
              >
                <Plus className="w-4 h-4" /> Criar primeira tarefa
              </button>
            </div>
          ) : (
            routine.map((task) => (
              <div 
                key={task.id}
                className={`group flex items-center justify-between p-5 rounded-[2rem] border transition-all duration-500 ${
                  task.completed 
                    ? 'bg-zinc-900/30 border-zinc-900 opacity-60' 
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/40 hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`text-[11px] font-mono font-bold w-12 px-2 py-1 rounded-md text-center transition-colors ${task.completed ? 'bg-zinc-800 text-zinc-600' : 'bg-black text-emerald-500 border border-zinc-800'}`}>
                    {task.time}
                  </div>
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="transition-transform active:scale-90"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    ) : (
                      <Circle className="w-8 h-8 text-zinc-800 hover:text-emerald-500/50" />
                    )}
                  </button>
                  <span className={`text-lg font-bold tracking-tight ${task.completed ? 'line-through text-zinc-600' : 'text-zinc-200'}`}>
                    {task.activity}
                  </span>
                </div>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="text-zinc-700 hover:text-red-500 transition-all p-3 rounded-xl hover:bg-red-500/10 opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        <aside className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6">Métricas de Performance</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-zinc-500 text-sm font-bold uppercase tracking-tighter">Frequência</span>
                <span className="text-2xl font-black">{routine.length} <span className="text-[10px] text-zinc-700">Blocos</span></span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-zinc-500 text-sm font-bold uppercase tracking-tighter">Eficiência</span>
                <span className="text-2xl font-black text-emerald-500">
                  {routine.filter(t => t.completed).length} 
                  <span className="text-[10px] text-emerald-500/50 ml-1">Vencidos</span>
                </span>
              </div>
              
              <div className="pt-6 border-t border-zinc-800">
                <div className="w-full bg-black rounded-full h-2 overflow-hidden border border-zinc-800">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_#10b981]"
                    style={{ width: `${(routine.filter(t => t.completed).length / (routine.length || 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] p-8 text-zinc-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
               <ClockIcon className="w-12 h-12 text-emerald-500" />
            </div>
            <p className="text-xs italic leading-relaxed font-medium relative z-10">
              "A disciplina é a ponte entre seus objetivos e a realidade."
            </p>
          </div>
        </aside>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-500">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-md rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Novo Bloco</h3>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">Engenharia de Rotina</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="text-zinc-700 hover:text-white p-3 bg-black rounded-full border border-zinc-800 hover:border-emerald-500 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleAddTask} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 px-1">O que precisa ser feito?</label>
                  <input 
                    type="text" 
                    autoFocus
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Ex: BLOCO DE DEEP WORK"
                    className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-5 text-white font-bold placeholder-zinc-700 focus:outline-none focus:border-emerald-500 transition-all text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 px-1">Momento da Execução</label>
                  <div className="relative">
                    <ClockIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                    <input 
                      type="time" 
                      value={newTaskTime}
                      onChange={(e) => setNewTaskTime(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-2xl pl-16 pr-6 py-5 text-white font-mono font-bold text-xl focus:outline-none focus:border-emerald-500 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-black font-black py-6 rounded-2xl shadow-xl hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 transition-all text-lg"
                >
                  ALOCAR NA ROTINA
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutinePlanner;
