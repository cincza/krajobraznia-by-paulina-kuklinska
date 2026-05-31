import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig, socialLinks } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

type QuickContactCtaCardProps = {
  className?: string;
  compact?: boolean;
};

export function QuickContactCtaCard({
  className,
  compact = false,
}: QuickContactCtaCardProps) {
  return (
    <FadeIn
      className={cn(
        "rounded-[34px] border border-border-muted bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(251,247,239,0.92))] shadow-[0_24px_60px_rgba(18,28,21,0.08)]",
        compact ? "p-4 sm:p-5" : "p-5 sm:p-8",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col lg:flex-row lg:items-end lg:justify-between",
          compact ? "gap-3.5" : "gap-5",
        )}
      >
        <div className="max-w-2xl space-y-2.5 sm:space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-olive">
            Szybki kontakt
          </p>
          <h2
            className={cn(
              "font-display leading-none text-forest",
              compact ? "text-[1.7rem] sm:text-[2.35rem]" : "text-[2rem] sm:text-[3rem]",
            )}
          >
            Masz pytania dotyczące swojego ogrodu?
          </h2>
          <p
            className={cn(
              "max-w-xl text-sm text-anthracite/76 sm:text-base",
              compact ? "leading-6" : "leading-6 sm:leading-7",
            )}
          >
            Skontaktuj się i umów konsultację. Najszybciej będzie zadzwonić, a
            Instagram i Facebook są zawsze pod ręką.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-end">
          <ButtonLink
            href={siteConfig.phoneHref}
            variant="primary"
            aria-label={`Zadzwoń do ${siteConfig.companyName}: ${siteConfig.phone}`}
          >
            Zadzwoń
          </ButtonLink>

          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-muted bg-white px-4 text-center text-[0.75rem] font-medium uppercase tracking-[0.16em] text-forest transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/18 hover:bg-surface sm:min-h-12 sm:px-6 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

type QuickContactCtaSectionProps = {
  sectionId?: string;
};

export function QuickContactCtaSection({
  sectionId = "kontakt-cta",
}: QuickContactCtaSectionProps) {
  return (
    <section
      id={sectionId}
      className="scroll-mt-28 bg-background py-8 sm:py-12"
    >
      <Container>
        <QuickContactCtaCard />
      </Container>
    </section>
  );
}
