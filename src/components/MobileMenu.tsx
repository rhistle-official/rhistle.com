import Menu from "../../public/svg/Menu";

const MobileMenu = () => {
  return (
    <>
      <div className="sm:hidden sm:scale-100 scale-75">
        <Menu />
      </div>
    </>
  );
};
export default MobileMenu;
