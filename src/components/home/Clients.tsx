import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const clients = [
  "Levi's",
  "Calvin Klein",
  "Raymond",
  "Louis Philippe",
  "ASICS",
  "Fabindia",
  "Café Coffee Day",
  "SAMSUNG",
  "Clove Dental",
  "Creyate",
];

export function Clients() {
  return (
    <section className="section-padding bg-foreground">
      <div className="container-luxury">
        <SectionHeading
          label="Our Clients"
          title="Trusted by Leading Brands"
          description="We are proud to have partnered with some of the most prestigious brands, delivering exceptional interior solutions that elevate their presence."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 border border-background/10 hover:border-primary/50 transition-colors duration-300"
            >
              <span className="font-display text-xl md:text-2xl text-background/60 hover:text-primary transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
