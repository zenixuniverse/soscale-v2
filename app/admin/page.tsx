'use client';

import Navigation from '@/components/layout/Navigation';
import StatCard from '@/components/ui/StatCard';
import { useAuthStore } from '@/lib/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Users, Activity, TrendingUp, UserCog, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const [recentSubmissions, setRecentSubmissions] = useState([
    {
      id: '1',
      user: 'Zenix',
      accountName: 'Zay',
      username: '@Zaytheorofit',
      email: 'belltb8@gmail.com',
      date: '6d ago',
      platform: 'Instagram',
      status: 'active'
    },
    {
      id: '2',
      user: 'Zenix',
      accountName: 'Reyfonder-Whitelist',
      username: '@reyfonder',
      email: 'belltb8@gmail.com',
      date: '3/23/2026',
      platform: 'Instagram',
      status: 'active'
    },
    {
      id: '3',
      user: 'Zenix',
      accountName: 'zenixuniverse',
      username: '@zenixuniverse',
      email: 'belltb8@gmail.com',
      date: '3/23/2026',
      platform: 'Instagram',
      status: 'active'
    }
  ]);
  
  const [allUsers] = useState([
    { email: 'belltb8@zbjagency.com', status: 'active', verified: true },
    { email: 'akalinezenix@gmail.com', status: 'active', verified: true },
    { email: 'belltb8@gmail.com', status: 'active', verified: true },
  ]);
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    
    if (user?.role !== 'admin') {
      router.push('/dashboard');
      toast.error('Access denied. Admin only.');
    }
  }, [isAuthenticated, router, user]);
  
  if (!isAuthenticated || user?.role !== 'admin') return null;
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-text-secondary">Manage users and analytics</p>
          </div>
          
          <button 
            onClick={() => toast.info('Manage managers feature coming soon!')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 touch-target flex items-center gap-2"
          >
            <UserCog className="w-5 h-5" />
            Manage Managers
          </button>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            label="Total Users"
            value="3"
            icon={Users}
            iconBgColor="bg-accent/20"
          />
          
          <StatCard
            label="Active Users"
            value="3"
            icon={Activity}
            iconBgColor="bg-success/20"
          />
          
          <StatCard
            label="Verified"
            value="3"
            icon={TrendingUp}
            iconBgColor="bg-blue-500/20"
          />
        </div>
        
        {/* Recent Account Submissions */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-500" />
              <div>
                <h2 className="text-xl font-bold">Recent Account Submissions</h2>
                <p className="text-sm text-text-secondary">3 accounts</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {recentSubmissions.map((submission) => (
              <div key={submission.id} className="card bg-background flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{submission.user}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        submission.status === 'active' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-text-secondary/10 text-text-secondary'
                      }`}>
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        {submission.status}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-1">
                      {submission.accountName} · {submission.username}
                    </p>
                    <p className="text-xs text-text-secondary">{submission.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-secondary mb-1">{submission.date}</p>
                    <p className="text-xs text-text-secondary">{submission.platform}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-text-secondary/10">
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Username:</p>
                    <p className="text-sm font-mono">{submission.username.replace('@', '')}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Password:</p>
                    <p className="text-sm">••••••••</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <p className="text-sm text-success">Account is active</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* All Users */}
        <div className="card">
          <h2 className="text-xl font-bold mb-6">All Users</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-text-secondary/10">
                  <th className="text-left py-3 px-4 text-sm text-text-secondary font-medium">EMAIL</th>
                  <th className="text-left py-3 px-4 text-sm text-text-secondary font-medium">STATUS</th>
                  <th className="text-left py-3 px-4 text-sm text-text-secondary font-medium">VERIFIED</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, index) => (
                  <tr key={index} className="border-b border-text-secondary/10">
                    <td className="py-4 px-4">{user.email}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-success/10 text-success rounded-full text-xs">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-success">✓ Yes</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
