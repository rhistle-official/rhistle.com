import { NextResponse } from 'next/server'

// 서버 헬스체크용 API
export async function GET() {
  try {
    // ✅ 서버가 정상 동작 중이면 200 OK 반환
    return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() })
  } catch (error) {
    // ❌ 오류 발생 시 500 반환
    return NextResponse.json({ status: 'error', message: String(error) }, { status: 500 })
  }
}