import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";

const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect your name, phone number, email address, delivery address, and order-related details when you contact us, place an order, or request support.",
  },
  {
    title: "How We Use Information",
    content:
      "We use your information to respond to inquiries, process orders, coordinate deliveries, provide customer support, and improve our services.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell your personal information. Your details may only be shared with service providers or delivery partners when required to fulfill your request or comply with legal obligations.",
  },
  {
    title: "Data Security",
    content:
      "We take reasonable steps to protect your information from unauthorized access, misuse, or disclosure. However, no online system can guarantee absolute security.",
  },
  {
    title: "Cookies and Website Usage",
    content:
      "Our website may use basic analytics or technical tools to improve performance and user experience. By using the website, you agree to such standard usage.",
  },
  {
    title: "Contact for Privacy Matters",
    content:
      "If you have questions regarding this Privacy Policy, please contact Glenora Pharmaceuticals Pvt. Ltd. through the contact details provided on this website.",
  },
];

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-10 card-shadow">
            <p className="text-muted-foreground mb-8">
              This Privacy Policy explains how Glenora Pharmaceuticals Pvt. Ltd. collects, uses,
              and protects information shared through this website.
            </p>

            <div className="space-y-8">
              {privacySections.map((section) => (
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

export default PrivacyPolicy;
