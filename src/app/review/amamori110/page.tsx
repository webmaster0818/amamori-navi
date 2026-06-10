import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE = "https://amamori-navi-deploy.pages.dev";
const PATH = "/review/amamori110/";
const UPDATED = "2026年6月10日";

export const metadata: Metadata = {
  title:
    "雨漏り修理110番の口コミ・評判は？料金・対応エリア・メリットを徹底調査【2026年最新】",
  description:
    "雨漏り修理110番の口コミ・評判を徹底調査。25,000円からの料金、24時間365日・全国対応、最短30分到着、最長10年保証、加盟店ネットワークの強みと注意点、利用者のリアルな良い口コミ・悪い口コミまで編集部が中立的にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
};

const toc: [string, string][] = [
  ["about", "雨漏り修理110番とはどんなサービスか"],
  ["steps", "依頼から修理までの流れ"],
  ["work", "対応している工事の種類"],
  ["price", "料金体系と費用相場"],
  ["reviews", "利用者のリアルな口コミ・評判"],
  ["merit", "メリットと注意点"],
  ["recommend", "雨漏り修理110番がおすすめな人"],
  ["faq", "よくある質問"],
];

const steps = [
  { num: "1", title: "無料相談", desc: "24時間365日、電話またはWebフォームから相談可能。雨漏りの状況を伝えます。" },
  { num: "2", title: "現地調査・見積もり", desc: "最短30分で駆けつけ。現地で雨漏り箇所を特定し、無料で見積もりを作成します。" },
  { num: "3", title: "施工", desc: "見積もりに納得したら施工開始。プロの技術で確実に修理します。" },
  { num: "4", title: "完了・アフターフォロー", desc: "施工完了後の確認。保証付きで万が一の再発にも対応します。" },
];

const workTypes = [
  "屋根の雨漏り修理", "外壁の雨漏り修理", "天井の雨漏り修理",
  "ベランダ・バルコニーの防水工事", "雨どいの修理・交換",
  "コーキング補修", "棟板金の修理・交換", "防水シート補修",
];

const priceRows = [
  { item: "最低料金", price: "25,000円〜（税込）", note: "最小構成の目安" },
  { item: "屋根の雨漏り修理", price: "1㎡あたり3,900円〜", note: "範囲・工法で変動" },
  { item: "瓦の葺き替え等", price: "1㎡あたり8,800円〜", note: "材料・施工内容で変動" },
  { item: "部分修理の相場", price: "3万〜5万円程度", note: "被害状況による" },
];

const pros = [
  "24時間365日いつでも電話相談できる",
  "全国47都道府県の加盟店ネットワークで対応可能",
  "累計500万件以上の豊富な相談実績",
  "最短30分で現地に到着・現地調査と見積もりが無料",
  "見積もり後のキャンセルも無料",
  "最長10年保証で施工後も安心",
];

const cons = [
  "実際の作業は地域の加盟店が対応するため、品質や対応に差が出ることがある",
  "繁忙期は対応が遅れる可能性がある",
  "25,000円〜は最低料金で、実際の費用は被害状況により高くなることがある",
  "仲介の仕組み上、費用がやや高めに感じる場合がある",
];

const goodReviews = [
  { title: "24時間対応で深夜でもすぐ動いてくれた", text: "夜中に突然の雨漏りで困っていましたが、電話するとすぐに受け付けてもらえ、近くの加盟店が早く駆けつけてくれました。緊急時に頼れると感じました。", meta: "戸建て・屋根の雨漏り" },
  { title: "見積もりが明確で安心できた", text: "現地調査のうえで作業内容と金額を提示してくれたので、納得して依頼できました。見積もり後のキャンセルも無料という点も安心材料でした。", meta: "戸建て・外壁の雨漏り" },
  { title: "近くの加盟店が迅速に対応してくれた", text: "全国対応とのことで、自宅近くの加盟店がすぐに来てくれました。修理も保証が付いていて、その後の再発もありません。", meta: "マンション・ベランダの防水" },
];

const badReviews = [
  { title: "想定より費用が高くなった", text: "部分修理のつもりが、被害が広く想定より費用がかかりました。実際の作業は加盟店が行うため、作業前に内訳と総額をよく確認した方がよいと感じました。", meta: "戸建て・屋根の雨漏り" },
  { title: "加盟店によって対応に差を感じた", text: "サービス自体は問題なかったものの、対応する加盟店によって説明の丁寧さに差が出ることがあるようです。気になる点は事前に確認すると安心です。", meta: "戸建て・天井の雨漏り" },
];

