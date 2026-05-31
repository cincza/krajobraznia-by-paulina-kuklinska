import { ProjectsPortfolioGallery } from "@/components/projects/projects-portfolio-gallery";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export function ProjectsPortfolioSection() {
  return (
    <section
      id="portfolio-realizacje"
      className="scroll-mt-28 bg-[linear-gradient(180deg,#efe7da_0%,#f4ede0_44%,#f4ede0_100%)] py-16 sm:py-20 lg:py-24"
    >
      <Container className="space-y-8 sm:space-y-10">
        <div className="max-w-lg space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-olive">
            {"Portfolio"}
          </p>
          <h2 className="font-display text-[2.45rem] leading-none text-forest sm:text-[3.7rem]">
            {"Realizacje"}
          </h2>
          <p className="text-sm leading-7 text-anthracite/74 sm:text-base">
            {"Kliknij zdj\u0119cie, aby powi\u0119kszy\u0107."}
          </p>
        </div>

        <ProjectsPortfolioGallery projects={projects} />
      </Container>
    </section>
  );
}
