import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-bone">
      <Container className="py-20 md:py-28">
        <RevealOnScroll
          as="div"
          className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <SectionHeading
            eyebrow="What We Do"
            heading="Complete Digital Solutions"
            goldWord="Under One Roof."
            description="From idea to execution, we provide everything your business needs to build a strong online presence, attract customers, and grow beyond limits."
          />
          <div className="hidden shrink-0 md:block">
            <Button href="/services" variant="dark">
              All Services
            </Button>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={i * 90}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
