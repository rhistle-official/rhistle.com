'use client';

import { useSignUp} from "@clerk/nextjs";
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
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [field, setField] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  const [resendStatus, setResendStatus] = useState<"success" | "error" | null>(null);
  
  const deptOptions = [
    { value: "개발팀", label: "개발팀" },
    { value: "경영관리팀", label: "경영관리팀" },
    { value: "임원", label: "임원" }
  ];

  const devFieldOptions = [
    { value: "프론트엔드", label: "프론트엔드" },
    { value: "백엔드", label: "백엔드" },
    { value: "AI", label: "AI" },
    { value: "PM", label: "PM" }
  ];

  // 이메일 형식
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  // 엔터 키 처리
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
      return;
    }

    if (pw.length < 8) {
      setError("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    if (!name.trim()) {
      setError("성함 입력해주세요.");
      return;
    }

    setLoading(true);

    try {
      // 1. 계정 생성, 여기엔 clerk 필수값만 저장 가능
      const result = await signUp.create({
        emailAddress: email,
        password: pw,
        unsafeMetadata:{
          name: name,
          dept: department,
          field: field,
          bio: bio,
        }
      });

      if (result.status === "missing_requirements") {
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
        // await fetch("/api/update-user", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     publicMetadata: {
        //       name: name,
        //       dept: department, 
        //       field: field,
        //       bio: bio,
        //     },
        //   }),
        // });
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#eaf6db] px-4 py-8">
      <div className="mb-6">
        <img src="/image/ci_green.png" alt="로고" className="h-16 mx-auto" />
      </div>

      <h1 className="text-xl text-gray-600 mb-6 font-semibold">
        🌱회원가입
      </h1>

      <div className="w-full max-w-sm bg-white rounded-2xl p-6 space-y-5">
        <div className="overflow-hidden rounded-xl border border-gray-300">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="이메일"
            readOnly={needsVerification}
            className="w-full px-5 py-3 bg-gray-50 text-sm border-b border-gray-200 focus:outline-none"
          />
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="비밀번호"
            readOnly={needsVerification}
            className="w-full px-5 py-3 bg-gray-50 text-sm focus:outline-none"
          />
        </div>

        <div className="overflow-hidden rounded-md border border-gray-300">
          <input
              placeholder="성함"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 bg-gray-50 text-sm border-b border-gray-200 focus:outline-none"
          />
          <div className="flex divide-x divide-gray-200">
            <select
              name="department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setField("");
              }}
              className="w-1/2 px-5 py-3 bg-gray-50 text-sm text-gray-500 focus:outline-none appearance-none"
              disabled={needsVerification}
            >
              <option value="">부서를 선택하세요</option>
              {deptOptions.map((dept) => (
                <option key={dept.value} value={dept.value}>
                  {dept.label}
                </option>
              ))}
            </select>

            <select
              name="field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              className={`w-1/2 px-5 py-3 bg-gray-50 text-sm text-gray-500 focus:outline-none appearance-none ${department !== "개발팀" ? "text-center" : ""}`}
              disabled={needsVerification}
            >
              <option value="">
                {department === "개발팀" ? "분야를 선택하세요" : "-"}
              </option>
              {department === "개발팀" &&
                devFieldOptions.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <textarea
            placeholder="소개글"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full mb-2 px-4 py-2 border rounded bg-gray-50"
          />
        </div>
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
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          onClick={needsVerification ? handleVerify : handleSignUp}
          className="w-full bg-[#78b237] hover:bg-[#78b237]/90 text-white py-2 rounded active:scale-95 transition-transform duration-100"
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