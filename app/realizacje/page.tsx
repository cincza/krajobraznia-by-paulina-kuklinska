import { ContactSection } from "@/components/sections/contact-section";
import { ProjectsPortfolioSection } from "@/components/sections/projects-portfolio-section";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Realizacje",
  description:
    "Galeria zrealizowanych ogrodów, nasadzeń i uporządkowanych stref wejściowych pracowni Krajobraźnia by Paulina Kuklińska.",
  path: "/realizacje",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Realizacje"
        title="Pełna galeria zrealizowanych ogrodów i nasadzeń"
        image="/images/projects/ogrody-formalne/wa0096.jpg"
        imageAlt="Drewniany dom z reprezentacyjnymi nasadzeniami z traw ozdobnych i hortensji"
      />
      <ProjectsPortfolioSection />
      <ContactSection
        sectionId="kontakt-realizacje"
        compact
        showPageCta
        pageCtaLabel="Pełny kontakt"
      />
    </>
  );
}
