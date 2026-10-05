import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { MethodologyFlow } from "@/components/sections/MethodologyFlow";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { DaoSection } from "@/components/sections/DaoSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { PartnerCTA } from "@/components/sections/PartnerCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <MethodologyFlow />
      <ProductGrid />
      <BusinessModel />
      <DaoSection />
      <TechnologySection />
      <PartnerCTA />
    </>
  );
}
