import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, siteContent } from "@/content/site-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: `${siteContent[locale].productAreas.title} | Paribus` };
}

export default async function ExpertisePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = siteContent[locale];

  return (
    <>
      <main id="main-content">
        <section className="expertise-hero" aria-labelledby="expertise-title">
          <SiteHeader locale={content.locale} nav={content.nav} languageLabel={content.languageLabel} accessibility={content.accessibility} />
          <div className="frame expertise-intro">
            <p className="descriptor">Paribus</p>
            <h1 id="expertise-title">{content.productAreas.title}</h1>
            <p className="expertise-intro-copy">{content.productAreasIntro}</p>
          </div>
        </section>
        <section className="practices section-light expertise-list" aria-label={content.productAreas.title}>
          <div className="practices-layout frame">
            <div className="section-heading"><h2>{locale === "es" ? "Cómo podemos ayudar" : "How we can help"}</h2></div>
            <div className="practice-list">
              {content.productAreas.areas.map((area) => (
                <article className={`practice-area practice-area-${area.accent}`} key={area.title}>
                  <h3>{area.title}</h3>
                  <ul>{area.products.map((product) => <li key={product}>{product}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter footer={content.footer} />
    </>
  );
}
