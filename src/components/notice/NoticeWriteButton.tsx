"use client"

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useSessionStore } from "@/store/useSessionStore";

const NoticeWriteButton = () => {
  const router = useRouter();
  const { isLoggedIn, checkSession } = useSessionStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (!isLoggedIn) return null;

  return (
    <div className="flex justify-end mb-4">
      <Button
        className="cursor-pointer bg-[#78b237] hover:bg-[#78b237]/90 text-white font-semibold px-6 py-2 rounded-lg"
        onClick={() => router.push("/support/notice/write")}
      >
        글쓰기
      </Button>
    </div>
  );
};

export default NoticeWriteButton;