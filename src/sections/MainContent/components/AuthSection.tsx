import { TechCard } from "@/sections/MainContent/components/TechCard";

export const AuthSection = () => {
  return (
    <section className="box-border caret-transparent max-w-[962px] mx-auto px-8 py-12 md:px-0">
      <h2 className="text-gray-900 text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-[28.8px] mb-6 font-aeonik">
        Get started with authentication
      </h2>
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
        <TechCard
          href="/docs/quickstart/spa/react"
          alt="React"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/react.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/react-1.svg"
          label="React"
        />
        <TechCard
          href="/docs/quickstart/spa/angular"
          alt="Angular"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/angular.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/angular-1.svg"
          label="Angular"
        />
        <TechCard
          href="/docs/quickstart/webapp/nextjs"
          alt="Next.js"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/nextjs.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/nextjs-1.svg"
          label="Next.js"
        />
        <TechCard
          href="/docs/quickstart/native/ios-swift"
          alt="iOS"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/apple.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/apple-1.svg"
          label="iOS"
        />
        <TechCard
          href="/docs/quickstart/native/android"
          alt="Android"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/android.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/android-1.svg"
          label="Android"
        />
        <TechCard
          href="/docs/quickstart/backend/java-spring-security5/interactive"
          alt="Java"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/java.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/java-1.svg"
          label="Java"
        />
        <TechCard
          href="/docs/quickstart/backend/aspnet-core-webapi"
          alt=".NET"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/dotnet.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/dotnet-1.svg"
          label=".NET"
        />
        <TechCard
          href="/docs/quickstart/backend/python"
          alt="Python"
          imageSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/python.svg"
          imageHoverSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/python-1.svg"
          label="Python"
        />
      </div>
    </section>
  );
};
