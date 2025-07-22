"use client";

import { useEffect, useState } from "react";
import ArrowUpRight from "../../public/svg/ArrowUpRight";
import LocaleSwicher from "./LocaleSwicher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import { useSessionStore } from "@/store/useSessionStore";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react"
import Link from 'next/link';

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
            <SignedOut>
              <Link href="/sign-in">
                <button className="ml-2 rounded bg-[#78b237] px-4 py-2 text-sm font-semibold text-white hover:bg-[#78b237]/90 whitespace-nowrap leading-none">
                  로그인
                </button>
              </Link>
            </SignedOut>

            {/* 로그인 된 경우 → 로그아웃 버튼 */}
            <SignedIn>
              <SignOutButton>
                <button className="ml-2 rounded bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300">
                  로그아웃
                </button>
              </SignOutButton>
            </SignedIn>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
