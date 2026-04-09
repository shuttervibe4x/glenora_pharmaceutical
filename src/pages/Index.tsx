import { useMemo } from "react";
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
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  const schema = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.glenorapharmaceutical.in/#business",
      name: "Glenora Pharmaceutical Pvt. Ltd.",
      url: "https://www.glenorapharmaceutical.in",
      telephone: "+917004817894",
      email: "glenorapharmaceutical@gmail.com",
      description: "Leading pharmaceutical company in Ranchi, Jharkhand providing quality medicines, dietary supplements and healthcare solutions.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ground Floor, Mansarover Colony, Ancillary Chowk, Beside MECL, Hatia",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834003",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.2771,
        longitude: 85.3089,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
      image: "https://www.glenorapharmaceutical.in/favicon.png",
      priceRange: "₹₹",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Glenora Pharmaceutical Pvt. Ltd.",
      url: "https://www.glenorapharmaceutical.in",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.glenorapharmaceutical.in/shop?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Glenora Pharmaceutical Pvt. Ltd.",
      url: "https://www.glenorapharmaceutical.in",
      logo: "https://www.glenorapharmaceutical.in/favicon.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+917004817894",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    },
  ], []);

  useSEO({
    title: "Pharmaceutical Company in Ranchi | Glenora Pharmaceutical Pvt. Ltd.",
    description: "Glenora Pharmaceutical Pvt. Ltd. — Leading pharmaceutical company in Ranchi, Jharkhand. Quality medicines, dietary supplements & healthcare solutions. ☎ +91 7004817894",
    keywords: "pharmaceutical company Ranchi, medicine company Jharkhand, Glenora Pharmaceutical, healthcare solutions Ranchi, quality medicines Jharkhand, pharma company Ranchi, medicine supplier Ranchi",
    canonical: "https://www.glenorapharmaceutical.in/",
    schema,
  });

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
