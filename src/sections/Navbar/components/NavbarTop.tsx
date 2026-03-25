import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";

export const NavbarTop = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[1472px] z-10 mx-auto px-0 md:px-5">
      <div className="relative box-border caret-transparent">
        <div className="items-center box-border caret-transparent flex h-14 mx-4 px-0 md:mx-0 md:px-4">
          <NavbarLogo />
        </div>
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
      </div>
      <div className="box-border caret-transparent hidden h-10 px-4 md:flex">
        <div className="text-sm box-border caret-transparent gap-x-6 flex h-full leading-5 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="/docs"
            className="relative text-black font-medium items-center box-border caret-transparent gap-x-2 hidden h-full gap-y-2 z-10"
          >
            Home
            <div className="absolute bg-black box-border caret-transparent h-px w-full left-0 bottom-0"></div>
          </a>
          <a
            href="/docs/get-started"
            className="relative text-neutral-800 font-medium items-center box-border caret-transparent gap-x-2 flex h-full min-h-0 min-w-0 gap-y-2 z-10 md:min-h-[auto] md:min-w-[auto]"
          >
            Documentation
            <div className="absolute box-border caret-transparent h-px w-full left-0 bottom-0"></div>
          </a>
          <a
            href="/docs/quickstarts"
            className="relative text-neutral-800 font-medium items-center box-border caret-transparent gap-x-2 flex h-full min-h-0 min-w-0 gap-y-2 z-10 md:min-h-[auto] md:min-w-[auto]"
          >
            Quickstarts
            <div className="absolute box-border caret-transparent h-px w-full left-0 bottom-0"></div>
          </a>
          <a
            href="/docs/api"
            className="relative text-neutral-800 font-medium items-center box-border caret-transparent gap-x-2 flex h-full min-h-0 min-w-0 gap-y-2 z-10 md:min-h-[auto] md:min-w-[auto]"
          >
            API Reference
            <div className="absolute box-border caret-transparent h-px w-full left-0 bottom-0"></div>
          </a>
          <a
            href="/docs/libraries"
            className="relative text-neutral-800 font-medium items-center box-border caret-transparent gap-x-2 flex h-full min-h-0 min-w-0 gap-y-2 z-10 md:min-h-[auto] md:min-w-[auto]"
          >
            SDKs
            <div className="absolute box-border caret-transparent h-px w-full left-0 bottom-0"></div>
          </a>
          <a
            href="https://auth0.com/docs/events/"
            className="relative text-neutral-800 font-medium items-center box-border caret-transparent gap-x-2 flex h-full min-h-0 min-w-0 gap-y-2 z-10 md:min-h-[auto] md:min-w-[auto]"
          >
            Events Catalog
            <div className="absolute box-border caret-transparent h-px w-full left-0 bottom-0"></div>
          </a>
        </div>
      </div>
    </div>
  );
};
