"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/api";
import { post } from "@/lib/type";
import NoticePagination from "./NoticePagination";
import EditAuthButton from "@/components/ui/EditAuthButton";
import Link from "next/link";

interface NoticeBoardProps {
  searchParams: { [key: string]: string | undefined };
}

const NoticeList = ({ searchParams }: NoticeBoardProps) => {
  const [posts, setPosts] = useState<post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);

  const { page = "1", searchTerm = "" } = searchParams || {};

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const response = await fetchPosts(page, searchTerm);
        setPosts(response.content);
        setCurrentPage(response.number + 1);
        setPostPerPage(response.size);
        setTotalPosts(response.totalElements);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page, searchTerm]);

  const getConverDateTime = (createAt: string) => {
    if (!createAt) return "";
    const parts = createAt.split("T");
    if (parts.length < 2) return createAt;
    
    const date = parts[0].split("-");
    const formattedDate = `${date[0]}년 ${date[1]}월 ${date[2]}일`;
    const time = parts[1].slice(0, 5);
    return [formattedDate, time].join(" ");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-lg text-gray-600">로딩 중...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm md:text-base lg:text-lg">
          총&nbsp;
          <span className="font-semibold text-blue-500">{totalPosts}</span>
          건이 검색되었습니다.
        </div>
        <EditAuthButton />
      </div>

      <table className="w-full text-left border-t">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-2">No</th>
            <th className="py-3 px-2">제목</th>
            <th className="py-3 px-2 w-48 text-white">작성일</th>
          </tr>
        </thead>
        <tbody>
          {totalPosts === 0 ? (
            <tr>
              <td colSpan={3} className="py-8 text-center text-lg font-semibold text-gray-500">
                게시물이 없습니다.
              </td>
            </tr>
          ) : (
            posts.map((post, idx) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-2">
                  {totalPosts - (currentPage - 1) * postPerPage - idx}
                </td>
                <td className="py-3 px-2">
                  <Link href={`/support/notice/${post.id}`} className="font-semibold cursor-pointer hover:text-[#78b237]">
                    {post.title}
                  </Link>
                </td>
                <td className="py-3 px-2 text-sm text-gray-600">
                  {getConverDateTime(post.createdAt)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="mt-6 flex justify-center">
        <NoticePagination
          currentPage={currentPage}
          postPerPage={postPerPage}
          totalPosts={totalPosts}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};
export default NoticeList;