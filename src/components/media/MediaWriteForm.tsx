"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { createMedia } from "@/lib/api";
import dynamic from "next/dynamic";

const ToastEditor = dynamic(
  () => import("@toast-ui/react-editor").then(mod => mod.Editor),
  { ssr: false }
);
import "@toast-ui/editor/dist/toastui-editor.css";

const formSchema = z.object({
    //1. 제목, 2. 언론사, 3. 날짜, 4. 바로가기
  title: z.string().min(1, "제목을 입력해주세요."),
  press: z.string(),
  date: z.string(),
  link: z.string().min(1, "링크를 입력해주세요."),
});

const NoticeWriteForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const [loginError, setLoginError] = useState("");
  const editorRef = useRef<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      press: "",
      date: "",
      link: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const finalData = { ...data };
    try {
      setIsSubmitting(true);
      const auth = "Basic " + btoa(`${adminId}:${adminPw}`);
      const res = await createMedia(finalData, auth);
      if (res.error) throw new Error(res.error);
      alert("게시물이 등록되었습니다.");
      router.push("/support/media");
    } catch (error) {
      alert("게시물 등록이 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg border p-10 shadow-md"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">제목</FormLabel>
              <FormControl>
                <Input
                  placeholder="제목을 입력하세요."
                  {...field}
                  className="focus:border-[#78b237]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="press"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">언론사</FormLabel>
              <FormControl>
                <Input
                  placeholder="언론사를 입력하세요."
                  {...field}
                  className="focus:border-[#78b237]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">날짜</FormLabel>
              <FormControl>
                <Input
                  placeholder="기사 날짜를 입력하세요."
                  {...field}
                  className="focus:border-[#78b237]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">바로가기(링크)</FormLabel>
              <FormControl>
                <Input
                  placeholder="링크를 입력하세요."
                  {...field}
                  className="focus:border-[#78b237]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />        
        <div className="flex justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="border-[#78b237] text-[#78b237] hover:bg-[#78b237]/10"
          >
            취소
          </Button>
          <Button
            type="submit"
            className="ml-2 bg-[#78b237] hover:bg-[#78b237]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "등록 중..." : "등록"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NoticeWriteForm;