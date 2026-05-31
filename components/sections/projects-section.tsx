import { ProjectGallery } from "@/components/projects/project-gallery";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

type ProjectsSectionProps = {
  limit?: number;
  sectionId?: string;
  showCta?: boolean;
  ctaLabel?: string;
  featuredOnly?: boolean;
  compact?: boolean;
};

export function ProjectsSection({
  limit,
  sectionId = "realizacje",
  showCta = false,
  ctaLabel = "Zobacz więcej",
  featuredOnly = false,
  compact = false,
}: ProjectsSectionProps) {
  const visibleProjects = featuredOnly
    ? projects.filter((project) => project.featuredOnHome)
    : projects;

  return (
    <section
      id={sectionId}
      className={`scroll-mt-28 bg-[linear-gradient(180deg,#efe7da_0%,#f6f2e8_46%,#f6f2e8_100%)] ${compact ? "py-14 sm:py-16 lg:py-20" : "py-20 sm:py-24 lg:py-28"}`}
    >
      <Container className={compact ? "space-y-8" : "space-y-12"}>
        <SectionHeading
          eyebrow="Realizacje"
          title="Wybrane realizacje ogrodów, nasadzeń i uporządkowanych stref przydomowych"
          description={
            compact
              ? "Na stronie głównej pokazujemy tylko najlepsze kadry. Pełna galeria czeka na osobnej podstronie realizacji."
              : "Na stronie głównej pokazujemy tylko najmocniejsze kadry. Pełna galeria zdjęć znajduje się na osobnej podstronie realizacji."
          }
        />

        <ProjectGallery
          projects={visibleProjects}
          limit={limit}
          showCta={showCta}
          ctaLabel={ctaLabel}
          showFilters={!compact}
          cardVariant={compact ? "compact" : "default"}
        />
      </Container>
    </section>
  );
}
