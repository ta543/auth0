export type ProductCardProps = {
  href: string;
  label: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <a
      href={props.href}
      className="relative text-base font-medium items-center bg-white/70 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex justify-center leading-6 min-h-[72px] min-w-[auto] z-10 border border-gray-200 px-6 rounded-2xl border-solid md:text-lg md:leading-7 md:min-h-20 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
    >
      <span className="text-gray-900 text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-7">
        {props.label}
      </span>
    </a>
  );
};
