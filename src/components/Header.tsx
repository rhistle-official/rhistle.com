"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

const Header = () => {
  const t = useTranslations("header");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    handleScroll()

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-40 w-full font-bold text-white text-xl ${isScrolled && "border-gray-800 border-b bg-black"}`}
    >
      <nav className="mx-auto max-w-400">
        <ul className="flex h-28 items-center justify-between">
          <li>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/logo_white.webp"}
                alt="RHISTLE 로고"
                width={30}
                height={30}
              />
              <p>RHISTLE</p>
            </Link>
          </li>
          <li>
            <Link href="/solutions">{t('solutions')}</Link>
          </li>
          <li>
            <Link href="/company">{t('company')}</Link>
          </li>
          <li>
            <Link href="/contact">{t('contact')}</Link>
          </li>
          <li>
            <Link
              href="https://tech.rhistle.com"
              target="_blank"
              className="flex items-center justify-center hover:border-b"
            >
              {t('blog')}
              <ArrowUpRight />
            </Link>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
