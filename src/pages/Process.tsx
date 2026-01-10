import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowRight,
  MessageSquare,
  PenTool,
  Hammer,
  CheckCircle,
  Lightbulb,
  FileCheck,
} from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We begin with an in-depth discussion to understand your vision, requirements, and budget. This initial meeting sets the foundation for your project's success.",
    details: [
      "Understand your brand and vision",
      "Assess site conditions",
      "Define project scope and budget",
      "Establish timeline expectations",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Concept Design",
    description:
      "Our creative team develops initial design concepts that align with your brand identity and functional requirements, presented through sketches and mood boards.",
    details: [
      "Creative brainstorming",
      "Mood boards and inspiration",
      "Initial layout concepts",
      "Material and color palette exploration",
    ],
  },
  {
    number: "03",
    icon: PenTool,
    title: "Detailed Design",
    description:
      "We refine the approved concept into detailed technical drawings, 3D visualizations, and comprehensive specifications ready for production.",
    details: [
      "3D renderings and walkthroughs",
      "Technical drawings",
      "Material specifications",
      "MEP coordination",
    ],
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Approvals & Planning",
    description:
      "We handle all necessary approvals and create detailed project plans, ensuring smooth execution with minimal surprises.",
    details: [
      "Client sign-off on designs",
      "Regulatory approvals if required",
      "Vendor coordination",
      "Detailed project scheduling",
    ],
  },
  {
    number: "05",
    icon: Hammer,
    title: "Production & Installation",
    description:
      "Our skilled craftsmen and dedicated project managers bring the design to life, maintaining quality and timeline discipline throughout.",
    details: [
      "Custom fabrication",
      "On-site execution",
      "Quality control checks",
      "Regular progress updates",
    ],
  },
  {
    number: "06",
    icon: CheckCircle,
    title: "Handover & Support",
    description:
      "We deliver a finished space that exceeds expectations, complete with documentation and ongoing support for your peace of mind.",
    details: [
      "Final inspection and snag list",
      "Client walkthrough",
      "Handover documentation",
      "Post-completion support",
    ],
  },
];

const Process = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Omnific Fitouts Process"
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
              Our Process
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-background leading-[1.1] mb-8">
              From Vision to Reality
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              Our proven six-step process ensures seamless project delivery,
              transparent communication, and exceptional results every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeading
            label="The Journey"
            title="Your Project Roadmap"
            description="Every successful project follows a clear path. Here's how we guide you from initial concept to final handover."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:py-16 ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-2 lg:text-left" : "lg:text-right"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-4 mb-6 ${
                        index % 2 === 1 ? "" : "lg:flex-row-reverse"
                      }`}
                    >
                      <span className="font-display text-6xl font-light text-primary/20">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground">
                        <step.icon size={24} />
                      </div>
                    </div>
                    <h3 className="font-display text-3xl font-medium mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className={`space-y-2 ${index % 2 === 1 ? "" : "lg:ml-auto lg:max-w-md"}`}>
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-2 text-sm text-foreground ${
                            index % 2 === 1 ? "" : "lg:justify-end"
                          }`}
                        >
                          {index % 2 === 0 && (
                            <span className="hidden lg:block">{detail}</span>
                          )}
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {index % 2 === 1 ? (
                            <span>{detail}</span>
                          ) : (
                            <span className="lg:hidden">{detail}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`hidden lg:flex items-center justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-gold-glow" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-primary-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="text-primary-foreground/80 mb-10">
              Let's start with a conversation about your project. Our team is ready
              to guide you through every step of the journey.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-secondary"
            >
              Schedule Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
