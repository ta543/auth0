import { FooterBrand } from "@/sections/Footer/components/FooterBrand";

export const Footer = () => {
  return (
    <footer className="items-center box-border caret-transparent flex flex-col w-full border-gray-100 mx-auto border-t border-solid">
      <div className="box-border caret-transparent gap-x-12 flex flex-col justify-between max-w-[984px] min-h-[auto] min-w-[auto] gap-y-12 w-full z-0 px-8 py-16 md:py-28">
        <FooterBrand />
      </div>
    </footer>
  );
};
