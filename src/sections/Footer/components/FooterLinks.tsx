import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 flex basis-[0%] flex-col grow grid-cols-[repeat(2,minmax(0px,1fr))] min-h-[auto] min-w-[auto] gap-y-8 md:grid md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <FooterColumn
        title="Developers"
        links={[
          { href: "https://developer.auth0.com/", label: "Developer Hub" },
          {
            href: "https://developer.auth0.com/resources",
            label: "Code Samples & Guides",
          },
          {
            href: "https://auth0.com/blog/newsletter",
            label: "Zero Index Newsletter",
          },
          { href: "https://auth0.com/blog", label: "Blog" },
          { href: "https://auth0.com/changelog", label: "Changelog" },
        ]}
      />
      <FooterColumn
        title="Docs"
        links={[
          { href: "https://auth0.com/docs", label: "Documentation" },
          { href: "https://auth0.com/docs/quickstarts", label: "Quickstarts" },
          { href: "https://auth0.com/docs/api", label: "APIs" },
          { href: "https0://auth0.com/docs/libraries", label: "SDK Libraries" },
          { href: "https://auth0.com/learn", label: "Learn" },
          {
            href: "https://auth0.com/intro-to-iam",
            label: "Intro to IAM (CIAM)",
          },
          { href: "https://auth0.com/resources/whitepapers", label: "Reports" },
          { href: "https://auth0.com/resources/webinars", label: "Webinars" },
        ]}
      />
      <FooterColumn
        title="Support Center"
        links={[
          { href: "https://community.auth0.com/", label: "Community" },
          { href: "https://support.auth0.com/", label: "Help" },
          { href: "https://auth0.com/docs/troubleshoot", label: "FAQs" },
          { href: "https://auth0.com/", label: "Auth0" },
        ]}
      />
      <FooterColumn
        title="Company"
        links={[
          { href: "https://auth0.com/customers", label: "Our Customers" },
          { href: "https://auth0.com/security", label: "Compliance" },
          { href: "https://auth0.com/partners", label: "Partners" },
          { href: "https://www.okta.com/company/careers", label: "Careers" },
          {
            href: "https://www.okta.com/okta-and-auth0",
            label: "Okta + Auth0",
          },
          { href: "https://auth0.com/about", label: "About us" },
        ]}
      />
    </div>
  );
};
