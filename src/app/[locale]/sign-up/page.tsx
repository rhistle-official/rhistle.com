'use client';

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SignUpStatus } from "@clerk/types";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    setError("");

    if (!isLoaded || !signUp) return;

    try {
      // 1. 회원가입 시도
      const result = await signUp.create({
        emailAddress: email,
        password: pw,
      });

      // 2. 이메일 확인이 필요한 경우
      if (result.status === "needs_verification" as SignUpStatus) {
        setError("이메일 확인이 필요합니다.");
        return;
      }

      // 3. 바로 세션 활성화
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "회원가입 실패");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">회원가입</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        className="w-full mb-2 px-4 py-2 border rounded"
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="비밀번호"
        className="w-full mb-4 px-4 py-2 border rounded"
      />

      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

      <button
        onClick={handleSignUp}
        className="w-full bg-[#78b237] text-white py-2 rounded hover:bg-[#78b237]/90"
      >
        회원가입
      </button>
    </div>
  );
}