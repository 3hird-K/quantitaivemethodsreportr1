'use client';
import React from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface DataPoint {
  x: number;
  y: number;
}

interface ChartCardProps {
  title: string;
  data: DataPoint[];
  xLabel: string;
  yLabel: string;
  color?: string;
  delay?: number;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-xl">
        <p className="text-card-foreground text-sm font-medium">{`Price: PHP ${payload[1].value.toLocaleString()}`}</p>
        <p className="text-muted-foreground text-sm">{`${payload[0].name}: ${payload[0].value} GB`}</p>
      </div>
    );
  }
  return null;
};

export function ChartCard({ title, data, xLabel, yLabel, color = '#3b82f6', delay = 0 }: ChartCardProps) {
  return (
    <div 
      className="group bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col h-[420px] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">{title}</h3>
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      </div>
      <div className="flex-1 w-full relative -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name={xLabel} 
              stroke="rgba(255,255,255,0.5)"
              label={{ value: xLabel, position: 'bottom', fill: 'rgba(255,255,255,0.5)', offset: -10 }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name={yLabel} 
              stroke="rgba(255,255,255,0.5)"
              tickFormatter={(value) => `₱${value/1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Laptops" data={data} fill={color} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
