import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const { Icon, title, description, image } = service;

  return (
    <div className="group relative aspect-[4/5] w-full overflow-hidden border border-black/10 transition-colors duration-500 hover:border-gold/70">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Subtle dark overlay so the image reads consistently across all photos */}
      <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/35" />

      {/* Bottom gradient to keep the text readable */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

      {/* Small gold icon, upper-left */}
      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-black/20 text-gold backdrop-blur-sm">
        <Icon size={16} strokeWidth={1.6} />
      </div>

      {/* Content over the image, anchored to the bottom */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <h3 className="font-display text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="text-[13px] leading-relaxed text-white/75">
          {description}
        </p>
        <span className="mt-1 inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.08em] uppercase text-gold">
          Learn more
          <ArrowRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </div>
  );
}
