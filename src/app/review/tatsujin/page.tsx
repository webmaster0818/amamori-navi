import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理の達人の口コミ・評判｜職人直営・仲介手数料なしを徹底解説",
  description:
    "雨漏り修理の達人は職人直営・自社施工のみ登録のポータルサイト。仲介手数料なし、厳しい審査基準、利用の流れ、メリット・デメリット、よくある質問をまとめました。",
};

const steps = [
  { num: "1", title: "エリアで検索", desc: "お住まいの地域を選択し、対応可能な登録業者（職人）を検索します。" },
  { num: "2", title: "業者を選んで相談", desc: "業者のプロフィール・施工実績を確認し、電話またはフォームで直接相談します。" },
  { num: "3", title: "現地調査・見積もり", desc: "選んだ業者が現地を調査し、見積もりを作成。仲介手数料なしの直接取引です。" },
  { num: "4", title: "施工・完了", desc: "自社施工の職人が直接修理。中間マージンがないため適正価格での施工を実現します。" },
];

const pros = [
  "自社施工の職人のみが登録しているため技術力が高い",
  "仲介手数料がかからず適正価格で修理できる",
  "厳しい審査基準を通過した業者のみ掲載",
  "職人のプロフィール・施工実績を事前に確認できる",
  "業者と直接やり取りするため意思疎通がスムーズ",
  "下請け・孫請けがなく責任の所在が明確",
];

const cons = [
  "対応エリアが限られる地域がある",
  "24時間対応ではない業者が多い",
  "登録業者数が大手マッチングサイトに比べて少ない",
  "見積もり比較するには個別に連絡が必要",
];

const faqs = [
  { q: "雨漏り修理の達人とはどんなサイトですか？", a: "自社施工の職人・業者だけが登録できるポータルサイトです。仲介業者を挟まず、実際に施工する職人に直接依頼できるため、中間マージンがかからず適正価格での修理が可能です。" },
  { q: "なぜ仲介手数料がかからないのですか？", a: "雨漏り修理の達人は業者紹介のポータルサイトであり、マッチング手数料を業者から徴収しない仕組みです。そのため、お客様への料金に仲介手数料が上乗せされません。" },
  { q: "登録業者の審査基準は厳しいですか？", a: "はい、自社施工であること、必要な資格・許可を保有していること、施工実績があること等の厳しい審査基準があります。下請け・孫請けの業者は登録できません。" },
  { q: "緊急の雨漏りにも対応してもらえますか？", a: "業者によって異なります。一部の業者は緊急対応も行っていますが、営業時間内の対応が基本です。緊急の場合は雨漏り修理110番などの24時間対応サービスの利用をおすすめします。" },
  { q: "見積もりは無料ですか？", a: "多くの登録業者が無料で現地調査・見積もりを行っています。ただし、業者によって異なる場合がありますので、相談時に確認してください。" },
  { q: "対応エリアはどこですか？", a: "全国の登録業者がいますが、地域によっては対応業者が少ない場合があります。お住まいの地域で検索し、対応可能な業者がいるか確認してください。" },
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

export default function TatsujinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "ランキング", href: "/" },
          { name: "雨漏り修理の達人" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="rank-badge rank-badge--3">3</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">雨漏り修理の達人</h1>
              <p className="text-sm text-text-light">amamori-tatsujin.com</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="tag-pill">職人直営・自社施工</span>
            <span className="tag-pill tag-pill--amber">仲介手数料なし</span>
            <span className="tag-pill tag-pill--green">厳しい審査基準</span>
          </div>
          <p className="text-text leading-relaxed">
            雨漏り修理の達人は、自社施工を行う職人・業者だけが登録できるポータルサイトです。
            仲介業者を挟まないため、中間マージンがかからず適正価格での修理を実現。
            厳しい審査基準を通過した職人のみが掲載されているため、技術力の高い業者に直接依頼できるのが最大の魅力です。
          </p>
        </section>

        {/* Steps */}
        <section className="py-8">
          <h2 className="section-title">利用の流れ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="card-hover text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-extrabold mb-3">
                  {s.num}
                </span>
                <h3 className="font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="py-8">
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-hover !border-primary/30">
              <h3 className="font-bold text-primary text-lg mb-3">メリット</h3>
              <ul className="space-y-2">
                {pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-hover !border-accent/30">
              <h3 className="font-bold text-accent-dark text-lg mb-3">デメリット</h3>
              <ul className="space-y-2">
                {cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent-dark mt-0.5 flex-shrink-0">&#9650;</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Unique Strengths */}
        <section className="py-8">
          <h2 className="section-title">雨漏り修理の達人が選ばれる理由</h2>
          <div className="space-y-4">
            {[
              { title: "自社施工で中間マージンゼロ", desc: "下請け・孫請けを使わず、登録職人が自ら施工するため、中間マージンが発生しません。適正価格での修理が可能です。" },
              { title: "厳しい審査をクリアした職人のみ", desc: "資格保有・施工実績・自社施工の証明など、複数の審査項目をクリアした職人のみが登録しています。" },
              { title: "職人の顔が見える安心感", desc: "各職人のプロフィール、施工実績写真、得意分野などを事前に確認でき、信頼できる職人を自分で選べます。" },
            ].map((item, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="rank-badge rank-badge--4 flex-shrink-0 !w-10 !h-10 !text-base">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.desc}</p>
                </div>
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
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">雨漏り修理の達人で職人を探す</h2>
            <p className="text-white/80 text-sm mb-4">自社施工・仲介手数料なし・厳選職人</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="btn-accent">職人を探す</a>
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
              { name: "雨漏り修理110番", slug: "amamori110", tag: "24h対応" },
              { name: "ミツモア", slug: "mitsumora", tag: "一括見積もり" },
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
