import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CapabilitySelector from "@/components/capabilities/CapabilitySelector";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Capabilities — Deltrons",
  description:
    "One connected system, six intelligent services — explore Deltrons' AI-powered capabilities.",
};

export default function CapabilitiesPage() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink grain">
      <div className="line-field opacity-20">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
          <circle cx="1250" cy="150" r="220" fill="none" stroke="#C99A3D" strokeWidth="0.5" />
          <circle cx="1250" cy="150" r="340" fill="none" stroke="#C99A3D" strokeWidth="0.4" />
        </svg>
      </div>

      <Container className="relative z-10 py-20 md:py-28">
        <RevealOnScroll className="mb-14 flex flex-col gap-6 lg:max-w-xl">
          <SectionHeading
            dark
            eyebrow="Interactive Capabilities"
            heading="One connected system,"
            goldWord="six intelligent services."
            description="Our practice sits at the center of everything we build — connected to every product surface we design."
          />
        </RevealOnScroll>

        <CapabilitySelector />
      </Container>
    </section>
  );
}
