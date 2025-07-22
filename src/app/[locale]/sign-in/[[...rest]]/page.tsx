"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/clerk-react"
import { useSessionStore } from "@/store/useSessionStore";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();``

  const [emailError, setEmailError] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const { isLoggedIn, checkSession, setLoggedIn } = useSessionStore();

  const handleLogin = async () => {
    setLoginError(""); // 기존 에러 초기화
    if (!isLoaded || !signIn) return; // Clerk가 로드되지 않았으면 중단

    if (!isValidEmail(id)) {
      setLoginError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    try {
      const result = await signIn.create({
        identifier: id,
        password: pw,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        setLoginError("추가 인증이 필요합니다.");
      }
    } catch (err: any) {
      // Clerk가 제공하는 에러 메시지 사용
      const message = err.errors?.[0]?.message;
      const fallbackMessage = err.errors?.[0]?.message || "로그인에 실패했습니다.";

      if (message?.includes("account")) {
        setLoginError("존재하지 않는 계정입니다.");
      } else if (message?.includes("Password")) {
        setLoginError("비밀번호가 올바르지 않습니다.");
      } else {
        setLoginError(fallbackMessage); 
      }
    }
  };

  // 엔터 키 감지
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin(); // 엔터 누르면 로그인 실행
  };

  // 이메일 형식
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    
    if (!isValidEmail(value)) {
      setEmailError("이메일 형식이 올바르지 않습니다.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f4f7ec]">
      <div className="mb-4">
        <img src="/image/ci_green.png" alt="로고" className="h-16 mx-auto"/>
      </div>
      <h1 className="text-lg text-gray-500 mb-4">로그인</h1>
      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
        <input
          value={id}
          onChange={handleChange}
          placeholder="이메일"
          onKeyDown={handleKeyDown}
          className={`w-full mb-2 px-4 py-2 border rounded bg-gray-50 ${
            emailError ? "border-red-500" : ""
          }`}
        />
        {emailError && (
          <div className="text-red-500 text-sm mb-2">{emailError}</div>
        )}
        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          type="password"
          placeholder="비밀번호"
          onKeyDown={handleKeyDown}
          className="w-full mb-8 px-4 py-2 border rounded bg-gray-50"
        />
        {loginError && (<div className="text-red-500 text-sm mb-3">{loginError}</div>)}
        <button
          onClick={handleLogin}
          className="w-full bg-[#78b237] text-white py-2 rounded hover:bg-[#78b237]/90 transition"
        >
          로그인
        </button>
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
