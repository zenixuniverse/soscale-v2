'use client';

import { ReactNode } from 'react';

interface PlatformCardProps {
  name: string;
  description: string;
  icon: ReactNode;
}

export default function PlatformCard({ name, description, icon }: PlatformCardProps) {
  return (
    <div className="card flex items-center justify-between opacity-60">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center border border-text-secondary/10">
          {icon}
        </div>
        <div>
          <p className="font-medium mb-1">{name}</p>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      </div>
      <span className="text-sm text-text-secondary">Coming Soon</span>
    </div>
  );
}
