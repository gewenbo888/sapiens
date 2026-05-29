import type { Bi } from "./lang";

const b = (en: string, zh: string): Bi => ({ en, zh });

/* ────────────────────────────  HERO  ──────────────────────────── */
export const hero = {
  kicker: b("A brief history of humankind", "从动物到上帝"),
  titleEn: "Sapiens",
  titleZh: "人类简史",
  arc: b("from animals into gods", "从动物到上帝"),
  lead: b(
    "Seventy thousand years ago, Homo sapiens was an unremarkable animal minding its own business in a corner of Africa. Within a few millennia it had become the master of the entire planet and the terror of the ecosystem. Today it stands on the verge of becoming a god.",
    "在7万年前，智人还不过是一种微不足道的动物，在非洲的角落自顾自地生活。但就在接下来的几千年间，智人就成了整个地球的主人、生态系统的梦魇。时至今日，智人似乎只要再跨一步就能进入神的境界。",
  ),
  standfirst: b(
    "How did an ape with no special claws, fangs, or strength come to rule the Earth — and what did it cost the rest of life? Harari answers with one idea above all: we can cooperate, in unlimited numbers, around stories we invent.",
    "一种没有利爪、獠牙或特别气力的猿，是如何统治了地球——又让其余的生命付出了什么代价？赫拉利的回答首先归于一个观念：我们能够围绕自己虚构的故事，进行人数无上限的合作。",
  ),
  cta1: b("The four revolutions", "四场革命"),
  cta2: b("The engine: fiction", "引擎：虚构"),
  stats: [
    { k: b("Our species", "我们这一种"), v: b("Homo sapiens", "智人") },
    { k: b("Revolutions", "革命"), v: b("Cognitive · Agricultural · Scientific", "认知 · 农业 · 科学") },
    { k: b("Surviving human species", "存活的人类物种"), v: b("1 of at least 6", "6 种之中仅存 1") },
    { k: b("Span", "跨度"), v: b("13.5 bn yrs → the future", "135 亿年 → 未来") },
  ],
};

/* ────────────────────  THE ENGINE: IMAGINED REALITIES  ──────────────────── */
export const engine = {
  title: b("The engine: shared fiction", "引擎：共同的虚构"),
  lead: b(
    "Around 70,000 years ago a chance mutation rewired the Sapiens brain — as if we had eaten from the Tree of Knowledge. The new language could do something no other could: speak of things that do not exist. Not just “Careful, a lion!” but gods, nations, money, laws, companies. This is fiction — and fiction is what lets millions of strangers cooperate.",
    "大约7万年前，一次偶然的基因突变重连了智人的大脑——仿佛我们吃下了知善恶树的果实。这种新语言能做到别种语言做不到的事：谈论并不存在的东西。不只是“小心，有狮子！”，还有神、国家、金钱、法律、公司。这就是虚构——而虚构，正是让数百万陌生人得以合作的关键。",
  ),
  ladder: [
    { step: b("Gossip", "八卦"), body: b("First, language let us track who is trustworthy. Bands could grow past the ~150 that personal acquaintance allows.", "语言起初让我们掌握谁可信。群体得以突破熟人维系的约150人上限。") },
    { step: b("Fiction", "虚构"), body: b("Then came the decisive trick: talking about things that exist only in our shared imagination.", "随后是决定性的一招：谈论只存在于我们共同想象中的事物。") },
    { step: b("Cooperation", "合作"), body: b("Strangers who share the same myth — a god, a nation, a brand — will fight, trade, and build together by the million.", "共享同一神话的陌生人——一个神、一个国家、一个品牌——能以百万计地并肩战斗、贸易与建设。") },
  ],
  fictionsTitle: b("Things that are real only because we believe in them", "因我们相信而真实的事物"),
  fictionsNote: b(
    "Harari calls these “imagined realities” — intersubjective, existing in the web of stories we tell each other. They are not lies: a fiction can be more powerful, and more durable, than any single human.",
    "赫拉利称之为“想象的现实”——它们是主体间的，存在于我们彼此讲述的故事之网中。它们并非谎言：一个虚构，可能比任何单独的人都更有力、更持久。",
  ),
  fictions: [
    { zh: "金钱", en: "Money", note: b("Paper and numbers worth nothing in themselves — the most universal system of mutual trust ever devised.", "纸张与数字本身一文不值——却是人类有史以来最普世的互信体系。") },
    { zh: "国家", en: "Nations", note: b("No one has ever seen a nation. Yet people die for the flag of a thing that lives only in the mind.", "从没有人见过一个国家。人们却为一面只存在于心中的旗帜而死。") },
    { zh: "公司", en: "Companies", note: b("Peugeot the company is a legal fiction — a “limited liability” person no one can touch, that outlives its founders.", "标致这家公司是一个法律虚构——一个谁也碰不到的“有限责任”法人，比它的创办人活得更久。") },
    { zh: "神", en: "Gods", note: b("Shared gods let unrelated strangers trust one another and obey the same commandments.", "共同的神，让毫无血缘的陌生人彼此信任、服从同样的诫命。") },
    { zh: "人权", en: "Human rights", note: b("There are no rights in biology — only organs and instincts. Rights live in the story we agree to tell.", "生物学里没有权利——只有器官与本能。权利活在我们约定讲述的故事里。") },
    { zh: "法律", en: "Law", note: b("Justice and the legal code bind people who will never meet into one cooperating order.", "公义与法典，把永不相见的人们绑成一个合作的秩序。") },
  ],
};

