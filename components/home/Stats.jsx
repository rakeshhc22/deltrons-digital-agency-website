import { Briefcase, Users, Clock, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import StatItem from "@/components/ui/StatItem";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const STATS = [
  { icon: Briefcase, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: ShieldCheck, value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="border-b border-white/10 bg-ink">
      <Container className="grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4 md:gap-8">
        {STATS.map((stat, i) => (
          <RevealOnScroll key={stat.label} delay={i * 90}>
            <StatItem {...stat} />
          </RevealOnScroll>
        ))}
      </Container>
    </section>
  );
}
