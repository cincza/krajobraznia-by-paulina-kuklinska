"use client";

import { useEffect, useId, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig, socialLinks } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  items: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const shouldRestoreFocusRef = useRef(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

    if (isOpen) {
      const focusFrame = window.requestAnimationFrame(() => {
        firstMenuLinkRef.current?.focus();
      });

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "Escape") {
          return;
        }

        event.preventDefault();
        shouldRestoreFocusRef.current = true;
        setIsOpen(false);
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        window.cancelAnimationFrame(focusFrame);
        document.body.style.overflow = previousOverflow;
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    if (shouldRestoreFocusRef.current) {
      shouldRestoreFocusRef.current = false;
      window.requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border-muted bg-white/80 text-forest transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span
            className={cn(
              "block h-px w-5 bg-current transition-transform duration-300",
              isOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-current transition-opacity duration-300",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-current transition-transform duration-300",
              isOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-4 top-[84px] z-50 max-h-[calc(100dvh-110px)] overflow-y-auto rounded-[28px] border border-border-muted bg-surface p-5 shadow-[0_30px_80px_rgba(20,28,23,0.18)]"
          >
            <nav className="flex flex-col gap-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  ref={item === items[0] ? firstMenuLinkRef : undefined}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center rounded-2xl border border-transparent px-4 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-forest transition-colors hover:border-border-muted hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <ButtonLink
              href={siteConfig.phoneHref}
              variant="primary"
              className="mt-5 w-full"
              aria-label={`Zadzwoń do ${siteConfig.companyName}: ${siteConfig.phone}`}
              onClick={() => setIsOpen(false)}
            >
              Zadzwoń teraz
            </ButtonLink>

            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-11 items-center rounded-full border border-border-muted bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest/20 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
