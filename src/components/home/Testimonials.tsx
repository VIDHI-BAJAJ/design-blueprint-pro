import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Omnific Fitouts transformed our retail space beyond our expectations. Their attention to detail and understanding of brand aesthetics is unparalleled. The project was delivered on time and within budget.",
    author: "Retail Director",
    company: "Levi Strauss & Co.",
    role: "India Operations",
  },
  {
    quote:
      "Working with Omnific was a seamless experience. From the initial concept to final installation, their team demonstrated exceptional professionalism and creativity. Our store has become a landmark destination.",
    author: "Brand Manager",
    company: "Louis Philippe",
    role: "North India",
  },
  {
    quote:
      "The quality of craftsmanship and the innovative solutions provided by Omnific Fitouts exceeded all our expectations. They truly understand luxury retail environments.",
    author: "Operations Head",
    company: "Calvin Klein",
    role: "India",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-luxury">
        <SectionHeading
          label="Testimonials"
          title="Client Experiences"
          description="Hear from our valued clients about their journey with Omnific Fitouts."
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground mb-8">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="font-medium text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="text-primary">{testimonials[current].company}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
