import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Award, Users, Target, Clock, Shield, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-interior.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue perfection in every detail, delivering work that exceeds expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing creative frontiers with cutting-edge design solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to understand and realize their unique vision.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "Committed to delivering projects on schedule without compromising quality.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency and honest communication.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to engineering details and structural requirements.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Omnific Fitouts"
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
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-background leading-[1.1] mb-8">
              Building Dreams Into Reality
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              For over 15 years, Omnific Fitouts has been transforming spaces
              across India, creating environments that inspire and endure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6">
                A Legacy of Design Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Omnific Fitouts LLP is spearheaded by Mr. Sudhir Minotra, who
                brings vast professional experience working for reputed brands
                like CCD, Levi's®, and SAMSUNG. With a personal track record of
                delivering more than 600 retail outlets across the country,
                Sudhir has developed a rich acumen for working on complex designs
                and engineering details.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His passion for innovation in the field of fitouts, retail
                fixtures, design implementation, and most importantly, working on
                structured timelines has been the driving force behind Omnific
                Fitouts' success.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, we continue to assist a portfolio of high-profile clients,
                with our business built in great proportion on recommendations
                and repeat engagements—a testament to the quality and trust we
                deliver.
              </p>
              <div className="divider-gold" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aboutImage}
                alt="Omnific Fitouts founder at work"
                className="w-full aspect-[4/3] object-cover shadow-elegant"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 shadow-gold-glow">
                <span className="font-display text-4xl font-semibold block">
                  600+
                </span>
                <span className="text-sm uppercase tracking-wider">
                  Projects Delivered
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-primary">
        <div className="container-luxury">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-primary-foreground leading-relaxed">
              "There is nothing more fragile than a great idea in wrong and
              unskilled hands. Someone has to direct it, help it, shape it into
              reality—so that it reaches mankind and changes the way we live our
              lives."
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="These core principles guide every project we undertake and every relationship we build."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 shadow-card-luxury"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-medium mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-background mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-background/70 mb-10">
              Ready to transform your space? Let's discuss your project and
              explore how we can bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:shadow-gold-glow"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
