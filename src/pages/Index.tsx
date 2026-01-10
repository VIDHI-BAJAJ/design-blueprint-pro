import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <Clients />
      <CTA />
    </Layout>
  );
};

export default Index;