const faqs = [
  { q: "雨漏り修理110番の料金はいくらですか？", a: "最低料金は25,000円（税込）からです。屋根の雨漏り修理は1㎡あたり3,900円〜、部分修理の相場は3万〜5万円程度が目安ですが、雨漏りの原因や修理箇所、程度によって費用は異なります。現地調査後に正確な見積もりが出ますので、まずは無料相談をご利用ください。" },
  { q: "深夜でも対応してもらえますか？", a: "はい、24時間365日対応です。深夜や早朝、土日祝日でも電話受付を行っており、最短30分で現地に駆けつけます。緊急の雨漏りにもすぐに対応してもらえます。" },
  { q: "見積もり後にキャンセルできますか？", a: "はい、見積もり後のキャンセルは無料です。見積もり金額や内容に納得できない場合は、お断りいただいて問題ありません。" },
  { q: "火災保険の申請サポートはありますか？", a: "加盟店によって異なりますが、火災保険を利用した修理の相談にも対応しています。保険の適用可否や申請手続きについてもアドバイスを受けられます。" },
  { q: "対応エリアはどこですか？", a: "全国47都道府県に対応しています。ただし、離島や一部の山間部では対応が難しい場合があります。お電話で対応可否をご確認ください。" },
  { q: "雨漏り修理110番を運営しているのはどんな会社ですか？", a: "上場企業のシェアリングテクノロジー株式会社が運営しています。暮らしのお困りごと解決サービスを多数展開しており、累計500万件以上の相談実績を持つ信頼性の高い企業です。加盟店は雨漏り診断技能士など一定の基準を満たした専門業者です。" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "雨漏り修理110番の口コミ・評判は？料金・対応エリア・メリットを徹底調査",
  description: "雨漏り修理110番の料金・対応スピード・加盟店ネットワーク・利用者の口コミを中立的に調査した記事です。",
  image: `${SITE}/images/amamori110-hero.png`,
  datePublished: "2026-06-10T00:00:00+09:00",
  dateModified: "2026-06-10T00:00:00+09:00",
  author: { "@type": "Organization", name: "雨漏り修理ナビ編集部", url: SITE },
  publisher: { "@type": "Organization", name: "雨漏り修理ナビ", url: SITE },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
};
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "雨漏り修理ナビ", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: `${SITE}/` },
    { "@type": "ListItem", position: 3, name: "雨漏り修理110番の口コミ・評判", item: `${SITE}${PATH}` },
  ],
};

