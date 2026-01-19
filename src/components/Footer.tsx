import Image from "next/image";
import { useTranslations } from "next-intl";

const certifications = ["gs", "kibo", "innobiz"];

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="flex flex-col gap-8 bg-neutral-950 p-20 text-white">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2 font-bold text-5xl">
          <Image src={"/logo_white.webp"} alt="logo" width={70} height={70} />
          <p>RHISTLE</p>
        </div>
        <address className="flex flex-col gap-1 text-gray-400 not-italic">
          <div className="flex flex-wrap items-center gap-x-4">
            <p className="font-bold text-lg text-white">{t("name")}</p>
            <p>{t("ceo")}</p>
          </div>
          <p>
            {t("address")}
          </p>
          <div className="flex items-center">
            <p>Tel: 02-3018-5114</p>
            <span className="mx-2">|</span>
            <p>FAX: 02-3018-3026</p>
          </div>
        </address>
      </div>
      <hr className="text-gray-800" />
      <div className="flex items-center justify-between">
        <small className="text-gray-400">
          © {new Date().getFullYear()} RHISTLE. All rights reserved.
        </small>
        <ul className="flex gap-8">
          {certifications.map((certification) => (
            <li key={certification}>
              <Image
                src={`/${certification}.webp`}
                alt={`${certification} 인증 마크`}
                width={120}
                height={120}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
