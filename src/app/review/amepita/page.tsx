import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "アメピタの口コミ・評判｜無料点検・部分修理対応を徹底解説",
  description:
    "アメピタは全国ネットワークの雨漏り修理専門サービス。無料点検・調査、部分修理OK、明朗会計。利用の流れ、メリット・デメリット、よくある質問をまとめました。",
};

const steps = [
  { num: "1", title: "電話・Web相談", desc: "雨漏りの状況を電話またはWebフォームで相談。対応エリアの業者が手配されます。" },
  { num: "2", title: "無料点検・調査", desc: "専門スタッフが現地を訪問し、雨漏りの原因を徹底調査。点検・調査は完全無料です。" },
  { num: "3", title: "見積もり提示", desc: "調査結果をもとに、修理内容と費用を明確に説明。追加費用なしの明朗会計です。" },
  { num: "4", title: "施工・アフターサポート", desc: "部分修理から全面修理まで、最適な方法で施工。保証付きのアフターサポートも充実。" },
];

const pros = [
  "無料で点検・調査してもらえる",
  "部分修理に対応しているため費用を最小限に抑えられる",
  "明朗会計で追加費用の心配がない",
  "全国ネットワークで幅広いエリアに対応",
  "雨漏り修理に特化した専門知識",
  "施工後の保証・アフターサポートが充実",
];

const cons = [
  "地域によっては対応業者が少ない場合がある",
  "大規模な屋根工事は別途相談が必要",
  "公式サイトの情報が限定的",
  "口コミ・評判が他サービスに比べて少ない",
];

const faqs = [
  { q: "アメピタの点検・調査は本当に無料ですか？", a: "はい、現地での点検・調査は完全無料です。調査後に見積もりを提示し、お客様が納得された場合のみ施工に進みます。調査だけで終わる場合も費用は一切かかりません。" },
  { q: "部分修理だけでも対応してもらえますか？", a: "はい、アメピタは部分修理に対応しています。雨漏り箇所のみのピンポイント修理が可能なため、必要最小限の費用で対応できます。全面修理が必要な場合もご相談いただけます。" },
  { q: "アメピタの対応エリアはどこですか？", a: "全国の提携業者ネットワークを通じて幅広いエリアに対応しています。ただし、一部の地域では対応が難しい場合がありますので、お電話でご確認ください。" },
  { q: "見積もり後に追加費用は発生しますか？", a: "明朗会計を徹底しており、見積もり後の追加費用は原則発生しません。ただし、施工中に新たな問題が発見された場合は、お客様に説明・了承を得た上で対応します。" },
  { q: "雨漏りの原因がわからなくても相談できますか？", a: "もちろんです。雨漏りの原因特定も含めて無料点検で対応します。専門スタッフが目視調査や必要に応じて散水調査を行い、原因を特定します。" },
  { q: "施工後の保証はありますか？", a: "はい、施工内容に応じた保証が付きます。保証期間や内容は修理内容によって異なりますので、見積もり時にご確認ください。" },
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

export default function AmepitaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "ランキング", href: "/" },
          { name: "アメピタ" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="rank-badge rank-badge--4">4</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy">アメピタ</h1>
              <p className="text-sm text-text-light">amepita.jp</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="tag-pill">無料点検・調査</span>
            <span className="tag-pill tag-pill--amber">部分修理OK</span>
            <span className="tag-pill tag-pill--green">全国ネットワーク</span>
            <span className="tag-pill">明朗会計</span>
          </div>
          <p className="text-text leading-relaxed">
            アメピタは、全国ネットワークを持つ雨漏り修理専門サービスです。
            無料で点検・調査を行い、雨漏りの原因を特定した上で最適な修理プランを提案します。
            部分修理にも対応しているため必要最小限の費用で修理可能。明朗会計で追加費用の心配もありません。
          </p>
        </section>

        {/* Steps */}
        <section className="py-8">
          <h2 className="section-title">利用の流れ</h2>
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

        {/* Feature highlight */}
        <section className="py-8">
          <h2 className="section-title">アメピタの3つの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "無料点検", desc: "現地調査・点検は完全無料。原因不明の雨漏りもプロが特定します。散水調査にも対応。" },
              { title: "部分修理対応", desc: "必要な箇所だけのピンポイント修理が可能。全面修理を勧めず、費用を最小限に抑えます。" },
              { title: "明朗会計", desc: "見積もり金額以上の請求なし。施工前に費用を明確にするため、安心して依頼できます。" },
            ].map((f, i) => (
              <div key={i} className="card-hover text-center">
                <h3 className="font-bold text-navy text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-text-light">{f.desc}</p>
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
            <h2 className="text-2xl font-extrabold mb-3">アメピタに無料点検を依頼する</h2>
            <p className="text-white/80 text-sm mb-4">無料点検・部分修理対応・明朗会計</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="btn-accent">無料点検を依頼する</a>
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
              { name: "雨漏り修理の達人", slug: "tatsujin", tag: "職人直営" },
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
