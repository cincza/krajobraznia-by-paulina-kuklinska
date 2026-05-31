import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { heroProjectImage } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest pb-8 pt-10 text-surface sm:pb-14 sm:pt-16 lg:min-h-[660px] lg:pt-20">
      <Image
        fill
        priority
        src={heroProjectImage.src}
        alt={heroProjectImage.alt}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(21,31,24,0.92),rgba(21,31,24,0.56),rgba(21,31,24,0.72))]" />
      <div className="absolute -left-12 top-32 h-64 w-64 rounded-full bg-gold/18 blur-3xl" />
      <div className="absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-olive/24 blur-3xl" />

      <Container className="relative z-10 flex h-full items-end">
        <div className="grid w-full gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-10">
          <FadeIn className="max-w-4xl space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
                {siteConfig.hero.eyebrow}
              </p>
              <h1 className="text-balance font-display text-[2.45rem] leading-none sm:text-5xl md:text-6xl lg:text-[5rem]">
                {siteConfig.hero.title}
              </h1>
              <p className="max-w-2xl text-[0.95rem] leading-7 text-surface/80 sm:text-base sm:leading-7 lg:text-lg">
                {siteConfig.hero.description}
              </p>
            </div>

            <div className="flex max-w-xl flex-col gap-2 sm:flex-row">
              <ButtonLink
                href={siteConfig.phoneHref}
                variant="secondary"
                className="w-full sm:w-auto"
                aria-label={`Zadzwoń do ${siteConfig.companyName}: ${siteConfig.phone}`}
              >
                {siteConfig.hero.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink
                href="/realizacje"
                variant="outline"
                className="w-full sm:w-auto"
              >
                {siteConfig.hero.secondaryCtaLabel}
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 border-t border-white/10 pt-3 text-sm leading-6 text-surface/78">
              {siteConfig.hero.ctaHighlights.map((item) => (
                <span key={item} className="max-w-full">
                  {"\u2022"} {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            delay={0.14}
            className="rounded-[28px] border border-white/12 bg-white/10 p-4 backdrop-blur-md sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sand">
              Obszar działania
            </p>
            <p className="mt-2.5 text-[0.95rem] leading-6 text-surface sm:text-lg sm:leading-7">
              {siteConfig.hero.locationLabel}
            </p>
            <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
              {siteConfig.hero.highlights.map((item) => (
                <div
                  key={item}
                  className="border-t border-white/10 pt-2.5 text-[0.88rem] leading-6 text-surface/74 sm:pt-3 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
