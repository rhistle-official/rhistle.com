'use client';

import { usePathname } from "next/navigation";

export default function HideFooterOnAuthPages({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hide = pathname.includes("/sign-in") || pathname.includes("/sign-up") || pathname.includes("/forgot-password");

  if (hide) return null;
  return <>{children}</>;
}