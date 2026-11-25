import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolio } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio — Deltrons",
  description:
    "Digital experiences built to make an impact — explore Deltrons' selected work across web, mobile, brand and eCommerce.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-ink grain">
        <div className="line-field opacity-25">
          <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
            <path
              d="M-100 380 C 260 300, 520 440, 820 340 S 1180 260, 1500 330"
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
              eyebrow="Selected Work"
              heading="Digital Experiences"
              goldWord="Built to Make an Impact."
              description="A look at the products, brands, and platforms we've helped bring to life — from early concept to launch."
              className="max-w-2xl"
            />
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={(i % 3) * 90}>
                <PortfolioCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink-soft">
        <Container className="py-20 md:py-24">
          <RevealOnScroll className="flex flex-col items-center gap-7 text-center">
            <h2 className="font-display max-w-[24ch] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.15] text-text-light">
              Have a project you&rsquo;d like to see{" "}
              <span className="italic text-gold">built well?</span>
            </h2>
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
