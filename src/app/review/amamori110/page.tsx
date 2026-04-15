import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理110番の口コミ・評判｜料金・対応エリア・メリデメを徹底解説",
  description:
    "雨漏り修理110番の料金（25,000円〜）、24時間365日対応、累計500万件の実績を詳しく解説。利用の流れ、メリット・デメリット、口コミ評判、よくある質問をまとめました。",
};

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

const pros = [
  "24時間365日いつでも電話相談できる",
  "東証上場企業運営で高い信頼性",
  "累計500万件以上の豊富な相談実績",
  "全国どこでも対応可能",
  "見積もり後のキャンセルも無料",
  "最短30分で現地に到着",
];

const cons = [
  "実際の作業は地域の加盟店が対応するため、品質にばらつきがある場合も",
  "繁忙期は対応が遅れる可能性がある",
  "25,000円〜は最低料金であり、実際の費用は状況により変動",
];

const faqs = [
  { q: "雨漏り修理110番の料金はいくらですか？", a: "最低料金は25,000円（税込）からです。ただし、雨漏りの原因や修理箇所、程度によって費用は異なります。現地調査後に正確な見積もりが出ますので、まずは無料相談をご利用ください。" },
  { q: "深夜でも対応してもらえますか？", a: "はい、24時間365日対応です。深夜や早朝、土日祝日でも電話受付を行っています。緊急の雨漏りにもすぐに対応してもらえます。" },
  { q: "見積もり後にキャンセルできますか？", a: "はい、見積もり後のキャンセルは無料です。見積もり金額や内容に納得できない場合は、お断りいただいて問題ありません。" },
  { q: "火災保険の申請サポートはありますか？", a: "加盟店によって異なりますが、火災保険を利用した修理の相談にも対応しています。保険の適用可否や申請手続きについてもアドバイスを受けられます。" },
  { q: "対応エリアはどこですか？", a: "全国47都道府県に対応しています。ただし、離島や一部の山間部では対応が難しい場合があります。お電話で対応可否をご確認ください。" },
  { q: "雨漏り修理110番を運営しているのはどんな会社ですか？", a: "東証上場企業のシェアリングテクノロジー株式会社が運営しています。暮らしのお困りごと解決サービスを多数展開しており、累計500万件以上の相談実績を持つ信頼性の高い企業です。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Amamori110Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "ランキング", href: "/" },
          { name: "雨漏り修理110番" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="rank-badge rank-badge--1">1</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy">雨漏り修理110番</h1>
              <p className="text-sm text-text-light">sharing-tech.co.jp/amamori</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="tag-pill">24時間365日対応</span>
            <span className="tag-pill tag-pill--amber">25,000円〜</span>
            <span className="tag-pill tag-pill--green">全国対応</span>
            <span className="tag-pill">累計500万件</span>
            <span className="tag-pill">上場企業運営</span>
          </div>
          <p className="text-text leading-relaxed">
            雨漏り修理110番は、東証上場企業のシェアリングテクノロジー株式会社が運営する業界最大手の雨漏り修理サービスです。
            24時間365日、全国どこでも対応可能で、累計500万件以上の相談実績を誇ります。
            最短30分で現地に駆けつけ、無料で見積もりを作成。25,000円〜というリーズナブルな料金設定も魅力です。
          </p>
        </section>

        {/* Steps */}
        <section className="py-8">
          <h2 className="section-title">利用の流れ 4ステップ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="card-hover text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white text-xl font-extrabold mb-3">
                  {s.num}
                </span>
                <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work types */}
        <section className="py-8">
          <h2 className="section-title">対応工事内容</h2>
          <div className="flex flex-wrap gap-2">
            {workTypes.map((w) => (
              <span key={w} className="tag-pill">{w}</span>
            ))}
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="py-8">
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-hover !border-green/30">
              <h3 className="font-bold text-green text-lg mb-3">メリット</h3>
              <ul className="space-y-2">
                {pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green mt-0.5 flex-shrink-0">&#10003;</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-hover !border-amber/30">
              <h3 className="font-bold text-amber-dark text-lg mb-3">デメリット</h3>
              <ul className="space-y-2">
                {cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-dark mt-0.5 flex-shrink-0">&#9650;</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-8">
          <h2 className="section-title">利用者の口コミ・評判</h2>
          <div className="space-y-4">
            {[
              { name: "東京都 A様（40代）", text: "深夜に突然の雨漏りで慌てて電話しましたが、すぐに対応してもらえました。翌朝には業者が来て、その日のうちに修理完了。対応の速さに驚きました。", rating: 5 },
              { name: "大阪府 B様（50代）", text: "見積もりが明確で、追加費用もなく安心でした。上場企業が運営しているという安心感も大きかったです。", rating: 4 },
              { name: "福岡県 C様（30代）", text: "複数の修理箇所がありましたが、丁寧に説明してくれて納得して依頼できました。保証も付いているので安心です。", rating: 5 },
            ].map((r, i) => (
              <div key={i} className="card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                  <span className="text-sm font-bold text-navy">{r.name}</span>
                </div>
                <p className="text-sm text-text-light">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8">
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
        <section className="py-8">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">雨漏り修理110番に無料相談する</h2>
            <p className="text-white/80 text-sm mb-4">24時間365日対応・全国対応・見積もり無料</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="btn-accent">無料相談はこちら</a>
              <Link href="/" className="btn-primary !bg-white/10 !shadow-none border border-white/30">
                ランキングに戻る
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-8">
          <h2 className="section-title">他の業者も比較する</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "ミツモア", slug: "mitsumora", tag: "一括見積もり" },
              { name: "雨漏り修理の達人", slug: "tatsujin", tag: "職人直営" },
              { name: "アメピタ", slug: "amepita", tag: "無料点検" },
              { name: "くらしのマーケット", slug: "kurashi", tag: "口コミ" },
            ].map((s) => (
              <Link key={s.slug} href={`/review/${s.slug}/`} className="card-hover text-center">
                <h3 className="font-bold text-navy mb-1">{s.name}</h3>
                <span className="tag-pill text-xs">{s.tag}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
