"use client";

import { useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || open;
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-purple-deep/95 text-white backdrop-blur-md shadow-[0_1px_0_rgba(0,174,189,0.25)]" : "text-white"}`}>
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
      <a href="#top" aria-label={`${SITE.nameKo} 처음으로`}><Wordmark size="sm" /></a>
      <nav className="hidden items-center gap-5 md:flex" aria-label="주요 탐색">
        {NAV.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-white/85 transition hover:text-cyan-soft">{link.label}</a>)}
        <a href={SITE.smartStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-cyan px-4 py-2 text-sm font-bold text-purple-deep transition hover:bg-cyan-soft">구매</a>
      </nav>
      <button type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} className="flex h-10 w-10 items-center justify-center md:hidden" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">메뉴</span><span className="flex w-5 flex-col gap-1.5"><span className={`h-px bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} /><span className={`h-px bg-current transition ${open ? "opacity-0" : ""}`} /><span className={`h-px bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} /></span>
      </button>
    </div>
    {open && <div className="border-t border-cyan/20 bg-purple-deep px-5 py-6 md:hidden"><nav className="flex flex-col gap-4" aria-label="모바일 탐색">
      {NAV.map((link) => <a key={link.href} href={link.href} className="text-base font-medium" onClick={() => setOpen(false)}>{link.label}</a>)}
      <a href={SITE.smartStoreUrl} target="_blank" rel="noopener noreferrer" className="mt-2 w-fit rounded-sm bg-cyan px-4 py-2 text-sm font-bold text-purple-deep">구매</a>
    </nav></div>}
  </header>;
}