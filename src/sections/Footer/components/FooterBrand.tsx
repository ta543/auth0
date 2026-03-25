export const FooterBrand = () => {
  return (
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
  );
};
