"use client";

import { useState } from "react";
import { capabilities } from "@/data/capabilities";
import CapabilityCard from "./CapabilityCard";
import CapabilityPreview from "./CapabilityPreview";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CapabilitySelector() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-stretch">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {capabilities.map((capability, i) => (
          <RevealOnScroll key={capability.id} delay={i * 70}>
            <CapabilityCard
              capability={capability}
              active={capability.id === activeId}
              onSelect={() => setActiveId(capability.id)}
            />
          </RevealOnScroll>
        ))}
      </div>

      <CapabilityPreview capability={active} />
    </div>
  );
}
