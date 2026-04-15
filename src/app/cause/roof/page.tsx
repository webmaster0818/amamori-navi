import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "屋根の雨漏り原因8つ【2026年最新】瓦・スレート・棟板金の劣化チェック",
  description:
    "屋根の雨漏り原因を8つに分類して解説。瓦のズレ、棟板金の浮き、スレートのひび割れ、コーキング劣化、谷樋の腐食、防水シート劣化、天窓、経年劣化。自分でできるチェックポイントも紹介。",
};

const causes = [
  { num: 1, title: "瓦のズレ・割れ", desc: "台風や地震で瓦がズレたり割れたりすると、隙間から雨水が侵入します。瓦屋根は1枚でもズレると連鎖的に被害が広がることがあります。築20年以上の瓦屋根は定期点検が重要です。" },
  { num: 2, title: "棟板金の浮き・めくれ", desc: "屋根の頂上部分を覆う棟板金は、強風で釘が浮いたりめくれたりしやすい箇所です。棟板金の下にある貫板（ぬきいた）が腐食している場合は交換が必要。台風後に最も多い雨漏り原因の一つです。" },
  { num: 3, title: "スレート屋根のひび割れ・欠け", desc: "スレート屋根は経年劣化でひび割れや欠けが発生します。表面の塗膜が劣化すると防水性が低下し、雨水を吸収して凍結融解でさらにダメージが広がります。築10年以上で塗装メンテナンスが推奨されます。" },
  { num: 4, title: "コーキング（シーリング）の劣化", desc: "屋根材の接合部やケラバ、雨押えなどのコーキングが劣化すると隙間が生じます。コーキングの寿命は7〜10年程度。紫外線や温度変化で硬化・ひび割れが進行します。" },
  { num: 5, title: "谷樋（たにとい）の腐食", desc: "屋根面が交差する谷部分に設置された谷樋は、雨水が集中するため腐食しやすい箇所です。銅製の谷樋は酸性雨で穴が開くことがあります。定期的な点検と必要に応じた交換が重要です。" },
  { num: 6, title: "防水シート（ルーフィング）の劣化", desc: "屋根材の下に敷かれている防水シートは、最後の防水層です。寿命は20〜30年程度ですが、屋根材の損傷から雨水が浸入し続けると早期に劣化します。防水シートの交換には屋根材の撤去が必要です。" },
  { num: 7, title: "天窓（トップライト）からの雨漏り", desc: "天窓周りはコーキングやパッキンの劣化、取り合い部分の防水不良で雨漏りが発生しやすい箇所です。天窓の寿命は15〜20年程度。パッキンの定期交換で雨漏りを予防できます。" },
  { num: 8, title: "経年劣化（築年数による全体的な劣化）", desc: "築20〜30年以上の建物は、屋根全体が経年劣化しています。複数箇所から雨漏りが発生する場合は、部分補修ではなくカバー工法や葺き替えが必要になることがあります。" },
];

const checkPoints = [
  "天井にシミや変色がないか（特に雨の日の翌日に確認）",
  "屋根裏に水滴の跡や湿気がないか",
  "外壁に雨だれの跡や苔・カビの発生がないか",
  "雨どいに詰まりや破損がないか",
  "庭から見上げて屋根材のズレや破損がないか（双眼鏡を使用すると安全）",
  "台風や大雨の後に室内に異変がないか",
];

const faqs = [
  { q: "屋根の雨漏りで最も多い原因は何ですか？", a: "最も多い原因は棟板金の浮き・めくれとコーキングの劣化です。特に台風や強風の後に発生しやすく、全体の約40%を占めます。次いで瓦のズレ（約20%）、防水シートの劣化（約15%）が多いです。" },
  { q: "屋根の雨漏りは自分で確認できますか？", a: "地上からの目視確認（瓦のズレ、雨どいの破損）や室内のチェック（天井のシミ、屋根裏の湿気）は自分で行えます。ただし、屋根に上がっての確認は危険なため、専門業者に依頼しましょう。" },
  { q: "築何年くらいで雨漏りしやすくなりますか？", a: "一般的に築10年を超えるとコーキングの劣化が始まり、築20年以上で屋根材や防水シートの劣化が進行します。築10年、20年をめどに定期的な点検・メンテナンスを行うことで雨漏りを予防できます。" },
  { q: "雨漏りを放置するとどうなりますか？", a: "木材の腐食、カビの発生、シロアリ被害、断熱材の劣化、漏電リスク、天井の落下など、被害が拡大します。修理費用も大幅に増加するため、早期対応が非常に重要です。" },
  { q: "屋根の雨漏り修理費用の目安は？", a: "部分補修であれば3〜10万円、棟板金の修理は5〜30万円、カバー工法は50〜120万円、葺き替えは100〜300万円が目安です。詳しくは屋根修理の費用ページをご覧ください。" },
  { q: "雨漏りの応急処置はどうすれば？", a: "室内ではバケツで水を受け、家具を移動させましょう。屋外からブルーシートで覆う方法もありますが、屋根に上がるのは危険です。応急処置後は早めに専門業者に連絡してください。" },
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

export default function CauseRoofPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "原因別", href: "/cause/roof" },
          { name: "屋根" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            屋根の雨漏り原因8つ
          </h1>
          <p className="text-text leading-relaxed mb-6">
            屋根からの雨漏りは、住宅の雨漏り原因の中で最も多いケースです。
            瓦のズレ、棟板金の浮き、スレートのひび割れなど、原因はさまざまです。
            このページでは屋根の雨漏り原因を8つに分類し、自分でできるチェックポイントも解説します。
          </p>
        </section>

        {/* 原因8つ */}
        <section className="py-8">
          <h2 className="section-title">屋根の雨漏り原因</h2>
          <div className="space-y-4">
            {causes.map((c) => (
              <div key={c.num} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-extrabold flex-shrink-0">
                  {c.num}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{c.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 自分でできるチェックポイント */}
        <section className="py-8">
          <h2 className="section-title">自分でできるチェックポイント</h2>
          <div className="glass-card p-6 sm:p-8">
            <ul className="space-y-3">
              {checkPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-dark font-bold flex-shrink-0">&#9654;</span>
                  <p className="text-sm text-text-light">{point}</p>
                </li>
              ))}
            </ul>
            <div className="bg-surface-alt rounded-lg p-4 mt-6">
              <p className="text-sm text-text-light">
                <span className="font-bold text-accent-dark">注意：</span>
                屋根に上がっての確認は転落の危険があります。地上からの目視と室内のチェックにとどめ、
                詳細な点検は専門業者に依頼しましょう。多くの業者が無料点検に対応しています。
              </p>
            </div>
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

        {/* Related links */}
        <section className="py-8">
          <h2 className="section-title">関連ページ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "屋根修理の費用", href: "/cost/roof", tag: "費用相場" },
              { name: "外壁の雨漏り原因", href: "/cause/wall", tag: "外壁" },
              { name: "窓・サッシの雨漏り", href: "/cause/window", tag: "窓" },
              { name: "火災保険の活用", href: "/cost/insurance", tag: "保険" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-hover text-center">
                <h3 className="font-bold text-dark mb-1">{link.name}</h3>
                <span className="tag-pill text-xs">{link.tag}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">屋根の雨漏りを無料で点検</h2>
            <p className="text-white/80 text-sm mb-4">原因の特定から修理まで、プロに任せて安心</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="btn-accent">
                おすすめ業者ランキングを見る
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
