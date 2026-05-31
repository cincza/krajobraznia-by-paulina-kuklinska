import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

type ServicesSectionProps = {
  detailed?: boolean;
  showCta?: boolean;
  sectionId?: string;
  limit?: number;
  ctaHref?: string;
  ctaLabel?: string;
  compact?: boolean;
};

export function ServicesSection({
  detailed = false,
  showCta = true,
  sectionId = "oferta",
  limit,
  ctaHref = "/oferta",
  ctaLabel = "Zobacz więcej",
  compact = false,
}: ServicesSectionProps) {
  const visibleServices = services.slice(0, limit ?? services.length);

  return (
    <section
      id={sectionId}
      className={`scroll-mt-28 bg-background ${compact ? "py-12 sm:py-16 lg:py-20" : "py-16 sm:py-24 lg:py-28"}`}
    >
      <Container className={compact ? "space-y-7 sm:space-y-8" : "space-y-8 sm:space-y-12"}>
        <div
          className={`flex flex-col ${compact ? "gap-4" : "gap-6 sm:gap-8"} lg:flex-row lg:items-end lg:justify-between`}
        >
          <SectionHeading
            eyebrow="Oferta"
            title="Usługi projektowe i pielęgnacyjne dopasowane do charakteru ogrodu"
            description={
              compact
                ? "Projekt ogrodu, nasadzenia i późniejsza opieka w jednym miejscu."
                : "Sekcja przedstawia rzeczywisty zakres współpracy: od projektu i nasadzeń po całoroczną opiekę nad ogrodem oraz wstępną wycenę."
            }
          />

          {showCta ? (
            <ButtonLink href={ctaHref} variant="primary">
              {ctaLabel}
            </ButtonLink>
          ) : null}
        </div>

        <div
          className={`grid ${compact ? "gap-3.5" : "gap-4 sm:gap-5"} md:grid-cols-2 xl:grid-cols-3`}
        >
          {visibleServices.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={0.06 * index}
              className={`group rounded-[28px] border border-border-muted bg-white/76 shadow-[0_18px_55px_rgba(20,28,23,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-forest/10 hover:shadow-[0_24px_60px_rgba(20,28,23,0.10)] ${compact ? "p-4.5 sm:p-5" : "p-5 sm:p-7"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {service.number}
                  </p>
                  <h3
                    className={`font-display leading-tight text-forest ${compact ? "mt-2.5 text-[1.5rem] sm:text-[1.6rem]" : "mt-3 text-[1.65rem] sm:mt-4 sm:text-[1.9rem]"}`}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>
              <p
                className={`text-anthracite/76 ${compact ? "mt-3 text-sm leading-6 sm:text-[0.94rem]" : "mt-4 text-sm leading-6 sm:mt-5 sm:text-base sm:leading-7"}`}
              >
                {service.description}
              </p>

              {detailed ? (
                <ul className="mt-5 space-y-2.5 border-t border-border-muted pt-5 text-sm leading-6 text-anthracite/72 sm:mt-6 sm:space-y-3 sm:pt-6 sm:leading-7">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
