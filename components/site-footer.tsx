import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { contactLinks, siteConfig, socialLinks } from "@/data/siteConfig";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-forest text-surface">
      <Container className="grid gap-7 py-9 sm:py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex">
            <Image
              src={siteConfig.logoFullPath}
              alt={`${siteConfig.companyName} logo`}
              width={220}
              height={220}
              className="h-auto w-[148px] rounded-[24px] border border-white/10 bg-[#f1e8d7] p-2 shadow-[0_24px_60px_rgba(10,18,13,0.22)] sm:w-[188px] sm:rounded-[28px]"
            />
          </Link>
          <p className="max-w-md text-sm leading-6 text-surface/74">
            Spokojne projekty ogrodów, naturalne kompozycje roślin i praktyczne
            wsparcie w pielęgnacji zieleni od pierwszej rozmowy po dalszą opiekę
            nad ogrodem.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
            Strony
          </p>
          <div className="flex flex-col gap-3 text-sm text-surface/78">
            {siteConfig.pageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
            Kontakt
          </p>
          <div className="flex flex-col gap-3 text-sm text-surface/78">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  item.kind === "phone"
                    ? "rounded-sm font-semibold text-white hover:text-white"
                    : "rounded-sm hover:text-white"
                }
              >
                {item.value}
              </a>
            ))}
            <p>{siteConfig.location}</p>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
