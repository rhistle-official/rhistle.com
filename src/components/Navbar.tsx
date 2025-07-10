"use client";

import { useEffect, useState } from "react";
import ArrowUpRight from "../../public/svg/ArrowUpRight";
import LocaleSwicher from "./LocaleSwicher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useSessionStore } from "@/store/useSessionStore";

const NavBar = ({ bgColor }: { bgColor: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const { isLoggedIn, checkSession, setLoggedIn } = useSessionStore();

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsOpen(scrollY > 50);
    };

    window.addEventListener("scroll", scrollHandler);

    // 초기 실행 (처음부터 50 이상일 수도 있으니)
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 768) {
        setIsMobileMenuOpen(true);
      } else {
        setIsMobileMenuOpen(false);
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    bgColor === "bg-black"
      ? setImage("ci_white.png")
      : setImage("ci_green.png");
  });

  useEffect(() => {
    // 세션 상태 확인
    checkSession();
  }, [checkSession]);

  const handleLogin = async () => {
    setLoginError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, pw }),
      });
      if (res.ok) {
        // 로그인 성공 후 세션 상태 다시 확인
        await checkSession();
        setLoginOpen(false);
        setId("");
        setPw("");
      } else {
        setLoginError("로그인 실패: 아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch {
      setLoginError("로그인 중 오류가 발생했습니다.");
    }
  };

  // 엔터 키 감지
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin(); // 엔터 누르면 로그인 실행
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    // 로그아웃 후 세션 상태 다시 확인
    await checkSession();
  };

  return (
    <header className="fixed z-20 w-full">
      <div
        className={`flex h-[6.25rem] items-center justify-between px-[2rem] lg:px-[5rem] ${isOpen ? `${bgColor} opacity-90` : ""}`}
      >
        <div className="flex items-center">
          <Logo image={image} />
          <NavMenu />
        </div>
        {isMobileMenuOpen ? (
          <MobileMenu />
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex cursor-pointer items-center py-4 lg:px-[2.5rem] whitespace-nowrap gap-1"
            >
              <div>문의하기</div>
              <ArrowUpRight />
            </button>
            <LocaleSwicher />
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="ml-2 rounded bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
              >
                로그아웃
              </button>
            ) : (
              <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogTrigger asChild>
                  <button
                    className="ml-2 rounded bg-[#78b237] px-4 py-2 text-sm font-semibold text-white hover:bg-[#78b237]/90 whitespace-nowrap leading-none"
                  >
                    로그인
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-xs w-full">
                  <DialogTitle>관리자 로그인</DialogTitle>
                  <input
                    type="text"
                    placeholder="아이디"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    onKeyDown={handleKeyDown} // 엔터 감지
                    className="w-full mb-2 px-3 py-2 border rounded"
                  />
                  <input
                    type="password"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                    onKeyDown={handleKeyDown} // 엔터 감지
                    className="w-full mb-2 px-3 py-2 border rounded"
                  />
                  {loginError && <div className="text-red-500 text-sm mb-2">{loginError}</div>}
                  <button
                    onClick={handleLogin}
                    className="w-full bg-[#78b237] text-white py-2 rounded hover:bg-[#78b237]/90"
                  >
                    로그인
                  </button>
                </DialogContent>
              </Dialog>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
