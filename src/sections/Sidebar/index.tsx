export const Sidebar = () => {
  return (
    <div className="box-border caret-transparent scroll-mt-[152px]">
      <div className="sticky box-border caret-transparent hidden flex-col shrink-0 h-[904px] w-72 border-r border-solid border-transparent left-0 top-24 bottom-0">
        <div className="box-border caret-transparent basis-[0%] grow overflow-auto pr-5 pt-5 pb-4">
          <div className="relative text-sm box-border caret-transparent leading-5">
            <div className="box-border caret-transparent pl-2"></div>
            <ul className="box-border caret-transparent list-none pl-0"></ul>
            <ul className="box-border caret-transparent list-none pl-0"></ul>
          </div>
        </div>
      </div>
      <span className="fixed bg-white bg-no-repeat bg-cover box-border caret-transparent block pointer-events-none -z-10 bg-[position:left_-400px] inset-0"></span>
      <div className="box-border caret-transparent w-full pt-28 md:pt-0">
        <div className="relative box-border caret-transparent">
          <span className="fixed bg-fixed bg-[url('https://c.animaapp.com/mn604pr7CNunDf/assets/bg_light.svg')] bg-no-repeat bg-cover box-border caret-transparent block pointer-events-none -z-10 bg-[position:left_-250px] inset-0"></span>
          <span className="fixed bg-fixed bg-[url('https://auth0.com/docs/images/bg_dark.svg')] bg-no-repeat box-border caret-transparent hidden pointer-events-none -z-10 bg-[position:50%_0px] inset-0"></span>
          <div className="box-border caret-transparent gap-x-5 flex justify-center gap-y-5 p-6">
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
          </div>
          <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-[962px] gap-y-6 mx-auto px-8 py-6 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:px-0">
            <a
              href="/docs/get-started"
              className="relative items-start bg-white box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:border-black"
            >
              <div className="items-start box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 w-full">
                <div className="items-center box-border caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] w-9 rounded-md">
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Documentation"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon1.svg"
                        className="box-border caret-transparent h-7 max-w-full min-h-[auto] min-w-[auto] w-7 rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Documentation"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon1-dark.svg"
                        className="box-border caret-transparent hidden h-7 max-w-full w-7 rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                </div>
                <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent tracking-[-0.4px] min-h-[auto] min-w-[auto] font-aeonik hover:border-b-gray-900">
                    Documentation
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
            <a
              href="/docs/api"
              className="relative items-start bg-white box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:border-black"
            >
              <div className="items-start box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 w-full">
                <div className="items-center box-border caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] w-9 rounded-md">
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="API References"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon2.svg"
                        className="box-border caret-transparent h-7 max-w-full min-h-[auto] min-w-[auto] w-7 rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="API References"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon2-dark.svg"
                        className="box-border caret-transparent hidden h-7 max-w-full w-7 rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                </div>
                <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent tracking-[-0.4px] min-h-[auto] min-w-[auto] font-aeonik hover:border-b-gray-900">
                    API References
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
            <a
              href="/docs/libraries"
              className="relative items-start bg-white box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:border-black"
            >
              <div className="items-start box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 w-full">
                <div className="items-center box-border caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] w-9 rounded-md">
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="SDKs"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon3.svg"
                        className="box-border caret-transparent h-7 max-w-full min-h-[auto] min-w-[auto] w-7 rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="SDKs"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon3-dark.svg"
                        className="box-border caret-transparent hidden h-7 max-w-full w-7 rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                </div>
                <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent tracking-[-0.4px] min-h-[auto] min-w-[auto] font-aeonik hover:border-b-gray-900">
                    SDKs
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
          </div>
          <section className="box-border caret-transparent max-w-[962px] mx-auto px-8 py-12 md:px-0">
            <h2 className="text-gray-900 text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-[28.8px] mb-6 font-aeonik">
              Get started with authentication
            </h2>
            <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
              <a
                href="/docs/quickstart/spa/react"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt="React"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/react.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt="React"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/react-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  React
                </span>
              </a>
              <a
                href="/docs/quickstart/spa/angular"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt="Angular"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/angular.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt="Angular"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/angular-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  Angular
                </span>
              </a>
              <a
                href="/docs/quickstart/webapp/nextjs"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt="Next.js"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/nextjs.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt="Next.js"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/nextjs-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  Next.js
                </span>
              </a>
              <a
                href="/docs/quickstart/native/ios-swift"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt="iOS"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/apple.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt="iOS"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/apple-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  iOS
                </span>
              </a>
              <a
                href="/docs/quickstart/native/android"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt="Android"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/android.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt="Android"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/android-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  Android
                </span>
              </a>
              <a
                href="/docs/quickstart/backend/java-spring-security5/interactive"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt="Java"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/java.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt="Java"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/java-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  Java
                </span>
              </a>
              <a
                href="/docs/quickstart/backend/aspnet-core-webapi"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt=".NET"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/dotnet.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt=".NET"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/dotnet-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  .NET
                </span>
              </a>
              <a
                href="/docs/quickstart/backend/python"
                className="relative items-center bg-white/60 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] z-10 border border-gray-200 px-8 py-4 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <img
                  alt="Python"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/python.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <img
                  alt="Python"
                  src="https://c.animaapp.com/mn604pr7CNunDf/assets/python-1.svg"
                  className="box-border caret-transparent hidden h-8 max-w-full w-8 mb-4 rounded-bl rounded-br rounded-tl rounded-tr"
                />
                <span className="text-gray-900 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                  Python
                </span>
              </a>
            </div>
          </section>
          <section className="box-border caret-transparent max-w-[962px] mx-auto px-8 py-12 md:px-0">
            <h2 className="text-gray-900 text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-[28.8px] text-left mb-6 font-aeonik">
              Browse by product
            </h2>
            <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
              <a
                href="https://auth0.com/platform/authentication"
                className="relative text-base font-medium items-center bg-white/70 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex justify-center leading-6 min-h-[72px] min-w-[auto] z-10 border border-gray-200 px-6 rounded-2xl border-solid md:text-lg md:leading-7 md:min-h-20 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <span className="text-gray-900 text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-7">
                  Authentication
                </span>
              </a>
              <a
                href="https://auth0.com/fine-grained-authorization"
                className="relative text-base font-medium items-center bg-white/70 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex justify-center leading-6 min-h-[72px] min-w-[auto] z-10 border border-gray-200 px-6 rounded-2xl border-solid md:text-lg md:leading-7 md:min-h-20 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <span className="text-gray-900 text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-7">
                  Fine-Grained Authorization
                </span>
              </a>
              <a
                href="https://auth0.com/ai"
                className="relative text-base font-medium items-center bg-white/70 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex justify-center leading-6 min-h-[72px] min-w-[auto] z-10 border border-gray-200 px-6 rounded-2xl border-solid md:text-lg md:leading-7 md:min-h-20 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-black"
              >
                <span className="text-gray-900 text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-7">
                  Auth0 for AI Agents
                </span>
              </a>
            </div>
          </section>
          <section className="box-border caret-transparent max-w-[962px] mx-auto px-8 py-12 md:px-0">
            <h2 className="text-gray-900 text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-[28.8px] text-left mb-6 font-aeonik">
              Resources &amp; Support
            </h2>
            <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
              <a
                href="https://auth0.com/learn#concepts"
                className="relative bg-white box-border caret-transparent block min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hover:border-black"
              >
                <div className="box-border caret-transparent h-12 w-12 overflow-hidden mb-4">
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Basic concepts"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card1.svg"
                        className="box-border caret-transparent h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Basic concepts"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card1-dark.svg"
                        className="box-border caret-transparent hidden h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                </div>
                <div className="box-border caret-transparent">
                  <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[21.6px] mb-2 font-aeonik hover:border-b-gray-900">
                    Basic concepts
                  </h3>
                  <span className="text-gray-600 text-[15px] box-border caret-transparent">
                    Comprehensive course designed on the fundamental principles
                    of identity.
                  </span>
                </div>
              </a>
              <a className="relative bg-white box-border caret-transparent block min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hover:border-black">
                <div className="box-border caret-transparent h-12 w-12 overflow-hidden mb-4">
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Cookbooks"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card2.svg"
                        className="box-border caret-transparent h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Cookbooks"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card2-dark.svg"
                        className="box-border caret-transparent hidden h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                </div>
                <div className="box-border caret-transparent">
                  <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[21.6px] mb-2 font-aeonik hover:border-b-gray-900">
                    Cookbooks
                  </h3>
                  <span className="text-gray-600 text-[15px] box-border caret-transparent">
                    Open-source collection of examples &amp; guides.
                  </span>
                </div>
              </a>
              <a className="relative bg-white box-border caret-transparent block min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hover:border-black">
                <div className="box-border caret-transparent h-12 w-12 overflow-hidden mb-4">
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Community"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card3.svg"
                        className="box-border caret-transparent h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Community"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card3-dark.svg"
                        className="box-border caret-transparent hidden h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                </div>
                <div className="box-border caret-transparent">
                  <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[21.6px] mb-2 font-aeonik hover:border-b-gray-900">
                    Community
                  </h3>
                  <span className="text-gray-600 text-[15px] box-border caret-transparent">
                    Join the community for questions, suggestions and product
                    feedback.
                  </span>
                </div>
              </a>
              <a
                href="https://support.auth0.com/"
                className="relative bg-white box-border caret-transparent block min-h-[auto] min-w-[auto] z-10 border border-gray-200 p-6 rounded-2xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hover:border-black"
              >
                <div className="box-border caret-transparent h-12 w-12 overflow-hidden mb-4">
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Support"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card4.svg"
                        className="box-border caret-transparent h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                  <span className="box-border caret-transparent contents">
                    <span className="box-border caret-transparent contents">
                      <img
                        alt="Support"
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card4-dark.svg"
                        className="box-border caret-transparent hidden h-full max-w-full object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </span>
                  </span>
                </div>
                <div className="box-border caret-transparent">
                  <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent tracking-[-0.36px] leading-[21.6px] mb-2 font-aeonik hover:border-b-gray-900">
                    Support
                  </h3>
                  <span className="text-gray-600 text-[15px] box-border caret-transparent">
                    Get support for your Auth0 implementation.
                  </span>
                </div>
              </a>
            </div>
          </section>
          <footer className="items-center box-border caret-transparent flex flex-col w-full border-gray-100 mx-auto border-t border-solid">
            <div className="box-border caret-transparent gap-x-12 flex flex-col justify-between max-w-[984px] min-h-[auto] min-w-[auto] gap-y-12 w-full z-0 px-8 py-16 md:py-28">
              <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[76px] min-w-[auto] gap-y-8 md:flex-row">
                <div className="items-center box-border caret-transparent flex flex-row justify-between min-h-[auto] min-w-16 gap-y-[normal] md:items-start md:flex-col md:min-w-48 md:gap-y-24">
                  <a
                    href="/"
                    className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] z-10"
                  >
                    <span className="box-border caret-transparent contents">
                      <span className="box-border caret-transparent contents">
                        <img
                          alt="Auth0 Docs"
                          src="https://c.animaapp.com/mn604pr7CNunDf/assets/light-1.svg"
                          className="relative box-border caret-transparent h-[26px] max-w-48 object-contain rounded-bl rounded-br rounded-tl rounded-tr"
                        />
                      </span>
                    </span>
                    <span className="box-border caret-transparent contents">
                      <span className="box-border caret-transparent contents">
                        <img
                          alt="Auth0 Docs"
                          src="https://c.animaapp.com/mn604pr7CNunDf/assets/dark-1.svg"
                          className="relative box-border caret-transparent hidden h-[26px] max-w-48 object-contain rounded-bl rounded-br rounded-tl rounded-tr"
                        />
                      </span>
                    </span>
                  </a>
                  <div className="box-border caret-transparent gap-x-4 flex flex-wrap h-fit justify-end max-w-[492px] min-h-[auto] min-w-[140px] gap-y-4 md:justify-start">
                    <a
                      href="https://x.com/auth0"
                      className="relative box-border caret-transparent block h-fit min-h-[auto] min-w-[auto] z-10"
                    >
                      <img
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-10.svg"
                        alt="Icon"
                        className="text-gray-500 bg-neutral-500 box-border caret-transparent inline-block h-4 [mask-image:url('https://c.animaapp.com/mn604pr7CNunDf/assets/x-twitter.svg')] [mask-repeat:no-repeat] w-4 [mask-position:50%]"
                      />
                    </a>
                    <a
                      href="https://github.com/auth0"
                      className="relative box-border caret-transparent block h-fit min-h-[auto] min-w-[auto] z-10"
                    >
                      <img
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-10.svg"
                        alt="Icon"
                        className="text-gray-500 bg-neutral-500 box-border caret-transparent inline-block h-4 [mask-image:url('https://c.animaapp.com/mn604pr7CNunDf/assets/github.svg')] [mask-repeat:no-repeat] w-4 [mask-position:50%]"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/auth0"
                      className="relative box-border caret-transparent block h-fit min-h-[auto] min-w-[auto] z-10"
                    >
                      <img
                        src="https://c.animaapp.com/mn604pr7CNunDf/assets/icon-10.svg"
                        alt="Icon"
                        className="text-gray-500 bg-neutral-500 box-border caret-transparent inline-block h-4 [mask-image:url('https://c.animaapp.com/mn604pr7CNunDf/assets/linkedin.svg')] [mask-repeat:no-repeat] w-4 [mask-position:50%]"
                      />
                    </a>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-8 flex basis-[0%] flex-col grow grid-cols-[repeat(2,minmax(0px,1fr))] min-h-[auto] min-w-[auto] gap-y-8 md:grid md:grid-cols-[repeat(4,minmax(0px,1fr))]">
                  <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-4 text-nowrap w-full md:items-center">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 text-nowrap">
                      <span className="text-gray-950 text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-nowrap mb-1">
                        Developers
                      </span>
                      <a
                        href="https://developer.auth0.com/"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Developer Hub
                      </a>
                      <a
                        href="https://developer.auth0.com/resources"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Code Samples &amp; Guides
                      </a>
                      <a
                        href="https://auth0.com/blog/newsletter"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Zero Index Newsletter
                      </a>
                      <a
                        href="https://auth0.com/blog"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Blog
                      </a>
                      <a
                        href="https://auth0.com/changelog"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Changelog
                      </a>
                    </div>
                  </div>
                  <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-4 text-nowrap w-full md:items-center">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 text-nowrap">
                      <span className="text-gray-950 text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-nowrap mb-1">
                        Docs
                      </span>
                      <a
                        href="https://auth0.com/docs"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Documentation
                      </a>
                      <a
                        href="https://auth0.com/docs/quickstarts"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Quickstarts
                      </a>
                      <a
                        href="https://auth0.com/docs/api"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        APIs
                      </a>
                      <a
                        href="https://auth0.com/docs/libraries"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        SDK Libraries
                      </a>
                      <a
                        href="https://auth0.com/learn"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Learn
                      </a>
                      <a
                        href="https://auth0.com/intro-to-iam"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Intro to IAM (CIAM)
                      </a>
                      <a
                        href="https://auth0.com/resources/whitepapers"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Reports
                      </a>
                      <a
                        href="https://auth0.com/resources/webinars"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Webinars
                      </a>
                    </div>
                  </div>
                  <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-4 text-nowrap w-full md:items-center">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 text-nowrap">
                      <span className="text-gray-950 text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-nowrap mb-1">
                        Support Center
                      </span>
                      <a
                        href="https://community.auth0.com/"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Community
                      </a>
                      <a
                        href="https://support.auth0.com/"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Help
                      </a>
                      <a
                        href="https://auth0.com/docs/troubleshoot"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        FAQs
                      </a>
                      <a
                        href="https://auth0.com/"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Auth0
                      </a>
                    </div>
                  </div>
                  <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-4 text-nowrap w-full md:items-center">
                    <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 text-nowrap">
                      <span className="text-gray-950 text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-nowrap mb-1">
                        Company
                      </span>
                      <a
                        href="https://auth0.com/customers"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Our Customers
                      </a>
                      <a
                        href="https://auth0.com/security"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Compliance
                      </a>
                      <a
                        href="https://auth0.com/partners"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Partners
                      </a>
                      <a
                        href="https://www.okta.com/company/careers"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Careers
                      </a>
                      <a
                        href="https://www.okta.com/okta-and-auth0"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        Okta + Auth0
                      </a>
                      <a
                        href="https://auth0.com/about"
                        className="relative text-gray-950/50 text-sm box-border caret-transparent block leading-5 max-w-36 min-h-[auto] min-w-[auto] text-clip text-wrap z-10 overflow-visible md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-gray-950/70"
                      >
                        About us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
