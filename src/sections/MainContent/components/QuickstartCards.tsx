import { QuickstartCard } from "@/sections/MainContent/components/QuickstartCard";

export const QuickstartCards = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-[962px] gap-y-6 mx-auto px-8 py-6 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:px-0">
      <QuickstartCard
        href="/docs/get-started"
        title="Documentation"
        lightIconSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/icon1.svg"
        darkIconSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/icon1-dark.svg"
      />
      <QuickstartCard
        href="/docs/api"
        title="API References"
        lightIconSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/icon2.svg"
        darkIconSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/icon2-dark.svg"
      />
      <QuickstartCard
        href="/docs/libraries"
        title="SDKs"
        lightIconSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/icon3.svg"
        darkIconSrc="https://c.animaapp.com/mn604pr7CNunDf/assets/icon3-dark.svg"
      />
    </div>
  );
};
