import { Product } from "@/components/shared/ProductCard";
import { getFutureDate } from "@/hooks/useCountdown";
import glenbensCd3Image from "@/assets/glenbens-cd3.jpg";
import calsivyxsImage from "@/assets/calsivyxs.jpg";
import calsivyxsPlusImage from "@/assets/calsivyxs-plus.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Glenbens-CD3 Capsules",
    image: glenbensCd3Image,
    price: 240.0,
    rating: 4.8,
    reviews: 24,
    badge: "NEW",
    badgeColor: "bg-medico-green",
    inStock: true,
    description:
      "Glenbens-CD3 is a dietary food supplement capsule formulation with Cyanocobalamin, Benfotiamine, Alpha Lipoic Acid, Thiamine, Pyridoxine and Folic Acid. Pack size shown on the pack is 10x1x10 capsules.",
    details: [
      { label: "Brand", value: "Glenora Pharmaceuticals" },
      { label: "Pack Size", value: "10x1x10 capsules" },
      { label: "MRP", value: "Rs. 240.00" },
      { label: "Manufacturing Date", value: "02/2025" },
      { label: "Best Before", value: "18 months from date of manufacturing" },
      {
        label: "Composition",
        value: "Cyanocobalamin, Benfotiamine, Alpha Lipoic Acid, Thiamine, Pyridoxine and Folic Acid",
      },
    ],
  },
  {
    id: "2",
    name: "Calsiwys Tablets",
    image: calsivyxsImage,
    price: 190.0,
    rating: 4.7,
    reviews: 18,
    badge: "HOT",
    badgeColor: "bg-destructive",
    dealEndsAt: getFutureDate(5, 0),
    inStock: true,
    description:
      "Calsiwys is a tablet formulation with Calcium Citrate, Magnesium, Zinc and Vitamin D3. Pack size shown on the pack is 10x15 tablets.",
    details: [
      { label: "Brand", value: "Glenora Pharmaceuticals" },
      { label: "Pack Size", value: "10x15 tablets" },
      { label: "MRP", value: "Rs. 190.00" },
      {
        label: "Composition",
        value: "Calcium Citrate 1000 mg, Magnesium 100 mg, Zinc 4 mg and Vitamin D3 200 IU",
      },
      { label: "Dosage", value: "As directed by the dietician" },
      { label: "Storage", value: "Store in a cool, dark and dry place" },
    ],
  },
  {
    id: "3",
    name: "Calsivyxs-Plus Tablets",
    image: calsivyxsPlusImage,
    price: 140.0,
    rating: 4.6,
    reviews: 15,
    badge: "BEST",
    badgeColor: "bg-primary",
    inStock: true,
    description:
      "Calsivyxs-Plus is a dietary food supplement tablet formulation with Calcium Carbonate, Alpha Lipoic Acid, Thiamine Hcl, Chromium Picolinate, Vitamin B6, Folic Acid and Cyanocobalamin. Pack size shown on the pack is 10x10 tablets.",
    details: [
      { label: "Brand", value: "Glenora Pharmaceuticals" },
      { label: "Pack Size", value: "10x10 tablets" },
      { label: "MRP", value: "Rs. 140.00" },
      { label: "Manufacturing Date", value: "02/2025" },
      { label: "Best Before", value: "18 months from date of manufacturing" },
      {
        label: "Composition",
        value: "Calcium Carbonate, Alpha Lipoic Acid, Thiamine Hcl, Chromium Picolinate, Vitamin B6, Folic Acid and Cyanocobalamin",
      },
    ],
  },
];

export const categories = [
  {
    id: "1",
    name: "Capsules",
    icon: "💊",
    count: 45,
  },
  {
    id: "2",
    name: "Medical Mask",
    icon: "😷",
    count: 32,
  },
  {
    id: "3",
    name: "Thermometer",
    icon: "🌡️",
    count: 28,
  },
  {
    id: "4",
    name: "Blood Pressure",
    icon: "❤️",
    count: 19,
  },
  {
    id: "5",
    name: "Syringe",
    icon: "💉",
    count: 24,
  },
  {
    id: "6",
    name: "Stethoscope",
    icon: "🩺",
    count: 15,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    role: "Regular Customer",
    content: "Excellent service! My orders always arrive on time and the products are genuine. Highly recommend Glenora for all your medical needs.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    role: "Healthcare Professional",
    content: "As a nurse, I trust Glenora for quality medical supplies. Their customer service is outstanding and prices are competitive.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    role: "Verified Buyer",
    content: "Fast delivery and authentic products. I've been ordering my family's medicines from here for over a year now.",
    rating: 4,
  },
];

export const brands = [
  { id: "1", name: "Johnson & Johnson", logo: "J&J" },
  { id: "2", name: "Pfizer", logo: "PFZ" },
  { id: "3", name: "Abbott", logo: "ABT" },
  { id: "4", name: "Bayer", logo: "BAY" },
  { id: "5", name: "Novartis", logo: "NVS" },
  { id: "6", name: "Merck", logo: "MRK" },
];
