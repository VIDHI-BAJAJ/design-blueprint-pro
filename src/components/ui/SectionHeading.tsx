import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-16`}
    >
      {label && (
        <span
          className={`inline-block font-sans text-xs uppercase tracking-[0.3em] mb-4 ${
            light ? "text-primary" : "text-primary"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 ${
          light ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-background/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
