import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import levisImg from "@/assets/Levis/LEVIS 4 .png";
import louisPhilippeImg from "@/assets/Lp/LOUIS PHILIPPE 1 .png";
import residentialImg from "@/assets/Residence/RESIDENCE 6.jpeg";

import ccdImg from "@/assets/B.C.H Electricals/B.C.H ELECTRICALS 1 .jpeg";

const projects = [
  {
    image: levisImg,
    category: "Retail",
    title: "Levi's Flagship Store",
    location: "New Delhi",
    size: "large",
  },
  {
    image: louisPhilippeImg,
    category: "Retail",
    title: "Louis Philippe Showroom",
    location: "Gurugram",
    size: "small",
  },
  {
    image: residentialImg,
    category: "Residential",
    title: "Luxury Penthouse",
    location: "South Delhi",
    size: "small",
  },
  {
    image: ccdImg,
    category: "Commercial",
    title: "B.C.H Electricals",
    location: "Chandigarh",
    size: "large",
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading
          label="Featured Projects"
          title="Signature Works"
          description="Explore our portfolio of distinguished projects, each a testament to our commitment to excellence and innovation."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${
                project.size === "large" ? "md:row-span-1" : ""
              }`}
            >
              <Link to="/portfolio" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-background mb-2">
                      {project.title}
                    </h3>
                    <p className="text-background/60 text-sm">{project.location}</p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
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
          <Link to="/portfolio" className="btn-ghost-luxury">
            View Complete Portfolio
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