/* ────────────────────  THE FOUR REVOLUTIONS  ──────────────────── */
export const revolutions = [
  {
    id: "cognitive",
    accent: "oxide",
    n: b("Part I", "第一部分"),
    era: b("~70,000 years ago", "约 7 万年前"),
    title: b("The Cognitive Revolution", "认知革命"),
    thesis: b(
      "A new way of thinking and speaking made Sapiens the storytelling animal. We out-competed the Neanderthals not by strength but by numbers we could organize around shared myth — and we promptly drowned the planet in extinctions.",
      "一种新的思维与言说方式，让智人成为会讲故事的动物。我们胜过尼安德特人，靠的不是气力，而是能够围绕共同神话组织起来的人数——而我们旋即以一场灭绝的洪水淹没了地球。",
    ),
    ideas: [
      b("Language evolved to gossip and, decisively, to describe fictions — the Tree of Knowledge.", "语言为八卦而生，并决定性地用以描述虚构——知善恶树。"),
      b("Sapiens was just one of at least six human species; we are the sole survivor.", "智人只是至少六种人类物种之一；我们是唯一的幸存者。"),
      b("Culture now evolves faster than genes — a “fast lane” bypassing the genome.", "文化的演化已快过基因——一条绕过基因组的快速道路。"),
      b("Wherever Sapiens went, megafauna vanished: a flood that drowned the world.", "智人所至，巨型动物随之消失：一场毁天灭地的人类洪水。"),
    ],
    chapters: [
      b("1 · An animal of no significance", "第一章 · 一种也没什么特别的动物"),
      b("2 · The Tree of Knowledge", "第二章 · 知善恶树"),
      b("3 · A day in the life of Adam and Eve", "第三章 · 亚当和夏娃的一天"),
      b("4 · The flood", "第四章 · 毁天灭地的人类洪水"),
    ],
  },
  {
    id: "agricultural",
    accent: "sage",
    n: b("Part II", "第二部分"),
    era: b("~12,000 years ago", "约 1.2 万年前"),
    title: b("The Agricultural Revolution", "农业革命"),
    thesis: b(
      "“History's biggest fraud.” We did not domesticate wheat; wheat domesticated us. More food bred more people into harder, more anxious lives — and bound them with imagined orders, writing, and hierarchies that justice never touched.",
      "“史上最大骗局。”不是我们驯化了小麦，而是小麦驯化了我们。更多的粮食养出更多的人，却把他们推入更辛苦、更焦虑的生活——并以想象的秩序、文字与等级制度将他们捆绑，而公义从未降临。",
    ),
    ideas: [
      b("The luxury trap: each improvement became a necessity no one could undo.", "奢侈生活的陷阱：每一项改善都成了无法回头的必需。"),
      b("Mass society runs on imagined orders — believed in, not seen (Hammurabi vs. the Declaration).", "大型社会靠想象的秩序运作——被相信，而非被看见（汉谟拉比 vs. 独立宣言）。"),
      b("Writing and bureaucracy were invented to hold what no brain could remember.", "文字与官僚制度的发明，是为了承载大脑记不住的东西。"),
      b("Hierarchies of caste, race, and gender are imagined, not biological — “history has no justice.”", "种姓、种族与性别的等级都是想象的，而非生物的——“历史从无正义”。"),
    ],
    chapters: [
      b("5 · History's biggest fraud", "第五章 · 史上最大骗局"),
      b("6 · Building pyramids", "第六章 · 盖起金字塔"),
      b("7 · Memory overload", "第七章 · 记忆过载"),
      b("8 · There is no justice in history", "第八章 · 历史从无正义"),
    ],
  },
  {
    id: "unification",
    accent: "ember",
    n: b("Part III", "第三部分"),
    era: b("last few millennia", "近数千年"),
    title: b("The Unification of Humankind", "人类的融合统一"),
    thesis: b(
      "Against its endless splintering, history bends toward unity. Three universal orders pulled scattered cultures into one world: money, the most universal trust; empire, the most successful political order; and religion, the claim to universal truth.",
      "在无尽的分裂之中，历史却朝向统一弯曲。三种普世的秩序，把零散的文化拉进同一个世界：金钱，最普世的互信；帝国，最成功的政治秩序；宗教，对普世真理的宣称。",
    ),
    ideas: [
      b("Money is the only trust system nearly everyone, everywhere, will accept.", "金钱是几乎人人、处处都肯接受的唯一互信体系。"),
      b("Empires, for all their cruelty, dissolved “them” into “us” and spread shared culture.", "帝国纵然残酷，却把“他们”化为“我们”，传播了共同的文化。"),
      b("Religions give a superhuman order that binds strangers across vast distances.", "宗教给出一种超人类的秩序，跨越广袤的距离绑住陌生人。"),
      b("Beware the hindsight fallacy: history's path looks inevitable only after the fact.", "当心马后炮的谬误：历史之路只在事后才显得必然。"),
    ],
    chapters: [
      b("9 · The arrow of history", "第九章 · 历史的方向"),
      b("10 · The scent of money", "第十章 · 金钱的味道"),
      b("11 · Imperial visions", "第十一章 · 帝国的愿景"),
      b("12 · The law of religion", "第十二章 · 宗教的法则"),
      b("13 · The secret of success", "第十三章 · 成功的秘密"),
    ],
  },
  {
    id: "scientific",
    accent: "dusk",
    n: b("Part IV", "第四部分"),
    era: b("~500 years ago", "约 500 年前"),
    title: b("The Scientific Revolution", "科学革命"),
    thesis: b(
      "It began with a confession: ignoramus — “we do not know.” Science, empire, and capitalism locked into a feedback loop that remade the world in five centuries — and now points beyond Homo sapiens itself.",
      "它始于一句招供：ignoramus——“我们不知道”。科学、帝国与资本主义锁成一个反馈回路，在五百年间重塑了世界——而如今，它指向了智人自身之外。",
    ),
    ideas: [
      b("Modern science is powered by the admission of ignorance — and the will to dispel it.", "现代科学的动力，来自承认无知——以及驱散无知的意志。"),
      b("Capitalism's creed: the pie can grow; credit lets us spend a future we trust.", "资本主义的教条：饼会变大；信贷让我们花用一个我们信任的未来。"),
      b("The Industrial Revolution turned life itself into a conveyor belt of production.", "工业革命把生命本身变成了一条生产的输送带。"),
      b("Modernity dissolved family and community into state and market — and bought a strange new peace.", "现代性把家庭与社群溶解为国家与市场——并买来一种奇异的新和平。"),
      b("Are we any happier? History has barely asked the one question that matters most.", "我们更快乐了吗？历史几乎从未追问这个最要紧的问题。"),
    ],
    chapters: [
      b("14 · The discovery of ignorance", "第十四章 · 发现自己的无知"),
      b("15 · The marriage of science and empire", "第十五章 · 科学与帝国的联姻"),
      b("16 · The capitalist creed", "第十六章 · 资本主义教条"),
      b("17 · The wheels of industry", "第十七章 · 工业的巨轮"),
      b("18 · A permanent revolution", "第十八章 · 一场永远的革命"),
      b("19 · And they lived happily ever after", "第十九章 · 从此过着幸福快乐的日子"),
      b("20 · The end of Homo sapiens", "第二十章 · 智人末日"),
    ],
  },
];

