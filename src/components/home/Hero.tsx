import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury interior design by Omnific Fitouts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-sans text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Luxury Interior Design & Fitouts
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-background leading-[1.1] mb-8"
          >
            We Create Your{" "}
            <span className="italic text-primary">Imaginations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-background/70 leading-relaxed mb-10 max-w-xl"
          >
            Transforming spaces into extraordinary experiences. From concept to
            completion, we deliver world-class interior fitouts for retail,
            commercial, and residential projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:shadow-gold-glow group"
            >
              View Our Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-background/30 text-background font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-background/10 hover:border-background/50"
            >
              <Play size={16} className="fill-current" />
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border"
      >
        <div className="container-luxury py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "600+", label: "Projects Delivered" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Premium Brands" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <span className="font-display text-3xl md:text-4xl font-semibold text-primary">
                  {stat.number}
                </span>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
