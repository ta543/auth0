export type TechCardProps = {
  href: string;
  alt: string;
  imageSrc: string;
  imageHoverSrc: string;
  label: string;
};

export const TechCard = (props: TechCardProps) => {
  return (
    <a
      href={props.href}
      className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
    >
      <img
        alt={props.alt}
        src={props.imageSrc}
        className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
      />
      <img
        alt={props.alt}
        src={props.imageHoverSrc}
        className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
      />
      <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
        {props.label}
      </span>
    </a>
  );
};
