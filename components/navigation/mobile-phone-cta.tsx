import { siteConfig } from "@/data/siteConfig";

const mobilePhoneCtaLabel = "Zadzwoń teraz";

export function MobilePhoneCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2">
        <a
          href={siteConfig.phoneHref}
          aria-label={`${mobilePhoneCtaLabel} pod numer ${siteConfig.phone}`}
          className="pointer-events-auto mx-auto flex h-[var(--mobile-phone-cta-height)] w-full max-w-[1280px] items-center justify-center rounded-full bg-forest px-5 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(19,29,23,0.24)] transition-all duration-300 hover:bg-forest-soft active:scale-[0.99]"
        >
          {mobilePhoneCtaLabel}
        </a>
      </div>
    </div>
  );
}
