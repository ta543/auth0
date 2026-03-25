export const NavbarLogo = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-4 flex basis-[0%] grow h-full min-h-[auto]">
      <div className="items-center box-border caret-transparent gap-x-4 flex basis-[0%] grow min-h-[auto] min-w-[auto]">
        <a
          href="https://auth0.com/docs/"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/light.svg"
            alt="light logo"
            className="relative box-border caret-transparent shrink-0 h-6 max-w-full object-contain"
          />
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/dark.svg"
            alt="dark logo"
            className="relative box-border caret-transparent hidden shrink-0 h-6 max-w-full object-contain"
          />
        </a>
        <div className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
          <button
            type="button"
            className="text-neutral-900 text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex h-8 leading-5 min-h-0 min-w-0 gap-y-2 text-center text-nowrap overflow-hidden px-2.5 py-1.5 rounded-xl md:min-h-[auto] md:min-w-[auto] hover:bg-neutral-600/10"
          >
            <div className="relative box-border caret-transparent shrink-0 h-4 min-h-0 min-w-0 text-nowrap w-4 rounded-full md:min-h-[auto] md:min-w-[auto]">
              <img
                alt="US"
                src="https://c.animaapp.com/mn604pr7CNunDf/assets/US.svg"
                className="box-border caret-transparent h-full max-w-full text-nowrap w-full rounded-full"
              />
              <div className="absolute bg-white/10 box-border caret-transparent h-full text-nowrap w-full border rounded-full border-solid border-black/10 left-0 top-0"></div>
            </div>
            <span className="box-border caret-transparent flow-root max-w-[200px] min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto] md:min-w-[auto]">
              English
            </span>
            <img
              src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-1.svg"
              alt="Icon"
              className="text-neutral-400 box-border caret-transparent h-6 text-nowrap transform-none w-2 ml-auto md:rotate-90"
            />
          </button>
        </div>
      </div>
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
      <div className="items-center box-border caret-transparent gap-x-2 hidden basis-[0%] grow justify-end min-h-0 min-w-0 gap-y-2 ml-auto md:flex md:min-h-[auto] md:min-w-[auto]">
        <div className="relative items-center box-border caret-transparent flex justify-end min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <nav className="text-sm box-border caret-transparent leading-5 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <ul className="items-center box-border caret-transparent gap-x-2 flex list-none gap-y-2 pl-0"></ul>
          </nav>
        </div>
        <button
          aria-label="Toggle dark mode"
          className="items-center bg-neutral-800/0 caret-transparent flex h-[30px] justify-center min-h-0 min-w-0 text-center w-[30px] p-2 rounded-full md:min-h-[auto] md:min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-4.svg"
            alt="Icon"
            className="text-neutral-600 box-border caret-transparent h-4 w-4"
          />
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-5.svg"
            alt="Icon"
            className="text-stone-300 box-border caret-transparent hidden h-4 w-4"
          />
        </button>
      </div>
      <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] gap-y-3 md:hidden md:min-h-0 md:min-w-0">
        <button
          type="button"
          aria-label="Open search"
          className="items-center bg-transparent caret-transparent flex h-8 justify-center min-h-[auto] min-w-[auto] text-center w-8 p-0 md:min-h-0 md:min-w-0 hover:text-neutral-600"
        >
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-6.svg"
            alt="Icon"
            className="bg-neutral-500 box-border caret-transparent h-4 [mask-image:url('https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/magnifying-glass.svg')] [mask-repeat:no-repeat] w-4 [mask-position:50%]"
          />
        </button>
        <button className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center p-0 md:inline-block md:min-h-0 md:min-w-0">
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-7.svg"
            alt="Icon"
            className="box-border caret-transparent h-[18px] w-[18px]"
          />
        </button>
        <button
          aria-label="More actions"
          className="items-center bg-transparent caret-transparent flex h-7 justify-end min-h-[auto] min-w-[auto] text-center w-5 p-0 md:min-h-0 md:min-w-0"
        >
          <img
            src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-6.svg"
            alt="Icon"
            className="bg-neutral-500 box-border caret-transparent h-4 [mask-image:url('https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/ellipsis-vertical.svg')] [mask-repeat:no-repeat] w-4 [mask-position:50%]"
          />
        </button>
      </div>
    </div>
  );
};
