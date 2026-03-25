export const NavbarMobileActions = () => {
  return (
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
  );
};
