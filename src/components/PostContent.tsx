"use client";

import { useState } from "react";
import { post } from "@/lib/type";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NoticeDetail from "./notice/NoticeDetail";

interface ContentProps {
  post: post;
  idx: number;
  totalPosts: number;
  currentPage: number;
  postPerPage: number;
}

const PostContent = ({
  post,
  idx,
  totalPosts,
  currentPage,
  postPerPage,
}: ContentProps) => {
  const [open, setOpen] = useState(false);

  const getNoticeNumber = (idx: number) => {
    const no = totalPosts - postPerPage * (currentPage - 1) - idx;
    return no;
  };

  const getConvertDate = (createdAt: string) => {
    const date = createdAt.split("T")[0].split("-").join(".");
    return date;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="grid cursor-pointer border-b py-1 text-center text-xs hover:bg-gray-50 hover:shadow-md grid-cols-12 sm:py-2 md:text-base lg:text-lg"
        >
          <div className="col-span-1">{getNoticeNumber(idx)}</div>
          <div className="col-span-9 xs:pl-[4.5rem] pl-[1.5rem]">{post.title}</div>
          <div className="col-span-2">{getConvertDate(post.createdAt)}</div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-full">
        <NoticeDetail post={post} onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
export default PostContent;