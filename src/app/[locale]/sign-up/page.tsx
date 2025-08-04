'use client';

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [needsVerification, setNeedsVerification] = useState(false);
  const [loading, setLoading] = useState(false);

  const [resendStatus, setResendStatus] = useState<"success" | "error" | null>(null);
  
  // 이메일 형식
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 엔터 키 처리
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      needsVerification ? handleVerify() : handleSignUp();
    }
  };

  const handleSignUp = async () => {
    if (!isLoaded || !signUp || !setActive) return;
    setLoading(true);
    setError("");

    if (!isValidEmail(email)) {
      setError("이메일 형식이 올바르지 않습니다.")
      return
    }

    if (!pw.trim()) {
      setError("비밀번호를 입력해주세요.");
      setLoading(false);
      return;
    }

    if (pw.length < 8) {
      setError("비밀번호는 최소 8자 이상이어야 합니다.");
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const result = await signUp.create({
        emailAddress: email,
        password: pw,
      });

      if (result.status === "complete") {
        // 이메일 인증 없이 가능한 경우
      } else if (result.status === "missing_requirements") {
        await signUp.prepareEmailAddressVerification();
        setNeedsVerification(true);
      }
    } catch (err: any) {
      const code = err.errors?.[0]?.code;

      if (code === "form_identifier_exists") {
        setError("이미 가입된 이메일입니다. 로그인해주세요.");
      } else {
        setError(err.errors?.[0]?.message || "회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  // 이메일 코드 인증
  const handleVerify = async () => {
    if (!isLoaded || !signUp || !setActive) return;
    if (!code) {
      setError("인증 코드를 입력해주세요.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      const code = err.errors?.[0]?.code;
      if (code === "code_invalid") {
        setError("잘못된 인증 코드입니다.");
      } else {
        setError("인증에 실패했습니다. 다시 시도해주세요.");
      }
    } finally {
      setLoading(false); 
    }
  };

  const handleResendCode = async () => {
    if (!isLoaded || !signUp) return;
    try {
      await signUp.prepareEmailAddressVerification();
      setResendStatus("success"); 
    } catch {
      setResendStatus("error");   
      setError("인증 메일 재전송 실패");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#eaf6db] border border-green-100 shadow-2xl">
      <div className="mb-4">
        <img src="/image/ci_green.png" alt="로고" className="h-16 mx-auto" />
      </div>

      <h1 className="text-lg text-gray-500 mb-4">
        🌱회원가입
      </h1>

      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="이메일"
          readOnly={needsVerification}
          className="w-full mb-2 px-4 py-2 border rounded bg-gray-50"
        />
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="비밀번호"
          readOnly={needsVerification}
          className="w-full mb-2 px-4 py-2 border rounded bg-gray-50"
        />
        {/* 인증단계일 때 인증코드 입력란 노출 */}
        {needsVerification && (
          <>
            <p className="text-sm text-gray-500 mb-1">
              이메일로 전송된 인증 코드를 입력해주세요.
            </p>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ""))}
              onKeyDown={handleKeyDown}
              placeholder="인증 코드"
              inputMode="numeric"
              maxLength={6}
              className="w-full mb-2 px-4 py-2 border rounded bg-gray-50"
            />
            {resendStatus === "success" && (
              <div className="text-sm text-green-600 border border-green-200 rounded px-3 py-2 bg-green-50 mb-2">
                인증 메일이 재전송되었습니다.
              </div>
            )}
            {resendStatus === "error" && (
              <div className="text-sm text-red-600 border border-red-200 rounded px-3 py-2 bg-red-50 mb-2">
                인증 메일 재전송에 실패했습니다.
              </div>
            )}
            <button
              onClick={handleResendCode}
                className="mt-1 mb-2 text-xs text-gray-500 hover:underline active:scale-95 transition-transform duration-100"
            >
              인증 메일 다시 보내기
            </button>
          </>
        )}
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button
          onClick={needsVerification ? handleVerify : handleSignUp}
          className="w-full bg-[#78b237] hover:bg-[#78b237]/90 text-white py-2 rounded disabled:opacity-50"
        >
          {needsVerification ? "회원가입" : "이메일 인증"}
        </button>

        <div className="mt-4 text-sm text-gray-500 flex justify-center items-center gap-2">
          <span className="mr-4">이미 계정이 있으신가요?</span>
          <a href="/sign-in" className="hover:underline">로그인</a>
          <span className="text-gray-300">|</span>
          <a href="/" className="hover:underline">홈으로</a>
        </div>
      </div>
    </div>
  );
}