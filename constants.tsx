
import React from 'react';
import { LayoutDashboard, ShieldAlert, Clock, BarChart3, BookOpen } from 'lucide-react';
import { CavePhase } from './types';

export const NAV_ITEMS = [
  { id: 'overview', label: 'Visão Geral', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'cave_mode', label: 'Modo Caverna', icon: <ShieldAlert className="w-5 h-5" /> },
  { id: 'routine', label: 'Minha Rotina', icon: <Clock className="w-5 h-5" /> },
  { id: 'guide', label: 'O Conceito', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'history', label: 'Evolução', icon: <BarChart3 className="w-5 h-5" /> },
];

export const CAVE_PHASES: CavePhase[] = [
  { 
    id: 1, 
    days: 30, 
    label: 'Sprint de Foco', 
    intensity: 'Moderado',
    description: 'Ideal para resetar dopamina e finalizar projetos pendentes.'
  },
  { 
    id: 2, 
    days: 60, 
    label: 'Mergulho Profundo', 
    intensity: 'Intenso',
    description: 'Transformação de hábitos e construção de novas bases de carreira.'
  },
  { 
    id: 3, 
    days: 90, 
    label: 'Evolução Total', 
    intensity: 'Extremo',
    description: 'Isolamento estratégico para resultados fora da curva e mudança de vida.'
  },
];

export const INITIAL_ROUTINE = [
  { id: '1', time: '05:00', activity: 'Acordar e Hidratação', completed: false },
  { id: '2', time: '05:30', activity: 'Deep Work - Bloco 1', completed: false },
  { id: '3', time: '08:00', activity: 'Exercício Físico', completed: false },
  { id: '4', time: '09:30', activity: 'Deep Work - Bloco 2', completed: false },
  { id: '5', time: '12:00', activity: 'Refeição Nutritiva', completed: false },
  { id: '6', time: '14:00', activity: 'Deep Work - Bloco 3', completed: false },
  { id: '7', time: '17:00', activity: 'Revisão e Planejamento', completed: false },
  { id: '8', time: '21:00', activity: 'Higiene do Sono', completed: false },
];
