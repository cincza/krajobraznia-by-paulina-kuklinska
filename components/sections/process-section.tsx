import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="proces"
      className="scroll-mt-28 bg-forest py-16 text-surface sm:py-24 lg:py-28"
    >
      <Container className="space-y-8 sm:space-y-12">
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sand">
            Proces współpracy
          </p>
          <h2 className="mt-4 text-balance font-display text-[2.35rem] leading-none sm:text-5xl lg:text-[3.7rem]">
            Spokojny i czytelny rytm pracy nad ogrodem
          </h2>
          <p className="mt-4 text-sm leading-7 text-surface/74 sm:text-lg sm:leading-8">
            Każdy etap ma osobne miejsce, dzięki czemu w kolejnych wersjach
            strony można łatwo dopisać zakres, terminy albo doprecyzować model
            współpracy.
          </p>
        </FadeIn>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeIn
              key={step.number}
              delay={0.05 * index}
              className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
                {step.number}
              </p>
              <h3 className="mt-3 text-[1.95rem] leading-none font-display text-white sm:mt-4 sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-surface/72 sm:mt-4 sm:text-base sm:leading-7">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
