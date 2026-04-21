import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | ReactNode;
  description?: string;
  icon?: LucideIcon;
  delay?: number;
}

export function StatCard({ title, value, description, icon: Icon, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="group relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col gap-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 overflow-hidden"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-3 text-muted-foreground mb-2 relative z-10">
        {Icon && (
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <span className="font-semibold text-sm uppercase tracking-widest">{title}</span>
      </div>
      <div className="text-4xl font-extrabold text-foreground tracking-tight relative z-10 mt-2">
        {value}
      </div>
      {description && (
        <div className="text-sm text-muted-foreground mt-2">
          {description}
        </div>
      )}
    </div>
  );
}
