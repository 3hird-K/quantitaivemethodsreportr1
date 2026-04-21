'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { FloatingDock } from '@/components/ui/floating-dock';
import { 
  Home, FileQuestion, Activity, BoxSelect, 
  BarChart, Lightbulb, GraduationCap, Users 
} from 'lucide-react';

const navItems = [
  { title: 'Intro', icon: <Home className="h-full w-full text-foreground/80" />, href: '#intro' },
  { title: 'Problem', icon: <FileQuestion className="h-full w-full text-foreground/80" />, href: '#problem' },
  { title: 'Method', icon: <Activity className="h-full w-full text-foreground/80" />, href: '#method' },
  { title: 'Model', icon: <BoxSelect className="h-full w-full text-foreground/80" />, href: '#model' },
  { title: 'Visuals', icon: <BarChart className="h-full w-full text-foreground/80" />, href: '#visuals' },
  { title: 'Insights', icon: <Lightbulb className="h-full w-full text-foreground/80" />, href: '#insights' },
  { title: 'Conclusion', icon: <GraduationCap className="h-full w-full text-foreground/80" />, href: '#conclusion' },
  { title: 'Team', icon: <Users className="h-full w-full text-foreground/80" />, href: '#team' },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <div className="fixed top-6 right-6 z-[60] bg-card/80 backdrop-blur-xl border border-border shadow-sm p-1.5 rounded-full flex items-center justify-center">
         <ThemeSwitcher />
      </div>
      <div className="fixed bottom-6 inset-x-0 mx-auto w-fit z-[60]">
        <FloatingDock items={navItems} />
      </div>
    </>
  );
}
