import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";

const termsSections = [
  {
    title: "Use of Website",
    content:
      "By using this website, you agree to use it only for lawful purposes and in a way that does not harm the website, the business, or other users.",
  },
  {
    title: "Product Information",
    content:
      "We aim to keep product descriptions, pricing, and availability accurate. However, details may change without prior notice, and final confirmation may happen during order processing.",
  },
  {
    title: "Orders and Availability",
    content:
      "All orders are subject to availability and acceptance. Glenora Pharmaceuticals Pvt. Ltd. reserves the right to refuse or cancel any order if required for operational or legal reasons.",
  },
  {
    title: "Medical Disclaimer",
    content:
      "Information on this website is for general product reference only and should not be treated as medical advice. Customers should consult a qualified healthcare professional before using any medicine or supplement.",
  },
  {
    title: "Payments and Pricing",
    content:
      "Prices shown on the website are subject to revision. Any taxes, delivery charges, or additional fees, if applicable, will be clarified during order confirmation.",
  },
  {
    title: "Intellectual Property",
    content:
      "All website content including text, branding, images, and layout belongs to Glenora Pharmaceuticals Pvt. Ltd. unless otherwise stated and may not be reused without permission.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms & Conditions at any time. Continued use of the website after updates means you accept the revised terms.",
  },
];

const TermsConditions = () => {
  return (
    <Layout>
      <PageHeader
        title="Terms & Conditions"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-10 card-shadow">
            <p className="text-muted-foreground mb-8">
              These Terms & Conditions govern the use of this website and the services offered by
              Glenora Pharmaceuticals Pvt. Ltd.
            </p>

            <div className="space-y-8">
              {termsSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
