import { useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";

const faqItems = [
  {
    id: "orders",
    question: "How can I place an order?",
    answer:
      "You can browse products on the website and place your order directly through the WhatsApp order buttons or by contacting Glenora Pharmaceuticals through the Contact page.",
  },
  {
    id: "availability",
    question: "Are all products subject to availability?",
    answer:
      "Yes. Product availability may change depending on stock. Final confirmation is shared during order processing or over WhatsApp.",
  },
  {
    id: "delivery",
    question: "Do you provide delivery support?",
    answer:
      "Yes. Delivery support may be available depending on the location and order details. Please contact the team for confirmation.",
  },
  {
    id: "support",
    question: "How can I contact customer support?",
    answer:
      "You can reach Glenora Pharmaceuticals through the Contact page, email, or the listed phone and WhatsApp number on the website.",
  },
];

const FAQs = () => {
  const schema = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.glenorapharmaceutical.in/" },
        { "@type": "ListItem", position: 2, name: "FAQs", item: "https://www.glenorapharmaceutical.in/faqs" },
      ],
    },
  ], []);

  useSEO({
    title: "FAQs | Glenora Pharmaceutical — Orders, Delivery & Support",
    description: "Frequently asked questions about Glenora Pharmaceutical — how to order medicines, delivery support in Ranchi, product availability & customer support.",
    keywords: "Glenora Pharmaceutical FAQ, how to order medicines Ranchi, pharma delivery Jharkhand, medicine availability Ranchi",
    schema,
  });
  return (
    <Layout>
      <PageHeader title="FAQs" breadcrumbs={[{ label: "FAQs" }]} />

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-10 card-shadow">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              Quick answers to common questions about products, ordering, and support.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-secondary/40 rounded-xl px-6 border-0"
                >
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
