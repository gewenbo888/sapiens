import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const TITLE_EN =
  "Sapiens · From Animals into Gods — A Bilingual Reading of Yuval Noah Harari's Brief History of Humankind";
const TITLE_ZH = "人类简史 · 从动物到上帝";
const DESC =
  "A bilingual reading companion to Yuval Noah Harari's 《人类简史：从动物到上帝》 (Sapiens). Seventy thousand years ago Homo sapiens was an unremarkable African ape; today it stands on the verge of godhood. This site retells the four revolutions that made us — the Cognitive Revolution and the power of shared fictions, the Agricultural Revolution and its luxury trap, the unification of humankind through money, empire and religion, and the Scientific Revolution born from the admission of ignorance — closing on the Gilgamesh Project and the question of what kind of god a dissatisfied, irresponsible Sapiens will become.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sapiens.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "Sapiens", "Yuval Noah Harari", "Homo sapiens", "Brief History of Humankind",
    "Cognitive Revolution", "Agricultural Revolution", "Scientific Revolution",
    "imagined order", "shared fiction", "intersubjective reality", "gossip theory",
    "Tree of Knowledge", "money", "empire", "religion", "capitalism", "Industrial Revolution",
    "happiness", "Gilgamesh Project", "intelligent design", "cyborg", "deep history",
    "human evolution", "Neanderthal", "megafauna extinction", "Hammurabi", "patriarchy",
    "人类简史", "从动物到上帝", "尤瓦尔·赫拉利", "赫拉利", "智人", "认知革命", "农业革命",
    "科学革命", "想象的现实", "虚构的故事", "知善恶树", "金钱", "帝国", "宗教", "资本主义",
    "工业革命", "快乐", "吉尔伽美什计划", "智慧设计", "智人末日", "历史从无正义", "八卦理论",
    "人类的融合统一", "发现自己的无知", "全球帝国", "标致汽车", "汉谟拉比",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Sapiens · 人类简史 — from animals into gods" }],
    title: "Sapiens · 人类简史 — From Animals into Gods",
    description:
      "From an unremarkable African ape to the master of the planet — and the verge of godhood. A bilingual reading of Harari's four revolutions and the fictions that bind humankind.",
    url: "https://sapiens.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Sapiens · 人类简史 — From Animals into Gods",
    description: "Shared fictions, the agricultural fraud, money & empire & religion, the admission of ignorance, and the Gilgamesh Project. A bilingual reading of Harari's Sapiens. EN / 中文.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#14110d" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://sapiens.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              about: {
                "@type": "Book",
                name: "人类简史：从动物到上帝 (Sapiens: A Brief History of Humankind)",
                author: { "@type": "Person", name: "Yuval Noah Harari 尤瓦尔·赫拉利" },
                translator: { "@type": "Person", name: "林俊宏" },
              },
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-night-950 text-bone-100 antialiased">
        {children}
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
