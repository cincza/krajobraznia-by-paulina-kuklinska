import Image from "next/image";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/hero/hero-garden-desktop.jpg",
  imageAlt = "Rabata ogrodowa przy nowoczesnym domu z trawami ozdobnymi i kwitnącymi bylinami",
  imagePosition = "50% 50%",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest pb-10 pt-20 text-surface sm:pb-20 sm:pt-32">
      <Image
        fill
        priority
        src={image}
        alt={imageAlt}
        className="object-cover"
        sizes="100vw"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,33,27,0.92),rgba(22,33,27,0.7),rgba(22,33,27,0.88))]" />
      <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-gold/18 blur-3xl" />
      <div className="absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-olive/22 blur-3xl" />

      <Container className="relative z-10">
        <FadeIn className={description ? "max-w-3xl space-y-5" : "max-w-3xl space-y-3"}>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sand">
            {eyebrow}
          </p>
          <h1 className="text-balance font-display text-[2.45rem] leading-none sm:text-6xl lg:text-[4.75rem]">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-[0.95rem] leading-7 text-surface/78 sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