export default function Amamori110Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumb items={[{ name: "業者レビュー", href: "/" }, { name: "雨漏り修理110番" }]} />

        {/* Hero */}
        <section className="pt-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">1</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-dark leading-tight">
              雨漏り修理110番の口コミ・評判は？料金・対応エリア・メリットを徹底調査
            </h1>
          </div>
          <p className="text-sm text-text-light mb-4">最終更新日：{UPDATED}　／　雨漏り修理ナビ編集部</p>
          <div className="overflow-hidden rounded-2xl shadow-md mb-5">
            <img src="/images/amamori110-hero.png" alt="雨漏り修理110番の口コミ・評判・料金まとめ" width={1200} height={630} className="w-full h-auto" />
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="tag-pill">24時間365日対応</span>
            <span className="tag-pill tag-pill--amber">25,000円〜</span>
            <span className="tag-pill tag-pill--green">全国対応</span>
            <span className="tag-pill">累計500万件</span>
            <span className="tag-pill">最長10年保証</span>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="my-6 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <p className="font-bold text-dark mb-3">この記事の目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map(([id, label], i) => (
              <li key={id}>
                <a href={`#${id}`} className="text-primary hover:underline">
                  <span className="font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>{label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* about */}
        <section id="about" className="py-6 scroll-mt-20">
          <h2 className="section-title">雨漏り修理110番とはどんなサービスか</h2>
          <p className="text-text leading-relaxed mb-4">
            雨漏り修理110番は、上場企業のシェアリングテクノロジー株式会社が運営する業界最大手クラスの雨漏り修理サービスです。全国47都道府県の加盟店ネットワークを通じて、依頼者の近くにいる専門業者を手配する仕組みで、24時間365日・全国どこでも対応可能。累計500万件以上の相談実績を誇ります。
          </p>
          <p className="text-text leading-relaxed mb-5">
            加盟店は雨漏り診断技能士などの基準を満たした防水・塗装の専門業者で、最短30分で現地に駆けつけ、現地調査と見積もりは無料。最長10年の保証が用意されており、施工後の再発にも備えられます。
          </p>
          <div className="overflow-hidden rounded-2xl border border-primary/15">
            <img src="/images/amamori110-features.png" alt="雨漏り修理110番の3つの特徴（24時間365日・最短30分・最長10年保証）" width={1200} height={500} className="w-full h-auto" />
          </div>
        </section>

        {/* steps */}
        <section id="steps" className="py-6 scroll-mt-20">
          <h2 className="section-title">依頼から修理までの流れ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="card-hover text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-extrabold mb-3">{s.num}</span>
                <h3 className="font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* work */}
        <section id="work" className="py-6 scroll-mt-20">
          <h2 className="section-title">対応している工事の種類</h2>
          <div className="flex flex-wrap gap-2">
            {workTypes.map((w) => (
              <span key={w} className="tag-pill">{w}</span>
            ))}
          </div>
        </section>

        {/* price */}
        <section id="price" className="py-6 scroll-mt-20">
          <h2 className="section-title">料金体系と費用相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-primary/15 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10 text-dark"><th className="text-left px-4 py-3">項目</th><th className="text-left px-4 py-3">料金の目安</th><th className="text-left px-4 py-3">備考</th></tr>
              </thead>
              <tbody>
                {priceRows.map((r, i) => (
                  <tr key={i} className="border-t border-primary/10">
                    <td className="px-4 py-3 font-medium text-dark">{r.item}</td>
                    <td className="px-4 py-3 font-bold text-accent-dark">{r.price}</td>
                    <td className="px-4 py-3 text-text-light">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-2">※ 料金は被害状況・工法により変動します。正確な金額は無料の現地調査・見積もりでご確認ください。</p>
        </section>

        {/* reviews */}
        <section id="reviews" className="py-6 scroll-mt-20">
          <h2 className="section-title">利用者のリアルな口コミ・評判</h2>
          <div className="rounded-2xl bg-primary/5 border border-primary/15 p-5 mb-5">
            <p className="text-sm text-text leading-relaxed">各種口コミサイトやGoogleのクチコミを編集部が調査したところ、対応の速さと見積もりの明確さを評価する声が目立ちました。一方で、実際の作業は加盟店が行うため、費用が想定より高くなった、加盟店によって対応に差があるといった慎重な声も見られました。</p>
          </div>
          <h3 className="font-bold text-primary text-lg mb-3">良い口コミ</h3>
          <div className="space-y-4 mb-7">
            {goodReviews.map((r, i) => (
              <div key={i} className="card-hover">
                <p className="font-bold text-dark mb-1">{r.title}</p>
                <p className="text-sm text-text-light mb-2">{r.text}</p>
                <p className="text-xs text-text-light/70">{r.meta}</p>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-accent-dark text-lg mb-3">気になる口コミ・注意点</h3>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="card-hover !border-accent/30">
                <p className="font-bold text-dark mb-1">{r.title}</p>
                <p className="text-sm text-text-light mb-2">{r.text}</p>
                <p className="text-xs text-text-light/70">{r.meta}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-light mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです。感じ方には個人差があります。</p>
        </section>

        {/* merit */}
        <section id="merit" className="py-6 scroll-mt-20">
          <h2 className="section-title">メリットと注意点</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-hover !border-primary/30">
              <h3 className="font-bold text-primary text-lg mb-3">メリット</h3>
              <ul className="space-y-2">
                {pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="card-hover !border-accent/30">
              <h3 className="font-bold text-accent-dark text-lg mb-3">注意点</h3>
              <ul className="space-y-2">
                {cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><span className="text-accent-dark mt-0.5 flex-shrink-0">&#9650;</span>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* recommend */}
        <section id="recommend" className="py-6 scroll-mt-20">
          <h2 className="section-title">雨漏り修理110番がおすすめな人</h2>
          <ul className="space-y-3">
            {[
              "深夜・早朝など緊急で雨漏りを解決したい人",
              "全国どこでも対応してほしい人",
              "現地調査・見積もりを無料で受けたい人",
              "保証付きで施工後も安心して任せたい人",
            ].map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text"><span className="text-primary mt-0.5 flex-shrink-0">&#9679;</span>{r}</li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-6 scroll-mt-20">
          <h2 className="section-title">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-6">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">雨漏り修理110番に無料相談する</h2>
            <p className="text-white/80 text-sm mb-4">24時間365日対応・全国対応・見積もり無料</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="btn-accent">無料相談はこちら</a>
              <Link href="/" className="btn-primary !bg-white/10 !shadow-none border border-white/30">ランキングに戻る</Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-6">
          <h2 className="section-title">他の業者も比較する</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "ミツモア", slug: "mitsumora", tag: "一括見積もり" },
              { name: "雨漏り修理の達人", slug: "tatsujin", tag: "職人直営" },
              { name: "アメピタ", slug: "amepita", tag: "無料点検" },
              { name: "くらしのマーケット", slug: "kurashi", tag: "口コミ" },
            ].map((s) => (
              <Link key={s.slug} href={`/review/${s.slug}/`} className="card-hover text-center">
                <h3 className="font-bold text-dark mb-1">{s.name}</h3>
                <span className="tag-pill text-xs">{s.tag}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
