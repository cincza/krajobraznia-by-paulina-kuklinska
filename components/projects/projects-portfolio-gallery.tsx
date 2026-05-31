"use client";

import { useState, useTransition } from "react";

import Image from "next/image";

import { ProjectsLightbox } from "@/components/projects/projects-lightbox";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectsPortfolioGalleryProps = {
  projects: Project[];
};

export function ProjectsPortfolioGallery({
  projects,
}: ProjectsPortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("Wszystkie");
  const [isPending, startTransition] = useTransition();
  const [lightboxProjects, setLightboxProjects] = useState<Project[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleProjects =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxProjects(visibleProjects);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxProjects([]);
  };

  const showPreviousProject = () => {
    setLightboxIndex((current) => {
      if (current === null || lightboxProjects.length === 0) {
        return current;
      }

      return current === 0 ? lightboxProjects.length - 1 : current - 1;
    });
  };

  const showNextProject = () => {
    setLightboxIndex((current) => {
      if (current === null || lightboxProjects.length === 0) {
        return current;
      }

      return current === lightboxProjects.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      <div className="space-y-8">
        <div className="-mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0">
          <div className="flex w-max gap-3 md:w-auto md:flex-wrap">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() =>
                    startTransition(() => {
                      setActiveCategory(category);
                    })
                  }
                  className={cn(
                    "min-h-11 whitespace-nowrap rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 sm:min-h-12 sm:px-5 sm:text-xs",
                    isActive
                      ? "border-forest bg-forest text-surface shadow-[0_20px_45px_rgba(28,46,36,0.16)]"
                      : "border-border-muted bg-white/76 text-anthracite/78 hover:border-forest/18 hover:bg-white",
                    isPending && "opacity-80",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {visibleProjects.length > 0 ? (
          <div className="columns-1 [column-gap:1rem] md:columns-2 md:[column-gap:1.25rem] xl:columns-3">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className="mb-4 break-inside-avoid sm:mb-5"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-haspopup="dialog"
                  aria-label={`Otw\u00f3rz zdj\u0119cie: ${project.title}`}
                  className="group block w-full cursor-zoom-in text-left"
                >
                  <article className="overflow-hidden rounded-[30px] border border-border-muted bg-white shadow-[0_24px_60px_rgba(18,28,21,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_30px_80px_rgba(18,28,21,0.12)]">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={project.imageWidth}
                        height={project.imageHeight}
                        sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc((100vw - 4.75rem) / 2), calc((100vw - 8rem) / 3)"
                        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(20,28,23,0.02),rgba(20,28,23,0.8))] p-5 text-surface sm:p-6">
                        <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sand backdrop-blur-sm">
                          {project.category}
                        </span>
                        <h3 className="mt-3 font-display text-[1.85rem] leading-none text-white sm:text-[2.2rem]">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </article>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-border-muted bg-white/76 p-8 text-sm leading-7 text-anthracite/74 shadow-[0_20px_55px_rgba(18,28,21,0.06)]">
            {"Brak zdj\u0119\u0107 w tej kategorii."}
          </div>
        )}
      </div>

      <ProjectsLightbox
        projects={lightboxProjects}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrevious={showPreviousProject}
        onNext={showNextProject}
      />
    </>
  );
}
