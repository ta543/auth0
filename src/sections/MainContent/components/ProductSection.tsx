import { ProductCard } from "@/sections/MainContent/components/ProductCard";

export const ProductSection = () => {
  return (
    <section className="box-border caret-transparent max-w-[962px] mx-auto px-8 py-12 md:px-0">
      <h2 className="text-gray-900 text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-[28.8px] text-left mb-6 font-aeonik">
        Browse by product
      </h2>
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <ProductCard
          href="https://auth0.com/platform/authentication"
          label="Authentication"
        />
        <ProductCard
          href="https://auth0.com/fine-grained-authorization"
          label="Fine-Grained Authorization"
        />
        <ProductCard href="https://auth0.com/ai" label="Auth0 for AI Agents" />
      </div>
    </section>
  );
};