/* ────────────────────  HAMMURABI vs. DECLARATION  ──────────────────── */
export const imaginedOrder = {
  title: b("Two imagined orders, 3,500 years apart", "两套想象的秩序，相隔三千五百年"),
  lead: b(
    "Both texts claim to rest on universal, eternal, objective principles. Both are imagined — held together not by truth but by shared belief. Neither hierarchy nor equality is written into biology.",
    "两份文本都宣称建立在普世、永恒、客观的原则之上。两者都是想象的——维系它们的不是真理，而是共同的相信。无论是等级还是平等，都不曾写进生物学。",
  ),
  left: {
    head: b("The Code of Hammurabi", "《汉谟拉比法典》"),
    when: b("Babylon, c. 1776 BCE", "巴比伦，约公元前 1776 年"),
    claim: b("Society is a divinely ordained hierarchy.", "社会是神所定的等级秩序。"),
    points: [
      b("People are born superiors, commoners, or slaves — and are worth different amounts.", "人生而为上等人、平民或奴隶——价值各不相同。"),
      b("Justice means each rank keeping its place; the gods set the ranking.", "公义即各安其位；等级由神所定。"),
      b("Proclaimed eternal and just — the order of the cosmos.", "宣告为永恒而公正——宇宙的秩序。"),
    ],
  },
  right: {
    head: b("The Declaration of Independence", "《独立宣言》"),
    when: b("United States, 1776 CE", "美国，公元 1776 年"),
    claim: b("All men are created equal.", "人人生而平等。"),
    points: [
      b("Everyone is endowed with the same unalienable rights.", "人人都被赋予同样不可剥夺的权利。"),
      b("Equality and liberty are held to be self-evident truths.", "平等与自由被视为不证自明的真理。"),
      b("Yet biologically there is no “creation,” no “equal,” no “rights.”", "然而在生物学上，没有“创造”，没有“平等”，也没有“权利”。"),
    ],
  },
  verdict: b(
    "Harari's point is not that equality is a lie, but that it is a fiction — like hierarchy before it. Imagined orders need no proof; they need only enough people to believe. That is precisely why they can organize millions.",
    "赫拉利的意思不是说平等是谎言，而是说它是一种虚构——一如它之前的等级。想象的秩序无需证明；它只需要足够多的人相信。正因如此，它才能组织起千百万人。",
  ),
};

