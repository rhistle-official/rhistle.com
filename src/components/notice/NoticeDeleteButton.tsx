"use client";

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

const NoticeDeleteButton = ({ post_id }: { post_id: number }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    try {
      const response = await fetch(`http://localhost:8080/notice/${post_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("게시물이 삭제되지 않았습니다.");
      }

      router.push("/support/notice");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("게시물 삭제 실패했습니다.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red-500 hover:bg-red-500/90">삭제</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="mx-auto max-w-xs rounded-xl sm:max-w-[25rem]">
        <AlertDialogHeader>
          <AlertDialogTitle>정말로 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 취소할 수 없습니다. 해당 파일은 서버에서 제거됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={deleteHandler}>확인</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default NoticeDeleteButton;