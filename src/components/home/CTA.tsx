import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Contact Omnific Fitouts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Let's Work Together
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-background leading-tight mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-background/70 mb-10">
            Whether you're envisioning a stunning retail environment, a
            sophisticated office, or a luxurious residential space, we're here to
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:shadow-gold-glow"
            >
              Request Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+919871373456"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-background/30 text-background font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-background/10"
            >
              <Phone size={18} />
              +91 98713 73456
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
