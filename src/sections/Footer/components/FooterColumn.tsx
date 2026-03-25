export type FooterColumnLink = {
  href: string;
  label: string;
};

export type FooterColumnProps = {
  title: string;
  links: FooterColumnLink[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-4 text-nowrap w-full md:items-center">
      <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 text-nowrap">
        <span className="text-gray-950 text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-nowrap mb-1">
          {props.title}
        </span>
        {props.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
