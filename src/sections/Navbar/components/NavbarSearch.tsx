export const NavbarSearch = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-2.5 hidden basis-[0%] grow min-h-0 min-w-0 gap-y-2.5 z-20 md:flex md:min-h-[auto] md:min-w-[auto]">
      <button
        type="button"
        aria-label="Open search"
        className="text-sm items-center bg-neutral-950/0 shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(158,158,158,0.3)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent gap-x-2 flex h-9 justify-between max-w-sm min-h-0 min-w-0 gap-y-2 text-center text-ellipsis text-nowrap w-full overflow-hidden pl-3.5 pr-3 py-0 rounded-full md:min-h-[auto] md:min-w-[auto] hover:bg-neutral-950/10 hover:shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(79,79,79,0.3)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]"
      >
        <div className="items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 gap-y-2 text-nowrap md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-2.svg"
            alt="Icon"
            className="text-neutral-700 box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
          />
          <div className="box-border caret-transparent min-h-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto]">
            Search...
          </div>
        </div>
        <span className="text-xs font-semibold box-border caret-transparent block shrink-0 leading-4 min-h-0 min-w-0 text-nowrap md:min-h-[auto] md:min-w-[auto]">
          Ctrl K
        </span>
      </button>
      <button
        type="button"
        aria-label="Toggle assistant panel"
        className="items-center bg-neutral-950/0 shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(158,158,158,0.2)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent gap-x-1.5 hidden shrink-0 h-9 justify-center max-w-sm min-h-0 min-w-0 gap-y-1.5 text-center pl-3 pr-3.5 py-0 rounded-full md:flex md:min-h-[auto] md:min-w-[auto] hover:bg-neutral-950/10 hover:shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(79,79,79,0.25)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]"
      >
        <img
          src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-3.svg"
          alt="Icon"
          className="text-neutral-700 box-border caret-transparent shrink-0 h-4 w-4"
        />
        <span className="text-sm box-border caret-transparent inline leading-5 min-h-0 min-w-0 text-nowrap md:block md:min-h-[auto] md:min-w-[auto]">
          Ask AI
        </span>
      </button>
    </div>
  );
};
