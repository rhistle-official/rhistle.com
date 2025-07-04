import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const LocaleSwicher = () => {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();

  const onSelectChange = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const nextLocale = (e.target as HTMLButtonElement).value;
    router.replace(`/${pathName}`, { locale: nextLocale });
  };

  return (
    <div className="flex items-center lg:text-lg">
      {routing.locales.map((cur, idx) => (
        <div key={cur} className="flex">
          <button
            type="button"
            value={cur}
            onClick={onSelectChange}
            className={`${locale === cur ? "font-bold underline underline-offset-4" : ""} cursor-pointer`}
          >
            {t("locale", { locale: cur })}
          </button>
          {idx + 1 !== routing.locales.length && <div className="px-2">|</div>}
        </div>
      ))}
    </div>
  );
};
export default LocaleSwicher;
