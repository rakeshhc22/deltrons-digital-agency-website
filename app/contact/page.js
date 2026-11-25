import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact — Deltrons",
  description:
    "Have a project in mind? Get in touch with Deltrons and let's build something remarkable.",
};

const DETAILS = [
  { Icon: Mail, label: "hello@deltrons.com" },
  { Icon: Phone, label: "+1 (555) 010-2040" },
  { Icon: MapPin, label: "Remote-first, worldwide" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-ink grain">
      <div className="line-field opacity-20">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path
            d="M-100 700 C 250 600, 500 780, 800 660 S 1150 540, 1500 640"
            fill="none"
            stroke="#C99A3D"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      <Container className="relative z-10 grid gap-16 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <RevealOnScroll className="flex flex-col gap-8">
          <SectionHeading
            dark
            eyebrow="Get In Touch"
            heading="Have a project in mind?"
            goldWord="Let&rsquo;s build something remarkable."
          />
          <div className="flex flex-col gap-4">
            {DETAILS.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3.5 text-[14.5px] text-text-muted">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gold">
                  <Icon size={15} strokeWidth={1.6} />
                </div>
                {label}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <ContactForm />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
