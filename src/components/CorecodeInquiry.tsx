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
import { useEffect, useState } from "react";
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
import { useRef } from "react";

const ToastEditor = dynamic(
  () => import("@toast-ui/react-editor").then(mod => mod.Editor),
  { ssr: false }
);

const FormSchema = z.object({
  name: z.string().trim().min(1, {
    message: "이 항목은 필수 입력 값입니다.",
  }),
  email: z
    .string()
    .trim()
    .min(1, { message: "이 항목은 필수 입력 값입니다." })
    .email({ message: "잘못된 이메일 주소입니다." }),
  company: z.string().optional(),
  rank: z.string().optional(),
  industry: z.string().optional(),
  // detail은 editorRef에서 직접 검사하므로 제거
  detail: z.string(),
  agreePrivacy: z.boolean().refine((val) => val === true, {
    message: "이 항목은 필수 체크 입니다.",
  }),
  agreeOver14: z.boolean().refine((val) => val === true, {
    message: "이 항목은 필수 체크 입니다.",
  }),
});

const CorecodeInquiry = () => {
  const [agreeAll, setAgreeAll] = useState(false);
  const editorRef = useRef<EditorType>(null);

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
    form.setValue("agreePrivacy", agreeAll);
    form.setValue("agreeOver14", agreeAll);
  }, [agreeAll]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(JSON.stringify({ ...data }));

    const message = editorRef.current?.getInstance().getMarkdown();
    if (!message || message.trim() === "") {
      alert("문의 내용을 입력해주세요.");
      return;
    }

    const finalData = {
      ...data,
      detail: message, // detail 필드 추가
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/corecode-inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "이메일 전송에 실패했습니다.");
      }
      alert("이메일 전송 성공");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("이메일 전송 실패");
    }
    console.log(JSON.stringify({ ...data }));
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="flex items-center justify-center">
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
        <div className="text-2xl font-bold text-center">문의하기</div>
        <div className="text-gray-600">
          궁금하신 내용을 남겨주시면, 담당자가 빠른 시간 안에 연락 드리겠습니다.
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
                  이름<span className="ml-1 text-red-500">*</span>
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
                  이메일<span className="ml-1 text-red-500">*</span>
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
                <div className="text-[1rem] font-medium">회사(소속)</div>
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
                <div className="text-[1rem] font-medium">직급</div>
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
                    <SelectItem value="경영진">경영진</SelectItem>
                    <SelectItem value="관리자">관리자</SelectItem>
                    <SelectItem value="실무자">실무자</SelectItem>
                    <SelectItem value="학생">학생</SelectItem>
                    <SelectItem value="기타">기타</SelectItem>
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
                <div className="text-[1rem] font-medium">업종</div>
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
                    <SelectItem value="IT/통신">IT/통신</SelectItem>
                    <SelectItem value="공공">공공</SelectItem>
                    <SelectItem value="교육">교육</SelectItem>
                    <SelectItem value="금융">금융</SelectItem>
                    <SelectItem value="서비스업">서비스업</SelectItem>
                    <SelectItem value="유통/리테일">유통/리테일</SelectItem>
                    <SelectItem value="제조">제조</SelectItem>
                    <SelectItem value="의료/제약">의료/제약</SelectItem>
                    <SelectItem value="에너지">에너지</SelectItem>
                    <SelectItem value="기타">기타</SelectItem>
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
                  문의내용<span className="ml-1 text-red-500">*</span>
                </div>
                <ToastEditor
                  ref={editorRef}
                  previewStyle="tab"
                  height="300px"
                  initialEditType="markdown"
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
              checked={agreeAll}
              onCheckedChange={() => {
                setAgreeAll((prev) => !prev);
              }}
            />
            <div className="text-[1rem] font-medium">
              모두 동의 합니다.{" "}
              <span className="text-red-500">
                (체크박스를 선택하면, 다음 항목을 모두 읽고 동의한 것으로
                간주합니다.)
              </span>
            </div>
          </div>

          <FormField
            control={form.control}
            name="agreePrivacy"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="text-[1rem] font-medium">
                    개인정보 수집 및 이용에 동의합니다.
                    <span className="ml-1 text-red-500">*</span>
                  </div>
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
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="text-[1rem] font-medium">
                    만 14세 이상임을 확인하고 동의합니다.
                    <span className="ml-1 text-red-500">*</span>
                  </div>
                </div>
                {!agreeAll && <FormMessage />}
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="rounded-md bg-[#333333] px-8 py-3 text-white hover:bg-[#111] transition"
            >
              문의하기
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default CorecodeInquiry;
