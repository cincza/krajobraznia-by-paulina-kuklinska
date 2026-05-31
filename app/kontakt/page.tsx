import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontakt z pracownią Krajobraźnia: telefon, e-mail, Facebook, Instagram oraz formularz kontaktowy dla klientów zainteresowanych projektem lub pielęgnacją ogrodu.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Telefon, e-mail i wygodny start rozmowy o ogrodzie"
        image="/images/projects/ogrody-przydomowe/wa0012.jpg"
        imageAlt="Ogród przydomowy z trawnikiem, warzywnikiem i uporządkowanymi rabatami"
        imagePosition="50% 44%"
      />
      <ContactSection sectionId="kontakt-strona" />
    </>
  );
}
