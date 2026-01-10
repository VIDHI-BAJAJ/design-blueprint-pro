import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";

const categories = ["All", "Retail", "Commercial", "Residential", "Hospitality"];

const projects = [
  {
    image: projectRetail,
    category: "Retail",
    title: "Levi's Flagship Store",
    location: "Connaught Place, New Delhi",
    description:
      "A signature retail experience featuring custom fixtures, premium materials, and innovative display solutions.",
  },
  {
    image: projectOffice,
    category: "Commercial",
    title: "Louis Philippe Showroom",
    location: "DLF Mall, Gurugram",
    description:
      "Elegant menswear retail environment with sophisticated wood paneling and ambient lighting.",
  },
  {
    image: projectResidential,
    category: "Residential",
    title: "Luxury Penthouse",
    location: "Greater Kailash, New Delhi",
    description:
      "A bespoke residential masterpiece featuring custom furniture and premium finishes throughout.",
  },
  {
    image: projectHospitality,
    category: "Hospitality",
    title: "Calvin Klein Store",
    location: "Elante Mall, Chandigarh",
    description:
      "Minimalist luxury retail design reflecting the brand's contemporary aesthetic.",
  },
  {
    image: projectRetail,
    category: "Retail",
    title: "Raymond Shop",
    location: "Multiple Locations",
    description:
      "Premium suiting retail experience with made-to-measure consultation areas.",
  },
  {
    image: projectOffice,
    category: "Commercial",
    title: "ASICS Experience Center",
    location: "Select Citywalk, Delhi",
    description:
      "Sports retail innovation featuring the Foot ID technology zone and dynamic displays.",
  },
  {
    image: projectHospitality,
    category: "Hospitality",
    title: "Café Coffee Day Outlet",
    location: "New Delhi",
    description:
      "Warm and inviting café environment designed for comfort and social interaction.",
  },
  {
    image: projectResidential,
    category: "Commercial",
    title: "Clove Dental Clinic",
    location: "Multiple Locations",
    description:
      "Modern healthcare fitout balancing clinical precision with patient comfort.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Omnific Fitouts Portfolio"
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
              Our Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-background leading-[1.1] mb-8">
              Signature Projects
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              Explore our collection of award-worthy interior fitouts delivered
              for leading brands across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-background mb-2">
                      {project.title}
                    </h3>
                    <p className="text-background/60 text-sm mb-4">
                      {project.location}
                    </p>
                    <p className="text-background/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              Let's Create Your Success Story
            </h2>
            <p className="text-muted-foreground mb-10">
              Ready to add your project to our portfolio of excellence? Contact us
              to begin your transformation journey.
            </p>
            <Link
              to="/contact"
              className="btn-luxury"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
