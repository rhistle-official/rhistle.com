"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const partners = [
  "hyundaiAutoever",
  "lgCNS",
  "poscoICT",
  "samsungSDS",
  "skCnC",
  "thira",
  "kpmg",
  "pwc",
];

const PartnersSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  return (
    <section
      className="mx-auto min-h-screen max-w-400 py-30"
      aria-labelledby="partners-heading"
    >
      <div className="flex flex-col gap-28">
        <h2
          id="partners-heading"
          ref={ref1}
          className={`font-bold text-7xl ${inView1 ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          Partners
        </h2>
        <ul
          ref={ref2}
          className={`grid grid-cols-4 place-items-center gap-28 ${inView2 ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          {partners.map((partner) => (
            <li key={partner}>
              <Image
                src={`/${partner}.png`}
                alt={partner}
                width={300}
                height={300}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default PartnersSection;
