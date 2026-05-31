import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Opinie klientów"
          title="Sekcja z miejscem na spokojne, wiarygodne rekomendacje"
          description="Na tym etapie wykorzystuje placeholdery, ale układ jest gotowy na autentyczne cytaty, nazwiska i lokalizacje inwestycji."
          centered
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.id}
              delay={0.08 * index}
              className="rounded-[28px] border border-border-muted bg-white/78 p-7 shadow-[0_20px_46px_rgba(18,28,21,0.06)]"
            >
              <p className="font-display text-5xl leading-none text-gold">
                &rdquo;
              </p>
              <p className="mt-4 text-base leading-8 text-anthracite/78">
                {testimonial.quote}
              </p>
              <div className="mt-8 border-t border-border-muted pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest">
                  {testimonial.name}
                </p>
                <p className="mt-2 text-sm text-anthracite/62">
                  {testimonial.location}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
