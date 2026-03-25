export const Hero = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-center px-0 py-2 md:px-6 md:py-12">
      <h1 className="text-gray-900 text-5xl font-semibold box-border caret-transparent tracking-[-0.96px] leading-[57.6px] mb-5 font-aeonik">
        Auth0 Docs
      </h1>
      <span className="text-gray-600 box-border caret-transparent max-w-2xl mt-4 mb-10 mx-auto">
        Browse the latest sample code, articles, tutorials,
        <br className="box-border caret-transparent" />
        and API reference.
      </span>
      <div className="box-border caret-transparent flex justify-center mt-5">
        <img
          alt="Auth0 Docs Banner"
          src="https://c.animaapp.com/mn604pr7CNunDf/assets/banner-mobile.svg"
          className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] w-full rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
        />
        <img
          alt="Auth0 Docs Banner"
          src="https://c.animaapp.com/mn604pr7CNunDf/assets/banner.svg"
          className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 w-full rounded-bl rounded-br rounded-tl rounded-tr md:block md:min-h-[auto] md:min-w-[auto]"
        />
        <img
          alt="Auth0 Docs Banner (dark)"
          src="https://c.animaapp.com/mn604pr7CNunDf/assets/banner-dark.svg"
          className="box-border caret-transparent hidden max-w-full w-full rounded-bl rounded-br rounded-tl rounded-tr"
        />
      </div>
    </div>
  );
};
