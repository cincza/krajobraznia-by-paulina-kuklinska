import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-olive">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-[2.15rem] leading-none text-forest sm:text-5xl lg:text-[3.7rem]">
        {title}
      </h2>
      <p className="text-[0.95rem] leading-7 text-anthracite/80 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
