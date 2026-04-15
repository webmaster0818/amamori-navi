import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "屋根の雨漏り修理費用【2026年最新】屋根タイプ別・工事別の料金相場",
  description:
    "屋根の雨漏り修理費用を屋根タイプ別（瓦・スレート・金属屋根）、工事種類別（部分補修・カバー工法・葺き替え）に徹底解説。費用を抑えるポイントやよくある質問もまとめました。",
};

const roofTypeCosts = [
  { type: "瓦屋根", partial: "3〜15万円", cover: "60〜130万円", replace: "120〜300万円", note: "瓦のズレや割れの修理は比較的安価。葺き替えは重い瓦の撤去費用が加算。" },
  { type: "スレート屋根", partial: "3〜10万円", cover: "50〜120万円", replace: "100〜250万円", note: "ひび割れや欠けの補修が多い。カバー工法との相性が良い。" },
  { type: "金属屋根（トタン・ガルバリウム）", partial: "3〜8万円", cover: "50〜100万円", replace: "80〜200万円", note: "サビや穴あきの補修。ガルバリウム鋼板は耐久性が高く長期的にコスパが良い。" },
];

const workTypeCosts = [
  { work: "部分補修", range: "3〜10万円", desc: "瓦のズレ修正、スレートのひび割れ補修、棟板金の浮き修理など。被害が小さい場合に対応。工期は1〜2日程度。" },
  { work: "棟板金の修理・交換", range: "5〜30万円", desc: "屋根の頂上部分にある棟板金の釘浮き・めくれ・交換。台風後に多い修理内容です。" },
  { work: "谷樋（たにとい）の修理", range: "5〜20万円", desc: "屋根面が合わさる谷部分の板金補修・交換。腐食や穴あきが原因の雨漏りに対応。" },
  { work: "カバー工法（重ね葺き）", range: "50〜120万円", desc: "既存の屋根の上に新しい屋根材を重ねる工法。撤去費用がかからず葺き替えより安価。工期は5〜10日程度。" },
  { work: "葺き替え", range: "100〜300万円", desc: "既存の屋根材を全て撤去し新しい屋根材に交換。最も大規模な修理で、防水シートも新設。工期は1〜3週間。" },
];

const faqs = [
  { q: "屋根の雨漏り修理で最も多い工事は何ですか？", a: "最も多いのは棟板金の修理・交換とコーキング補修です。費用は5〜30万円程度で、台風や強風の後に発生することが多いです。早めの対応で被害を最小限に抑えられます。" },
  { q: "カバー工法と葺き替え、どちらを選ぶべきですか？", a: "屋根の下地（野地板）が健全であればカバー工法がコストパフォーマンスに優れます。下地の腐食が進んでいる場合は葺き替えが必要です。業者に下地の状態を確認してもらいましょう。" },
  { q: "屋根修理に足場は必要ですか？", a: "2階以上の屋根修理では安全のため足場の設置が必要です。足場代は10〜20万円程度が相場です。外壁塗装など他の工事と同時に行うと足場代を1回分に抑えられます。" },
  { q: "屋根の雨漏り修理に火災保険は使えますか？", a: "台風・暴風雨・雹・大雪など自然災害が原因の場合は火災保険が適用される可能性があります。経年劣化は対象外ですが、被害を発見したら早めに保険会社に連絡しましょう。" },
  { q: "修理後の保証はありますか？", a: "一般的な業者では5〜10年の施工保証が付きます。保証の対象範囲（施工部分のみか、雨漏り全般か）を事前に確認しましょう。保証書を必ず受け取ってください。" },
  { q: "屋根の修理費用を抑えるコツは？", a: "複数業者から見積もりを取る、火災保険を活用する、外壁塗装と同時施工で足場代を節約する、大規模修理が必要になる前に早期対応する、の4つが効果的です。" },
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

export default function CostRoofPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "費用相場", href: "/cost/average" },
          { name: "屋根修理" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            屋根の雨漏り修理費用
          </h1>
          <p className="text-text leading-relaxed mb-6">
            屋根の雨漏り修理にかかる費用は、屋根のタイプ（瓦・スレート・金属）や工事の種類（部分補修・カバー工法・葺き替え）によって大きく異なります。
            このページでは、屋根タイプ別・工事種類別の費用相場を詳しく解説します。
          </p>
        </section>

        {/* 屋根タイプ別の費用 */}
        <section className="py-8">
          <h2 className="section-title">屋根タイプ別の修理費用</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>屋根タイプ</th>
                  <th>部分補修</th>
                  <th>カバー工法</th>
                  <th>葺き替え</th>
                </tr>
              </thead>
              <tbody>
                {roofTypeCosts.map((r) => (
                  <tr key={r.type}>
                    <td className="font-bold text-navy">{r.type}</td>
                    <td className="text-amber-dark font-semibold">{r.partial}</td>
                    <td className="text-amber-dark font-semibold">{r.cover}</td>
                    <td className="text-amber-dark font-semibold">{r.replace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3 mt-6">
            {roofTypeCosts.map((r) => (
              <div key={r.type} className="glass-card p-4">
                <h3 className="font-bold text-navy mb-1">{r.type}</h3>
                <p className="text-sm text-text-light">{r.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 工事種類別の費用 */}
        <section className="py-8">
          <h2 className="section-title">工事種類別の費用相場</h2>
          <div className="space-y-4">
            {workTypeCosts.map((w) => (
              <div key={w.work} className="card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-navy text-lg">{w.work}</h3>
                  <span className="tag-pill tag-pill--amber">{w.range}</span>
                </div>
                <p className="text-sm text-text-light">{w.desc}</p>
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

        {/* Related links */}
        <section className="py-8">
          <h2 className="section-title">関連ページ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "費用相場ガイド", href: "/cost/average", tag: "総合" },
              { name: "屋根の雨漏り原因", href: "/cause/roof", tag: "原因別" },
              { name: "火災保険の活用", href: "/cost/insurance", tag: "保険" },
              { name: "外壁修理の費用", href: "/cost/wall", tag: "外壁" },
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
            <h2 className="text-2xl font-extrabold mb-3">屋根の雨漏りを無料で見積もり</h2>
            <p className="text-white/80 text-sm mb-4">複数業者の見積もりを比較して、適正価格で修理しましょう</p>
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
