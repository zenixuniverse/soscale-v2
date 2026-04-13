import { NextResponse } from 'next/server';

const mockAccounts = [
  {
    id: '1',
    platform: 'instagram',
    username: 'zenixuniverse',
    isPrimary: true,
    status: 'active',
    followers: 3578,
    engagement: 0.00,
    newFollowers: 0
  },
  {
    id: '2',
    platform: 'instagram',
    username: 'Zaytheorofit',
    isPrimary: false,
    status: 'active',
    followers: 1245,
    engagement: 1.85,
    newFollowers: 5
  },
  {
    id: '3',
    platform: 'instagram',
    username: 'reyfonder',
    isPrimary: false,
    status: 'active',
    followers: 892,
    engagement: 1.45,
    newFollowers: 2
  }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    accounts: mockAccounts
  });
}

export async function POST(request: Request) {
  try {
    const { username } = await request.json();
    
    if (!username) {
      return NextResponse.json(
        { error: 'Username required' },
        { status: 400 }
      );
    }
    
    const newAccount = {
      id: Date.now().toString(),
      platform: 'instagram',
      username,
      isPrimary: false,
      status: 'pending',
      followers: 0,
      engagement: 0,
      newFollowers: 0
    };
    
    mockAccounts.push(newAccount);
    
    return NextResponse.json({
      success: true,
      account: newAccount
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
