"use client";

import { useTransition, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectGalleryProps = {
  projects: Project[];
  limit?: number;
  showCta?: boolean;
  ctaLabel?: string;
  showFilters?: boolean;
  cardVariant?: "default" | "compact";
};

export function ProjectGallery({
  projects,
  limit,
  showCta = false,
  ctaLabel = "Zobacz więcej",
  showFilters = true,
  cardVariant = "default",
}: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("Wszystkie");
  const [isPending, startTransition] = useTransition();
  const isCompact = cardVariant === "compact";

  const availableCategories = projectCategories.filter(
    (category) =>
      category === "Wszystkie" ||
      projects.some((project) => project.category === category),
  );

  const visibleProjects = (
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((project) => project.category === activeCategory)
  ).slice(0, limit ?? projects.length);

  return (
    <div className={isCompact ? "space-y-6" : "space-y-10"}>
      {showFilters ? (
        <div className="flex flex-wrap gap-3">
          {availableCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  startTransition(() => {
                    setActiveCategory(category);
                  })
                }
                className={cn(
                  "min-h-12 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:px-5 sm:py-3 sm:tracking-[0.22em]",
                  isActive
                    ? "border-forest bg-forest text-surface"
                    : "border-border-muted bg-white/70 text-anthracite/78 hover:border-forest/22 hover:bg-white",
                  isPending && "opacity-80",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}

      <motion.div
        layout
        className={cn(
          "grid md:grid-cols-2 xl:grid-cols-3",
          isCompact ? "gap-4 xl:grid-cols-4" : "gap-6",
        )}
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const isFeatured = index === 0 && visibleProjects.length > 2;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group overflow-hidden rounded-[30px] border border-border-muted bg-white shadow-[0_24px_60px_rgba(18,28,21,0.08)]",
                  isFeatured && "md:col-span-2",
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    isFeatured
                      ? "aspect-[8/5]"
                      : isCompact
                        ? "aspect-[4/3]"
                        : "aspect-[4/5] sm:aspect-[5/4]",
                  )}
                >
                  <Image
                    fill
                    src={project.image}
                    alt={project.imageAlt}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={
                      isFeatured
                        ? isCompact
                          ? "(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw"
                          : "(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 66vw"
                        : isCompact
                          ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                          : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,28,22,0.08),rgba(19,28,22,0.7))]" />
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 text-surface",
                      isCompact
                        ? "space-y-2 p-4 sm:p-5"
                        : "space-y-3 p-6 sm:p-7",
                    )}
                  >
                    <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sand backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "font-display leading-none text-white",
                          isCompact
                            ? "text-[1.55rem] sm:text-[1.9rem]"
                            : "text-[1.9rem] sm:text-3xl",
                        )}
                      >
                        {project.title}
                      </h3>
                      {isCompact ? null : (
                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-surface/68">
                          {project.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {isCompact ? null : (
                  <div className="p-6 sm:p-7">
                    <p className="text-sm leading-7 text-anthracite/76 sm:text-base">
                      {project.description}
                    </p>
                  </div>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {showCta ? (
        <div className={cn("flex justify-center", isCompact ? "pt-0" : "pt-2")}>
          <ButtonLink href="/realizacje" variant="primary">
            {ctaLabel}
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
