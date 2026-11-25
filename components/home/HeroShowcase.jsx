import Image from "next/image";

/**
 * The Deltrons hero showcase visual — laptop + mobile + plant composition,
 * supplied as a transparent PNG. Rendered with no rectangular container so
 * the dark hero background shows through, with a soft gold ambient glow
 * and a slow, cinematic float loop.
 */
export default function HeroShowcase() {
  return (
    <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:max-w-none lg:translate-x-4 xl:translate-x-8">
      {/* Soft gold ambient glow behind the device composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="h-[65%] w-[65%] animate-glow-pulse rounded-full bg-gold/25 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full animate-float">
        <Image
          src="/images/hero/deltrons-showcase.png"
          alt="Deltrons website showcased on a laptop and mobile device"
          width={1647}
          height={955}
          priority
          sizes="(min-width: 1280px) 620px, (min-width: 1024px) 520px, (min-width: 640px) 480px, 92vw"
          className="h-auto w-full object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  );
}
