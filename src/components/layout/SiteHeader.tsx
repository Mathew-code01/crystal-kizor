import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { navigationItems } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-line bg-paper/95">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-16">
        <a aria-label="Crystal Kizor home" className="flex items-center gap-3" href="#home">
          <Image
            alt=""
            className="h-10 w-[62px] mix-blend-multiply"
            height={40}
            src="/logos/crystal-kizor-monogram.webp"
            width={62}
          />
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-bold uppercase">Crystal Kizor</span>
            <span className="mt-1 text-[9px] uppercase text-muted">
              Architecture · Ideas · Impact
            </span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              className="text-xs text-muted transition-colors hover:text-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="hidden items-center gap-2 border-b border-ink pb-1 text-xs font-semibold transition-colors hover:border-clay hover:text-clay md:inline-flex" href="#contact">
          <span>Let&apos;s talk</span>
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
