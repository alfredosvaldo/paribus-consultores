import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BrandLockup } from "@/components/BrandLockup";
import { HeroVideo } from "@/components/HeroVideo";
import { PracticeVisual } from "@/components/PracticeVisual";
import { SiteHeader } from "@/components/SiteHeader";
import { contactEmail, isLocale, siteContent } from "@/content/site-content";
import { configuredSiteUrl, isIndexable } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = siteContent[locale];
  const path = `/${locale}`;

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    applicationName: "Paribus",
    category: "consulting",
    alternates: isIndexable
      ? { canonical: path, languages: { es: "/es", en: "/en", "x-default": "/es" } }
      : undefined,
    openGraph: {
      type: "website",
      siteName: "Paribus",
      title: content.metadata.ogTitle,
      description: content.metadata.description,
      url: isIndexable ? path : undefined,
      locale: locale === "es" ? "es_CL" : "en_GB",
      alternateLocale: locale === "es" ? ["en_GB"] : ["es_CL"],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.ogTitle,
      description: content.metadata.description,
    },
    robots: isIndexable
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = siteContent[locale];
  const verifiedFounderDetails = content.founder.details.filter((detail) => detail.verified);
  const founderPortrait = content.founder.portrait;

  return (
    <>
      <a className="skip-link" href="#main-content">{content.accessibility.skip}</a>
      <main id="main-content">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <HeroVideo />
          <SiteHeader locale={content.locale} nav={content.nav} languageLabel={content.languageLabel} accessibility={content.accessibility} />
          <div className="hero-content frame">
            <p className="descriptor">{content.hero.descriptor}</p>
            <h1 id="hero-title">{content.hero.title}</h1>
            <p className="hero-body">{content.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-light" href="#areas">{content.hero.primaryCta}</a>
              <a className="text-link" href={`mailto:${contactEmail}`}>{content.hero.secondaryCta}</a>
            </div>
          </div>
        </section>

        <section className="statement section-light" aria-labelledby="statement-title">
          <div className="statement-grid frame">
            <h2 id="statement-title">{content.statement.title}</h2>
            <div className="statement-copy"><p>{content.statement.body}</p></div>
          </div>
        </section>

        <section className="practices section-light" id="areas" aria-labelledby="practices-title">
          <div className="practices-layout frame">
            <div className="section-heading"><h2 id="practices-title">{content.practices.title}</h2></div>
            <div className="practice-list">
              {content.practices.items.map((item) => (
                <article className="practice-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <PracticeVisual kind={item.visual} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="founder section-light" id="jorge-valverde" aria-labelledby="founder-title">
          <div className="founder-grid frame">
            {founderPortrait.src && founderPortrait.verified ? (
              <div className="founder-portrait">
                <Image
                  src={founderPortrait.src}
                  alt={founderPortrait.alt ?? content.founder.name}
                  width={820}
                  height={1220}
                  sizes="(max-width: 640px) 68vw, (max-width: 1100px) 36vw, 460px"
                />
              </div>
            ) : null}
            <div className="founder-content">
              <h2 id="founder-title">{content.founder.name}</h2>
              <p className="founder-role">{content.founder.role}</p>
              {verifiedFounderDetails.map((detail) => <p key={detail.body} className="founder-detail">{detail.body}</p>)}
            </div>
          </div>
        </section>

        <section className="contact section-contact" id="contacto" aria-labelledby="contact-title">
          <div className="contact-grid frame">
            <div className="contact-heading"><h2 id="contact-title">{content.contact.title}</h2><p>{content.contact.body}</p></div>
            <a className="button button-light" href={`mailto:${contactEmail}`}>{content.contact.emailCta}</a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-grid frame">
          <div><p className="footer-brand"><BrandLockup showDescriptor={false} /></p><p>{content.footer.descriptor}</p></div>
          <p>© {new Date().getFullYear()} paribus</p>
        </div>
      </footer>
      {configuredSiteUrl ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Paribus",
              url: `${configuredSiteUrl}/${locale}`,
            }).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
    </>
  );
}
