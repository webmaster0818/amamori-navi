import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "天井の雨漏り修理費用【2026年最新】シミ・カビ・落下の修理料金相場",
  description:
    "天井の雨漏り修理費用をシミ・カビ・天井落下など症状別に解説。原因箇所の特定費用や修理の流れ、よくある質問もまとめました。天井の異変に気づいたら早めの対応が重要です。",
};

const symptomCosts = [
  { symptom: "天井のシミ（軽度）", range: "3〜8万円", desc: "天井クロスの張り替えと防水処理。シミが小さく原因が特定しやすい場合は比較的安価に修理できます。" },
  { symptom: "天井のカビ", range: "5〜15万円", desc: "カビの除去・防カビ処理・天井材の交換。カビが広範囲に及ぶ場合や断熱材にまで達している場合は費用が上がります。" },
  { symptom: "天井材の膨らみ・たわみ", range: "8〜20万円", desc: "天井材の交換と下地の補修。水分を吸って膨張した天井材は交換が必要です。" },
  { symptom: "天井の落下・穴あき", range: "10〜30万円", desc: "天井材の全面交換と構造補修。長期間放置した場合に発生し、大規模な修理が必要になります。" },
  { symptom: "断熱材の交換", range: "5〜15万円", desc: "水を吸った断熱材の撤去と新設。断熱材が湿ると断熱性能が低下し、カビの温床にもなります。" },
];

const investigationCosts = [
  { method: "目視調査", range: "無料〜1万円", desc: "天井裏に入って目視で確認。多くの業者が無料で対応しています。" },
  { method: "散水試験", range: "3〜5万円", desc: "屋根や外壁に水をかけて雨漏り箇所を特定する方法。精度が高く、原因不明の場合に有効。" },
  { method: "赤外線カメラ調査", range: "5〜10万円", desc: "サーモグラフィで水分の浸入経路を可視化。非破壊で調査でき、広範囲の調査に向いています。" },
  { method: "蛍光塗料調査", range: "5〜15万円", desc: "蛍光塗料を混ぜた水を流して紫外線で経路を特定。複雑な浸水経路の調査に有効です。" },
];

const faqs = [
  { q: "天井のシミは必ず雨漏りが原因ですか？", a: "天井のシミの原因は雨漏りだけではありません。結露、上階からの水漏れ（配管破損）、エアコンのドレン漏れなども考えられます。原因によって修理方法と費用が異なるため、まずは業者に調査を依頼しましょう。" },
  { q: "天井から水滴が落ちてきたらどうすれば？", a: "まずバケツで水を受け、周囲の家具を移動させましょう。電気設備に水がかかっている場合はブレーカーを落としてください。応急処置の後、すぐに修理業者に連絡しましょう。雨漏り修理110番なら24時間対応です。" },
  { q: "天井の雨漏り修理は何日くらいかかりますか？", a: "軽度のシミ補修であれば1〜2日、天井材の交換を伴う場合は3〜5日、大規模な修理の場合は1〜2週間が目安です。原因箇所の修理（屋根・外壁）と室内の修復を合わせた期間になります。" },
  { q: "天井の雨漏りは自分で修理できますか？", a: "天井のシミ隠しや応急処置は可能ですが、根本的な修理は専門業者に依頼することを強くおすすめします。天井裏の作業は安全面のリスクがあり、原因の特定も専門知識が必要です。" },
  { q: "天井にカビが生えている場合の健康リスクは？", a: "カビはアレルギー性鼻炎、喘息、アトピー性皮膚炎などの原因になります。特に小さなお子様や高齢者がいるご家庭では早急な対応が必要です。カビの除去と原因の雨漏り修理を同時に行いましょう。" },
  { q: "天井の雨漏り修理に火災保険は使えますか？", a: "自然災害（台風・暴風雨・雹・大雪）が原因で天井に被害が出た場合は、火災保険が適用される可能性があります。修理前に被害状況の写真を撮影し、保険会社に連絡しましょう。" },
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

export default function CostCeilingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "費用相場", href: "/cost/average" },
          { name: "天井修理" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            天井の雨漏り修理費用
          </h1>
          <p className="text-text leading-relaxed mb-6">
            天井のシミやカビ、水滴の落下は雨漏りのサインです。放置すると天井材の落下やカビによる健康被害につながります。
            このページでは、天井の症状別の修理費用と原因箇所の特定にかかる調査費用を詳しく解説します。
          </p>
        </section>

        {/* 症状別の修理費用 */}
        <section className="py-8">
          <h2 className="section-title">症状別の修理費用</h2>
          <div className="space-y-4">
            {symptomCosts.map((s) => (
              <div key={s.symptom} className="card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-navy text-lg">{s.symptom}</h3>
                  <span className="tag-pill tag-pill--amber">{s.range}</span>
                </div>
                <p className="text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="glass-card p-6 mt-6">
            <p className="text-sm text-text-light">
              ※ 上記は天井の室内側の修理費用です。雨漏りの原因箇所（屋根・外壁など）の修理費用は別途かかります。
              原因箇所の修理を行わないと再発するため、必ずセットで修理しましょう。
            </p>
          </div>
        </section>

        {/* 原因箇所の特定費用 */}
        <section className="py-8">
          <h2 className="section-title">原因箇所の特定（調査費用）</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>調査方法</th>
                  <th>費用</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                {investigationCosts.map((inv) => (
                  <tr key={inv.method}>
                    <td className="font-bold text-navy">{inv.method}</td>
                    <td className="text-amber-dark font-semibold">{inv.range}</td>
                    <td className="text-sm">{inv.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { name: "費用相場ガイド", href: "/cost/average", tag: "総合" },
              { name: "屋根の雨漏り原因", href: "/cause/roof", tag: "原因別" },
              { name: "屋根修理の費用", href: "/cost/roof", tag: "屋根" },
              { name: "火災保険の活用", href: "/cost/insurance", tag: "保険" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-hover text-center">
                <h3 className="font-bold text-navy mb-1">{link.name}</h3>
                <span className="tag-pill text-xs">{link.tag}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-8">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">天井の雨漏りを無料で相談</h2>
            <p className="text-white/80 text-sm mb-4">天井の異変に気づいたら早めの対応が大切です</p>
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
