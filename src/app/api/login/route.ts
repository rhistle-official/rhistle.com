import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { id, pw } = await req.json();
  const adminId = process.env.ADMIN_ID;
  const adminPw = process.env.ADMIN_PW;

  console.log(id, pw);
  console.log(adminId, adminPw); 

  if (id === adminId && pw === adminPw) {
    const res = NextResponse.json({ success: true });
    res.cookies.set('admin_session', '1', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 2, // 2시간
      sameSite: 'lax',
    });
    return res;
  } else {
    return NextResponse.json({ success: false, error: '인증 실패' }, { status: 401 });
  }
} 