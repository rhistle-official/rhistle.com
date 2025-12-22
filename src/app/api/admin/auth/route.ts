import { NextRequest, NextResponse } from "next/server";

/**
 * 관리자 인증 API
 * 클라이언트에서 하드코딩된 계정 정보를 제거하고 서버 사이드 인증으로 대체
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { id: string; password: string };
    const { id, password } = body;

    // 환경 변수에서 관리자 정보 가져오기
    const adminId = process.env.ADMIN_ID || "namooinc";
    const adminPw = process.env.ADMIN_PW || "namooinc101!";

    // 인증 확인
    if (id === adminId && password === adminPw) {
      // 세션 쿠키 설정 (보안 강화: HttpOnly, Secure, SameSite)
      const response = NextResponse.json({ success: true });
      response.cookies.set("admin_session", "1", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24시간
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: "인증 실패" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "서버 오류" },
      { status: 500 }
    );
  }
}

