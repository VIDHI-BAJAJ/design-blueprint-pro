import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

export function AboutPreview() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={aboutImage}
                alt="Omnific Fitouts design team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 shadow-gold-glow">
              <span className="font-display text-5xl font-semibold block">15+</span>
              <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
              About Omnific Fitouts
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6">
              Crafting Spaces That Inspire
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Omnific Fitouts LLP is spearheaded by Mr. Sudhir Minotra, bringing
              vast professional experience working for reputed brands like CCD,
              Levi's®, and SAMSUNG. With over 600 retail outlets delivered across
              India, we specialize in complex designs and engineering excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our passion for innovation in fitouts, retail fixtures, and design
              implementation sets us apart. We transform visions into reality
              while maintaining strict timelines and uncompromising quality.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { icon: Award, label: "Award-Winning Design" },
                { icon: Users, label: "Expert Team" },
                { icon: Target, label: "Precision Delivery" },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground">{feature.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-medium text-foreground link-underline group"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
