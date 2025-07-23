import QeustionMart from "../../../public/svg/QeustionMart";

const InquiryButton = ({
  bgColor,
  textColor,
}: {
  bgColor: string;
  textColor: string;
}) => {
  return (
    <button
      type="button"
      className="fixed top-[83vh] right-[2rem] z-10 cursor-pointer lg:right-[5rem]"
    >
      <div
        className={`flex h-[3rem] w-[3rem] items-center justify-center rounded-full ${bgColor} ${textColor}`}
      >
        <QeustionMart />
      </div>
    </button>
  );
};
export default InquiryButton;
