import { QuickContactCtaCard } from "@/components/sections/quick-contact-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactLinks, siteConfig, socialLinks } from "@/data/siteConfig";

type ContactSectionProps = {
  sectionId?: string;
  compact?: boolean;
  dense?: boolean;
  showPageCta?: boolean;
  pageCtaHref?: string;
  pageCtaLabel?: string;
  compactMessage?: string;
};

export function ContactSection({
  sectionId = "kontakt",
  compact = false,
  dense = false,
  showPageCta = false,
  pageCtaHref = "/kontakt",
  pageCtaLabel = "Pełny kontakt",
  compactMessage = "Telefon jest najszybszą formą kontaktu. Na osobnej podstronie czekają pełne dane kontaktowe oraz szybkie linki do Instagrama i Facebooka.",
}: ContactSectionProps) {
  return (
    <section
      id={sectionId}
      className={`scroll-mt-28 bg-background ${dense ? "py-12 sm:py-16 lg:py-20" : "py-16 sm:py-24 lg:py-28"}`}
    >
      <Container className={dense ? "space-y-3.5 sm:space-y-5" : "space-y-5 sm:space-y-8"}>
        <QuickContactCtaCard compact={dense} />

        <div className={`grid ${dense ? "gap-5" : "gap-7"} lg:grid-cols-[1.05fr_0.95fr]`}>
          <FadeIn
            className={`rounded-[34px] border border-border-muted bg-white/78 shadow-[0_24px_60px_rgba(18,28,21,0.08)] ${dense ? "p-4 sm:p-5" : "p-5 sm:p-8"}`}
          >
            <SectionHeading
              eyebrow="Kontakt"
              title="Miejsce na pierwszą rozmowę o przyszłym ogrodzie"
              description={siteConfig.contactIntro}
            />

            {compact ? (
              <div className={dense ? "mt-4 space-y-3" : "mt-6 space-y-4"}>
                <p className="max-w-xl text-sm leading-7 text-anthracite/72 sm:text-base">
                  {compactMessage}
                </p>
                {showPageCta ? (
                  <ButtonLink href={pageCtaHref} variant="primary">
                    {pageCtaLabel}
                  </ButtonLink>
                ) : null}
              </div>
            ) : (
              <div className="mt-6 space-y-5">
                <p className="max-w-xl text-sm leading-7 text-anthracite/72 sm:text-base">
                  Wyślij zdjęcia działki oraz krótki opis inwestycji. Na podstawie
                  zdjęć i powierzchni działki mogę przygotować orientacyjne widełki
                  cenowe.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink
                    href={siteConfig.phoneHref}
                    variant="primary"
                    aria-label={`Zadzwoń do ${siteConfig.companyName}: ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </ButtonLink>
                  <a
                    href={siteConfig.emailHref}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-muted bg-white px-5 text-center text-[0.78rem] font-medium uppercase tracking-[0.16em] text-forest transition-colors hover:border-forest/20 hover:bg-surface"
                  >
                    E-mail
                  </a>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border border-border-muted bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:border-forest/20 hover:bg-surface"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {showPageCta ? (
                  <ButtonLink href={pageCtaHref} variant="primary">
                    {pageCtaLabel}
                  </ButtonLink>
                ) : null}
              </div>
            )}
          </FadeIn>

          <div className={dense ? "space-y-3" : "space-y-4"}>
            <FadeIn
              delay={0.1}
              className={`rounded-[34px] border border-border-muted bg-surface ${dense ? "p-4.5 sm:p-5" : "p-5 sm:p-7"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Dane kontaktowe
              </p>
              <div className="mt-5 space-y-3.5 text-base leading-7 text-anthracite/76 sm:mt-6 sm:space-y-4 sm:leading-8">
                {contactLinks.map((item) => (
                  <p key={item.label}>
                    {item.label}
                    <br />
                    <a
                      href={item.href}
                      className={
                        item.kind === "phone"
                          ? "text-lg font-semibold text-forest hover:text-olive"
                          : "text-forest hover:text-olive"
                      }
                    >
                      {item.value}
                    </a>
                  </p>
                ))}
                <p>
                  Lokalizacja
                  <br />
                  <span className="text-forest">{siteConfig.location}</span>
                </p>
              </div>

              <div className={dense ? "mt-5 flex flex-wrap gap-2.5" : "mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3"}>
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-border-muted bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:border-forest/20 hover:bg-surface"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn
              delay={0.16}
              className={`rounded-[34px] border border-dashed border-border-muted bg-white/56 ${dense ? "p-4.5 sm:p-5" : "p-5 sm:p-7"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Mapa / obszar działania
              </p>
              <div
                className={`mt-4 flex items-center justify-center rounded-[28px] border border-dashed border-border-muted bg-[linear-gradient(135deg,rgba(143,147,113,0.12),rgba(217,204,183,0.16))] px-5 text-center sm:mt-5 sm:px-6 ${dense ? "min-h-[160px] py-5" : "min-h-[220px] py-7 sm:min-h-[260px] sm:py-10"}`}
              >
                <div className="w-full max-w-md space-y-5 sm:space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/76">
                      Projektowanie ogrodów
                    </p>
                    <p className="text-sm leading-7 text-anthracite/64">
                      {siteConfig.serviceAreaDesign.join(", ")}
                    </p>
                  </div>
                  <div className="h-px bg-border-muted" />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/76">
                      Opieka nad ogrodem
                    </p>
                    <p className="text-sm leading-7 text-anthracite/64">
                      {siteConfig.serviceAreaCare.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
