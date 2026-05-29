"use client";

import { useState, useEffect, ReactNode } from "react";
import { LangProvider, LangToggle, useLang, T, t } from "./lang";
import { hero, engine, imaginedOrder, happiness, gilgamesh, timeline, partsIndex, about, nav } from "./content";
import ImaginedRealities from "./ImaginedRealities";
import FourRevolutions from "./FourRevolutions";
import ImaginedOrderFork from "./ImaginedOrderFork";

/* ── section shell ── */
function Section({
  id, kicker, title, intro, children,
}: { id: string; kicker?: { en: string; zh: string }; title?: { en: string; zh: string }; intro?: { en: string; zh: string }; children: ReactNode }) {
  const { lang } = useLang();
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
      {(kicker || title) && (
        <div className="mb-10 max-w-3xl">
          {kicker && <span className="label-mono">{t(kicker, lang)}</span>}
          {title && (
            <h2 className="display mt-3 text-3xl leading-tight text-bone-50 sm:text-5xl">
              <T v={title} />
            </h2>
          )}
          {intro && (
            <p className="mt-5 text-[1.02rem] leading-relaxed text-bone-300">
              <T v={intro} />
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

/* ── header ── */
function Header() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-ember-500/12 bg-night-950/85 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-oxide-500 text-bone-50">
            <HandGlyph className="h-4 w-4" />
          </span>
          <span className="display hidden text-lg text-bone-100 sm:inline">{lang === "zh" ? "人类简史" : "Sapiens"}</span>
        </a>
        <nav className="hidden items-center gap-4 lg:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-[0.78rem] text-bone-300 transition hover:text-ember-300">
              <T v={n.label} />
            </a>
          ))}
        </nav>
        <LangToggle />
      </div>
    </header>
  );
}

/* ── a cave hand-stencil glyph ── */
function HandGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <rect x="11" y="15" width="10" height="9" rx="3.4" />
      <rect x="11.3" y="8.5" width="2.3" height="9" rx="1.15" />
      <rect x="14.3" y="7" width="2.3" height="10.5" rx="1.15" />
      <rect x="17.3" y="7.6" width="2.3" height="10" rx="1.15" />
      <rect x="20" y="9.2" width="2.2" height="8.4" rx="1.1" />
      <rect x="8.4" y="14.2" width="2.2" height="6.4" rx="1.1" transform="rotate(28 9.5 17)" />
    </svg>
  );
}

