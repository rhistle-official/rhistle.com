"use client";

import ArrowUp from "../../../public/svg/ArrowUp";

const ScrollToTopButton = ({
  bgColor,
  textColor,
}: {
  bgColor: string;
  textColor: string;
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="fixed top-[90vh] right-[2rem] z-10 cursor-pointer lg:right-[5rem]"
      onClick={scrollToTop}
    >
      <div
        className={`flex h-[3rem] w-[3rem] items-center justify-center rounded-full ${bgColor} ${textColor}`}
      >
        <div>
          <ArrowUp />
        </div>
      </div>
    </button>
  );
};
export default ScrollToTopButton;
