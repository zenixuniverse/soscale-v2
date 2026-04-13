'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/useAuthStore';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      login({
        id: '1',
        email,
        nickname: 'Zenix',
        role: 'admin',
        isVerified: true,
        isActive: true,
      });
      toast.success('Welcome back!');
      router.push('/dashboard');
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <nav className="flex items-center justify-between px-4 py-3 border-b border-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">Solscale</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-text-secondary">Log In</button>
          <button className="px-4 py-2 text-sm">Admin</button>
          <button className="px-6 py-2 bg-accent text-white rounded-lg text-sm font-medium touch-target">
            Get Started
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Scale Your Social Media Growth
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Powerful automation and analytics to grow your Instagram presence. 
            Manage everything from one beautiful dashboard.
          </p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-card rounded-lg border border-text-secondary/10 focus:border-accent focus:outline-none touch-target"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-card rounded-lg border border-text-secondary/10 focus:border-accent focus:outline-none touch-target"
              required
            />
            
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 disabled:opacity-50 touch-target"
              >
                {loading ? 'Loading...' : 'Start Free Trial'}
              </button>
              <button
                type="button"
                onClick={handleLogin}
                className="flex-1 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 touch-target"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        
        {/* Feature Card */}
        <div className="w-full max-w-md card">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center mb-2">Real-Time Analytics</h3>
          <p className="text-center text-text-secondary">
            Track follower growth, engagement rates, and campaign performance in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}
