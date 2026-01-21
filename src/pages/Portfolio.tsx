import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import levisImg from "@/assets/Levis/LEVIS 4 .png";
import raymondImg from "@/assets/Levis/LEVIS 4 .png";
import asicsImg from "@/assets/ASIC/ASICS 2 .png";
import louisPhilippeImg from "@/assets/Lp/LOUIS PHILIPPE 1 .png";
import residentialImg from "@/assets/Residence/RESIDENCE 1.jpeg"
import calvinKleinImg from "@/assets/CK/CK 1.png";
import ccdImg from "@/assets/B.C.H Electricals/B.C.H ELECTRICALS 1 .jpeg";
import projectLevis from "@/assets/project-levis.jpg";
import projectLouisPhilippe from "@/assets/project-louis-philippe.jpg";
import projectPenthouse from "@/assets/project-penthouse.jpg";
import projectCalvinKlein from "@/assets/project-calvin-klein.jpg";
import projectRaymond from "@/assets/project-raymond.jpg";
import projectAsics from "@/assets/project-asics.jpg";
import projectCcd from "@/assets/project-ccd.jpg";
import projectClove from "@/assets/project-clove.jpg";
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340

const categories = ["All", "Retail", "Commercial", "Residential", "Hospitality"];

const projects = [
  {
<<<<<<< HEAD
    image: levisImg,
=======
    image: projectLevis,
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
    category: "Retail",
    title: "Levi's Flagship Store",
    location: "Connaught Place, New Delhi",
    description:
      "A signature retail experience featuring custom fixtures, premium materials, and innovative display solutions.",
  },
  {
<<<<<<< HEAD
    image: louisPhilippeImg,
=======
    image: projectLouisPhilippe,
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
    category: "Commercial",
    title: "Louis Philippe Showroom",
    location: "DLF Mall, Gurugram",
    description:
      "Elegant menswear retail environment with sophisticated wood paneling and ambient lighting.",
  },
  {
<<<<<<< HEAD
    image: residentialImg,
=======
    image: projectPenthouse,
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
    category: "Residential",
    title: "Luxury Penthouse",
    location: "Greater Kailash, New Delhi",
    description:
      "A bespoke residential masterpiece featuring custom furniture and premium finishes throughout.",
  },
  {
<<<<<<< HEAD
    image: calvinKleinImg,
=======
    image: projectCalvinKlein,
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
    category: "Hospitality",
    title: "Calvin Klein Store",
    location: "Elante Mall, Chandigarh",
    description:
      "Minimalist luxury retail design reflecting the brand's contemporary aesthetic.",
  },
  {
<<<<<<< HEAD
    image: raymondImg,
=======
    image: projectRaymond,
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
    category: "Retail",
    title: "Raymond Shop",
    location: "Multiple Locations",
    description:
      "Premium suiting retail experience with made-to-measure consultation areas.",
  },
  {
<<<<<<< HEAD
    image: asicsImg,
    category: "Retail",
=======
    image: projectAsics,
    category: "Commercial",
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
    title: "ASICS Experience Center",
    location: "Select Citywalk, Delhi",
    description:
      "Sports retail innovation featuring the Foot ID technology zone and dynamic displays.",
  },
  {
<<<<<<< HEAD
    image: ccdImg,
    category: "Commercial",
    title: "B.C.H Electricals",
=======
    image: projectCcd,
    category: "Hospitality",
    title: "Café Coffee Day Outlet",
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
    location: "New Delhi",
    description:
      "Warm and inviting café environment designed for comfort and social interaction.",
  },
  {
<<<<<<< HEAD
    image: louisPhilippeImg,
=======
    image: projectClove,
>>>>>>> f4944202e8e70ee25fdf5c88bf0cf670bf6f7340
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
      {/* HERO */}
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
            <span className="inline-block text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Our Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-background mb-8">
              Signature Projects
            </h1>
            <p className="text-xl text-background/70">
              Explore our collection of award-worthy interior fitouts delivered
              for leading brands across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm uppercase transition ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-xs uppercase text-primary mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {project.location}
                    </p>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-center">
        <h2 className="text-4xl mb-6">Let's Create Your Success Story</h2>
        <Link to="/contact" className="btn-luxury">
          Start Your Project
        </Link>
      </section>
    </Layout>
  );
};

export default Portfolio;
