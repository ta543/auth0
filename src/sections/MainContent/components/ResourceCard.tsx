export type ResourceCardProps = {
  href?: string;
  alt: string;
  lightImageSrc: string;
  darkImageSrc: string;
  title: string;
  description: string;
};

export const ResourceCard = (props: ResourceCardProps) => {
  return (
    <a
      href={props.href}
      className="relative bg-white box-border caret-transparent block min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hover:border-black"
    >
      <div className="box-border caret-transparent h-12 w-12 overflow-hidden mb-4">
        <span className="box-border caret-transparent contents">
          <span className="box-border caret-transparent contents">
            <img
              alt={props.alt}
              src={props.lightImageSrc}
              className="box-border caret-transparent h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
            />
          </span>
        </span>
        <span className="box-border caret-transparent contents">
          <span className="box-border caret-transparent contents">
            <img
              alt={props.alt}
              src={props.darkImageSrc}
              className="box-border caret-transparent hidden h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
            />
          </span>
        </span>
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[21.6px] mb-2 font-aeonik hover:border-b-gray-900">
          {props.title}
        </h3>
        <span className="text-gray-600 text-[15px] box-border caret-transparent">
          {props.description}
        </span>
      </div>
    </a>
  );
};
