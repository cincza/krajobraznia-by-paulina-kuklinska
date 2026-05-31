import { AboutSection } from "@/components/sections/about-section";
import { ProcessSection } from "@/components/sections/process-section";
import { QuickContactCtaSection } from "@/components/sections/quick-contact-cta";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "O pracowni",
  description:
    "Poznaj Paulinę Kuklińską i pracownię Krajobraźnia: ponad 10 lat doświadczenia, projektowanie ogrodów naturalistycznych i formalnych oraz praktyczne podejście do zieleni.",
  path: "/o-pracowni",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O pracowni"
        title="Doświadczenie, praktyka i spokojne podejście do projektowania ogrodów"
        image="/images/projects/ogrody-naturalistyczne/wa0100.jpg"
        imageAlt="Naturalistyczna kompozycja z trawami ozdobnymi i hortensjami przy leśnej działce"
        imagePosition="50% 48%"
      />
      <AboutSection detailed showCta={false} />
      <ProcessSection />
      <QuickContactCtaSection sectionId="kontakt-o-pracowni" />
    </>
  );
}
