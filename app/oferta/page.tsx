import { ContactSection } from "@/components/sections/contact-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Oferta",
  description:
    "Pełna oferta pracowni Krajobraźnia: projektowanie ogrodów, nasadzenia, pielęgnacja, przycinanie roślin oraz konsultacje i orientacyjna wycena.",
  path: "/oferta",
});

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta"
        title="Pełna oferta projektowa i pielęgnacyjna w jednym miejscu"
        image="/images/projects/ogrody-formalne/wa0044.jpg"
        imageAlt="Formalny ogród z centralną kompozycją i geometrycznym układem ścieżek"
        imagePosition="50% 56%"
      />
      <ServicesSection detailed showCta={false} />
      <ProcessSection />
      <ContactSection sectionId="kontakt-oferta" />
    </>
  );
}