/* ────────────────────  HAPPINESS  ──────────────────── */
export const happiness = {
  title: b("Are we any happier?", "我们更快乐了吗？"),
  lead: b(
    "We have far more power than our foraging ancestors — but the history of happiness is the question historians forgot to ask. The honest answer is unsettling.",
    "我们拥有的力量远胜采集时代的祖先——但快乐的历史，却是史家忘了去问的问题。诚实的答案令人不安。",
  ),
  points: [
    b("Happiness may be set largely by biochemistry — a thermostat that returns us to baseline whatever happens.", "快乐或许大半由生物化学决定——一个无论遭遇什么都把我们拉回基线的恒温器。"),
    b("It may depend less on objective conditions than on the gap between expectations and reality.", "它取决于客观条件的程度，也许还不如取决于期望与现实之间的落差。"),
    b("It may rest on meaning — on whether our life serves a story larger than ourselves (itself a fiction).", "它或许系于意义——系于我们的人生是否服务于一个比自身更大的故事（而那本身也是一种虚构）。"),
    b("Buddhism's wager: chasing pleasant feelings is the very thing that breeds suffering. “Know thyself.”", "佛教的赌注：对快感的执着追求，正是滋生痛苦的根源。“认识你自己。”"),
  ],
};

/* ────────────────────  GILGAMESH / ANIMAL TO GOD  ──────────────────── */
export const gilgamesh = {
  title: b("From animals into gods", "从动物到上帝"),
  lead: b(
    "Natural selection ruled life for four billion years. Now Sapiens is learning to replace it with intelligent design — through biological engineering, cyborgs, and inorganic life. The next history may not be ours.",
    "自然选择主宰了生命四十亿年。如今智人正学着用智慧设计取而代之——通过生物工程、生化人与无机生命。下一段历史，或许不再属于我们。",
  ),
  arc: [
    { tag: b("Animal", "动物"), body: b("An African ape, one species among many, with no special place in nature.", "一种非洲的猿，万千物种之一，在自然中并无特别地位。") },
    { tag: b("Master", "主人"), body: b("Through fiction, farming, money and machines, the master of the planet and its ecosystems.", "凭借虚构、农耕、金钱与机器，成为地球及其生态的主人。") },
    { tag: b("God", "上帝"), body: b("Now reaching for eternal youth and the power to create and destroy life at will.", "如今伸手去够永恒的青春，以及随心创造与毁灭生命的神力。") },
  ],
  project: {
    head: b("The Gilgamesh Project", "吉尔伽美什计划"),
    body: b(
      "Named for the king who set out to defeat death, it is the quiet creed of modern medicine: that death is a technical problem to be solved. Wedded to biotechnology — Frankenstein riding on Gilgamesh's shoulders — it points toward a-mortal humans, and perhaps the replacement of Sapiens by superhumans.",
      "它以那位立志战胜死亡的国王命名，是现代医学安静的信条：死亡是一个有待解决的技术问题。当它与生物科技结合——弗兰肯斯坦坐上了吉尔伽美什的肩膀——便指向了“不死”的人类，乃至以超人类取代智人。",
    ),
  },
  closer: b(
    "We have become gods — wielding god-like powers, yet irresponsible, insatiable, and not even sure what we want. Is there anything more dangerous than that?",
    "拥有神的能力，但是不负责任、贪得无厌，而且连想要什么都不知道。天下危险，恐怕莫此为甚。",
  ),
};

