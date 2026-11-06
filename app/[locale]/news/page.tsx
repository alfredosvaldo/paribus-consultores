import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, siteContent } from "@/content/site-content";
import { isIndexable } from "@/lib/site-config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { news } = siteContent[locale];

  return {
    title: `${news.title} | Paribus`,
    description: news.intro,
    alternates: isIndexable ? { canonical: `/${locale}/news`, languages: { es: "/es/news", en: "/en/news" } } : undefined,
    robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false, noarchive: true },
  };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = siteContent[locale];
  const { news } = content;
  const formatDate = new Intl.DateTimeFormat(locale === "es" ? "es-CL" : "en-GB", { dateStyle: "long", timeZone: "UTC" });

  return (
    <>
      <a className="skip-link" href="#main-content">{content.accessibility.skip}</a>
      <div className="page-top">
        <SiteHeader locale={content.locale} nav={content.nav} languageLabel={content.languageLabel} accessibility={content.accessibility} />
      </div>
      <main id="main-content" className="news section-light">
        <div className="news-layout frame">
          <div className="section-heading">
            <h1>{news.title}</h1>
            <p className="news-intro">{news.intro}</p>
          </div>
          {news.items.length ? (
            <ol className="news-list">
              {news.items.map((item) => (
                <li key={item.date + item.title}>
                  <article className="news-item">
                    <time dateTime={item.date}>{formatDate.format(new Date(item.date))}</time>
                    <h2>{item.href ? <a href={item.href}>{item.title}</a> : item.title}</h2>
                    <p>{item.summary}</p>
                    {item.links && (
                      <p className="news-links">
                        {item.links.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        ))}
                      </p>
                    )}
                    {item.video && (
                      <figure className="news-video">
                        <div className="news-video-frame">
                          <iframe
                            src={item.video.embedUrl}
                            title={item.video.title}
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allow="encrypted-media; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <figcaption>
                          {item.video.credit} · <a href={item.video.fallbackHref} target="_blank" rel="noopener noreferrer">{item.video.fallbackLabel}</a>
                        </figcaption>
                      </figure>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          ) : (
            <p className="news-empty">{news.empty}</p>
          )}
        </div>
      </main>
      <SiteFooter footer={content.footer} />
    </>
  );
}