/* ── hero ── */
function Hero() {
  const { lang } = useLang();
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden strata-bg px-5 pt-24 pb-16">
      {/* hand stencils on the cave wall */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <HandGlyph className="absolute right-[6%] top-[18%] h-40 w-40 text-oxide-500/10 sm:h-64 sm:w-64" />
        <HandGlyph className="absolute right-[22%] top-[42%] h-24 w-24 -scale-x-100 text-ochre-500/8 sm:h-36 sm:w-36" />
        <HandGlyph className="absolute right-[14%] bottom-[12%] h-20 w-20 text-oxide-500/8" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <span className="label-mono animate-fadeup">{t(hero.kicker, lang)}</span>
          <h1 className="mt-5 animate-fadeup">
            <span className="display block text-7xl leading-[0.92] text-bone-50 sm:text-9xl">{hero.titleEn}</span>
            <span className="zh mt-3 block text-4xl text-ochre-300 sm:text-6xl">{hero.titleZh}</span>
          </h1>
          <div className="mt-5 flex animate-fadeup items-center gap-3" style={{ animationDelay: "0.06s" }}>
            <span className="h-px w-10 bg-oxide-400/60" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-oxide-300">{t(hero.arc, lang)}</span>
          </div>

          <p className="mt-8 max-w-2xl animate-fadeup text-[1.05rem] leading-relaxed text-bone-200" style={{ animationDelay: "0.1s" }}>
            <T v={hero.lead} />
          </p>
          <p className="mt-5 max-w-2xl animate-fadeup border-l-2 border-oxide-500/60 pl-4 text-[1rem] italic leading-relaxed text-ember-200" style={{ animationDelay: "0.18s" }}>
            <T v={hero.standfirst} />
          </p>

          <div className="mt-9 flex flex-wrap gap-3 animate-fadeup" style={{ animationDelay: "0.26s" }}>
            <a href="#cognitive" className="rounded-full bg-oxide-500 px-6 py-2.5 text-sm font-medium text-bone-50 transition hover:bg-oxide-400">
              <T v={hero.cta1} />
            </a>
            <a href="#engine" className="rounded-full border border-ember-500/40 px-6 py-2.5 text-sm text-ember-200 transition hover:bg-ember-500/10">
              <T v={hero.cta2} />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ember-500/12 pt-6 sm:grid-cols-4">
            {hero.stats.map((s, i) => (
              <div key={i}>
                <dt className="font-mono text-[0.58rem] uppercase tracking-widest text-bone-500">{t(s.k, lang)}</dt>
                <dd className="mt-1 text-[0.92rem] text-ember-200">
                  <T v={s.v} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ── happiness ── */
function Happiness() {
  return (
    <Section id="happiness" kicker={{ en: "The forgotten question", zh: "被遗忘的问题" }} title={happiness.title} intro={happiness.lead}>
      <div className="grid gap-4 sm:grid-cols-2">
        {happiness.points.map((p, i) => (
          <div key={i} className="panel rounded-xl p-6">
            <span className="display text-3xl text-ember-300/60">{`0${i + 1}`}</span>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-bone-200">
              <T v={p} />
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── animal → god / gilgamesh ── */
function Gilgamesh() {
  const { lang } = useLang();
  return (
    <Section id="gilgamesh" kicker={{ en: "The end of Homo sapiens", zh: "智人末日" }} title={gilgamesh.title} intro={gilgamesh.lead}>
      <div className="grid gap-3 md:grid-cols-3">
        {gilgamesh.arc.map((a, i) => (
          <div key={i} className="relative panel rounded-xl p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ember-400/50 font-mono text-xs text-ember-300">{i + 1}</span>
              <span className="display text-xl text-ember-200">
                <T v={a.tag} />
              </span>
            </div>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-bone-200">
              <T v={a.body} />
            </p>
            {i < 2 && <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-ember-400/60 md:block">→</span>}
          </div>
        ))}
      </div>

      <div className="mt-6 panel-oxide rounded-2xl p-7">
        <h3 className="display text-2xl text-oxide-200">
          <T v={gilgamesh.project.head} />
        </h3>
        <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-bone-100">
          <T v={gilgamesh.project.body} />
        </p>
      </div>

      <blockquote className="mx-auto mt-12 max-w-3xl text-center">
        <p className="display text-2xl leading-snug text-bone-50 sm:text-[1.9rem]">
          <T v={gilgamesh.closer} />
        </p>
      </blockquote>
    </Section>
  );
}

/* ── timeline ── */
function Timeline() {
  const { lang } = useLang();
  return (
    <Section id="timeline" kicker={{ en: "History's timeline", zh: "历史年表" }} title={timeline.title} intro={timeline.sub}>
      <div className="relative ml-2 border-l border-ember-500/25 pl-8">
        {timeline.events.map((e, i) => {
          const hot = t(e.yr, lang) === "70,000" || t(e.yr, lang) === "7 万年";
          return (
            <div key={i} className="relative pb-7 last:pb-0">
              <span className="absolute -left-[38px] top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                <span className={`h-2.5 w-2.5 rounded-full ${hot ? "bg-oxide-400 shadow-glow" : "bg-ember-400/70"}`} />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                <span className={`min-w-[5.5rem] font-mono text-sm ${hot ? "text-oxide-300" : "text-ember-300"}`}>{t(e.yr, lang)}</span>
                <p className="text-[0.92rem] leading-relaxed text-bone-200">
                  <T v={e.t} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ── footer ── */
function Footer() {
  const { lang } = useLang();
  return (
    <footer id="about" className="border-t border-ember-500/12 bg-night-950/60 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <span className="label-mono">{t(about.title, lang)}</span>
        <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-bone-200">
          <T v={about.body} />
        </p>
        <p className="mt-4 max-w-3xl text-[0.82rem] leading-relaxed text-bone-500">
          <T v={about.note} />
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ember-500/10 pt-6">
          <span className="zh text-sm text-ochre-300">人类简史 · 从动物到上帝</span>
          <a href="https://psyverse.fun" className="font-mono text-[0.7rem] text-bone-500 transition hover:text-ember-300">
            <T v={about.credit} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ── root ── */
export default function Sapiens() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />

        <Section id="engine" kicker={{ en: "Why us", zh: "为何是我们" }} title={engine.title} intro={engine.lead}>
          <ImaginedRealities />
        </Section>

        <Section id="revolutions" kicker={{ en: "The backbone", zh: "全书骨架" }} title={{ en: "Four revolutions", zh: "四场革命" }}
          intro={{ en: "The whole of human history, Harari argues, turns on four hinges. Open each to read its thesis, key ideas, and chapters.", zh: "赫拉利认为，整部人类史转动于四个枢纽之上。逐一展开，可读其论点、核心观念与章节。" }}>
          <FourRevolutions />
        </Section>

        <Section id="order" kicker={{ en: "Imagined order", zh: "想象的秩序" }} title={imaginedOrder.title} intro={imaginedOrder.lead}>
          <ImaginedOrderFork />
        </Section>

        <Happiness />
        <Gilgamesh />
        <Timeline />
      </main>
      <Footer />
    </LangProvider>
  );
}