/* ────────────────────  DEEP-TIME TIMELINE (from the book's 历史年表)  ──────────────────── */
export const timeline = {
  title: b("From the Big Bang to the future", "从大爆炸到未来"),
  sub: b("The book's own timeline — physics, then chemistry, then biology, then history, then what comes next.", "本书自带的年表——先是物理学，然后化学，然后生物学，然后历史学，然后是接下来的一切。"),
  events: [
    { yr: b("13.5 bn", "135 亿年"), t: b("Matter and energy appear. Physics begins. Atoms and molecules: chemistry begins.", "物质和能量出现。物理学的开始。原子和分子出现。化学的开始。") },
    { yr: b("3.8 bn", "38 亿年"), t: b("Organisms appear. Biology begins.", "有机生物形成。生物学的开始。") },
    { yr: b("2.5 mn", "250 万年"), t: b("Genus Homo evolves in Africa; first stone tools.", "非洲的人属开始演化；出现最早的石器。") },
    { yr: b("200,000", "20 万年"), t: b("Homo sapiens evolves in East Africa.", "智人在东非演化。") },
    { yr: b("70,000", "7 万年"), t: b("The Cognitive Revolution. Fictive language. History begins; Sapiens spreads out of Africa.", "认知革命。出现能描述虚构故事的语言。历史学的开始；智人走出非洲。") },
    { yr: b("12,000", "1.2 万年"), t: b("The Agricultural Revolution. Domestication; permanent settlements.", "农业革命。驯化动植物；出现永久聚落。") },
    { yr: b("5,000", "5000 年"), t: b("First kingdoms, writing, and money. Polytheism.", "出现最早的王国、文字和金钱。多神教信仰。") },
    { yr: b("2,500", "2500 年"), t: b("First coinage. Persian Empire; Indian Buddhism — release from suffering.", "出现最早的硬币。波斯帝国；印度佛教——让众生解脱痛苦。") },
    { yr: b("2,000", "2000 年"), t: b("Han China; Roman Mediterranean; Christianity.", "中国汉帝国；地中海罗马帝国；基督教。") },
    { yr: b("500", "500 年"), t: b("The Scientific Revolution. Humankind admits its ignorance. Capitalism rises; one global arena.", "科学革命。人类承认自己的无知。资本主义兴起；整个地球形成单一历史场域。") },
    { yr: b("200", "200 年"), t: b("The Industrial Revolution. Family and community give way to state and market; mass extinction.", "工业革命。家庭和社群被国家与市场取代；动植物大规模绝种。") },
    { yr: b("Now", "现在"), t: b("Sapiens transcends Earth's bounds. Nuclear weapons threaten survival. Intelligent design begins to shape life.", "人类脱离地球的疆域。核武器威胁人类的生存。生命开始越来越由智慧设计形塑。") },
    { yr: b("Future", "未来"), t: b("Intelligent design as life's basic principle? Sapiens replaced by superhumans?", "智慧设计成为生命的基本原则？智人被超人类取代？") },
  ],
};

