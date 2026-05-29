"use client";

import { useState } from "react";
import { useLang, T, t } from "./lang";
import { engine } from "./content";

export default function ImaginedRealities() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr]">
      {/* the ladder: gossip → fiction → cooperation */}
      <div>
        <span className="label-mono">{lang === "zh" ? "从八卦到合作" : "Gossip to cooperation"}</span>
        <div className="mt-4 space-y-3">
          {engine.ladder.map((step, i) => (
            <div key={i} className="flex items-stretch gap-3">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ochre-400/50 font-mono text-xs text-ochre-300">
                  {i + 1}
                </span>
                {i < engine.ladder.length - 1 && <span className="my-1 w-px flex-1 bg-gradient-to-b from-ochre-400/50 to-oxide-400/20" />}
              </div>
              <div className="panel mb-1 flex-1 rounded-xl p-4">
                <h4 className="display text-lg text-ochre-200">
                  <T v={step.step} />
                </h4>
                <p className="mt-1 text-[0.86rem] leading-relaxed text-bone-200">
                  <T v={step.body} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* the fictions */}
      <div>
        <span className="label-mono">{t(engine.fictionsTitle, lang)}</span>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {engine.fictions.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl border px-2 py-4 text-center transition ${
                active === i ? "border-oxide-400/60 bg-oxide-500/12" : "border-bone-700/40 hover:border-ember-500/40"
              }`}
            >
              <div className={`zh text-lg ${active === i ? "text-oxide-200" : "text-bone-100"}`}>{f.zh}</div>
              <div className="mt-0.5 font-mono text-[0.55rem] uppercase tracking-wider text-bone-500">{f.en}</div>
            </button>
          ))}
        </div>
        <div key={active} className="panel-oxide lang-fade mt-3 rounded-xl p-5">
          <div className="flex items-baseline gap-2.5">
            <span className="zh text-xl text-oxide-200">{engine.fictions[active].zh}</span>
            <span className="serif text-sm text-bone-200">{engine.fictions[active].en}</span>
          </div>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-bone-100">
            <T v={engine.fictions[active].note} />
          </p>
        </div>
        <p className="mt-4 text-[0.85rem] italic leading-relaxed text-bone-300">
          <T v={engine.fictionsNote} />
        </p>
      </div>
    </div>
  );
}
