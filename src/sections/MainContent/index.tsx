import { Hero } from "@/sections/MainContent/components/Hero";
import { QuickstartCards } from "@/sections/MainContent/components/QuickstartCards";
import { AuthSection } from "@/sections/MainContent/components/AuthSection";
import { ProductSection } from "@/sections/MainContent/components/ProductSection";
import { ResourcesSection } from "@/sections/MainContent/components/ResourcesSection";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent w-full pt-28 md:pt-0">
      <div className="relative box-border caret-transparent">
        <span className="fixed bg-fixed bg-[url('https://c.animaapp.com/mn604pr7CNunDf/assets/bg_light.svg')] bg-no-repeat bg-cover box-border caret-transparent block pointer-events-none -z-10 bg-[position:left_-250px] inset-0"></span>
        <span className="fixed bg-fixed bg-[url('https://auth0.com/docs/images/bg_dark.svg')] bg-no-repeat box-border caret-transparent hidden pointer-events-none -z-10 bg-[position:50%_0px] inset-0"></span>
        <div className="box-border caret-transparent gap-x-5 flex justify-center gap-y-5 p-6">
          <Hero />
        </div>
        <QuickstartCards />
        <AuthSection />
        <ProductSection />
        <ResourcesSection />
        <Footer />
      </div>
    </div>
  );
};
