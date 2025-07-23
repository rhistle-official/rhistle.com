"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useUser, useSignIn } from "@clerk/clerk-react"

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const { isSignedIn } = useUser();
  const router = useRouter();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/" ;

  useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn]);

  // 이메일 유효성 검사
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  // 로그인 처리
  const handleLogin = async () => {
    setError("")
    if (!isLoaded || !signIn) return

    if (!isValidEmail(id)) {
      setError("이메일 형식이 올바르지 않습니다.")
      return
    }

    try {
      const result = await signIn.create({ identifier: id, password: pw })

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
        router.push(redirect === "developer" ? "https://developer.namooinc.com" : "/")
      } else {
        setError("추가 인증이 필요합니다.")
      }
    } catch (err: any) {
      const msg = err?.errors?.[0]?.message || "로그인에 실패했습니다."
      if (msg.includes("account")) setError("존재하지 않는 계정입니다.")
      else if (msg.includes("Password")) setError("비밀번호가 올바르지 않습니다.")
      else if (msg.includes("Enter")) setError("비밀번호를 입력해주세요.")
      else setError(msg)
    }
  }

  // 엔터 키 처리
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f4f7ec]">
      <div className="mb-4">
        <img src="/image/ci_green.png" alt="로고" className="h-16 mx-auto" />
      </div>

      <h1 className="text-lg text-gray-500 mb-4">로그인</h1>

      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
        {/* 이메일 입력 */}
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="이메일"
          onKeyDown={handleKeyDown}
          className={`w-full mb-2 px-4 py-2 border rounded bg-gray-50 ${
            id && !isValidEmail(id) ? "border-red-500" : ""
          }`}
        />

        {/* 비밀번호 입력 */}
        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          type="password"
          placeholder="비밀번호"
          onKeyDown={handleKeyDown}
          className="w-full mb-4 px-4 py-2 border rounded bg-gray-50"
        />

        {/* 에러 메시지 */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {/* 로그인 버튼 */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#78b237] text-white py-2 rounded hover:bg-[#78b237]/90 transition"
        >
          로그인
        </button>

        {/* 하단 링크 */}
        <div className="mt-4 text-sm text-gray-500 flex justify-center space-x-2">
          <a href="/sign-up" className="hover:underline">회원가입</a>
          <span className="text-gray-300">|</span>
          <a href="/" className="hover:underline">아이디 찾기</a>
          <span className="text-gray-300">|</span>
          <a href="/" className="hover:underline">비밀번호 찾기</a>
        </div>
      </div>
    </div>
  )
}