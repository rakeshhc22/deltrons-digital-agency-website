import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CapabilitySelector from "@/components/capabilities/CapabilitySelector";

/**
 * Home page preview of the full Interactive Capabilities experience
 * (see /capabilities). Reuses the same CapabilitySelector — and therefore
 * the same six capabilities, cards, and live previews — so the two stay in
 * sync automatically. Sits directly after "Why Choose Deltrons".
 */
export default function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink grain">
      <div className="line-field opacity-20">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <circle cx="200" cy="120" r="200" fill="none" stroke="#C99A3D" strokeWidth="0.5" />
          <circle cx="200" cy="120" r="320" fill="none" stroke="#C99A3D" strokeWidth="0.35" />
        </svg>
      </div>

      <Container className="relative z-10 grid gap-12 py-20 md:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-14">
        <RevealOnScroll className="flex flex-col gap-6 lg:sticky lg:top-32">
          <SectionHeading
            dark
            eyebrow="Interactive Capabilities"
            heading="One connected system,"
            goldWord="six intelligent services."
            description="Our digital capabilities sit at the center of everything we build — connected to every product surface we design."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <CapabilitySelector />
        </RevealOnScroll>
      </Container>

      <RevealOnScroll delay={80} className="relative z-10">
        <Container className="flex justify-center pb-20 md:pb-28">
          <Button href="/capabilities" variant="secondary">
            Explore All Capabilities
          </Button>
        </Container>
      </RevealOnScroll>
    </section>
  );
}
