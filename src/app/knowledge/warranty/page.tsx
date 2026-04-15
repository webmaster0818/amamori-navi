import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理の保証ガイド【施工保証・メーカー保証・瑕疵保険】チェックポイント",
  description:
    "雨漏り修理の保証の種類（施工保証・メーカー保証・瑕疵保険）、保証期間の目安、保証書のチェックポイントを詳しく解説。安心して修理を依頼するための知識をまとめました。",
};

const warrantyTypes = [
  { title: "施工保証（業者保証）", period: "5〜10年が一般的", desc: "修理を行った業者が提供する保証です。施工の不具合による雨漏りの再発に対して、無償で再修理を行います。業者の経営状態によっては保証が無効になるリスクがあるため、信頼性の高い業者を選ぶことが重要です。" },
  { title: "メーカー保証（材料保証）", period: "10〜30年が一般的", desc: "屋根材や防水材のメーカーが材料の品質について保証するものです。施工不良は対象外で、あくまで材料自体の欠陥に対する保証です。正規の施工方法で施工されていることが保証の条件になります。" },
  { title: "住宅瑕疵担保責任保険", period: "新築は10年、リフォームは5年", desc: "新築住宅には住宅瑕疵担保履行法により10年間の瑕疵担保責任があります。リフォーム工事にはリフォーム瑕疵保険があり、業者が倒産しても保険法人から補修費用が支払われます。" },
];

const periodGuide = [
  { work: "コーキング補修", period: "3〜5年" },
  { work: "屋根部分補修", period: "5〜10年" },
  { work: "屋根葺き替え", period: "10〜20年" },
  { work: "防水工事", period: "5〜15年" },
  { work: "外壁塗装", period: "5〜10年" },
];

const checkPoints = [
  { title: "保証期間の起算日", desc: "保証がいつから始まるのか（工事完了日か引き渡し日か）を確認しましょう。" },
  { title: "保証の対象範囲", desc: "何が保証の対象で何が対象外かを明確に把握しましょう。経年劣化や天災が除外されていることが多いです。" },
  { title: "免責事項", desc: "保証が適用されない条件（入居者の改造・第三者の施工・天災など）を確認しましょう。" },
  { title: "保証の利用条件", desc: "定期点検を受けることが保証の条件になっている場合があります。条件を守らないと保証が無効になります。" },
  { title: "業者の倒産リスク対策", desc: "業者が倒産すると施工保証は無効になります。リフォーム瑕疵保険に加入している業者を選ぶとこのリスクを軽減できます。" },
  { title: "保証書の保管", desc: "保証書は必ず安全な場所に保管しましょう。デジタルコピーも取っておくと万が一の紛失に備えられます。" },
];

const faqs = [
  { q: "施工保証とメーカー保証の違いは何ですか？", a: "施工保証は修理業者が施工の品質を保証するもので、施工不良による不具合が対象です。メーカー保証は材料メーカーが材料の品質を保証するもので、材料自体の欠陥が対象です。両方あるのが理想的です。" },
  { q: "保証期間が長い業者ほど良いですか？", a: "保証期間は長いに越したことはありませんが、保証内容も重要です。20年保証でも免責事項が多ければ実質的な保証が薄い場合があります。期間と内容の両方を確認しましょう。" },
  { q: "業者が倒産したら保証はどうなりますか？", a: "施工保証は業者の倒産とともに無効になります。これを防ぐために、リフォーム瑕疵保険に加入している業者を選ぶことをおすすめします。保険法人が保証を引き継いでくれます。" },
  { q: "リフォーム瑕疵保険とは何ですか？", a: "リフォーム工事の欠陥に対して、保険法人が修補費用を保証する保険です。業者が倒産しても保険法人から直接補修費用が支払われるため、消費者にとって安心の仕組みです。" },
  { q: "保証書はどのように保管すべきですか？", a: "原本は安全な場所に保管し、コピーやスキャンデータも作成しておきましょう。クラウドストレージに保存しておくと紛失のリスクが減ります。保証期間中は絶対に捨てないでください。" },
  { q: "保証期間内に雨漏りが再発したらどうすればいいですか？", a: "まず保証書を確認し、保証の対象範囲に該当するか確認します。該当する場合は業者に連絡し、再修理を依頼しましょう。業者が対応しない場合は消費生活センターに相談してください。" },
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

export default function KnowledgeWarrantyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "お役立ち", href: "/knowledge/how-to-choose" },
          { name: "保証・アフター" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            雨漏り修理の保証ガイド【施工保証・メーカー保証・瑕疵保険】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            雨漏り修理後の保証は、安心して暮らすために非常に重要です。
            保証の種類（施工保証・メーカー保証・瑕疵保険）、保証期間の目安、保証書で確認すべきポイントを詳しく解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">保証の種類</h2>
          <div className="space-y-4">
            {warrantyTypes.map((w, i) => (
              <div key={i} className="card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-navy text-lg">{w.title}</h3>
                  <span className="tag-pill tag-pill--amber text-xs">{w.period}</span>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">工事内容別の保証期間の目安</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>工事内容</th>
                  <th>保証期間の目安</th>
                </tr>
              </thead>
              <tbody>
                {periodGuide.map((p) => (
                  <tr key={p.work}>
                    <td className="font-bold text-navy">{p.work}</td>
                    <td className="font-semibold text-amber-dark">{p.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">保証書のチェックポイント</h2>
          <div className="space-y-4">
            {checkPoints.map((c, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{c.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{c.desc}</p>
                </div>
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
              { name: "業者の選び方", href: "/knowledge/how-to-choose", tag: "選び方" },
              { name: "悪徳業者の見分け方", href: "/knowledge/scam", tag: "注意" },
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
            <h2 className="text-2xl font-extrabold mb-3">保証のしっかりした業者を選ぼう</h2>
            <p className="text-white/80 text-sm mb-4">当サイト掲載の業者は保証体制が充実しています</p>
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
