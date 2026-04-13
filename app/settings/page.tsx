'use client';

import Navigation from '@/components/layout/Navigation';
import AccountCard from '@/components/ui/AccountCard';
import { useAuthStore } from '@/lib/stores/useAuthStore';
import { useAccountStore } from '@/lib/stores/useAccountStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { User } from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const { accounts, setPrimaryAccount, removeAccount } = useAccountStore();
  const [nickname, setNickname] = useState('');
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    if (user) {
      setNickname(user.nickname);
    }
  }, [isAuthenticated, router, user]);
  
  if (!isAuthenticated) return null;
  
  const handleSaveNickname = () => {
    toast.success('Nickname updated successfully');
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
          <p className="text-text-secondary">Manage your profile and connected social accounts</p>
        </div>
        
        {/* Profile Settings */}
        <div className="card">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6" />
            <h2 className="text-xl font-bold">Profile Settings</h2>
          </div>
          
          <div className="max-w-md">
            <label className="block mb-2 text-sm text-text-secondary">
              Nickname (Display Name)
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-3 bg-background rounded-lg border border-text-secondary/20 focus:border-accent focus:outline-none mb-3 touch-target"
              placeholder="Enter your nickname"
            />
            <p className="text-sm text-text-secondary mb-4">
              This will be shown in the dashboard welcome message
            </p>
            
            <button
              onClick={handleSaveNickname}
              className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 touch-target"
            >
              Save Nickname
            </button>
          </div>
        </div>
        
        {/* Instagram Accounts */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Instagram Accounts</h2>
                <p className="text-sm text-text-secondary">Connect and manage multiple Instagram accounts</p>
              </div>
            </div>
            
            <button
              onClick={() => toast.info('Add account feature coming soon!')}
              className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 touch-target flex items-center gap-2"
            >
              <span>+</span>
              Add Account
            </button>
          </div>
          
          <div className="space-y-4">
            {accounts.map((account) => (
              <AccountCard
                key={account.id}
                account={account}
                onSetPrimary={setPrimaryAccount}
                onDelete={removeAccount}
              />
            ))}
            
            {accounts.length === 0 && (
              <div className="text-center py-12 text-text-secondary">
                <p>No accounts connected yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
