'use client';

import { LucideIcon } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  iconColor?: string;
}

export default function AnalyticsCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon,
  iconColor = 'text-accent'
}: AnalyticsCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-text-secondary">{title}</p>
        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-sm text-text-secondary">{subtitle}</p>
    </div>
  );
}
