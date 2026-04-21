import React from 'react';

interface FormulaBlockProps {
  formula: string;
  delay?: number;
}

export function FormulaBlock({ formula, delay = 0 }: FormulaBlockProps) {
  return (
    <div 
      className="relative group rounded-3xl py-16 flex justify-center items-center my-12 overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_100%)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />
      
      <div className="relative z-10 text-4xl md:text-6xl font-mono font-bold text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] animate-gradient">
        {formula}
      </div>
    </div>
  );
}
