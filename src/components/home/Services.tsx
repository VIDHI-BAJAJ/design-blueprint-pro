import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, Store, Briefcase, Palette, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Store,
    title: "Retail Fitouts",
    description:
      "Premium retail environments that elevate your brand and create memorable customer experiences.",
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    description:
      "Sophisticated corporate spaces designed for productivity, collaboration, and brand identity.",
  },
  {
    icon: Briefcase,
    title: "Office Design",
    description:
      "Modern workspaces that balance functionality with aesthetic excellence for today's workforce.",
  },
  {
    icon: Home,
    title: "Residential Luxury",
    description:
      "Bespoke home interiors that reflect your personal style and elevate everyday living.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Tailored solutions from concept to completion, bringing your unique vision to life.",
  },
  {
    icon: Wrench,
    title: "Turnkey Solutions",
    description:
      "End-to-end project delivery including MEP, flooring, ceilings, and all finishing works.",
  },
];

export function Services() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <SectionHeading
          label="Our Services"
          title="Excellence in Every Detail"
          description="From conceptualization to installation, we deliver comprehensive interior fitout solutions that exceed expectations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background p-8 shadow-card-luxury hover:shadow-elegant transition-all duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="font-display text-2xl font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-foreground transition-colors"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="btn-luxury"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
