"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

const NoticeEditButton = () => {
  const router = useRouter();
  const pathName = usePathname();

  const clickHandler = () => {
    router.push(`${pathName}/patch-notice`)
  }
  return (
    <Button
      className="rounded-lg bg-gray-300 px-6 py-2 text-sm text-white hover:bg-gray-300/90"
      onClick={clickHandler}
    >
      글쓰기
    </Button>
  );
};

export default NoticeEditButton;