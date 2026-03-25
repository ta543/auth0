export const NavbarLanguageSelector = () => {
  return (
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
  );
};