/* ────────────────────  CHAPTER INDEX  ──────────────────── */
export const partsIndex = {
  title: b("The whole book at a glance", "全书一览"),
  sub: b("Four parts, twenty chapters, one species.", "四部分，二十章，一个物种。"),
};

/* ────────────────────  ABOUT  ──────────────────── */
export const about = {
  title: b("About the book", "关于本书"),
  body: b(
    "《人类简史：从动物到上帝》 (Sapiens: A Brief History of Humankind) by the Israeli historian Yuval Noah Harari (b. 1976, Oxford PhD) first appeared in Hebrew in 2012 and has since been translated into dozens of languages. Trained in medieval and military history, Harari turned to the largest possible canvas — the whole story of our species, told through biology, anthropology, economics, and history at once. This reading uses the Chinese edition translated by 林俊宏 (CITIC Press).",
    "《人类简史：从动物到上帝》，以色列历史学家尤瓦尔·赫拉利（1976年生，牛津大学博士）著，2012年以希伯来文首次出版，至今已译成数十种文字。赫拉利原本专攻中世纪史与军事史，后转向最宏大的画布——以生物学、人类学、经济学与历史学一并讲述我们这一物种的整部故事。本站参照林俊宏译本（中信出版社）。",
  ),
  note: b(
    "This site is an independent, bilingual reading companion — a study aid, not a substitute for the book. Quotations are transcribed from the Chinese edition; English renderings follow the published Sapiens where possible.",
    "本站是一份独立的双语导读——是研习的伴读，而非替代。引文转录自中文版；英文表述尽量沿用 Sapiens 英文原书。",
  ),
  credit: b("Part of the Psyverse · 隶属 Psyverse", "隶属 Psyverse"),
};

/* ────────────────────  NAV  ──────────────────── */
export const nav = [
  { id: "engine", label: b("The Engine", "引擎") },
  { id: "cognitive", label: b("Cognitive", "认知革命") },
  { id: "agricultural", label: b("Agricultural", "农业革命") },
  { id: "unification", label: b("Unification", "融合统一") },
  { id: "scientific", label: b("Scientific", "科学革命") },
  { id: "order", label: b("Imagined Order", "想象的秩序") },
  { id: "gilgamesh", label: b("Animal → God", "动物→上帝") },
  { id: "timeline", label: b("Timeline", "年表") },
];
