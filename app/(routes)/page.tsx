import getProducts from "@/actions/getProducts";
import Picks from "@/components/categories/Picks";
import ClientOnly from "@/components/ClientOnly";
import Hero from "@/components/Hero";
import ProductsList from "@/components/products/ProductsList";

export default async function Home() {
  const products = await getProducts({});
  const featuredProducts = await getProducts({ isFeatured: true });

  return (
    <ClientOnly>
      <div className="space-y-16">
        <Hero />
        <ProductsList title="Featured Products" items={featuredProducts} />
        <Picks />
        <div id="products">
          <ProductsList title="Our Products" items={products} />
        </div>
      </div>
    </ClientOnly>
  );
}
