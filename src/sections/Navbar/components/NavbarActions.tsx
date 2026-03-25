export const NavbarActions = () => {
  return (
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
  );
};
