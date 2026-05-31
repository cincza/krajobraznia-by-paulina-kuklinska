import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent } from "@/data/about";
import { cn } from "@/lib/cn";

type AboutSectionProps = {
  detailed?: boolean;
  showCta?: boolean;
  sectionId?: string;
  ctaHref?: string;
  ctaLabel?: string;
  summaryParagraphCount?: number;
  compact?: boolean;
};

export function AboutSection({
  detailed = false,
  showCta = true,
  sectionId = "o-pracowni",
  ctaHref = "/o-pracowni",
  ctaLabel = "Zobacz więcej",
  summaryParagraphCount = 2,
  compact = false,
}: AboutSectionProps) {
  const paragraphs = detailed
    ? aboutContent.paragraphs
    : aboutContent.paragraphs.slice(0, summaryParagraphCount);

  return (
    <section
      id={sectionId}
      className={cn(
        "scroll-mt-28 bg-surface",
        compact ? "py-12 sm:py-16 lg:py-20" : "py-16 sm:py-24 lg:py-28",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
            compact ? "gap-6 lg:gap-8" : "gap-8 lg:gap-12",
          )}
        >
          <FadeIn>
            <div
              className={cn(
                "relative overflow-hidden rounded-[34px] border border-border-muted bg-[linear-gradient(160deg,rgba(255,252,245,0.92),rgba(225,218,198,0.62),rgba(143,147,113,0.18))] shadow-[0_18px_42px_rgba(18,28,21,0.06)]",
                compact ? "p-4 sm:p-5" : "p-4 sm:p-8",
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-forest/10 bg-white/36">
                <Image
                  fill
                  src={aboutContent.imageSrc}
                  alt={aboutContent.imageAlt}
                  sizes="(max-width: 1023px) min(100vw - 3rem, 720px), 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,28,23,0.04),rgba(20,28,23,0.16))]" />
              </div>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className={cn(compact ? "space-y-5 sm:space-y-6" : "space-y-6 sm:space-y-8")}
          >
            <SectionHeading
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
              description={paragraphs[0]}
            />

            <div
              className={cn(
                "text-base text-anthracite/78",
                compact
                  ? "space-y-3 leading-7 sm:text-[1rem]"
                  : "space-y-4 leading-7 sm:space-y-5 sm:leading-8 sm:text-lg",
              )}
            >
              {paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {showCta ? (
              <ButtonLink href={ctaHref} variant="primary">
                {ctaLabel}
              </ButtonLink>
            ) : null}
          </FadeIn>
        </div>

        <div
          className={cn(
            "grid gap-4 md:grid-cols-3",
            compact ? "mt-6 sm:mt-8" : "mt-8 sm:mt-12",
          )}
        >
          {aboutContent.highlights.map((highlight, index) => (
            <FadeIn
              key={highlight.title}
              delay={0.08 * index}
              className={cn(
                "rounded-[26px] border border-border-muted bg-white/72 shadow-[0_18px_42px_rgba(18,28,21,0.06)]",
                compact ? "p-4" : "p-5 sm:p-6",
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                0{index + 1}
              </p>
              <h3
                className={cn(
                  "leading-tight font-display text-forest",
                  compact ? "mt-2.5 text-[1.32rem]" : "mt-3 text-[1.42rem] sm:mt-4 sm:text-[1.55rem]",
                )}
              >
                {highlight.title}
              </h3>
              <p
                className={cn(
                  "text-sm text-anthracite/74",
                  compact ? "mt-2 leading-6" : "mt-2.5 leading-6 sm:mt-3 sm:leading-7",
                )}
              >
                {highlight.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
