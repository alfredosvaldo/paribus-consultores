"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BrandLockup } from "@/components/BrandLockup";
import type { SiteContent } from "@/content/site-content";

type SiteHeaderProps = Pick<SiteContent, "locale" | "nav" | "languageLabel" | "accessibility">;

export function SiteHeader({ locale, nav, languageLabel, accessibility }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const alternateLocale = locale === "es" ? "en" : "es";

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const switchLanguage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    router.push(`/${alternateLocale}${window.location.hash}`);
  };

  return (
    <header className="site-header frame">
      <a className="wordmark" href="#inicio" aria-label={accessibility.home}>
        <BrandLockup />
      </a>
      <nav className="desktop-nav" aria-label={accessibility.mainNav}>
        <div className="nav-links">
          {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
      </nav>
      <div className="header-actions">
        <a className="language-link" href={`/${alternateLocale}`} aria-describedby="language-switch-description" onClick={switchLanguage}>
          <span className={locale === "es" ? "active" : undefined}>ES</span>
          <span aria-hidden="true">/</span>
          <span className={locale === "en" ? "active" : undefined}>EN</span>
        </a>
        <span className="sr-only" id="language-switch-description">{languageLabel}</span>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? accessibility.menuClose : accessibility.menuOpen}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label={accessibility.mainNav} data-open={open}>
        <div className="mobile-nav-inner frame">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
