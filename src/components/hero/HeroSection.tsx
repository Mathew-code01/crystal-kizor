import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pt-20" id="home">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel>Architect · Designer · Entrepreneur</SectionLabel>
          <p className="m-0 text-xs text-muted">Building ideas into meaningful impact.</p>
        </div>
        <div className="grid items-center gap-10 border-b border-line pb-12 pt-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-16 md:pt-16">
          <div>
            <h1 className="m-0 max-w-[11ch] font-serif text-6xl font-normal leading-[0.94] text-ink sm:text-7xl lg:text-8xl xl:text-9xl" id="hero-title">
              Designing <em className="text-clay">better</em> ways to live.
            </h1>
            <div className="mt-8 flex flex-col items-start gap-6 sm:mt-10">
              <p className="m-0 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Exploring the relationship between the spaces we inhabit, the ideas we share, and the communities we shape.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a className="inline-flex min-h-11 shrink-0 items-center gap-4 border-b border-ink text-xs font-semibold transition-colors hover:border-clay hover:text-clay" href="#work">
                  Explore the work <ArrowUpRight aria-hidden="true" size={16} />
                </a>
                <a className="inline-flex min-h-11 shrink-0 items-center gap-4 border-b border-line text-xs font-semibold text-muted transition-colors hover:border-olive hover:text-olive" href="#ecosystem">
                  Explore the ecosystem <ArrowDown aria-hidden="true" size={14} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden bg-soft sm:min-h-[30rem] lg:min-h-[37rem]">
            <Image
              alt="Crystal Kizor in her architecture studio, surrounded by drawings and material references."
              className="absolute inset-0 size-full object-cover object-[center_38%]"
              fill
              priority
              sizes="(min-width: 768px) 44vw, 100vw"
              src="/images/crystal/hero-portrait.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" aria-hidden="true" />
            <p className="absolute bottom-4 left-4 m-0 text-[10px] font-semibold uppercase text-white sm:bottom-6 sm:left-6">Crystal Kizor · Architect, designer, entrepreneur</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 pt-5 text-[10px] uppercase text-muted">
          <span>A practice beyond boundaries</span>
          <a className="inline-flex items-center gap-2 hover:text-clay" href="#perspective">
            <span>Scroll to discover</span>
            <ArrowDown aria-hidden="true" size={14} />
          </a>{" "}
        </div>{" "}
      </Container>
    </section>
  );
}
