// 'use client'; 

import { dynamicFetchPost, fetchPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
// import { useRouter } from "next/navigation";

interface Props {
  params: Promise<{ id: string; locale: string }>;
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id, locale } = await params;
  const { detailPost } = await dynamicFetchPost(Number(id));
  if (!detailPost) return notFound();

  // 이전글/다음글 조회
  // 전체 리스트를 불러와서 현재 id 기준으로 앞뒤 게시물 추출
  const pageData = await fetchPosts('1');
  const posts = pageData.content;
  const idx = posts.findIndex((p: any) => String(p.id) === String(id));
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <div className="text-sm text-gray-400 font-semibold mb-2">공지사항</div>
        <div className="text-3xl font-bold mb-2">{detailPost.title}</div>
        <div className="text-gray-500 text-base mb-6">{detailPost.createdAt?.split('T')[0].replace(/-/g, '.')}</div>
        <hr className="mb-8" />
        <div className="prose max-w-none min-h-[10rem]" dangerouslySetInnerHTML={{ __html: detailPost.content }} />
      </div>
      <div className="flex mb-8">
        <Link href={`/support/notice`} className="flex items-center text-black font-semibold hover:underline">
          <span className="mr-2">←</span>목록으로
        </Link>
      </div>
      <div className="border-t">
        <div className="flex divide-x">
          <div className="flex-1 flex items-center px-2 py-4">
            <span className="w-16 text-gray-500 font-semibold">다음글</span>
            {next ? (
              <Link href={`/support/notice/${next.id}`} className="ml-2 hover:underline truncate">{next.title}</Link>
            ) : (
              <span className="ml-2 text-gray-400">다음 글이 없습니다.</span>
            )}
          </div>
          <div className="flex-1 flex items-center px-2 py-4">
            <span className="w-16 text-gray-500 font-semibold">이전글</span>
            {prev ? (
              <Link href={`/support/notice/${prev.id}`} className="ml-2 hover:underline truncate">{prev.title}</Link>
            ) : (
              <span className="ml-2 text-gray-400">이전 글이 없습니다.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 