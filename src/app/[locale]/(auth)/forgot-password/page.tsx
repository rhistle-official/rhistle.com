"use client";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";

// 이메일 유효성 검사 함수
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function ForgotPasswordPage() {
  const { signIn, isLoaded } = useSignIn();
  const [phase, setPhase] = useState<"request" | "verify">("request");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const requestResetCode = async () => {
    setError("");

    if (!isLoaded || !signIn) return;

    if (!isValidEmail(email)) {
      setError("이메일 형식이 올바르지 않습니다.");
      return;
    }

    try {
      await signIn.create({
        identifier: email,
        strategy: "reset_password_email_code",
      });

      setPhase("verify");
    } catch (err: any) {
      const msg = err?.errors?.[0]?.message || "오류가 발생했습니다.";

      if (msg.includes("identifier") || msg.includes("account")) {
        setError("가입되지 않은 이메일입니다.");
      } else {
        setError(msg);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") requestResetCode();
  };

  const handleResetPassword = async () => {
    setError("");
    if (!isLoaded || !signIn) return;

    if (!code || !newPassword) {
      setError("인증 코드와 새 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password: newPassword,
      });

      if (result.status === "complete") {
        alert("비밀번호가 변경되었습니다. 로그인 해주세요.");
        window.location.href = "/sign-in";
      } else {
        setError("인증에 실패했습니다.");
      }
    } catch (err: any) {
      const msg = err?.errors?.[0]?.message || "오류가 발생했습니다.";
      if (msg.includes("code")) setError("인증 코드가 올바르지 않습니다.");
      else setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f4f7ec]">
      <div className="mb-4">
        <img src="/image/ci_green.png" alt="로고" className="h-16 mx-auto" />
      </div>

      <h1 className="text-lg text-gray-500 mb-4">비밀번호 찾기</h1>

      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
        {/* 이메일 입력 */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          onKeyDown={handleKeyDown}
          className={`w-full mb-4 px-4 py-2 border rounded bg-gray-50 ${
            email && !isValidEmail(email) ? "border-red-500" : ""
          }`}
        />

        {/* 인증 코드 & 새 비밀번호 입력란은 인증코드 발송 후만 보여줌 */}
        {phase === "verify" && (
          <>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="인증 코드"
              onKeyDown={handleKeyDown}
              className="w-full mb-2 px-4 py-2 border rounded bg-gray-50"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="새 비밀번호"
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-2 border rounded bg-gray-50"
            />
          </>
        )}

        {/* 에러 메시지 */}
        <div className="min-h-[1.25rem] mb-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        {/* 버튼: 단계에 따라 분기 */}
        {phase === "request" ? (
          <button
            onClick={requestResetCode}
            className="w-full bg-[#78b237] text-white py-2 rounded hover:bg-[#78b237]/90 transition"
          >
            인증 코드 보내기
          </button>
        ) : (
          <button
            onClick={handleResetPassword}
            className="w-full bg-[#78b237] text-white py-2 rounded hover:bg-[#78b237]/90 transition"
          >
            비밀번호 재설정
          </button>
        )}

        {/* 하단 링크 */}
        <div className="mt-4 text-sm text-gray-500 flex justify-center space-x-2">
          <a href="/sign-in" className="hover:underline">로그인</a>
          <span className="text-gray-300">|</span>
          <a href="/sign-up" className="hover:underline">회원가입</a>
        </div>
      </div>
    </div>
  );
}