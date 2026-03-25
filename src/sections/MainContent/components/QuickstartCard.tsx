export type QuickstartCardProps = {
  href: string;
  title: string;
  lightIconSrc: string;
  darkIconSrc: string;
};

export const QuickstartCard = (props: QuickstartCardProps) => {
  return (
    <a
      href={props.href}
      className="relative items-start bg-white box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:border-black"
    >
      <div className="items-start box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 w-full">
        <div className="items-center box-border caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] w-9 rounded-md">
          <span className="box-border caret-transparent contents">
            <span className="box-border caret-transparent contents">
              <img
                alt={props.title}
                src={props.lightIconSrc}
                className="box-border caret-transparent h-7 max-w-full min-h-[auto] min-w-[auto] w-7 rounded-bl rounded-br rounded-tl rounded-tr"
              />
            </span>
          </span>
          <span className="box-border caret-transparent contents">
            <span className="box-border caret-transparent contents">
              <img
                alt={props.title}
                src={props.darkIconSrc}
                className="box-border caret-transparent hidden h-7 max-w-full w-7 rounded-bl rounded-br rounded-tl rounded-tr"
              />
            </span>
          </span>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full">
          <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent tracking-[-0.4px] min-h-[auto] min-w-[auto] font-aeonik hover:border-b-gray-900">
            {props.title}
          </h3>
          <span className="items-center bg-black box-border caret-transparent flex h-7 justify-center min-h-[auto] min-w-[auto] opacity-0 translate-x-2 w-7 rounded-full">
            <img
              src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 w-4"
            />
          </span>
        </div>
      </div>
    </a>
  );
};
