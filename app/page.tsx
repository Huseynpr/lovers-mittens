import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { StatsBar } from "@/components/StatsBar";
import { ProductExperience } from "@/components/ProductExperience";
import { SetBreakdown } from "@/components/SetBreakdown";
import { BrandStory } from "@/components/BrandStory";
import { SocialFeed } from "@/components/SocialFeed";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FairyLights } from "@/components/FairyLights";
import { TogetherConcept } from "@/components/TogetherConcept";
import { getBundleProduct } from "@/lib/shopify/product";

export default async function HomePage() {
  const product = await getBundleProduct();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <ProductExperience product={product} />
        <StatsBar />
        <SetBreakdown />
        <TogetherConcept />
        <BrandStory image={product.image} />
        <SocialFeed />
        <div className="max-w-[1180px] mx-auto px-6">
          <FairyLights />
        </div>
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
