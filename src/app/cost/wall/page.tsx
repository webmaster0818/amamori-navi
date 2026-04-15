import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "外壁の雨漏り修理費用【2026年最新】外壁タイプ別・工事別の料金相場",
  description:
    "外壁の雨漏り修理費用を外壁タイプ別、工事別（コーキング補修2〜6万円・部分塗装5〜15万円・全面塗装60〜120万円）に解説。費用を抑えるポイントやよくある質問もまとめました。",
};

const wallTypeCosts = [
  { type: "サイディング", caulk: "2〜5万円", partial: "5〜15万円", full: "60〜100万円", note: "目地のコーキング劣化が多い。定期的なコーキング打ち替えで雨漏りを予防できます。" },
  { type: "モルタル", caulk: "3〜6万円", partial: "8〜15万円", full: "70〜120万円", note: "ひび割れ（クラック）が発生しやすい。ヘアクラックは塗装で、構造クラックは補修が必要。" },
  { type: "ALC", caulk: "3〜6万円", partial: "5〜12万円", full: "80〜120万円", note: "吸水性が高いため防水性能が低下しやすい。定期的な塗装メンテナンスが重要です。" },
  { type: "タイル", caulk: "3〜5万円", partial: "5〜15万円", full: "100〜150万円", note: "タイル自体は耐久性が高いが、目地や下地の劣化で雨漏りが発生することがある。" },
];

const workCosts = [
  { work: "コーキング補修（打ち替え）", range: "2〜6万円", desc: "劣化したコーキング材を撤去し、新しいコーキングを充填。外壁の目地や窓周りの補修に。部分的な補修なら1日で完了します。" },
  { work: "部分塗装", range: "5〜15万円", desc: "ひび割れ補修後の部分的な塗装。クラック補修とセットで行うことが多い。補修箇所の範囲によって費用が変動します。" },
  { work: "全面塗装", range: "60〜120万円", desc: "外壁全面の塗り替え。足場代（10〜20万円）込み。塗料のグレード（シリコン・フッ素・無機）により費用が異なります。工期は1〜3週間。" },
  { work: "外壁材の部分張り替え", range: "10〜30万円", desc: "損傷した外壁材を部分的に張り替え。サイディングの反りや破損が大きい場合に対応します。" },
  { work: "外壁全面張り替え", range: "150〜300万円", desc: "既存の外壁材を撤去し新しい外壁材に交換。外壁の損傷が広範囲に及ぶ場合の最終手段です。" },
];

const faqs = [
  { q: "外壁の雨漏り修理で最も多い工事は？", a: "最も多いのはコーキング補修（打ち替え）です。費用は2〜6万円程度で、外壁の目地や窓周りのコーキング劣化が原因の雨漏りに対応します。築10年以上の建物では定期的な点検をおすすめします。" },
  { q: "外壁のひび割れは放置しても大丈夫ですか？", a: "幅0.3mm以下のヘアクラックは直ちに問題ありませんが、0.3mm以上の構造クラックは雨水が侵入する恐れがあります。早めに業者に相談し、補修の必要性を判断してもらいましょう。" },
  { q: "外壁塗装と雨漏り修理は同時にできますか？", a: "はい、同時施工がおすすめです。足場代（10〜20万円）を1回分に抑えられるため、トータルコストを削減できます。雨漏り修理と外壁塗装のタイミングが近い場合は、まとめて依頼しましょう。" },
  { q: "外壁の雨漏り原因を特定する方法は？", a: "目視調査のほか、散水試験（水をかけて雨漏り箇所を特定）、赤外線カメラ調査などの方法があります。調査費用は無料〜5万円程度です。多くの業者が無料で現地調査を行っています。" },
  { q: "外壁の雨漏り修理に火災保険は使えますか？", a: "台風や暴風雨など自然災害で外壁が損傷した場合は、火災保険が適用される可能性があります。経年劣化は対象外です。被害を発見したら写真を残し、早めに保険会社に連絡しましょう。" },
  { q: "コーキングの寿命はどのくらいですか？", a: "一般的なコーキング材の寿命は7〜10年です。紫外線や雨風にさらされる面は劣化が早く、5年程度でひび割れや剥がれが始まることもあります。定期的な点検と打ち替えで雨漏りを予防しましょう。" },
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

export default function CostWallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "費用相場", href: "/cost/average" },
          { name: "外壁修理" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            外壁の雨漏り修理費用
          </h1>
          <p className="text-text leading-relaxed mb-6">
            外壁からの雨漏りは、コーキングの劣化やひび割れが主な原因です。
            修理費用はコーキング補修の2〜6万円から全面塗装の60〜120万円まで幅があります。
            このページでは外壁タイプ別・工事別の費用相場を詳しく解説します。
          </p>
        </section>

        {/* 外壁タイプ別の費用 */}
        <section className="py-8">
          <h2 className="section-title">外壁タイプ別の修理費用</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>外壁タイプ</th>
                  <th>コーキング補修</th>
                  <th>部分塗装</th>
                  <th>全面塗装</th>
                </tr>
              </thead>
              <tbody>
                {wallTypeCosts.map((w) => (
                  <tr key={w.type}>
                    <td className="font-bold text-navy">{w.type}</td>
                    <td className="text-amber-dark font-semibold">{w.caulk}</td>
                    <td className="text-amber-dark font-semibold">{w.partial}</td>
                    <td className="text-amber-dark font-semibold">{w.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3 mt-6">
            {wallTypeCosts.map((w) => (
              <div key={w.type} className="glass-card p-4">
                <h3 className="font-bold text-navy mb-1">{w.type}</h3>
                <p className="text-sm text-text-light">{w.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 工事種類別の費用 */}
        <section className="py-8">
          <h2 className="section-title">工事種類別の費用相場</h2>
          <div className="space-y-4">
            {workCosts.map((w) => (
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
              { name: "外壁の雨漏り原因", href: "/cause/wall", tag: "原因別" },
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
            <h2 className="text-2xl font-extrabold mb-3">外壁の雨漏りを無料で見積もり</h2>
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
