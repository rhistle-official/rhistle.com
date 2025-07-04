"use client";

import { useEffect, ReactNode } from "react";
import { useSessionStore } from "@/store/useSessionStore";

interface SessionCheckProps {
  children: ReactNode;
}

const SessionCheck = ({ children }: SessionCheckProps) => {
  const { isLoggedIn, isLoading, checkSession } = useSessionStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (isLoading) {
    return null;
  }

  return isLoggedIn ? <>{children}</> : null;
};

export default SessionCheck; 