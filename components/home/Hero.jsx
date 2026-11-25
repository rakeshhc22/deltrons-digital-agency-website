import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import HeroShowcase from "@/components/home/HeroShowcase";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink grain">
      <div className="line-field opacity-30">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            d="M-100 650 C 200 550, 400 720, 650 600 S 1000 480, 1300 560 S 1600 650, 1700 600"
            fill="none"
            stroke="#C99A3D"
            strokeWidth="1"
          />
          <path
            d="M-100 300 C 250 220, 500 380, 800 260 S 1150 150, 1500 240"
            fill="none"
            stroke="#C99A3D"
            strokeWidth="0.6"
          />
        </svg>
      </div>

      <Container className="relative z-10 grid gap-16 py-20 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12">
        <div className="flex flex-col gap-7 animate-fade-up">
          <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-gold">
            Digital Solutions That Drive Growth
          </span>

          <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.2rem)] font-semibold leading-[1.08] text-text-light">
            We Build Premium
            <br />
            Digital <span className="italic text-gold">Experiences</span>
            <br />
            That Perform.
          </h1>

          <p className="max-w-[46ch] text-[15.5px] leading-relaxed text-text-muted">
            Deltrons is a full-service digital agency delivering websites,
            apps, eCommerce solutions, branding, and digital growth services
            that help businesses stand out and scale up.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/services" variant="primary">
              Explore Our Services
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <HeroShowcase />
        </div>
      </Container>
    </section>
  );
}
