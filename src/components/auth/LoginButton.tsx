"use client";

import { useTranslations } from "next-intl";

export default function LoginButton({ className }: { className?: string }) {
  const handleLoginRedirect = () => {
    const currentURL = window.location.href;
    const signInBase = process.env.NEXT_PUBLIC_SIGN_IN_URL || "/sign-in";

    const loginURL = `${signInBase}?redirect=${encodeURIComponent(currentURL)}`;
    window.location.href = loginURL;
  };
  
  const t = useTranslations("NavBar"); 

  return (
    <button 
      onClick={handleLoginRedirect}
      className={[
        "ml-2",
        "bg-[#78b237]",
        "text-white",
        "px-4",
        "py-2",
        "text-sm",
        "font-semibold",
        "rounded",
        "whitespace-nowrap",
        "cursor-pointer",
        "hover:bg-[#78b237]/90",
        "active:bg-[#4f8a27]",
        "transition",
        "duration-200"
      ].join(" ")}
    >
      {t("loginButton.login")}
    </button>
  );
}