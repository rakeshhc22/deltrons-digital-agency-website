import { Target, Layers, HeartHandshake } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StatItem from "@/components/ui/StatItem";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Briefcase, Users, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About — Deltrons",
  description:
    "Deltrons is a premium digital agency building websites, apps, and brand experiences for ambitious businesses.",
};

const BELIEFS = [
  {
    Icon: Target,
    title: "Precision over guesswork",
    description:
      "Every decision — from layout to load time — is made deliberately, not left to a template default.",
  },
  {
    Icon: Layers,
    title: "Craft at every layer",
    description:
      "Design, code, and copy are treated as one discipline. Nothing is an afterthought.",
  },
  {
    Icon: HeartHandshake,
    title: "Partnership, not handoff",
    description:
      "We stay close to the outcome, not just the deliverable — support continues after launch.",
  },
];

const STATS = [
  { icon: Briefcase, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: ShieldCheck, value: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
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
              eyebrow="About Deltrons"
              heading="We Don&rsquo;t Just Build Digital Products."
              goldWord="We Build Digital Experiences."
              description="Deltrons is a premium digital agency working at the intersection of design, engineering, and brand — for businesses who see their digital presence as core to who they are, not an afterthought."
              className="max-w-3xl"
            />
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll>
            <MediaPlaceholder aspectRatio="4/3" label="Deltrons Studio" />
          </RevealOnScroll>
          <RevealOnScroll delay={120} className="flex flex-col gap-6">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-gold">
              Our Philosophy
            </span>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold leading-[1.2] text-text-light">
              Good design is invisible.
              <br />
              Great design is <span className="italic text-gold">felt</span>.
            </h2>
            <p className="max-w-[54ch] text-[15px] leading-relaxed text-text-muted">
              We believe the best digital products don&rsquo;t announce their
              cleverness — they simply work, feel considered, and make people
              trust the business behind them. That&rsquo;s the standard we
              hold every project to, from the first sketch to the final line
              of code.
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink-soft">
        <Container className="grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 90}>
              <StatItem {...stat} />
            </RevealOnScroll>
          ))}
        </Container>
      </section>

      <section className="bg-bone">
        <Container className="py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="What We Believe"
              heading="Principles that shape"
              goldWord="every engagement."
              className="mb-14 max-w-2xl"
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {BELIEFS.map(({ Icon, title, description }, i) => (
              <RevealOnScroll key={title} delay={i * 100} className="flex flex-col gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-gold">
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-ink/55">
                  {description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink">
        <Container className="py-20 md:py-24">
          <RevealOnScroll className="flex flex-col items-center gap-7 text-center">
            <h2 className="font-display max-w-[26ch] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.15] text-text-light">
              Why clients keep coming{" "}
              <span className="italic text-gold">back to Deltrons.</span>
            </h2>
            <p className="max-w-[52ch] text-[15px] text-text-muted">
              Consistent quality, honest communication, and a team that treats
              your product like it&rsquo;s our own.
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
