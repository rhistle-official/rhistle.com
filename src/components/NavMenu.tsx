import { Link } from "@/i18n/navigation";
import { useHoverStore } from "@/store/useNavhoverStore";
import { useTranslations } from "next-intl";

interface NavMenu {
  title: string;
  subMenu: { title: string; subTitle?: string; href: string }[];
}

const navMenus: NavMenu[] = [
  {
    title: "vision",
    subMenu: [
      { title: "Vision", href: "/vision" },
    ],
  },
  {
    title: "solution",
    subMenu: [
      { title: "CoreCode", subTitle: "설비/센서 연계 기술", href: "/product/corecode" },
      { title: "VACI", subTitle: "관제 Digital Twin 시스템", href: "/product/vaci" },
      { title: "MEXI", subTitle: "스마트 팩토리 컨설팅", href: "/product/mexi" },
    ],
  },
  {
    title: "support",
    subMenu: [
      { title: "라이브러리", href: "/support/library" },
      { title: "언론보도", href: "/support/media" },
      { title: "공지사항", href: "/support/notice" },
    ],
  },
  {
    title: "company",
    subMenu: [
      { title: "CEO", href: "/company/ceo" },
      { title: "연혁", href: "/company/history" },
      { title: "윤리경영", href: "/company/ethics" },
      { title: "채용", href: "/company/recruit" },
      { title: "복리후생", href: "/company/welfare" },
      { title: "찾아오시는 길", href: "/company/map" },
    ],
  },
];

const NavMenu = () => {
  const t = useTranslations("NavBar");
  const hovered = useHoverStore((state) => state.hovered);
  const setHovered = useHoverStore((state) => state.setHovered);

  return (
    <nav className="hidden sm:flex items-center space-x-6 whitespace-nowrap" aria-label="메인 메뉴">
      <ul className="flex items-center justify-center font-bold lg:text-lg">
        {navMenus.map((item) => (
          <li
            key={item.title}
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <button type="button" className="px-[1rem] py-4 lg:px-[2.5rem]">
              {t(`${item.title}.title`)}
            </button>
            {hovered && (
              <ul className="absolute z-20 mx-[1rem] w-full lg:mx-[2.5rem]">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.title} className="hover:text-[#96cb4f] py-2">
                    <Link
                      href={`${subItem.href}`}
                      className="text-base font-semibold "
                    >
                      {subItem.title}
                      <br />
                      {subItem.subTitle && (
                        <span className="text-sm text-gray-500">
                          {subItem.subTitle}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
