"use client";

import { useState, useEffect } from "react";
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
import { updateNotice, getNoticeById } from "@/lib/api";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const formSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  content: z.string().min(1, "내용을 입력해주세요."),
});

interface NoticePatchFormProps {
  id: string;
}

const NoticePatchForm = ({ id }: NoticePatchFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const [loginError, setLoginError] = useState("");
  const [editorContent, setEditorContent] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    },
    imageHandler: {
      upload: (file: File) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }
    }
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNoticeById(id);
        if (data.error) throw new Error(data.error);
        form.reset({
          title: data.title,
          content: data.content,
        });
        setEditorContent(data.content);
      } catch (error) {
        alert("게시물을 불러오는데 실패했습니다.");
        router.push("/support/notice");
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotice();
  }, [id, form, router]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoginError("");
    
    // 서버 사이드 인증 API 호출
    try {
      setIsSubmitting(true);
      const authRes = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: adminId, password: adminPw }),
      });

      if (!authRes.ok) {
        setLoginError("관리자 인증 실패");
        return;
      }

      const authData = await authRes.json();
      if (!authData.success) {
        setLoginError("관리자 인증 실패");
        return;
      }
      
      const finalData = {
        ...data,
        content: editorContent || data.content
      };

      const res = await updateNotice(id, finalData);
      if (res.error) throw new Error(res.error);
      alert("게시물이 수정되었습니다.");
      router.push("/support/notice");
    } catch (error) {
      alert("게시물 수정이 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">로딩 중...</div>;
  }

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
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">내용</FormLabel>
              <FormControl>
                <div className="border rounded-md">
                  <ReactQuill
                    theme="snow"
                    value={editorContent}
                    onChange={(content) => {
                      setEditorContent(content);
                      field.onChange(content);
                    }}
                    modules={modules}
                    formats={formats}
                    placeholder="내용을 입력하세요..."
                    style={{ height: '300px' }}
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
            취소
          </Button>
          <Button
            type="submit"
            className="ml-2 bg-[#78b237] hover:bg-[#78b237]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "수정 중..." : "수정"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NoticePatchForm;