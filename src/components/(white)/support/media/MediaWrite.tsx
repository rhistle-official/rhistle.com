import React from "react";
import Image from "next/image";
import MediaWriteForm from "./MediaWriteForm";

const NoticeWrite = () => {
  return (
    <div className="space-y-10 lg:px-[5rem] lg:pb-[6.25rem]">
      {/* 상단 배너 */}
      <div className="relative h-[10vh] overflow-hidden rounded-4xl md:h-[15vh] lg:h-[25vh]">
        <Image
          src="/image/com_2.png"
          alt="언론제보 문구 있는 볼펜 배경 이미지"
          fill
          className="object-cover object-middle brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="text-2xl font-bold md:text-3xl lg:text-4xl">언론보도</div>
        </div>
      </div>
      {/* 글쓰기 폼 */}
      <div className="rounded-4xl bg-white">
        <div className="mx-auto max-w-4xl py-10">
            <MediaWriteForm />
        </div>
      </div>
    </div>
  );
};

export default NoticeWrite;