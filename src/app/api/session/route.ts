import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("admin_session");
  const isLoggedIn = cookie && cookie.value === "1";
  
  return NextResponse.json({ isLoggedIn });
} 