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
import { useTranslations } from "next-intl";

const ToastEditor = dynamic(
  () => import("@toast-ui/react-editor").then(mod => mod.Editor),
  { ssr: false }
);
import "@toast-ui/editor/dist/toastui-editor.css";

const NoticeWriteForm = () => {
  const t = useTranslations("media");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const editorRef = useRef<any>(null);

  const formSchema = z.object({
    title: z.string().min(1, t("form.title.required")),
    press: z.string(),
    date: z.string(),
    link: z.string().min(1, t("form.link.required")),
  });

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
          name="press"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">{t("form.press.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("form.press.placeholder")}
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
              <FormLabel className="font-medium">{t("form.date.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("form.date.placeholder")}
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
              <FormLabel className="font-medium">{t("form.link.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("form.link.placeholder")}
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