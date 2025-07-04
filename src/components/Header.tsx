"use client";

import { useHoverStore } from "@/store/useNavhoverStore";
import NavBar from "./Navbar";

const Header = ({ bgColor }: { bgColor: string }) => {
  const hovered = useHoverStore((state) => state.hovered);
  return (
    <>
      <NavBar bgColor={bgColor} />
      {hovered && (
        <div className={`${bgColor} fixed z-10 h-[25rem] w-full opacity-80`} />
      )}
    </>
  );
};

export default Header;
