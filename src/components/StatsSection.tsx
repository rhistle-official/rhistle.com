"use client";

import { Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import CountUp from "./CountUp";

const StatsSection = () => {
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
    <section className="bg-linear-to-b from-black to-[#1428A0] text-white">
      <div className="mx-auto flex min-h-screen max-w-400 flex-col justify-center gap-40">
        <div
          ref={ref1}
          className={`flex ${inView1 ? "animate-fade-in-up opacity-100" : "opacity-0"} flex-col gap-2`}
        >
          <p className="text-xl">since 2005</p>
          <h2 className="font-semibold text-7xl leading-tight">
            {t("stats.first")}
            <br />
            {t("stats.second")}
          </h2>
        </div>
        <ul
          ref={ref2}
          className={`${inView2 ? "animate-fade-in-up opacity-100" : "opacity-0"} flex items-center justify-between`}
        >
          <li className="flex flex-col gap-4">
            <Newspaper size={30} aria-hidden />
            <p className="flex font-bold text-9xl">
              {inView2 && <CountUp end={400} duration={1000} />}+
            </p>
            <p className="font-semibold text-2xl">Solutions Deployed</p>
          </li>
          <li className="flex flex-col gap-4">
            <Newspaper size={30} aria-hidden />
            <p className="flex font-bold text-9xl">
              {inView2 && <CountUp end={50} duration={1000} />}+
            </p>
            <p className="font-semibold text-2xl">Customers</p>
          </li>
          <li className="flex flex-col gap-4">
            <Newspaper size={30} aria-hidden />
            <p className="flex font-bold text-9xl">
              {inView2 && <CountUp end={220} duration={1000} />}+
            </p>
            <p className="font-semibold text-2xl">Project</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default StatsSection;
