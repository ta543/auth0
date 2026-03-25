export const NavbarMobileBanner = () => {
  return (
    <button
      type="button"
      className="items-center bg-transparent caret-transparent flex h-14 text-left w-full px-5 py-4 md:hidden"
    >
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0 hover:text-neutral-600">
        <img
          src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-8.svg"
          alt="Icon"
          className="box-border caret-transparent h-4"
        />
      </div>
    </button>
  );
};
