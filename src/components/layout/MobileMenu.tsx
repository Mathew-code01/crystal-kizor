"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="grid size-11 place-items-center border border-line transition-colors hover:border-ink"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>
      <div
        className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(20rem,calc(100vw-2.5rem))] border border-line bg-paper p-5 shadow-xl"
        hidden={!isOpen}
        id="mobile-navigation"
      >
          <p className="mb-4 text-[10px] font-semibold uppercase text-muted">Explore</p>
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigationItems.map((item, index) => (
              <a
                className="flex min-h-12 items-center gap-4 border-t border-line text-sm hover:text-clay"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                <span className="w-6 text-xs text-muted">0{index + 1}</span>
                <span className="flex-1">{item.label}</span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ))}
            <a
              className="mt-4 inline-flex min-h-12 items-center justify-between border-t border-ink text-sm font-semibold"
              href="#contact"
              onClick={closeMenu}
            >
              Start a conversation
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>{" "}
          </nav>
      </div>
    </div>
  );
}
