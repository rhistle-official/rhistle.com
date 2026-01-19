"use client";

import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

const SolutionsSection = () => {
  const t = useTranslations("home");
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section aria-labelledby="solutions-heading" className="bg-[#1428A0]">
      <div
        className={`mx-auto flex min-h-screen max-w-400 flex-col gap-28 py-30`}
      >
        <h2
          id="solutions-heading"
          ref={ref1}
          className={`${inView1 ? "animate-fade-in-up opacity-100" : "opacity-0"} font-bold text-7xl text-white`}
        >
          Solutions
        </h2>
        <div
          ref={ref2}
          className={`flex flex-1 gap-10 ${inView2 ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <article className="flex flex-col gap-8 overflow-hidden rounded-4xl bg-white p-8">
            <div className="flex h-1/2 items-center justify-center rounded-4xl bg-[url(/corecode.jpg)] bg-center bg-cover font-bold text-5xl text-white">
              <p aria-hidden>CoreCode</p>
            </div>
            <h3 className="font-black text-4xl text-slate-900">CoreCode</h3>
            <p className="text-lg text-slate-600">{t("solutions.corecode")}</p>
          </article>

          <article className="flex flex-col gap-8 overflow-hidden rounded-4xl bg-white p-8">
            <div className="flex h-1/2 items-center justify-center rounded-4xl bg-[url(/nexumm.jpg)] bg-center bg-cover font-bold text-5xl text-white">
              <p aria-hidden>Nexumm</p>
            </div>
            <h3 className="font-black text-4xl text-slate-900">Nexumm</h3>
            <p className="text-lg text-slate-600">{t("solutions.nexumm")}</p>
          </article>
        </div>
      </div>
    </section>
  );
};
export default SolutionsSection;
