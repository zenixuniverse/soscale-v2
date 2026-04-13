'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Link2 } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-card">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">Solscale</h1>
        </div>
        
        <div className="flex items-center gap-1">
          <Link 
            href="/dashboard"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors touch-target ${
              isActive('/dashboard') 
                ? 'text-white' 
                : 'text-text-secondary'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-sm">Dashboard</span>
          </Link>
          
          <Link 
            href="/accounts"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors touch-target ${
              isActive('/accounts') 
                ? 'text-white' 
                : 'text-text-secondary'
            }`}
          >
            <Link2 className="w-4 h-4" />
            <span className="text-sm">Accounts</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
