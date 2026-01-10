import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowRight,
  Building2,
  Home,
  Store,
  Briefcase,
  Palette,
  Wrench,
  Check,
} from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectResidential from "@/assets/project-residential.jpg";

const services = [
  {
    id: "retail",
    icon: Store,
    image: projectRetail,
    title: "Retail Fitouts",
    description:
      "We understand the power of retail environments in shaping customer experiences and driving brand success. Our retail fitout solutions combine aesthetics with functionality to create spaces that captivate and convert.",
    features: [
      "Shop fittings and fixtures",
      "Visual merchandising displays",
      "Shop frontage and signage",
      "Cash counters and service areas",
      "Lighting design",
      "Floor and wall display units",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    image: projectOffice,
    title: "Commercial Interiors",
    description:
      "From corporate headquarters to hospitality venues, we design commercial spaces that reflect your brand identity while optimizing for productivity, comfort, and client experience.",
    features: [
      "Reception and lobby design",
      "Conference and meeting rooms",
      "Executive suites",
      "Breakout spaces",
      "Wayfinding and branding",
      "MEP integration",
    ],
  },
  {
    id: "office",
    icon: Briefcase,
    image: projectOffice,
    title: "Office Design",
    description:
      "Modern workspaces that inspire creativity and collaboration. We create office environments that balance open collaboration with focused work areas, incorporating the latest in workplace design trends.",
    features: [
      "Open plan workspaces",
      "Private offices",
      "Collaboration zones",
      "Acoustic solutions",
      "Ergonomic furniture",
      "Technology integration",
    ],
  },
  {
    id: "residential",
    icon: Home,
    image: projectResidential,
    title: "Residential Luxury",
    description:
      "Transform your home into a sanctuary of style and comfort. Our residential design services bring luxury and personalization to every space, creating homes that reflect your unique lifestyle.",
    features: [
      "Living and dining spaces",
      "Master bedrooms and suites",
      "Kitchen design",
      "Custom wardrobes",
      "Home offices",
      "Outdoor living areas",
    ],
  },
  {
    id: "custom",
    icon: Palette,
    image: projectRetail,
    title: "Custom Design Solutions",
    description:
      "For projects that demand something unique, our custom design services deliver bespoke solutions tailored precisely to your requirements. From concept sketches to detailed drawings, we bring your vision to life.",
    features: [
      "Concept development",
      "3D visualization",
      "Material selection",
      "Prototype development",
      "Custom furniture design",
      "Specialized finishes",
    ],
  },
  {
    id: "turnkey",
    icon: Wrench,
    image: heroImage,
    title: "Turnkey Solutions",
    description:
      "Complete end-to-end project delivery that handles every aspect of your interior fitout. From demolition to handover, we manage the entire process so you can focus on your business.",
    features: [
      "Project management",
      "Demolition and strip-out",
      "Civil works",
      "MEP services",
      "Flooring and ceiling",
      "Finishing and handover",
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Omnific Fitouts Services"
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
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-background leading-[1.1] mb-8">
              Comprehensive Interior Solutions
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              From design conceptualization to turnkey delivery, we offer a
              complete spectrum of interior fitout services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <service.icon className="w-12 h-12 text-primary mb-6" />
                  <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={16} className="text-primary shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-medium text-primary hover:text-foreground transition-colors group"
                  >
                    Discuss Your Project
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-10">
              Contact us today to discuss your project requirements and receive a
              personalized consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-secondary"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
