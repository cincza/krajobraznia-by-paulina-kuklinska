"use client";

import { useEffect, useEffectEvent, useId, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import type { Project } from "@/data/projects";

type ProjectsLightboxProps = {
  projects: Project[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

const overlayTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
} as const;

const navButtonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/10 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

export function ProjectsLightbox({
  projects,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: ProjectsLightboxProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeProject = activeIndex === null ? null : projects[activeIndex];

  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (!activeProject) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      onNext();
    }
  });

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <AnimatePresence>
      {activeProject ? (
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
          className="fixed inset-0 z-[80] bg-[rgba(15,22,18,0.78)] backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={overlayTransition}
              className="relative w-full max-w-[1320px] rounded-[32px] border border-white/10 bg-[rgba(15,22,18,0.92)] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.36)] sm:p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 z-10 inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-[rgba(15,22,18,0.82)] px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:bg-[rgba(22,31,26,0.94)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-4 sm:top-4"
              >
                {"Zamknij"}
              </button>

              <div className="relative overflow-hidden rounded-[26px] bg-[rgba(255,255,255,0.04)]">
                <Image
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  width={activeProject.imageWidth}
                  height={activeProject.imageHeight}
                  sizes="(max-width: 768px) calc(100vw - 2rem), 88vw"
                  className="h-auto max-h-[70dvh] w-full object-contain sm:max-h-[78vh]"
                />

                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between p-3 sm:flex">
                  <button
                    type="button"
                    onClick={onPrevious}
                    className={`${navButtonClass} pointer-events-auto`}
                    aria-label={"Poprzednie zdj\u0119cie"}
                  >
                    {"Poprzednie"}
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className={`${navButtonClass} pointer-events-auto`}
                    aria-label={"Nast\u0119pne zdj\u0119cie"}
                  >
                    {"Nast\u0119pne"}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-1 pt-4 sm:flex-row sm:items-end sm:justify-between sm:px-2">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sand">
                    {activeProject.category}
                  </span>
                  <h2
                    id={titleId}
                    className="font-display text-[2rem] leading-none text-white sm:text-[2.5rem]"
                  >
                    {activeProject.title}
                  </h2>
                </div>

                <div className="flex gap-3 sm:hidden">
                  <button
                    type="button"
                    onClick={onPrevious}
                    className={`${navButtonClass} flex-1`}
                    aria-label={"Poprzednie zdj\u0119cie"}
                  >
                    {"Poprzednie"}
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className={`${navButtonClass} flex-1`}
                    aria-label={"Nast\u0119pne zdj\u0119cie"}
                  >
                    {"Nast\u0119pne"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
