'use client';

import Navigation from '@/components/layout/Navigation';
import AnalyticsCard from '@/components/ui/AnalyticsCard';
import { useAuthStore } from '@/lib/stores/useAuthStore';
import { useAccountStore } from '@/lib/stores/useAccountStore';
import { Users, Heart, TrendingUp, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const primaryAccount = useAccountStore((state) => state.primaryAccount);
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);
  
  if (!isAuthenticated) return null;
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.nickname}!
            </h1>
            {primaryAccount && (
              <p className="text-text-secondary">
                Viewing: {primaryAccount.username} (@{primaryAccount.username})
              </p>
            )}
          </div>
          
          {primaryAccount && (
            <div className="card inline-flex flex-col gap-1 p-3">
              <p className="text-xs text-text-secondary">Current Account</p>
              <p className="font-medium">{primaryAccount.displayName || primaryAccount.username}</p>
              <p className="text-sm text-text-secondary">@{primaryAccount.username}</p>
            </div>
          )}
        </div>
        
        {/* Verification Alert */}
        {!user?.isVerified && (
          <div className="card mb-6 bg-warning/10 border border-warning/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <p className="font-medium text-warning mb-1">Email verification required</p>
                <p className="text-sm text-text-secondary">
                  Please verify your email to unlock all features.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <AnalyticsCard
            title="Total Followers"
            value="3,578"
            subtitle="+0 gained"
            icon={Users}
          />
          
          <AnalyticsCard
            title="Engagement Rate"
            value="0.00%"
            subtitle="Current rate"
            icon={Heart}
          />
          
          <AnalyticsCard
            title="New Followers"
            value="0"
            subtitle="This week"
            icon={TrendingUp}
          />
        </div>
        
        {/* Empty State */}
        {!primaryAccount && (
          <div className="card text-center py-12">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">No accounts connected yet</h3>
            <p className="text-text-secondary mb-6">
              Connect your Instagram account to start tracking your analytics
            </p>
            <button
              onClick={() => router.push('/accounts')}
              className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 touch-target inline-flex items-center gap-2"
            >
              <span>+</span>
              Add Account
            </button>
          </div>
        )}
        
        {/* Recent Activity */}
        {primaryAccount && (
          <div className="card">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="text-center py-8 text-text-secondary">
              <p>No recent activity</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
