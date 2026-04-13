import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      );
    }
    
    // Mock login - replace with real auth later
    return NextResponse.json({
      success: true,
      token: 'mock-jwt-token',
      user: {
        id: '1',
        email,
        nickname: email.split('@')[0],
        role: 'admin'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
