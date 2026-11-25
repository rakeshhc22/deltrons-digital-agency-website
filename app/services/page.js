import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/data/services";

export const metadata = {
  title: "Services — Deltrons",
  description:
    "Explore Deltrons' full range of digital services: websites, apps, eCommerce, UI/UX, branding, creative design and marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-ink grain">
        <div className="line-field opacity-25">
          <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
            <path
              d="M-100 400 C 250 320, 500 460, 800 360 S 1150 260, 1500 340"
              fill="none"
              stroke="#C99A3D"
              strokeWidth="0.8"
            />
          </svg>
        </div>
        <Container className="relative z-10 py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading
              dark
              eyebrow="What We Do"
              heading="Digital Solutions Engineered"
              goldWord="for Growth."
              description="Every service we offer is built to work together — from first impression to long-term performance — so your business shows up consistently everywhere it matters."
              className="max-w-3xl"
            />
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <RevealOnScroll key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink">
        <Container className="flex flex-col gap-16 py-20 md:py-28">
          {services.map((service, i) => (
            <RevealOnScroll
              key={service.slug}
              as="div"
              className={`grid gap-10 border-t border-white/10 pt-14 first:border-t-0 first:pt-0 lg:grid-cols-[0.4fr_1fr] lg:items-start`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <service.Icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-light">
                  {service.title}
                </h3>
              </div>
              <p className="max-w-[62ch] text-[15px] leading-relaxed text-text-muted">
                {service.detail}
              </p>
            </RevealOnScroll>
          ))}
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink-soft">
        <Container className="py-20 md:py-24">
          <RevealOnScroll className="flex flex-col items-center gap-7 text-center">
            <h2 className="font-display max-w-[24ch] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.15] text-text-light">
              Not sure which service fits your{" "}
              <span className="italic text-gold">project?</span>
            </h2>
            <p className="max-w-[48ch] text-[15px] text-text-muted">
              Tell us where you&rsquo;re headed and we&rsquo;ll help you map the right services to get there.
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
