import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/navigation/mobile-menu";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/siteConfig";

const brandByline = siteConfig.companyName.replace(
  `${siteConfig.shortName} `,
  "",
);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-muted bg-background/[0.84] backdrop-blur-xl">
      <Container className="relative flex min-h-[76px] items-center justify-between gap-3 sm:min-h-[84px] sm:gap-6">
        <Link
          href="/"
          className="flex min-w-0 max-w-[calc(100%-3.75rem)] items-center gap-2.5 sm:max-w-none sm:gap-4"
        >
          <Image
            src={siteConfig.logoPath}
            alt={`${siteConfig.companyName} sygnet`}
            width={52}
            height={52}
            className="h-10 w-10 shrink-0 rounded-[16px] border border-border-muted bg-[#f1e8d7] object-cover shadow-[0_16px_30px_rgba(28,46,36,0.08)] sm:h-14 sm:w-14 sm:rounded-[18px]"
            priority
          />
          <div className="min-w-0">
            <p className="truncate font-display text-[1.45rem] leading-none text-forest sm:text-[2rem]">
              {siteConfig.shortName}
            </p>
            <p className="hidden truncate text-[0.72rem] uppercase tracking-[0.22em] text-anthracite/64 sm:block sm:text-xs">
              {brandByline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-medium uppercase tracking-[0.17em] text-anthracite/78 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={siteConfig.phoneHref}
            variant="primary"
            className="whitespace-nowrap"
            aria-label={`Zadzwoń do ${siteConfig.companyName}: ${siteConfig.phone}`}
          >
            {siteConfig.phone}
          </ButtonLink>
        </div>

        <MobileMenu items={siteConfig.navigation} />
      </Container>
    </header>
  );
}
