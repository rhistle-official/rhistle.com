"use client";

import { useEffect, useState } from "react";

type BrandChangeModalProps = {
  oldName: string;
  newName: string;
  newSiteUrl: string;
};

export default function BrandChangeModal({
  oldName,
  newName,
  newSiteUrl,
}: BrandChangeModalProps) {
    const HIDE_UNTIL_KEY = "brand_change_hide_until_v1";
    const LEGACY_HIDE_UNTIL_KEY = "brand_change_hide_until";

    const [open, setOpen] = useState(false);

    const closeTemp = () => {
        setOpen(false);
    };

    const hideToday = () => {
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        localStorage.setItem(HIDE_UNTIL_KEY, String(end.getTime()));
        setOpen(false);
    };

    useEffect(() => {
        try {
            const raw =
            localStorage.getItem(HIDE_UNTIL_KEY) ??
            localStorage.getItem(LEGACY_HIDE_UNTIL_KEY) ??
            "0";

            const until = Number(raw);
            setOpen(!until || Date.now() > until);
        } catch {
            setOpen(true);
        }
    }, []);

  // ESC 닫기 + 배경 스크롤 잠금
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeTemp();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="사명 변경 안내"
      className="fixed inset-0 z-[9999]"
    >
      {/* Overlay (클릭하면 닫힘) */}
      <button
        type="button"
        aria-label="모달 닫기"
        onClick={closeTemp}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
      />

      {/* Center Wrapper */}
      <div className="relative mx-auto flex min-h-full max-w-lg items-center px-4 py-10">
        {/* Modal Panel */}
        <div
          className="
            relative w-full
            rounded-2xl
            bg-white/90
            backdrop-blur-xl
            shadow-2xl
            border border-white/30
          "
        >

          <div className="relative p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  사명 변경 안내
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    기존 <b>(주)나무아이앤씨</b>는<br />
                    <b>“이롭고 슬기롭게”</b>라는 슬로건과 함께<br />
                    <b>(주)리슬(Rhistle)</b>로 새롭게 출발합니다.
                    <br /><br />
                    서비스는 동일하게 제공되며,<br />
                    아래 버튼을 통해 새로운 홈페이지를 확인하실 수 있습니다.
                </p>
              </div>

              <button
                type="button"
                onClick={closeTemp}
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                    type="button"
                    onClick={hideToday}
                    className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                    오늘 하루 보지 않기
                </button>

              <a
                href={newSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-md
                  bg-gradient-to-r from-[#78b237] to-[#4f8f2b]
                  px-5 py-2
                  text-sm font-semibold text-white
                  shadow hover:opacity-90
                "
              >
                새 홈페이지로 이동 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}