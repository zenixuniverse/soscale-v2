'use client';

import { InstagramAccount } from '@/lib/types';
import { Star, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

interface AccountCardProps {
  account: InstagramAccount;
  onSetPrimary?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function AccountCard({ account, onSetPrimary, onDelete }: AccountCardProps) {
  const handleSetPrimary = () => {
    onSetPrimary?.(account.id);
    toast.success(`${account.username} set as primary`);
  };
  
  const handleDelete = () => {
    onDelete?.(account.id);
    toast.success(`${account.username} removed`);
  };
  
  return (
    <div className="card flex items-center justify-between">
      <div className="flex items-center gap-3 flex-1">
        <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{account.displayName || account.username}</span>
            {account.isPrimary && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 rounded-full">
                <Star className="w-3 h-3 text-blue-500 fill-blue-500" />
                <span className="text-xs text-blue-500">Primary</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">@{account.username}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              account.isActive 
                ? 'bg-success/10 text-success' 
                : 'bg-red-500/10 text-red-500'
            }`}>
              {account.isActive ? 'active' : 'inactive'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {!account.isPrimary && (
          <button
            onClick={handleSetPrimary}
            className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors touch-target"
          >
            Set as Primary
          </button>
        )}
        <button
          onClick={handleDelete}
          className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors touch-target"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
