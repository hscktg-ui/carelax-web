import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CEO,
  COMPANY,
  DEMOCRATIZATION,
  HERITAGE,
  METHODS,
  NEED_GROUPS,
  PHILOSOPHY,
  POSITION,
  PRODUCTS,
  SITE,
  TRUST,
} from "@/lib/site";

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      <Header />
      <main id="main">
        {/* 1. Hero ? brand first (anti-promo clutter) */}
        <section id="top" className="relative min-h-[100svh] overflow-hidden bg-purple-deep text-white">
          <Image
            src="/images/hero-living.jpg"
            alt="???? ??? ?? ???? ????? ????"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-veil absolute inset-0" />
          <div className="grain absolute inset-0 opacity-40" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-20">
            <p className="section-label fade-up">{SITE.positioning}</p>
            <div className="fade-up-delay mt-5">
              <Image
                src="/brand/logo-on-dark.png"
                alt="Carelax"
                width={420}
                height={117}
                className="h-14 w-auto md:h-20"
                priority
              />
            </div>
            <p className="fade-up-delay mt-3 text-lg tracking-[0.28em] text-cyan-soft md:text-xl">
              {SITE.nameKo}
            </p>
            <p className="fade-up-delay-2 mt-6 max-w-md text-base leading-relaxed text-white/90 md:text-lg">
              {SITE.tagline}.
              <br />
              ??? ???, ??? ???? ??? ????.
            </p>
            <div className="fade-up-delay-2 mt-9 flex flex-wrap items-center gap-3">
              <a
                href={SITE.flagshipProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-cyan px-6 py-3 text-sm font-bold tracking-wide text-purple-deep transition hover:bg-cyan-soft"
              >
                ?? ?? ??
              </a>
              <a
                href="#company"
                className="rounded-sm border border-white/35 px-6 py-3 text-sm font-medium tracking-wide text-stone transition hover:border-cyan-soft hover:text-cyan-soft"
              >
                ? ??????
              </a>
            </div>
          </div>
        </section>

        {/* 2. Position ? market coordinate */}
        <section id="company" className="bg-paper px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">{COMPANY.label}</p>
            <div className="brand-rule mt-4" />
            <h2 className="font-display mt-6 max-w-4xl whitespace-pre-line text-3xl leading-snug text-ink md:text-5xl">
              {COMPANY.headline}
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {COMPANY.intro}
            </p>

            <div className="mt-16 space-y-14 md:space-y-20">
              {COMPANY.chapters.map((chapter, i) => (
                <article
                  key={chapter.title}
                  className="grid gap-4 border-t border-stone-deep pt-8 md:grid-cols-[7rem_1fr] md:gap-10"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-purple-soft">
                    0{i + 1}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                      {chapter.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <blockquote className="mt-14 border-l-2 border-cyan bg-stone/40 px-6 py-6 md:px-8">
              <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                “{DEMOCRATIZATION.quote}”
              </p>
              <footer className="mt-4 text-sm text-muted">
                — {CEO.name} {CEO.title} · {DEMOCRATIZATION.source} (
                {DEMOCRATIZATION.sourceDate})
              </footer>
            </blockquote>
          </div>
        </section>

        {/* 3. Philosophy */}
        <section id="philosophy" className="bg-stone px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="section-label">Brand Philosophy</p>
              <div className="brand-rule mt-4" />
              <h2 className="font-display mt-6 text-3xl leading-snug text-ink md:text-5xl">
                Care + Relax.
                <br />
                ??? ????.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                ????? ???? ??? ???? ???? ????, ??
                ?? ?? ??? ?? ?? ????? ???. ???? ??
                ??? ???.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
              {PHILOSOPHY.map((item, i) => (
                <article
                  key={item.key}
                  className="border-t border-stone-deep/70 pt-6"
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-purple-soft">
                    0{i + 1}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-ink md:text-3xl">
                    {item.key}
                  </h3>
                  <p className="mt-1 text-sm tracking-wide text-cyan">
                    {item.titleKo}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Method ? named tech language */}
        <section id="method" className="bg-purple text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <p className="section-label">Care Method</p>
            <div className="brand-rule mt-4" />
            <h2 className="font-display mt-6 max-w-2xl text-3xl leading-snug md:text-4xl">
              ??? ??? ????.
              <br />
              ??? ??? ???.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              ?? ???? ?? ???? ??, ????? ? ?? ??
              ??? ??? ??? ?????.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {METHODS.map((m) => (
                <article
                  key={m.code}
                  className="border border-cyan/25 bg-purple-deep/40 p-7"
                >
                  <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-cyan-soft">
                    {m.code}
                  </p>
                  <h3 className="font-display mt-3 text-2xl">{m.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Signature ? flagship first */}
        <section id="signature" className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2 md:items-stretch">
            <div className="relative min-h-[420px] md:min-h-[560px]">
              <Image
                src="/images/product-honors.jpg"
                alt="???? ???? ????"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-20">
              <p className="section-label">Signature</p>
              <div className="brand-rule mt-4" />
              <h2 className="font-display mt-6 text-3xl leading-snug text-ink md:text-4xl">
                ? ?? ????
                <br />
                ????? ????.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                ???? ?? ??, ?????? ?? ???? ?????
                ???? ??? ?? ?????. ??? ???? ???, ????
                ??? ?????.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink-soft">
                <li className="flex gap-3">
                  <span className="text-cyan">?</span>
                  Soft Mode ??? ?? ?? ???
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">?</span>
                  ??? ???? ????? ???
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">?</span>
                  ??? ?????? ?? ?? ??
                </li>
              </ul>
              <a
                href={SITE.flagshipProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit rounded-sm bg-purple px-6 py-3.5 text-sm font-semibold tracking-wide text-stone transition hover:bg-purple-deep"
              >
                ?? ?? ??? ??
              </a>
            </div>
          </div>
        </section>

        {/* 6. Lineup by need */}
        <section id="products" className="bg-stone px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Lineup by Need</p>
                <div className="brand-rule mt-4" />
                <h2 className="font-display mt-6 text-3xl text-ink md:text-5xl">
                  ??? ?? ??
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  ? ??? ???? ???? ????. ??�???�??�????
                  ??? ????.
                </p>
              </div>
              <a
                href={SITE.smartStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-sm bg-purple px-5 py-3 text-sm font-semibold tracking-wide text-stone transition hover:bg-purple-deep"
              >
                ?????? ??
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {NEED_GROUPS.map((g) => (
                <div
                  key={g.id}
                  className="border-t border-purple/30 bg-paper/60 px-4 py-5"
                >
                  <p className="text-sm font-semibold tracking-wide text-ink">
                    {g.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{g.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {featured.map((product) => (
                <article key={product.id} className="group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <Image
                      src={product.image}
                      alt={`${product.nameKo} ${product.code}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-purple-soft">
                      {product.needLabel} � {product.badge}
                    </p>
                    <h3 className="font-display mt-2 text-2xl text-ink">
                      {product.nameKo}{" "}
                      <span className="text-lg text-muted">{product.code}</span>
                    </h3>
                    <p className="mt-2 text-sm font-medium text-ink-soft">
                      {product.summary}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {product.detail}
                    </p>
                    <a
                      href={SITE.flagshipProductUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-semibold text-purple underline-offset-4 hover:underline"
                    >
                      ????? ?? ?
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {PRODUCTS.filter((p) => !p.featured).map((product) => (
                <article
                  key={product.id}
                  className="group border-t border-stone-deep pt-5"
                >
                  <div className="relative mb-4 aspect-square overflow-hidden bg-paper">
                    <Image
                      src={product.image}
                      alt={`${product.nameKo} ${product.code}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                  </div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-purple-soft">
                    {product.needLabel}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ink">
                    {product.nameKo}
                  </h3>
                  <p className="text-xs text-muted">{product.code}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {product.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Trust */}

        <section id="heritage" className="bg-paper px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Heritage</p>
            <div className="brand-rule mt-4" />
            <h2 className="font-display mt-6 text-3xl text-ink md:text-4xl">
              2007?? ??? ??,
              <br />
              2016?? ????.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              ?? ???? 1??? ????? ??? ?, ?????�??? ?? ??? ?? ????? ?? ???? ?????.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {HERITAGE.map((item) => (
                <article key={item.year} className="border-t border-purple/30 pt-5">
                  <p className="text-xs font-bold tracking-[0.18em] text-cyan">
                    {item.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <blockquote className="mt-14 border-l-2 border-purple bg-stone/50 px-6 py-6 md:px-8">
              <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                ?{CEO.quote}?
              </p>
              <footer className="mt-4 text-sm text-muted">
                ? {CEO.name} {CEO.title} � {CEO.source} ({CEO.sourceDate})
              </footer>
            </blockquote>
          </div>
        </section>

        <section id="support" className="bg-paper px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Trust & Care</p>
            <div className="brand-rule mt-4" />
            <h2 className="font-display mt-6 text-3xl text-ink md:text-4xl">
              ?? ? ?? ??? ????.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {TRUST.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-stone-deep pt-6"
                >
                  <h3 className="text-sm font-semibold tracking-[0.16em] text-cyan">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="relative overflow-hidden bg-purple-deep px-5 py-20 text-stone md:px-8 md:py-28">
          <div className="grain absolute inset-0 opacity-30" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="section-label">Buy on Smart Store</p>
            <h2 className="font-display mt-5 text-3xl md:text-5xl">
              ??? ???,
              <br />
              ??? ????????.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              ??? ??? ??, ????? ?????? ? ?? ???
              ??????.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE.flagshipProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-cyan px-7 py-3.5 text-sm font-bold tracking-wide text-purple-deep transition hover:bg-cyan-soft"
              >
                ?? ?? ??
              </a>
              <a
                href={SITE.smartStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-white/35 px-7 py-3.5 text-sm font-medium tracking-wide transition hover:border-cyan-soft hover:text-cyan-soft"
              >
                ??? ?
              </a>
              <a
                href={`tel:${SITE.phones.purchase}`}
                className="rounded-sm border border-white/35 px-7 py-3.5 text-sm font-medium tracking-wide transition hover:border-cyan-soft hover:text-cyan-soft"
              >
                ???? {SITE.phones.purchase}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
