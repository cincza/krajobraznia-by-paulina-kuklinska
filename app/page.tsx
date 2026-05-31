import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projektowanie ogrodów",
  description:
    "Krajobraźnia by Paulina Kuklińska to pracownia projektowania ogrodów dla klientów z województwa podlaskiego i warmińsko-mazurskiego oraz całoroczna pielęgnacja ogrodów w okolicach Augustowa.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection compact summaryParagraphCount={1} ctaLabel="Zobacz więcej" />
      <ProjectsSection
        compact
        featuredOnly
        showCta
        ctaLabel="Zobacz więcej"
      />
      <ServicesSection compact limit={3} showCta ctaLabel="Zobacz więcej" />
      <ContactSection
        compact
        dense
        showPageCta
        pageCtaLabel="Pełny kontakt"
        compactMessage="Telefon jest najszybszą formą kontaktu. Na osobnej podstronie czekają pełne dane kontaktowe oraz szybkie linki do Instagrama i Facebooka."
      />
    </>
  );
}
