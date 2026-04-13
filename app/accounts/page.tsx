'use client';

import Navigation from '@/components/layout/Navigation';
import AccountCard from '@/components/ui/AccountCard';
import PlatformCard from '@/components/ui/PlatformCard';
import SecurityInfo from '@/components/ui/SecurityInfo';
import { useAuthStore } from '@/lib/stores/useAuthStore';
import { useAccountStore } from '@/lib/stores/useAccountStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function AccountsPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const { accounts, setAccounts, setPrimaryAccount, removeAccount } = useAccountStore();
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    
    // Load mock accounts
    if (accounts.length === 0) {
      setAccounts([
        {
          id: '1',
          username: 'zenixuniverse',
          displayName: 'zenixuniverse',
          profilePicUrl: '',
          isPrimary: true,
          isActive: true,
          email: 'belltb8@gmail.com',
          createdAt: '2024-03-23',
          platform: 'Instagram',
        },
        {
          id: '2',
          username: 'Zaytheorofit',
          displayName: 'Zay',
          profilePicUrl: '',
          isPrimary: false,
          isActive: true,
          email: 'belltb8@gmail.com',
          createdAt: '2024-03-23',
          platform: 'Instagram',
        },
        {
          id: '3',
          username: 'reyfonder',
          displayName: 'Reyfonder-Whitelist',
          profilePicUrl: '',
          isPrimary: false,
          isActive: true,
          email: 'belltb8@gmail.com',
          createdAt: '2024-03-23',
          platform: 'Instagram',
        },
      ]);
    }
  }, [isAuthenticated, router, accounts.length, setAccounts]);
  
  if (!isAuthenticated) return null;
  
  const handleAddAccount = () => {
    toast.info('Add account feature coming soon!');
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
        {/* Instagram Accounts Section */}
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
              onClick={handleAddAccount}
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
          </div>
        </div>
        
        {/* Coming Soon Platforms */}
        <div className="card">
          <h2 className="text-xl font-bold mb-6">More Platforms Coming Soon</h2>
          
          <div className="space-y-4">
            <PlatformCard
              name="TikTok"
              description="Track your TikTok growth"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              }
            />
            
            <PlatformCard
              name="X (Twitter)"
              description="Grow your X presence"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              }
            />
            
            <PlatformCard
              name="YouTube"
              description="Manage your YouTube channel"
              icon={
                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              }
            />
          </div>
        </div>
        
        {/* Security Info */}
        <SecurityInfo />
      </div>
    </div>
  );
}
