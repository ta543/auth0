export const FloatingActions = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="fixed items-center box-border caret-transparent gap-x-3 flex h-14 gap-y-3 z-30 right-2 top-0 md:right-[82px]">
        <button className="text-[13.3333px] [align-items:normal] bg-zinc-100 caret-black gap-x-[normal] inline-block shrink h-auto justify-normal leading-[normal] min-h-0 min-w-0 gap-y-[normal] text-center text-wrap rounded-none md:text-sm md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-9 md:justify-center md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-full">
          Log In
        </button>
        <a
          href="https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22docs%22%7D"
          className="text-black text-base font-normal [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] inline shrink h-auto justify-normal leading-[normal] min-h-0 min-w-0 gap-y-[normal] text-wrap p-0 rounded-none md:text-zinc-100 md:text-sm md:font-medium md:items-center md:aspect-auto md:bg-zinc-900 md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-9 md:justify-center md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:px-4 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-full"
        >
          Sign Up
        </a>
        <a
          href="https://auth0.com/get-started?place=header&type=button&text=talk%20to%20sales"
          className="text-base font-normal [align-items:normal] bg-transparent shadow-none box-content caret-black gap-x-[normal] inline shrink h-auto justify-normal leading-[normal] min-h-0 min-w-0 gap-y-[normal] text-wrap p-0 rounded-none md:text-sm md:font-medium md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-9 md:justify-center md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:border md:border-neutral-200 md:[mask-position:0%] md:bg-left-top md:px-4 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:border-solid"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
};
