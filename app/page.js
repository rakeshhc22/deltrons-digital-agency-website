import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyDeltrons from "@/components/home/WhyDeltrons";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyDeltrons />
      <CapabilitiesSection />

      <section className="border-t border-white/10 bg-ink-soft">
        <Container className="py-20 md:py-24">
          <RevealOnScroll className="flex flex-col items-center gap-7 text-center">
            <h2 className="font-display max-w-[22ch] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.15] text-text-light">
              Turn Your Idea Into Digital{" "}
              <span className="italic text-gold">Success.</span>
            </h2>
            <p className="max-w-[48ch] text-[15px] text-text-muted">
              Tell us about your project and let&rsquo;s build something remarkable together.
            </p>
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
