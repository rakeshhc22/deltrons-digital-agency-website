"use client";

import { Check, User, Bot } from "lucide-react";

function ChatPreview() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-text-muted">
          <User size={13} />
        </div>
        <div className="rounded-lg rounded-tl-none bg-white/[0.06] px-4 py-2.5 text-[13px] text-text-light/90">
          What&rsquo;s the status of order #4021?
        </div>
      </div>
      <div className="flex items-start justify-end gap-2.5">
        <div className="max-w-[80%] rounded-lg rounded-tr-none border border-gold/30 bg-gold/[0.08] px-4 py-2.5 text-[13px] text-text-light/90">
          Order #4021 shipped yesterday — arriving Thursday.
        </div>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
          <Bot size={13} />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-[12.5px] text-text-muted">
        Ask a question…
      </div>
    </div>
  );
}

function WorkflowPreview() {
  const steps = ["Trigger", "Enrich Data", "Route", "Notify"];
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-[11px] text-gold">
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="h-8 w-px bg-white/15" />}
          </div>
          <div className="mb-2 flex-1 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] text-text-light/85">
            {step}
          </div>
        </div>
      ))}
    </div>
  );
}

function RecommendationsPreview() {
  const items = [
    { name: "Onyx Desk Lamp", match: "94% match" },
    { name: "Marble Coaster Set", match: "88% match" },
    { name: "Linen Throw", match: "81% match" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md border border-white/10 bg-white/5" />
            <span className="text-[13px] text-text-light/90">{item.name}</span>
          </div>
          <span className="text-[11px] tracking-wide text-gold">{item.match}</span>
        </div>
      ))}
    </div>
  );
}

function DocumentPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
        <div className="mb-3 h-2.5 w-3/4 rounded bg-white/15" />
        <div className="mb-2 h-2 w-full rounded bg-white/10" />
        <div className="mb-2 h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-2/3 rounded bg-white/10" />
      </div>
      <div className="flex flex-wrap gap-2">
        {["Invoice #", "Total", "Due Date"].map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-[11px] text-gold"
          >
            <Check size={11} /> {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SupportPreview() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-text-muted">
          <User size={13} />
        </div>
        <div className="rounded-lg rounded-tl-none bg-white/[0.06] px-4 py-2.5 text-[13px] text-text-light/90">
          I can&rsquo;t reset my password.
        </div>
      </div>
      <div className="flex items-start justify-end gap-2.5">
        <div className="max-w-[80%] rounded-lg rounded-tr-none border border-gold/30 bg-gold/[0.08] px-4 py-2.5 text-[13px] text-text-light/90">
          Sending a reset link to your inbox now.
        </div>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
          <Bot size={13} />
        </div>
      </div>
      <div className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Resolved in 42s
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  const bars = [40, 65, 50, 80, 60, 92, 70];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end gap-2.5" style={{ height: 110 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-gold/20 to-gold/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[12px] text-text-muted">
        <span>Weekly signal</span>
        <span className="text-gold">+18.4%</span>
      </div>
    </div>
  );
}

const PREVIEWS = {
  chat: ChatPreview,
  workflow: WorkflowPreview,
  recommendations: RecommendationsPreview,
  document: DocumentPreview,
  support: SupportPreview,
  analytics: AnalyticsPreview,
};

export default function CapabilityPreview({ capability }) {
  const PreviewBody = PREVIEWS[capability.preview];

  return (
    <div className="flex h-full flex-col justify-between border border-white/10 bg-ink-soft p-7 transition-colors duration-500 md:p-8">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.14em] uppercase text-gold">
            {capability.number} {capability.title}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10.5px] tracking-wide text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live Preview
          </span>
        </div>

        <h3 className="mb-7 font-display text-2xl font-semibold leading-snug text-text-light">
          {capability.previewHeading}
        </h3>

        <div key={capability.id} className="animate-fade-up">
          <PreviewBody />
        </div>
      </div>
    </div>
  );
}
