export interface InstagramAccount {
  id: string;
  username: string;
  displayName: string;
  profilePicUrl: string;
  isPrimary: boolean;
  isActive: boolean;
  email: string;
  createdAt: string;
  platform: 'Instagram';
}

export interface AccountStats {
  followers: number;
  followersChange: number;
  engagement: number;
  engagementChange: number;
  newFollowers: number;
  newFollowersChange: number;
}

export interface User {
  id: string;
  email: string;
  nickname: string;
  role: 'admin' | 'user';
  isVerified: boolean;
  isActive: boolean;
}

export interface PlatformComingSoon {
  id: string;
  name: string;
  description: string;
  icon: string;
}
