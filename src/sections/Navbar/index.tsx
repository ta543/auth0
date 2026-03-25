import { NavbarTop } from "@/sections/Navbar/components/NavbarTop";

export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent w-full z-30 top-0 md:sticky">
      <div className="absolute box-border caret-transparent h-full w-full z-10 border-b border-solid border-transparent"></div>
      <div className="absolute backdrop-blur-[20px] box-border caret-transparent z-0 inset-0"></div>
      <NavbarTop />
    </div>
  );
};
