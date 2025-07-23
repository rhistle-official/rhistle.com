"use client";

import { useEffect } from "react";
import { useSessionStore } from "@/store/useSessionStore";

interface SessionProviderProps {
  children: React.ReactNode;
}

const SessionProvider = ({ children }: SessionProviderProps) => {
  const { checkSession } = useSessionStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return <>{children}</>;
};

export default SessionProvider; 