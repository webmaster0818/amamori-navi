import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "窓・サッシの雨漏り原因5つ【2026年最新】コーキング劣化・歪みを解説",
  description:
    "窓・サッシ周りの雨漏り原因を5つに分類して解説。コーキング劣化、サッシの歪み、防水テープ劣化、外壁との取り合い、結露との見分け方。原因別の対処法やよくある質問もまとめました。",
};

const causes = [
  { num: 1, title: "コーキング（シーリング）の劣化", desc: "窓枠と外壁の間を埋めるコーキングは7〜10年で劣化します。硬化・ひび割れ・剥離が起こると隙間が生じ、雨水が侵入します。窓周りのコーキングは紫外線や雨風に直接さらされるため劣化が早い箇所です。打ち替え費用は1箇所あたり5,000〜15,000円程度です。" },
  { num: 2, title: "サッシの歪み・変形", desc: "建物の経年劣化や地震の影響でサッシが歪むと、窓枠と外壁の間に隙間が生じます。アルミサッシは熱膨張で変形することもあります。歪みが大きい場合はサッシの交換が必要になり、費用は5〜20万円程度です。" },
  { num: 3, title: "防水テープの劣化", desc: "サッシ取り付け時に使用する防水テープは、経年劣化で粘着力が低下し防水性能が失われます。防水テープは外壁の内側にあるため目視では確認できず、外壁を一部撤去しての調査が必要な場合があります。" },
  { num: 4, title: "外壁との取り合い部分の不具合", desc: "窓と外壁が接する「取り合い」部分は、異なる素材が接合される複雑な箇所です。施工が不十分だったり経年劣化で隙間が生じると雨漏りが発生します。特に出窓や大型の窓は取り合い部分が多く、雨漏りリスクが高い箇所です。" },
  { num: 5, title: "引違い窓のレール部分からの浸入", desc: "引違い窓のレール部分は構造上完全な防水が難しく、暴風雨時に雨水が浸入することがあります。レール部分の排水穴が詰まっている場合は掃除で改善できることもあります。台風時に特に発生しやすい症状です。" },
];

const condensationDiff = [
  { item: "発生タイミング", rain: "雨の日・雨の翌日", condensation: "冬の寒い日・温度差がある日" },
  { item: "水滴の場所", rain: "窓枠の上部・サッシと壁の境目", condensation: "ガラス面・サッシ枠（特に下部）" },
  { item: "水の量", rain: "雨の強さに比例", condensation: "少量〜中量（ポタポタ程度）" },
  { item: "発生パターン", rain: "風向きや雨量で変化", condensation: "毎日同じような場所に発生" },
];

const faqs = [
  { q: "窓からの雨漏りで最も多い原因は？", a: "最も多いのはコーキング（シーリング）の劣化です。窓周りのコーキングは7〜10年で劣化し、ひび割れや剥離から雨水が侵入します。定期的な打ち替えで予防できます。" },
  { q: "窓の雨漏りと結露の見分け方は？", a: "雨漏りは雨の日に窓枠の上部やサッシと壁の境目から水が出ます。結露は冬の寒い日にガラス面やサッシ枠に水滴がつきます。雨が降っていない日にも水滴が出る場合は結露の可能性が高いです。" },
  { q: "窓の雨漏り修理費用はいくら？", a: "コーキング打ち替えは1箇所5,000〜15,000円、サッシの調整は1〜3万円、サッシ交換は5〜20万円が目安です。原因や損傷の程度で費用が変わりますので、まずは業者に調査を依頼しましょう。" },
  { q: "台風の時だけ窓から雨漏りするのは問題ですか？", a: "台風などの暴風雨時のみ発生する場合は、引違い窓のレール部分や窓の気密性に問題がある可能性があります。頻繁でなければ応急処置で対応できますが、繰り返す場合は業者に相談しましょう。" },
  { q: "窓の雨漏りは自分で修理できますか？", a: "市販のコーキング材で応急処置は可能ですが、防水テープの劣化やサッシの歪みなど根本的な原因への対処は専門業者に依頼することをおすすめします。誤った施工は被害を広げる恐れがあります。" },
  { q: "窓の雨漏りに火災保険は適用されますか？", a: "台風や暴風雨など自然災害でサッシや窓周りが損傷した場合は、火災保険の風災補償が適用される可能性があります。経年劣化は対象外です。被害を発見したら写真を残し、保険会社に確認しましょう。" },
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

export default function CauseWindowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "原因別", href: "/cause/roof" },
          { name: "窓・サッシ" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            窓・サッシの雨漏り原因5つ
          </h1>
          <p className="text-text leading-relaxed mb-6">
            窓やサッシ周りの雨漏りは、コーキングの劣化やサッシの歪みが主な原因です。
            結露と間違えやすいため、正確な原因の見極めが重要です。
            このページでは窓周りの雨漏り原因5つと、結露との見分け方を詳しく解説します。
          </p>
        </section>

        {/* 原因5つ */}
        <section className="py-8">
          <h2 className="section-title">窓・サッシの雨漏り原因</h2>
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

        {/* 結露との見分け方 */}
        <section className="py-8">
          <h2 className="section-title">雨漏りと結露の見分け方</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>チェック項目</th>
                  <th>雨漏りの場合</th>
                  <th>結露の場合</th>
                </tr>
              </thead>
              <tbody>
                {condensationDiff.map((d) => (
                  <tr key={d.item}>
                    <td className="font-bold text-dark">{d.item}</td>
                    <td className="text-sm">{d.rain}</td>
                    <td className="text-sm">{d.condensation}</td>
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
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
              { name: "外壁の雨漏り原因", href: "/cause/wall", tag: "外壁" },
              { name: "屋根の雨漏り原因", href: "/cause/roof", tag: "屋根" },
              { name: "ベランダの雨漏り", href: "/cause/balcony", tag: "ベランダ" },
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
            <h2 className="text-2xl font-extrabold mb-3">窓の雨漏りを無料で点検</h2>
            <p className="text-white/80 text-sm mb-4">結露か雨漏りか、プロが原因を正確に特定します</p>
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
