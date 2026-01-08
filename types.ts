
export enum View {
  OVERVIEW = 'overview',
  CAVE_MODE = 'cave_mode',
  ROUTINE = 'routine',
  GUIDE = 'guide',
  HISTORY = 'history'
}

export interface Task {
  id: string;
  time: string;
  activity: string;
  completed: boolean;
}

export interface CavePhase {
  id: number;
  days: number;
  label: string;
  intensity: 'Moderado' | 'Intenso' | 'Extremo';
  description: string;
}

export interface CaveSetup {
  phase: CavePhase;
  goals: string[];
  active: boolean;
  startDate: string;
}
