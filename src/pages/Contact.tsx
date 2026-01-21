import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact Omnific Fitouts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>

        <div className="relative z-10 container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block font-sans text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-background leading-[1.1] mb-8">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              Ready to transform your space? Get in touch with our team to discuss
              your project and receive a personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-3xl font-medium mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Head Office</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Building No: 1633, Street 14
                      <br />
                      2nd Floor, Govind Puri, Kalkaji
                      <br />
                      New Delhi - 110019
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Corporate Office</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Building No SCO 1, 2nd Floor
                      <br />
                      Royal Crown, Ashoka Main Market
                      <br />
                      Sector 35, Faridabad, Haryana - 121003
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="tel:+919871373456"
                        className="hover:text-primary transition-colors"
                      >
                        +91 98713 73456
                      </a>
                      <br />
                      <a
                        href="tel:+918700791534"
                        className="hover:text-primary transition-colors"
                      >
                        +91 87007 91534
                      </a>
                      <br />
                      {/* <a
                        href="tel:01294144206"
                        className="hover:text-primary transition-colors"
                      >
                        0129-4144206
                      </a> */}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="mailto:info@omnificfitouts.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@omnificfitouts.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-secondary p-8 md:p-12">
                <h2 className="font-display text-3xl font-medium mb-2">
                  Request a Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within
                  24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company / Brand
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                    >
                      <option value="">Select project type</option>
                      <option value="retail">Retail Fitout</option>
                      <option value="commercial">Commercial Interior</option>
                      <option value="office">Office Design</option>
                      <option value="residential">Residential Luxury</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                      placeholder="Tell us about your project, timeline, and budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-secondary">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-primary/30 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Interactive map would be displayed here
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
