import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Wordmark from "@/components/Wordmark";
import {
  ABOUT,
  ARCHIVE,
  BUY,
  CARE,
  CEO,
  CLOSE,
  CONTACT,
  DEMOCRATIZATION,
  HERO,
  HERITAGE,
  HISTORY,
  SITE,
  STORY,
} from "@/lib/site";

const external = { target: "_blank", rel: "noopener noreferrer" };

function contactHref(kind: (typeof CONTACT.items)[number]["href"]) {
  if (kind === "store") return SITE.smartStoreUrl;
  if (kind === "blog") return SITE.blogUrl;
  if (kind === "purchase") return `tel:${SITE.phones.purchase}`;
  return `tel:${SITE.phones.service}`;
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section id="top" className="relative min-h-[88svh] overflow-hidden bg-purple-deep text-white md:min-h-[100svh]">
          <Image src="/images/hero-living.jpg" alt={HERO.imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
          <div className="hero-veil absolute inset-0" />
          <div className="grain absolute inset-0 opacity-35" />
          <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:min-h-[100svh] md:justify-center md:px-8 md:pb-24">
            <p className="section-label fade-up !text-cyan-soft">{HERO.eyebrow}</p>
            <Wordmark size="hero" showKo className="fade-up-delay mt-5" />
            <h1 className="fade-up-delay-2 mt-8 max-w-xl font-display text-3xl leading-snug text-white md:text-5xl">
              {SITE.thesis}
            </h1>
            <p className="fade-up-delay-2 mt-4 max-w-md text-base text-white/75">{HERO.support}</p>
            <div className="fade-up-delay-2 mt-9 flex flex-wrap gap-3">
              <a href={SITE.smartStoreUrl} {...external} className="rounded-sm bg-cyan px-6 py-3 text-sm font-bold text-purple-deep transition hover:bg-cyan-soft">
                {HERO.ctaPrimary}
              </a>
              <a href="#about" className="rounded-sm border border-white/35 px-6 py-3 text-sm font-medium transition hover:border-cyan-soft hover:text-cyan-soft">
                {HERO.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-paper px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">{ABOUT.label}</p>
            <div className="brand-rule mt-4" />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <h2 className="font-display whitespace-pre-line text-3xl leading-snug text-ink md:text-5xl">{ABOUT.headline}</h2>
              <p className="self-end text-base leading-relaxed text-muted md:text-lg">{ABOUT.body}</p>
            </div>
            <div className="mt-14 grid gap-8 border-t border-stone-deep pt-10 md:grid-cols-3">
              {ABOUT.pillars.map((item) => (
                <article key={item.title} className="reveal">
                  <h3 className="text-sm font-bold tracking-[0.14em] text-purple">{item.title}</h3>
                  <p className="mt-3 text-lg text-ink-soft md:text-xl">{item.body}</p>
                </article>
              ))}
            </div>
            <blockquote className="reveal mt-14 border-l-2 border-cyan pl-6">
              <p className="max-w-3xl text-lg leading-relaxed text-ink-soft md:text-xl">
                {DEMOCRATIZATION.quote}
              </p>
              <footer className="mt-3 text-sm text-muted">
                {"\u2014"} {DEMOCRATIZATION.source} ({DEMOCRATIZATION.sourceDate})
              </footer>
            </blockquote>
          </div>
        </section>

        <section id="care" className="bg-purple px-5 py-20 text-white md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label !text-cyan-soft">{CARE.label}</p>
            <div className="brand-rule mt-4" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-14">
              <h2 className="font-display whitespace-pre-line text-3xl leading-snug md:text-5xl">{CARE.headline}</h2>
              <p className="self-end text-base text-white/75">{CARE.body}</p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {CARE.methods.map((method, i) => (
                <article key={method.title} className="reveal border-t border-cyan/40 pt-5">
                  <p className="text-xs font-bold tracking-[0.18em] text-cyan-soft">0{i + 1}</p>
                  <h3 className="font-display mt-3 text-2xl">{method.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{method.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="buy" className="bg-stone px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <p className="section-label">{BUY.label}</p>
              <div className="brand-rule mt-4" />
              <h2 className="font-display mt-8 text-3xl text-ink md:text-5xl">{BUY.headline}</h2>
              <p className="mt-5 max-w-lg text-base text-muted">{BUY.body}</p>
            </div>
            <div className="reveal border-l border-purple/25 pl-7 md:pl-10">
              <div className="flex flex-wrap gap-2">
                {BUY.pills.map((pill) => (
                  <span key={pill} className="border border-purple/25 px-3 py-1.5 text-xs font-semibold tracking-wide text-purple">
                    {pill}
                  </span>
                ))}
              </div>
              <a href={SITE.smartStoreUrl} {...external} className="mt-8 inline-flex rounded-sm bg-purple px-6 py-3.5 text-sm font-bold text-white transition hover:bg-purple-deep">
                {BUY.cta}
              </a>
            </div>
          </div>
        </section>

        <section id="story" className="bg-paper px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">{STORY.label}</p>
            <div className="brand-rule mt-4" />
            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-3xl text-ink md:text-5xl">{STORY.headline}</h2>
              <p className="max-w-md text-sm text-muted md:text-base">{STORY.body}</p>
            </div>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {HERITAGE.map((item) => (
                <li key={item.year} className="reveal border-t border-purple/30 pt-4">
                  <p className="text-xs font-bold tracking-[0.16em] text-cyan">{item.year}</p>
                  <h3 className="mt-2 font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ol>
            <blockquote className="reveal mt-16 border-l-2 border-cyan pl-6">
              <p className="max-w-3xl text-lg leading-relaxed text-ink-soft md:text-xl">{CEO.quote}</p>
              <footer className="mt-3 text-sm text-muted">
                {"\u2014"} {CEO.name} {CEO.title}, {CEO.source}
              </footer>
            </blockquote>
          </div>
        </section>

        <section id="archive" className="bg-stone px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">{ARCHIVE.label}</p>
            <div className="brand-rule mt-4" />
            <h2 className="font-display mt-8 text-3xl text-ink md:text-4xl">{ARCHIVE.headline}</h2>
            <p className="mt-3 text-muted">{ARCHIVE.body}</p>
            <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {HISTORY.map((item) => (
                <article key={item.id} className="reveal group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <Image src={item.image} alt={`${item.nameKo} ${item.code}`} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-purple">{ARCHIVE.ended}</p>
                  <h3 className="font-display mt-1 text-xl text-ink">
                    {item.nameKo} <span className="text-sm text-muted">{item.code}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-paper px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">{CONTACT.label}</p>
            <div className="brand-rule mt-4" />
            <h2 className="font-display mt-8 text-3xl text-ink md:text-4xl">{CONTACT.headline}</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {CONTACT.items.map((item) => (
                <a key={item.title} href={contactHref(item.href)} {...(item.href === "store" || item.href === "blog" ? external : {})} className="reveal border-t border-stone-deep pt-5 transition hover:border-purple">
                  <h3 className="text-sm font-bold tracking-[0.14em] text-purple">{item.title}</h3>
                  <p className="mt-3 text-base text-ink-soft">{item.body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="close" className="bg-purple-deep px-5 py-20 text-white md:px-8 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Wordmark size="lg" showKo />
            <p className="section-label mt-8 !text-cyan-soft">{CLOSE.label}</p>
            <h2 className="font-display mt-4 whitespace-pre-line text-3xl leading-snug md:text-5xl">{CLOSE.headline}</h2>
            <p className="mx-auto mt-5 max-w-md text-sm text-white/70">{CLOSE.body}</p>
            <a href={SITE.smartStoreUrl} {...external} className="mt-9 inline-flex rounded-sm bg-cyan px-7 py-3.5 text-sm font-bold text-purple-deep transition hover:bg-cyan-soft">
              {CLOSE.cta}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
