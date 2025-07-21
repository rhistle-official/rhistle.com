import { getAuth } from '@clerk/nextjs/server'
import { NextApiRequest } from 'next'

// API Route에서 사용자 ID 추출하는 유틸
export function getUserIdFromRequest(req: NextApiRequest): string | null {
  const { userId } = getAuth(req)
  return userId ?? null
}