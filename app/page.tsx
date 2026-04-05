import { HeroSection } from "@/components/HeroSection";
import { ValuePropSection } from "@/components/ValuePropSection";
import { PortfolioMarquee } from "@/components/PortfolioMarquee";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background relative overflow-hidden">
      <HeroSection />
      <PortfolioMarquee />
      <ValuePropSection />
      <ProcessSteps />
      <FooterCTA />
    </main>
  );
}
