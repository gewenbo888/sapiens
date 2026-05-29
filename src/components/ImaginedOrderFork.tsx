"use client";

import { useLang, T, t } from "./lang";
import { imaginedOrder } from "./content";

export default function ImaginedOrderFork() {
  const { lang } = useLang();

  const Col = ({
    data,
    tone,
  }: {
    data: { head: { en: string; zh: string }; when: { en: string; zh: string }; claim: { en: string; zh: string }; points: { en: string; zh: string }[] };
    tone: "oxide" | "dusk";
  }) => {
    const c =
      tone === "oxide"
        ? { border: "border-oxide-400/35", head: "text-oxide-200", dot: "bg-oxide-400", chip: "bg-oxide-500/14 text-oxide-200" }
        : { border: "border-dusk-400/35", head: "text-dusk-200", dot: "bg-dusk-400", chip: "bg-dusk-500/14 text-dusk-200" };
    return (
      <div className={`panel rounded-2xl border ${c.border} p-6`}>
        <span className={`inline-block rounded-full px-2.5 py-0.5 text-[0.62rem] ${c.chip}`}>{t(data.when, lang)}</span>
        <h4 className={`display mt-3 text-2xl ${c.head}`}>
          <T v={data.head} />
        </h4>
        <p className="mt-1 text-[0.95rem] italic text-bone-200">
          <T v={data.claim} />
        </p>
        <ul className="mt-4 space-y-2.5">
          {data.points.map((p, i) => (
            <li key={i} className="flex gap-2.5 text-[0.86rem] leading-relaxed text-bone-200">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
              <T v={p} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
        <Col data={imaginedOrder.left} tone="oxide" />
        <div className="flex items-center justify-center">
          <div className="stencil-ring flex h-14 w-14 items-center justify-center rounded-full font-mono text-xs">
            {lang === "zh" ? "想象" : "myth"}
          </div>
        </div>
        <Col data={imaginedOrder.right} tone="dusk" />
      </div>
      <div className="mt-6 panel-oxide rounded-2xl p-6">
        <span className="label-mono text-ochre-300">{lang === "zh" ? "赫拉利的要点" : "Harari's point"}</span>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-bone-100">
          <T v={imaginedOrder.verdict} />
        </p>
      </div>
    </div>
  );
}
