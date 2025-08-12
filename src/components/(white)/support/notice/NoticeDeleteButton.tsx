"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { deleteNotice } from "@/lib/api";
import { useAuth } from "@clerk/clerk-react";
import { useTranslations } from "next-intl";

const NoticeDeleteButton = ({ post_id }: { post_id: number }) => {
  const t = useTranslations("notice");
  const router = useRouter();
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded || !isSignedIn) return null;

  const deleteHandler = async () => {
    try {
      const auth = 'Basic ' + btoa(`${adminId}:${adminPw}`);
      const res = await deleteNotice(post_id, auth);
      if (res.error) throw new Error(res.error);
      alert(t("delete.success"));
      router.push("/support/notice");
    } catch (error) {
      console.error("Error creating post:", error);
      alert(t("delete.fail"));
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red-500 hover:bg-red-500/90">{t("delete.button")}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="mx-auto max-w-xs rounded-xl sm:max-w-[25rem]">
        <AlertDialogHeader>
          <AlertDialogTitle>{t("delete.desc")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("delete.desc")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("delete.cancel")}</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={deleteHandler}>{t("delete.confirm")}</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default NoticeDeleteButton;