"use client";

import { useState } from "react";
import { useLang, T, t } from "./lang";
import { revolutions } from "./content";

const ACC: Record<string, { text: string; border: string; chip: string; dot: string; bar: string }> = {
  oxide: { text: "text-oxide-300", border: "border-oxide-400/40", chip: "bg-oxide-500/14 text-oxide-200", dot: "bg-oxide-400", bar: "from-oxide-500" },
  sage: { text: "text-sage-300", border: "border-sage-400/40", chip: "bg-sage-500/14 text-sage-300", dot: "bg-sage-400", bar: "from-sage-500" },
  ember: { text: "text-ember-300", border: "border-ember-400/40", chip: "bg-ember-500/14 text-ember-300", dot: "bg-ember-400", bar: "from-ember-500" },
  dusk: { text: "text-dusk-300", border: "border-dusk-400/40", chip: "bg-dusk-500/14 text-dusk-300", dot: "bg-dusk-400", bar: "from-dusk-500" },
};

export default function FourRevolutions() {
  const { lang } = useLang();
  const [open, setOpen] = useState<string>("cognitive");

  return (
    <div className="space-y-4">
      {revolutions.map((r, i) => {
        const c = ACC[r.accent];
        const isOpen = open === r.id;
        return (
          <section
            key={r.id}
            id={r.id}
            className={`panel scroll-mt-24 overflow-hidden rounded-2xl transition ${isOpen ? c.border : ""}`}
          >
            <button onClick={() => setOpen(isOpen ? "" : r.id)} className="flex w-full items-center gap-5 px-6 py-5 text-left">
              <span className={`display text-4xl ${c.text} opacity-80 sm:text-5xl`}>{`0${i + 1}`}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="label-mono">{t(r.n, lang)}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[0.62rem] ${c.chip}`}>{t(r.era, lang)}</span>
                </div>
                <h3 className="zh display mt-1 text-2xl text-bone-50 sm:text-3xl">
                  <T v={r.title} />
                </h3>
              </div>
              <span className={`text-2xl ${c.text} transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>

            <div className="grid transition-all duration-500" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
              <div className="overflow-hidden">
                <div className="border-t border-bone-700/40 px-6 py-6">
                  <p className="max-w-3xl text-[1rem] leading-relaxed text-bone-100">
                    <T v={r.thesis} />
                  </p>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <span className="label-mono">{lang === "zh" ? "核心观念" : "Key ideas"}</span>
                      <ul className="mt-3 space-y-2.5">
                        {r.ideas.map((idea, j) => (
                          <li key={j} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-bone-200">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
                            <T v={idea} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="label-mono">{lang === "zh" ? "本部章节" : "Chapters"}</span>
                      <ol className="mt-3 space-y-1.5">
                        {r.chapters.map((ch, j) => (
                          <li key={j} className="border-b border-bone-700/30 py-1.5 text-[0.86rem] text-bone-200">
                            <T v={ch} />
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
