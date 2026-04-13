'use client';

import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconBgColor?: string;
  sublabel?: string;
}

export default function StatCard({ 
  label, 
  value, 
  change, 
  icon: Icon, 
  iconBgColor = 'bg-accent/20',
  sublabel 
}: StatCardProps) {
  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change}`;
  };
  
  return (
    <div className="card flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm text-text-secondary mb-1">{label}</p>
        <p className="text-3xl font-bold mb-1">{value}</p>
        {change !== undefined && (
          <p className={`text-sm ${change >= 0 ? 'text-success' : 'text-red-500'}`}>
            {formatChange(change)} {sublabel || 'gained'}
          </p>
        )}
        {sublabel && change === undefined && (
          <p className="text-sm text-text-secondary">{sublabel}</p>
        )}
      </div>
      
      <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-accent" />
      </div>
    </div>
  );
}
