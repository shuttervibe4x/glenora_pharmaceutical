import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PromoBanners } from "@/components/home/PromoBanners";
import { PopularCategories } from "@/components/home/PopularCategories";
import { InfoStrip } from "@/components/home/InfoStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { LatestProducts } from "@/components/home/LatestProducts";
import { DealOfTheWeek } from "@/components/home/DealOfTheWeek";
import { CommitmentBanner } from "@/components/home/CommitmentBanner";
import { TrustStrip } from "@/components/home/TrustStrip";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { PopularBrands } from "@/components/home/PopularBrands";
import { PromoBannerLarge } from "@/components/home/PromoBannerLarge";
import { GallerySection } from "@/components/home/GallerySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PromoBanners />
      <PopularCategories />
      <InfoStrip />
      <FeaturedProducts />
      <LatestProducts />
      <DealOfTheWeek />
      <CommitmentBanner />
      <TrustStrip />
      <TestimonialsSlider />
      <PopularBrands />
      <PromoBannerLarge />
      <GallerySection />
    </Layout>
  );
};

export default Index;
