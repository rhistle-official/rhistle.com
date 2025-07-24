"use client"

import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const MediaWriteButton = () => {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="flex justify-end mb-4">
      <Button
        className="cursor-pointer bg-[#78b237] hover:bg-[#78b237]/90 text-white font-semibold px-6 py-2 rounded-lg"
        onClick={() => router.push("/support/media/write")}
      >
        글쓰기
      </Button>
    </div>
  );
};

export default MediaWriteButton;