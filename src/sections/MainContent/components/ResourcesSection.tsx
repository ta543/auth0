import { ResourceCard } from "@/sections/MainContent/components/ResourceCard";

export const ResourcesSection = () => {
  return (
    <section className="box-border caret-transparent max-w-[962px] mx-auto px-8 py-12 md:px-0">
      <h2 className="text-gray-900 text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-[28.8px] text-left mb-6 font-aeonik">
        Resources &amp; Support
      </h2>
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
        <ResourceCard
          href="https://auth0.com/learn#concepts"
          alt="Basic concepts"
          lightImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card1.svg"
          darkImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card1-dark.svg"
          title="Basic concepts"
          description="Comprehensive course designed on the fundamental principles of identity."
        />
        <ResourceCard
          alt="Cookbooks"
          lightImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card2.svg"
          darkImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card2-dark.svg"
          title="Cookbooks"
          description="Open-source collection of examples & guides."
        />
        <ResourceCard
          alt="Community"
          lightImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card3.svg"
          darkImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card3-dark.svg"
          title="Community"
          description="Join the community for questions, suggestions and product feedback."
        />
        <ResourceCard
          href="https://support.auth0.com/"
          alt="Support"
          lightImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card4.svg"
          darkImageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/basics-card4-dark.svg"
          title="Support"
          description="Get support for your Auth0 implementation."
        />
      </div>
    </section>
  );
};
