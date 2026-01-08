
import React from 'react';
import { Target, Shield, Zap, Brain, Moon, Coffee, CheckCircle, Rocket, Flame } from 'lucide-react';

const CaveGuide: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-20">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
          MANUAL DA <span className="text-emerald-500">EVOLUÇÃO</span>
        </h1>
        <p className="text-zinc-500 text-lg font-light italic">"No silêncio da caverna, o gigante desperta."</p>
      </header>

      {/* Seção 1: O Conceito */}
      <section className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-[3rem] space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Zap className="text-emerald-500" /> O que é o Modo Caverna?
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            O <strong>Modo Caverna</strong> é um protocolo de isolamento estratégico inspirado em grandes realizadores. É um período onde você decide "desaparecer" para o mundo externo — eliminando distrações, ruídos e dopamina barata — a fim de focar 100% na construção do seu legado, saúde e intelecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-emerald-500">
              <Brain className="w-5 h-5" /> Objetivo Principal
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Resetar seus receptores de dopamina e recuperar a capacidade de foco profundo (Deep Work). O objetivo não é apenas trabalhar mais, mas trabalhar melhor naquilo que realmente move o ponteiro da sua vida.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-emerald-500">
              <Shield className="w-5 h-5" /> Por que "Caverna"?
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              A caverna simboliza proteção e introspecção. É o escudo contra a necessidade de validação social e o consumo passivo de informações inúteis.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2: Estruturas e Regras */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black uppercase tracking-tight text-center">As Estruturas do Sucesso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Flame className="text-orange-500" /> Regras de Foco Inegociáveis
            </h3>
            <ul className="space-y-4">
              {[
                "Zero redes sociais por entretenimento (exceção apenas para trabalho/postagem única).",
                "Higiene do sono rigorosa: 7.5h a 8h de sono por noite.",
                "Dieta limpa: Sem álcool, sem açúcar refinado e alta hidratação (3L+).",
                "Mínimo de 4 horas de Deep Work (Foco Total) sem interrupções.",
                "Atividade física diária (pelo menos 30 minutos)."
              ].map((rule, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Rocket className="text-emerald-500" /> Benefícios da Jornada
            </h3>
            <ul className="space-y-4">
              {[
                "Aumento drástico na velocidade de aprendizado.",
                "Redução total da ansiedade causada por comparação social.",
                "Melhora visível na composição corporal e energia diária.",
                "Clareza mental para tomada de decisões complexas.",
                "Criação de hábitos que durarão anos após o término do ciclo."
              ].map((benefit, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Seção 3: Exemplos Práticos */}
      <section className="space-y-6">
        <h2 className="text-3xl font-black uppercase tracking-tight text-center">Aplicações no Dia a Dia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-2">Exemplo 01</span>
            <h4 className="font-bold mb-2">O Desenvolvedor</h4>
            <p className="text-xs text-zinc-500">Usa o Modo Caverna para aprender uma nova linguagem e entregar o MVP de uma startup em 60 dias, trabalhando das 5h às 9h antes do emprego formal.</p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-2">Exemplo 02</span>
            <h4 className="font-bold mb-2">O Estudante</h4>
            <p className="text-xs text-zinc-500">Foca 30 dias de isolamento para aprovação em concurso ou vestibular, desligando notificações e focando em simulados e teoria pesada.</p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-2">Exemplo 03</span>
            <h4 className="font-bold mb-2">O Empreendedor</h4>
            <p className="text-xs text-zinc-500">Ciclo de 90 dias para reestruturação financeira da empresa, eliminando gastos pessoais e focando em prospecção ativa de clientes.</p>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="bg-emerald-500 text-black p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-emerald-500/10">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter">A Regra de Ouro</h2>
          <p className="font-medium text-lg leading-snug">
            "Não negocie com a sua mente preguiçosa. Se você definiu o plano na noite anterior, o 'você' da manhã não tem autoridade para mudá-lo. A execução é o único caminho."
          </p>
        </div>
        <div className="bg-black text-emerald-500 p-6 rounded-full rotate-12 shrink-0">
          <Coffee className="w-12 h-12" />
        </div>
      </section>
    </div>
  );
};

export default CaveGuide;
