import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollAnimate, ScrollAnimateList } from "@/components/shared/ScrollAnimate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Paperclip, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "50-UTC, Beside Orange Hospital, Medical District",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+00 123-456-789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "demo@example.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "10:00AM - 6:00PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Map */}
            <ScrollAnimate animation="fade-right">
              <div className="bg-muted rounded-xl overflow-hidden h-[400px] lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5424792654997!2d-0.12005368422950673!3d51.50329617963405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1645134567890!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </ScrollAnimate>

            {/* Contact Form */}
            <ScrollAnimate animation="fade-left" delay={150}>
              <div className="bg-card rounded-xl p-8 card-shadow">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Get In Touch With Us
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer-service">Customer Service</SelectItem>
                        <SelectItem value="orders">Orders & Shipping</SelectItem>
                        <SelectItem value="returns">Returns & Refunds</SelectItem>
                        <SelectItem value="product">Product Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Attachment (Optional)
                    </label>
                    <div className="relative">
                      <Input
                        type="file"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                      >
                        <Paperclip className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Choose file...</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="focus:ring-primary resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, agreeTerms: checked as boolean })
                      }
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                      I agree to the terms and conditions and privacy policy
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    size="lg"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollAnimate>
          </div>

          {/* Info Cards */}
          <ScrollAnimateList
            animation="fade-up"
            staggerDelay={100}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card rounded-xl p-6 text-center card-shadow hover-lift"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.content}</p>
              </div>
            ))}
          </ScrollAnimateList>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
