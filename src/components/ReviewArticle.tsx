import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://amamori-navi-deploy.pages.dev";
const UPDATED = "2026年6月10日";

const ALL = [
  { slug: "amamori110", name: "雨漏り修理110番", tag: "24時間対応" },
  { slug: "mitsumora", name: "ミツモア", tag: "一括見積もり" },
  { slug: "tatsujin", name: "雨漏り修理の達人", tag: "職人直営" },
  { slug: "amepita", name: "アメピタ", tag: "無料点検" },
  { slug: "kurashi", name: "くらしのマーケット", tag: "口コミ" },
];

export interface ReviewData {
  slug: string;
  rank: number;
  name: string;
  heroImg: string;
  featImg: string;
  lead: string[];
  badges: { label: string; variant?: "amber" | "green" }[];
  steps: { num: string; title: string; desc: string }[];
  workTypes: string[];
  priceRows: { item: string; price: string; note: string }[];
  priceNote?: string;
  reviewsSummary: string;
  goodReviews: { title: string; text: string; meta: string }[];
  badReviews: { title: string; text: string; meta: string }[];
  pros: string[];
  cons: string[];
  recommend: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSub: string;
}

export function buildMetadata(d: ReviewData, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/review/${d.slug}/` },
  };
}

export default function ReviewArticle({ d, h1 }: { d: ReviewData; h1: string }) {
  const toc: [string, string][] = [
    ["about", `${d.name}とはどんなサービスか`],
    ["steps", "依頼から修理までの流れ"],
    ["work", "対応している工事の種類"],
    ["price", "料金体系と費用相場"],
    ["reviews", "利用者のリアルな口コミ・評判"],
    ["merit", "メリットと注意点"],
    ["recommend", `${d.name}がおすすめな人`],
    ["faq", "よくある質問"],
  ];
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: h1, description: `${d.name}の料金・対応・口コミを中立的に調査した記事です。`,
    image: `${SITE}${d.heroImg}`,
    datePublished: "2026-06-10T00:00:00+09:00", dateModified: "2026-06-10T00:00:00+09:00",
    author: { "@type": "Organization", name: "雨漏り修理ナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "雨漏り修理ナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/review/${d.slug}/` },
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "雨漏り修理ナビ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "業者レビュー", item: `${SITE}/` },
      { "@type": "ListItem", position: 3, name: `${d.name}の口コミ・評判`, item: `${SITE}/review/${d.slug}/` },
    ],
  };
  const related = ALL.filter((x) => x.slug !== d.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumb items={[{ name: "業者レビュー", href: "/" }, { name: d.name }]} />

        <section className="pt-6">
          <div className="flex items-center gap-3 mb-3">
            <span className={`rank-badge rank-badge--${d.rank}`}>{d.rank}</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-dark leading-tight">{h1}</h1>
          </div>
          <p className="text-sm text-text-light mb-4">最終更新日：{UPDATED}　／　雨漏り修理ナビ編集部</p>
          <div className="overflow-hidden rounded-2xl shadow-md mb-5">
            <img src={d.heroImg} alt={`${d.name}の口コミ・評判・料金まとめ`} width={1200} height={630} className="w-full h-auto" />
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {d.badges.map((b) => (
              <span key={b.label} className={`tag-pill${b.variant ? ` tag-pill--${b.variant}` : ""}`}>{b.label}</span>
            ))}
          </div>
        </section>

        <nav aria-label="目次" className="my-6 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <p className="font-bold text-dark mb-3">この記事の目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map(([id, label], i) => (
              <li key={id}><a href={`#${id}`} className="text-primary hover:underline"><span className="font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>{label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="about" className="py-6 scroll-mt-20">
          <h2 className="section-title">{d.name}とはどんなサービスか</h2>
          {d.lead.map((p, i) => (<p key={i} className="text-text leading-relaxed mb-4">{p}</p>))}
          <div className="overflow-hidden rounded-2xl border border-primary/15 mt-1">
            <img src={d.featImg} alt={`${d.name}の特徴`} width={1200} height={500} className="w-full h-auto" />
          </div>
        </section>

        <section id="steps" className="py-6 scroll-mt-20">
          <h2 className="section-title">依頼から修理までの流れ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.steps.map((s) => (
              <div key={s.num} className="card-hover text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-extrabold mb-3">{s.num}</span>
                <h3 className="font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="py-6 scroll-mt-20">
          <h2 className="section-title">対応している工事の種類</h2>
          <div className="flex flex-wrap gap-2">{d.workTypes.map((w) => (<span key={w} className="tag-pill">{w}</span>))}</div>
        </section>

        <section id="price" className="py-6 scroll-mt-20">
          <h2 className="section-title">料金体系と費用相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-primary/15 rounded-lg overflow-hidden">
              <thead><tr className="bg-primary/10 text-dark"><th className="text-left px-4 py-3">項目</th><th className="text-left px-4 py-3">料金の目安</th><th className="text-left px-4 py-3">備考</th></tr></thead>
              <tbody>
                {d.priceRows.map((r, i) => (
                  <tr key={i} className="border-t border-primary/10"><td className="px-4 py-3 font-medium text-dark">{r.item}</td><td className="px-4 py-3 font-bold text-accent-dark">{r.price}</td><td className="px-4 py-3 text-text-light">{r.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-2">{d.priceNote ?? "※ 料金は被害状況・工法により変動します。正確な金額は無料の現地調査・見積もりでご確認ください。"}</p>
        </section>

        <section id="reviews" className="py-6 scroll-mt-20">
          <h2 className="section-title">利用者のリアルな口コミ・評判</h2>
          <div className="rounded-2xl bg-primary/5 border border-primary/15 p-5 mb-5"><p className="text-sm text-text leading-relaxed">{d.reviewsSummary}</p></div>
          <h3 className="font-bold text-primary text-lg mb-3">良い口コミ</h3>
          <div className="space-y-4 mb-7">
            {d.goodReviews.map((r, i) => (
              <div key={i} className="card-hover"><p className="font-bold text-dark mb-1">{r.title}</p><p className="text-sm text-text-light mb-2">{r.text}</p><p className="text-xs text-text-light/70">{r.meta}</p></div>
            ))}
          </div>
          <h3 className="font-bold text-accent-dark text-lg mb-3">気になる口コミ・注意点</h3>
          <div className="space-y-4">
            {d.badReviews.map((r, i) => (
              <div key={i} className="card-hover !border-accent/30"><p className="font-bold text-dark mb-1">{r.title}</p><p className="text-sm text-text-light mb-2">{r.text}</p><p className="text-xs text-text-light/70">{r.meta}</p></div>
            ))}
          </div>
          <p className="text-xs text-text-light mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです。感じ方には個人差があります。</p>
        </section>

        <section id="merit" className="py-6 scroll-mt-20">
          <h2 className="section-title">メリットと注意点</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-hover !border-primary/30"><h3 className="font-bold text-primary text-lg mb-3">メリット</h3><ul className="space-y-2">{d.pros.map((p, i) => (<li key={i} className="flex items-start gap-2 text-sm"><span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>{p}</li>))}</ul></div>
            <div className="card-hover !border-accent/30"><h3 className="font-bold text-accent-dark text-lg mb-3">注意点</h3><ul className="space-y-2">{d.cons.map((c, i) => (<li key={i} className="flex items-start gap-2 text-sm"><span className="text-accent-dark mt-0.5 flex-shrink-0">&#9650;</span>{c}</li>))}</ul></div>
          </div>
        </section>

        <section id="recommend" className="py-6 scroll-mt-20">
          <h2 className="section-title">{d.name}がおすすめな人</h2>
          <ul className="space-y-3">{d.recommend.map((r, i) => (<li key={i} className="flex items-start gap-2 text-sm text-text"><span className="text-primary mt-0.5 flex-shrink-0">&#9679;</span>{r}</li>))}</ul>
        </section>

        <section id="faq" className="py-6 scroll-mt-20">
          <h2 className="section-title">よくある質問</h2>
          <div className="space-y-3">{d.faqs.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}</div>
        </section>

        <section className="py-6">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">{d.ctaTitle}</h2>
            <p className="text-white/80 text-sm mb-4">{d.ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="btn-accent">無料相談はこちら</a>
              <Link href="/" className="btn-primary !bg-white/10 !shadow-none border border-white/30">ランキングに戻る</Link>
            </div>
          </div>
        </section>

        <section className="py-6">
          <h2 className="section-title">他の業者も比較する</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((s) => (
              <Link key={s.slug} href={`/review/${s.slug}/`} className="card-hover text-center"><h3 className="font-bold text-dark mb-1">{s.name}</h3><span className="tag-pill text-xs">{s.tag}</span></Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
