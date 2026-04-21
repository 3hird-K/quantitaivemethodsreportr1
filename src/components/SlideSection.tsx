import React, { ReactNode } from 'react';

interface SlideSectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function SlideSection({ id, title, children, className = '', centered = true }: SlideSectionProps) {
  return (
    <section 
      id={id} 
      className={`min-h-screen w-full flex flex-col ${centered ? 'justify-center items-center' : 'justify-center'} px-6 py-24 relative snap-start overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] blur-3xl" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.02] blur-3xl" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col gap-12">
        {title && (
          <h2 
            data-aos="fade-up" 
            className="text-3xl md:text-5xl font-bold text-center tracking-tight"
          >
            {title}
          </h2>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
