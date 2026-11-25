import MediaPlaceholder from "./MediaPlaceholder";

export default function PortfolioCard({ project }) {
  const { name, category } = project;

  return (
    <div className="group flex flex-col gap-5">
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-105">
          <MediaPlaceholder
            aspectRatio="4/3"
            label={category}
            className="transition-[border-color] duration-300 group-hover:border-gold/50"
          />
        </div>
      </div>
      <div className="flex items-baseline justify-between border-t border-white/10 pt-4">
        <h3 className="font-display text-xl font-semibold text-text-light">
          {name}
        </h3>
        <span className="text-[12px] tracking-[0.08em] uppercase text-text-muted">
          {category}
        </span>
      </div>
    </div>
  );
}
