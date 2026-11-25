import { Compass, Gem, Timer, LifeBuoy } from "lucide-react";
import Container from "@/components/layout/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const REASONS = [
  {
    Icon: Compass,
    title: "Strategic Approach",
    description: "We plan every step with strategy to get maximum results.",
  },
  {
    Icon: Gem,
    title: "Premium Quality",
    description: "Clean code, modern design and top-notch quality in everything we do.",
  },
  {
    Icon: Timer,
    title: "On-Time Delivery",
    description: "We value time and ensure every project is delivered on time.",
  },
  {
    Icon: LifeBuoy,
    title: "Ongoing Support",
    description: "Our relationship doesn't end at delivery. We are always here to support you.",
  },
];

export default function WhyDeltrons() {
  return (
    <section className="border-t border-white/10 bg-ink">
      <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <RevealOnScroll className="flex flex-col gap-5">
          <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-gold">
            Why Choose Deltrons?
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-[1.12] text-text-light">
            We Don&rsquo;t Just Build Websites,
            <br />
            We Build <span className="italic text-gold">Success Stories.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {REASONS.map(({ Icon, title, description }, i) => (
            <RevealOnScroll key={title} delay={i * 90} className="flex flex-col gap-3">
              <Icon size={22} strokeWidth={1.5} className="text-gold" />
              <h3 className="font-display text-base font-semibold text-text-light">
                {title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-text-muted">
                {description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
