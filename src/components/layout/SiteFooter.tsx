import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-soft py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <a className="flex flex-col text-xs font-bold uppercase" href="#home">
            Crystal Kizor
            <span className="mt-1 text-[9px] font-normal text-muted">Architecture · Ideas · Impact</span>
          </a>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
            <a className="hover:text-clay" href="#work">Work</a>
            <a className="hover:text-clay" href="#ecosystem">Ecosystem</a>
            <a className="hover:text-clay" href="#ideas">Ideas</a>
            <a className="hover:text-clay" href="#about">About</a>
            <a className="hover:text-clay" href="#contact">Contact</a>
          </nav>
          <a className="inline-flex items-center gap-2 text-xs hover:text-clay" href="#home">
            Back to top <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <p className="m-0 w-full border-t border-line pt-4 text-[10px] text-muted sm:text-right">
            © 2026 Crystal Kizor
          </p>
        </div>
      </Container>
    </footer>
  );
}
