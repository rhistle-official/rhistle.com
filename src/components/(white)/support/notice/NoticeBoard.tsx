"use client";
 
import NoticeList from "./NoticeList";
import NoticeWriteButton from "./NoticeWriteButton"; 

interface NoticeBoardProps {
  searchParams: { [key: string]: string | undefined };
}

const NoticeBoard = ({ searchParams }: NoticeBoardProps) => {
  return (
    <div className="space-y-6"> 
      {/* 게시판 테이블 */}
      <div className="relative">
        <NoticeList searchParams={searchParams} /> 
          <NoticeWriteButton />
      </div>
    </div>
  );
};
export default NoticeBoard;