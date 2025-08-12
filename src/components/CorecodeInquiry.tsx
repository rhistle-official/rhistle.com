"use client";

import dynamic from "next/dynamic";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import type { Editor as EditorType } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction
} from "@/components/ui/alert-dialog"
import PrivacyDialog from "@/components/inquiry/PrivacyDialog"
import AgeDialog from "@/components/inquiry/AgeDialog"
import { useTranslations } from "next-intl";

const ToastEditor = dynamic(
  () => import("@toast-ui/react-editor").then(mod => mod.Editor),
  { ssr: false }
);

const CorecodeInquiry = () => {
  const t = useTranslations("inquiry");
  const editorRef = useRef<EditorType>(null);
  const [agreeAll, setAgreeAll] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const [openPrivacy, setOpenPrivacy] = useState(false)
  const [openAge, setOpenAge] = useState(false)
  
  const [fromAllAgree, setFromAllAgree] = useState(false)
  const [hasSeenPrivacyDialog, setHasSeenPrivacyDialog] = useState(false)
  const [hasSeenAgeDialog, setHasSeenAgeDialog] = useState(false)

  const FormSchema = useMemo(() => z.object({
    name: z.string().trim().min(1, { message: t("errors.required") }),
    email: z.string().trim()
      .min(1, { message: t("errors.required") })
      .email({ message: t("errors.invalidEmail") }),
    company: z.string().optional(),
    rank: z.string().optional(),
    industry: z.string().optional(),
    detail: z.string(),
    agreePrivacy: z.boolean().refine(v => v === true, { message: t("errors.mustCheck") }),
    agreeOver14: z.boolean().refine(v => v === true, { message: t("errors.mustCheck") }),
  }), [t]);

  // 모두 동의 시
  const handleAgreeAll = (checked: boolean) => {
    setAgreeAll(checked)
    form.setValue("agreePrivacy", checked)
    form.setValue("agreeOver14", checked)

    if (!checked) return;

    setFromAllAgree(true);

    if (!hasSeenPrivacyDialog) {
      setHasSeenPrivacyDialog(true);
      setOpenPrivacy(true);
    } else if (!hasSeenAgeDialog) {
      setHasSeenAgeDialog(true);
      setOpenAge(true);
    }
  }

  const openAlert = (message: string) => {
    setAlertMessage(message)
    setAlertOpen(true)
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      rank: "",
      industry: "",
      detail: "",
      agreePrivacy: false,
      agreeOver14: false,
    },
  });

  useEffect(() => {
    const privacy = form.watch("agreePrivacy")
    const age = form.watch("agreeOver14")

    const allAgreed = privacy && age
    setAgreeAll(allAgreed)
  }, [form.watch("agreePrivacy"), form.watch("agreeOver14")])

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const message = editorRef.current?.getInstance().getMarkdown();
    if (!message || message.trim() === "" || message.trim() === " ") {
      openAlert(t("errors.needDetail"))
      return;
    }

    const finalData = {
      ...data,
      detail: message, // detail 필드 추가
    };

    try {
      const response = await fetch(
        "/api/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t("alerts.sendFail"));
      }
      
      setAlertMessage(t("alerts.sendSuccess"));
      setAlertOpen(true);
    } catch (error) {
      console.error("Error creating post:", error);
      setAlertMessage(t("alerts.sendFail"));
      setAlertOpen(true);
    }
    console.log(JSON.stringify({ ...data }));
  };

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="flex items-center justify-center mb-6">
        <div className="w-[11rem]">
          <Image
            src="/image/ci.png"
            alt="회사 로고"
            width={420}
            height={127}
            priority
          />
        </div>
      </div>
      <div className="text-center space-y-2 mb-8">
        <div className="text-2xl font-bold text-center">{t("title")}</div>
        <div className="text-gray-600">
          {t("subtitle")}
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="text-[1rem] font-medium">
                  {t("fields.name")}<span className="ml-1 text-red-500">*</span>
                </div>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="text-[1rem] font-medium">
                  {t("fields.email")}<span className="ml-1 text-red-500">*</span>
                </div>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <div className="text-[1rem] font-medium">{t("fields.company")}</div>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rank"
            render={({ field }) => (
              <FormItem>
                <div className="text-[1rem] font-medium">{t("fields.rank")}</div>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="경영진">{t("options.rank.executive")}</SelectItem>
                    <SelectItem value="관리자">{t("options.rank.manager")}</SelectItem>
                    <SelectItem value="실무자">{t("options.rank.staff")}</SelectItem>
                    <SelectItem value="학생">{t("options.rank.student")}</SelectItem>
                    <SelectItem value="기타">{t("options.common.etc")}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <div className="text-[1rem] font-medium">{t("fields.industry")}</div>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="IT/통신">{t("options.industry.it")}</SelectItem>
                    <SelectItem value="공공">{t("options.industry.public")}</SelectItem>
                    <SelectItem value="교육">{t("options.industry.education")}</SelectItem>
                    <SelectItem value="금융">{t("options.industry.finance")}</SelectItem>
                    <SelectItem value="서비스업">{t("options.industry.service")}</SelectItem>
                    <SelectItem value="유통/리테일">{t("options.industry.retail")}</SelectItem>
                    <SelectItem value="제조">{t("options.industry.manufacturing")}</SelectItem>
                    <SelectItem value="의료/제약">{t("options.industry.medical")}</SelectItem>
                    <SelectItem value="에너지">{t("options.industry.energy")}</SelectItem>
                    <SelectItem value="기타">{t("options.common.etc")}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem>
                <div className="text-[1rem] font-medium">
                  {t("fields.detail")}<span className="ml-1 text-red-500">*</span>
                </div>
                <ToastEditor
                  ref={editorRef}
                  previewStyle="tab"
                  height="300px"
                  initialEditType="markdown"
                  initialValue=" "
                  useCommandShortcut={true}
                  style={{ width: "100%" }}
                  className="max-w-full"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-2">
            <Checkbox
              id="agree-all"
              checked={agreeAll}
              onCheckedChange={(checked) => handleAgreeAll(checked as boolean)}
            />
            <label
              htmlFor="agree-all"
              className="text-[1rem] font-medium cursor-pointer select-none"
            >
              {t("agreements.all")}
              <span className="text-red-500">
                {t("agreements.allNotice")}
              </span>
            </label>
          </div>
          <PrivacyDialog
            open={openPrivacy}
            onClose={() => {
              setOpenPrivacy(false)

              if (fromAllAgree && !hasSeenAgeDialog) {
                setHasSeenAgeDialog(true);
                setTimeout(() => {
                  setOpenAge(true);
                  setFromAllAgree(false); // 마지막 단계에서 초기화
                }, 100);
              } else {
                setFromAllAgree(false); // 단독 다이얼로그 종료 시 초기화
              }
            }}
          />
          <AgeDialog
            open={openAge}
            onClose={() => setOpenAge(false)}
          />
          <FormField
            control={form.control}
            name="agreePrivacy"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      id="agree-privacy"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked)

                        if (checked === true && !hasSeenPrivacyDialog) {
                          setHasSeenPrivacyDialog(true)
                          setOpenPrivacy(true)
                        }
                      }}
                    />
                  </FormControl>
                  <label
                    htmlFor="agree-privacy"
                    className="text-[1rem] font-medium cursor-pointer select-none"
                  >
                    {t("agreements.privacy")}<span className="ml-1 text-red-500">*</span>
                  </label>
                </div>
                {!agreeAll && <FormMessage />}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreeOver14"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      id="agree-over-14"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked)

                        if (checked === true && !hasSeenAgeDialog) {
                          setHasSeenAgeDialog(true)
                          setOpenAge(true)
                        }
                      }}
                    />
                  </FormControl>
                  <label
                    htmlFor="agree-over-14"
                    className="text-[1rem] font-medium cursor-pointer select-none"
                  >
                    {t("agreements.over14")}<span className="ml-1 text-red-500">*</span>
                  </label>
                </div>
                {!agreeAll && <FormMessage />}
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center m-12">
            <button
              type="submit"
              className="rounded-md bg-[#333333] px-8 py-3 text-white hover:bg-[#111] transition cursor-pointer active:scale-95"
            >
              {t("submit")}
            </button>
            <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{alertMessage}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => setAlertOpen(false)}>확인</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default CorecodeInquiry;