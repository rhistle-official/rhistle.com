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
import { createNotice } from "@/lib/api";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const ToastEditor = dynamic(
  () => import("@toast-ui/react-editor").then(mod => mod.Editor),
  { ssr: false }
);
import "@toast-ui/editor/dist/toastui-editor.css";

const NoticeWriteForm = () => {
  const t = useTranslations("notice");

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const [loginError, setLoginError] = useState("");
  const editorRef = useRef<any>(null);

  const formSchema = z.object({
    title: z.string().min(1, t("form.title.required")),
    content: z.string().min(1, t("form.content.required")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const content = editorRef.current?.getInstance().getHTML() || "";
    const finalData = {
      ...data,
      content,
    };
    try {
      setIsSubmitting(true);
      
      // 서버 사이드 인증 API 호출
      const authRes = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: adminId, password: adminPw }),
      });

      if (!authRes.ok) {
        alert("관리자 인증 실패");
        return;
      }

      const authData = await authRes.json();
      if (!authData.success) {
        alert("관리자 인증 실패");
        return;
      }

      const res = await createNotice(finalData);
      if (res.error) throw new Error(res.error);
      alert(t("form.alerts.success"));
      router.push("/support/notice");
    } catch (error) {
      alert(t("form.alerts.error"));
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
        <div className="flex gap-2 items-center">
          <Input
            placeholder="관리자 아이디"
            value={adminId}
            onChange={e => setAdminId(e.target.value)}
            className="w-40"
          />
          <Input
            placeholder="비밀번호"
            type="password"
            value={adminPw}
            onChange={e => setAdminPw(e.target.value)}
            className="w-40"
          />
          {loginError && <span className="text-red-500 text-sm">{loginError}</span>}
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">{t("form.title.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("form.title.placeholder")}
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
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">{t("form.content.label")}</FormLabel>
              <FormControl>
                <div className="border rounded-md">
                  <ToastEditor
                    ref={editorRef}
                    initialValue=" "
                    previewStyle="vertical"
                    height="300px"
                    initialEditType="wysiwyg"
                    useCommandShortcut={true}
                    hideModeSwitch={true}
                    onChange={() => {
                      const html = editorRef.current?.getInstance().getHTML();
                      field.onChange(html);
                    }}
                  />
                </div>
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
            {t("form.buttons.cancel")}
          </Button>
          <Button
            type="submit"
            className="ml-2 bg-[#78b237] hover:bg-[#78b237]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("form.buttons.submitting") : t("form.buttons.submit")}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NoticeWriteForm;