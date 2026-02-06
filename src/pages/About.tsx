import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollAnimate, ScrollAnimateList } from "@/components/shared/ScrollAnimate";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckSquare, MessageCircle, Users, ArrowRight } from "lucide-react";

const tabContent = {
  development: "We focus on continuous development and improvement of our services. Our team stays updated with the latest healthcare trends and technologies to provide you with the best possible experience.",
  team: "Our qualified team consists of healthcare professionals, pharmacists, and customer service experts who are dedicated to helping you with all your healthcare needs.",
  strategy: "Our strategy is centered around customer satisfaction and quality assurance. We carefully select each product and partner to ensure you receive only the best.",
};

const statsData = [
  { value: 18, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Employees" },
  { value: 85, suffix: "%", label: "Customer Satisfaction" },
  { value: 27, suffix: "+", label: "Awards Won" },
];

const features = [
  {
    icon: CheckSquare,
    title: "Submit a Task",
    description: "Easily submit your healthcare requirements and we'll take care of the rest.",
  },
  {
    icon: MessageCircle,
    title: "Send Message",
    description: "Get in touch with our support team for any queries or assistance.",
  },
  {
    icon: Users,
    title: "Trusted Experience",
    description: "Join thousands of satisfied customers who trust us with their healthcare needs.",
  },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <Layout>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          {/* Tabs Section */}
          <ScrollAnimate animation="fade-up">
            <div className="max-w-4xl mx-auto mb-16">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full justify-center bg-muted/50 rounded-xl p-1 mb-8">
                  <TabsTrigger value="development" className="rounded-lg px-6">Development</TabsTrigger>
                  <TabsTrigger value="team" className="rounded-lg px-6">Qualified Team</TabsTrigger>
                  <TabsTrigger value="strategy" className="rounded-lg px-6">Strategy</TabsTrigger>
                </TabsList>
                
                {Object.entries(tabContent).map(([key, content]) => (
                  <TabsContent key={key} value={key} className="text-center">
                    <div className="bg-card rounded-xl p-8 card-shadow animate-fade-in">
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {content}
                      </p>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </ScrollAnimate>

          {/* Image Grid */}
          <ScrollAnimateList
            animation="scale-in"
            staggerDelay={100}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden img-zoom-container aspect-[4/3]"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </ScrollAnimateList>

          {/* Accordion Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimate animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Inspiration, Innovation, and Opportunities
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      id: "vision",
                      title: "Business's Vision",
                      content: "To be the leading online healthcare platform, making quality medicines and healthcare products accessible to everyone, everywhere.",
                    },
                    {
                      id: "mission",
                      title: "Our Mission",
                      content: "To provide affordable, genuine healthcare products with exceptional service, ensuring the well-being of our customers and communities.",
                    },
                    {
                      id: "support",
                      title: "Our Support",
                      content: "We offer 24/7 customer support through multiple channels - phone, email, and live chat - to assist you with any healthcare queries or concerns.",
                    },
                  ].map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="bg-card rounded-xl px-6 card-shadow border-0">
                      <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-left" delay={200}>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop"
                alt="Innovation"
                className="rounded-2xl shadow-xl"
              />
            </ScrollAnimate>
          </div>

          {/* Feature Cards */}
          <ScrollAnimateList
            animation="fade-up"
            staggerDelay={150}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-8 text-center card-shadow hover-lift"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </ScrollAnimateList>

          {/* Stats Section */}
          <ScrollAnimate animation="scale-in">
            <div 
              className="relative rounded-2xl overflow-hidden mb-16"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=400&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-primary/90" />
              <div className="relative z-10 py-16 px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {statsData.map((stat) => (
                    <div key={stat.label}>
                      <Counter target={stat.value} suffix={stat.suffix} />
                      <p className="text-primary-foreground/80 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Contact CTA */}
          <ScrollAnimate animation="fade-up">
            <div className="text-center bg-secondary rounded-2xl py-16 px-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">About Us Info</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about our company or services? We'd love to hear from you. 
                Get in touch with our team for more information.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Link to="/contact">
                  Click Here to Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </Layout>
  );
};

export default About;
