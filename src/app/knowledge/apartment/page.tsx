import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マンション・賃貸の雨漏り対策ガイド【責任の所在・費用負担・対応手順】",
  description:
    "マンションや賃貸住宅で雨漏りが発生した場合の対応手順、責任の所在、費用負担を詳しく解説。分譲マンションの管理組合対応、共用部vs専有部の違いも紹介します。",
};

const rentalSteps = [
  { title: "管理会社・大家に連絡する", desc: "賃貸住宅で雨漏りが発生したら、まず管理会社または大家に連絡します。自分で勝手に修理業者を手配せず、管理側の指示を仰ぎましょう。" },
  { title: "被害状況を写真で記録する", desc: "雨漏りの箇所、水の量、被害を受けた家財などを写真や動画で記録します。後の費用負担の交渉や保険申請に必要な証拠になります。" },
  { title: "室内の応急処置を行う", desc: "バケツで水を受ける、家電を移動するなど、被害拡大を防ぐ応急処置を行います。応急処置にかかった費用は管理側に請求できる場合があります。" },
  { title: "管理側の対応を待つ", desc: "管理会社や大家が修理業者の手配を行います。対応が遅い場合は催促し、状況が改善しなければ書面で修繕を求めましょう。" },
  { title: "家財被害がある場合は保険を確認", desc: "入居時に加入した家財保険（借家人賠償保険）の内容を確認します。家財の水濡れ被害がカバーされる場合があります。" },
];

const responsibilityTable = [
  { situation: "建物の構造（屋根・外壁）が原因", responsible: "大家（管理会社）", note: "民法606条に基づき賃貸人が修繕義務を負う" },
  { situation: "入居者の過失（窓の閉め忘れ等）", responsible: "入居者", note: "善管注意義務違反にあたる可能性" },
  { situation: "経年劣化による雨漏り", responsible: "大家（管理会社）", note: "建物の維持管理は賃貸人の責任" },
  { situation: "上の階の住人の過失", responsible: "上の階の住人", note: "加害者に損害賠償を請求できる" },
  { situation: "入居者の家財への被害", responsible: "状況による", note: "家財保険でカバーされる場合が多い" },
];

const condoInfo = [
  { title: "共用部分の雨漏り", desc: "屋上・外壁・共用廊下などの共用部分からの雨漏りは管理組合（管理費・修繕積立金）で修理します。個人で業者を手配せず、管理組合に報告しましょう。" },
  { title: "専有部分の雨漏り", desc: "バルコニーの床（防水層）や窓のコーキングなど、専有部分に起因する雨漏りは原則として区分所有者の負担になります。ただし共用部分との境界は管理規約を確認しましょう。" },
  { title: "管理組合への報告手順", desc: "雨漏りを発見したら、まず管理組合（管理会社）に報告します。写真を添えて報告し、理事会で修繕の検討がなされます。緊急の場合は応急処置の費用を管理組合に請求できる場合があります。" },
  { title: "修繕積立金の活用", desc: "大規模な防水工事は修繕積立金から支出されます。長期修繕計画で防水工事が計画されているか確認しましょう。積立金不足の場合は一時金の徴収が必要になることもあります。" },
];

const faqs = [
  { q: "賃貸で雨漏りしたら誰が費用を負担しますか？", a: "建物の構造に起因する雨漏りの修理費用は大家（管理会社）が負担するのが原則です。民法606条により、賃貸人には建物の修繕義務があります。ただし入居者の過失が原因の場合は入居者負担になります。" },
  { q: "管理会社が修理に対応してくれない場合は？", a: "まず書面（内容証明郵便）で修繕を要求しましょう。それでも対応がない場合は、自分で修理して費用を請求する権利があります（民法607条の2）。消費生活センターや弁護士への相談も検討してください。" },
  { q: "雨漏りで家賃の減額を求められますか？", a: "はい。2020年の民法改正（611条）により、雨漏りで住居の一部が使用できない場合、その割合に応じて賃料が当然に減額されます。管理会社に減額を申し出ましょう。" },
  { q: "分譲マンションの防水工事は誰が決めますか？", a: "共用部分の防水工事は管理組合の総会決議で決まります。通常、長期修繕計画に基づいて実施されます。緊急の場合は理事会の判断で応急処置が行われることもあります。" },
  { q: "上の階からの水漏れは雨漏りですか？", a: "上の階の水道管の故障や排水の詰まりが原因の場合、厳密には「水漏れ」であり雨漏りとは異なります。この場合は上の階の住人または管理組合に修理を求めることになります。" },
  { q: "マンションの雨漏り修理はどのくらいかかりますか？", a: "応急的なコーキング補修なら2〜8万円、ベランダの防水工事なら5〜15万円、屋上の防水工事は数十万〜数百万円になります。共用部分の修理費用は管理組合負担、専有部分は区分所有者負担が原則です。" },
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

export default function KnowledgeApartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "お役立ち", href: "/knowledge/how-to-choose" },
          { name: "マンション・賃貸" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            マンション・賃貸の雨漏り対策ガイド
          </h1>
          <p className="text-text leading-relaxed mb-6">
            マンションや賃貸住宅で雨漏りが発生した場合、戸建てとは対応方法が異なります。
            賃貸の対応手順・責任の所在・費用負担から、分譲マンションの管理組合対応まで詳しく解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">賃貸住宅の対応手順</h2>
          <div className="space-y-4">
            {rentalSteps.map((step, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">責任の所在と費用負担</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>状況</th>
                  <th>費用負担</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {responsibilityTable.map((r, i) => (
                  <tr key={i}>
                    <td className="font-bold text-navy">{r.situation}</td>
                    <td className="font-semibold text-amber-dark">{r.responsible}</td>
                    <td className="text-sm">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">分譲マンションの場合</h2>
          <div className="space-y-4">
            {condoInfo.map((info, i) => (
              <div key={i} className="card-hover">
                <h3 className="font-bold text-navy text-lg mb-1">{info.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{info.desc}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="py-8">
          <h2 className="section-title">関連ページ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "応急処置ガイド", href: "/diy/emergency", tag: "緊急" },
              { name: "室内対策", href: "/diy/bucket", tag: "室内" },
              { name: "業者の選び方", href: "/knowledge/how-to-choose", tag: "選び方" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-hover text-center">
                <h3 className="font-bold text-navy mb-1">{link.name}</h3>
                <span className="tag-pill text-xs">{link.tag}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">マンションの雨漏りもプロに相談</h2>
            <p className="text-white/80 text-sm mb-4">マンション対応の実績がある業者から無料見積もりを取れます</p>
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
