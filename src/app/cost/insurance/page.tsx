import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理に火災保険は使える？【2026年最新】適用条件・申請手順を解説",
  description:
    "雨漏り修理に火災保険が使えるケース（風災・雪災・雹災）と使えないケース（経年劣化・施工不良）を解説。申請手順5ステップ、必要書類、注意点もまとめました。",
};

const coveredCases = [
  { case: "台風・暴風雨による損傷", desc: "台風や暴風雨で屋根材が飛ばされた、棟板金がめくれた、外壁が損傷したなどのケース。「風災」として補償されます。" },
  { case: "雹（ひょう）による損傷", desc: "雹によって屋根や外壁が破損したケース。「雹災」として補償されます。スレート屋根やカーポートの被害に多い。" },
  { case: "大雪による損傷", desc: "大雪の重みで雨どいが破損した、屋根が歪んだなどのケース。「雪災」として補償されます。" },
  { case: "落雷による損傷", desc: "落雷で建物の一部が損傷し、そこから雨漏りが発生したケース。落雷被害として補償されます。" },
  { case: "竜巻・突風による損傷", desc: "竜巻や突風で屋根材が飛散した、外壁が損傷したなどのケース。「風災」に含まれます。" },
];

const notCoveredCases = [
  { case: "経年劣化", desc: "年月の経過による自然な劣化（コーキングのひび割れ、塗膜の剥がれ、防水シートの劣化など）は補償対象外です。" },
  { case: "施工不良", desc: "新築時やリフォーム時の施工不良が原因の雨漏りは火災保険の対象外。施工業者の瑕疵担保責任で対応します。" },
  { case: "被害から3年以上経過", desc: "保険法により、被害発生から3年以内に請求しないと時効になります。被害に気づいたら速やかに申請しましょう。" },
  { case: "故意または重大な過失", desc: "自分の故意や重大な過失（メンテナンスを著しく怠ったなど）による損傷は補償されません。" },
  { case: "地震による損傷", desc: "地震が原因の雨漏りは火災保険ではなく、地震保険の対象です。地震保険に加入していない場合は補償されません。" },
];

const steps = [
  { num: "1", title: "被害状況の記録", desc: "雨漏り箇所の写真・動画を撮影します。室内の被害状況と外部の損傷箇所の両方を記録しましょう。修理前の状態を残すことが重要です。" },
  { num: "2", title: "保険会社への連絡", desc: "加入している火災保険の保険会社に電話で連絡し、被害状況を報告します。保険証券の番号を手元に用意しておきましょう。" },
  { num: "3", title: "修理業者への見積もり依頼", desc: "修理業者に現地調査と見積もりを依頼します。火災保険申請に対応した業者を選ぶとスムーズです。見積書は保険申請に必要な書類です。" },
  { num: "4", title: "保険申請書類の提出", desc: "保険会社から届く申請書類に必要事項を記入し、見積書・被害写真などと合わせて提出します。不明点は保険会社に確認しましょう。" },
  { num: "5", title: "保険会社の審査・承認", desc: "保険会社の損害調査員が現地確認を行い、補償対象かどうかを審査します。承認されれば保険金が支払われ、修理を開始できます。" },
];

const requiredDocs = [
  "保険金請求書（保険会社所定の書式）",
  "事故報告書（被害状況の詳細）",
  "被害箇所の写真（修理前の状態）",
  "修理見積書（修理業者作成）",
  "建物の登記簿謄本（必要に応じて）",
  "罹災証明書（自治体発行、大規模災害の場合）",
];

const cautions = [
  { title: "修理前に必ず保険会社に連絡", desc: "修理後に申請すると、被害状況の確認ができず保険金が支払われない場合があります。必ず修理前に保険会社に連絡しましょう。" },
  { title: "「保険で無料修理」の悪徳業者に注意", desc: "「火災保険で全額無料」をうたう業者には注意が必要です。虚偽申請は詐欺罪にあたります。適正な業者を選びましょう。" },
  { title: "免責金額を確認", desc: "契約によっては免責金額（自己負担額）が設定されています。免責金額以下の被害は補償されませんので事前に確認しましょう。" },
  { title: "申請期限は3年", desc: "被害発生から3年を過ぎると時効となり、請求できなくなります。被害に気づいたら早めに申請手続きを始めましょう。" },
];

const faqs = [
  { q: "雨漏り修理に火災保険が使えるのはどんな場合ですか？", a: "台風・暴風雨・雹・大雪などの自然災害（風災・雹災・雪災）が原因で雨漏りが発生した場合に、火災保険が適用される可能性があります。経年劣化や施工不良が原因の場合は対象外です。" },
  { q: "火災保険の申請にお金はかかりますか？", a: "火災保険の申請自体は無料です。ただし、申請に必要な修理見積書の作成を業者に依頼する場合、無料見積もりの業者を選べば費用はかかりません。申請代行費用を請求する業者もいるので事前に確認しましょう。" },
  { q: "築年数が古くても火災保険は使えますか？", a: "築年数に関係なく、自然災害による被害であれば火災保険の申請は可能です。ただし、経年劣化との切り分けが重要になります。保険会社の調査員が現地確認して判断します。" },
  { q: "保険金が支払われるまでどのくらいかかりますか？", a: "通常、申請から2週間〜1ヶ月程度で支払われます。大規模災害時は審査に時間がかかる場合があります。申請書類に不備があると遅れるので、正確に記入しましょう。" },
  { q: "火災保険を使うと保険料が上がりますか？", a: "火災保険は自動車保険と異なり、保険金を請求しても保険料が上がることは基本的にありません。安心して申請してください。" },
  { q: "火災保険の申請をサポートしてくれる業者はありますか？", a: "雨漏り修理110番やアメピタなど、当サイトで紹介している業者の多くが火災保険の申請サポートに対応しています。申請に必要な書類の作成や手続きのアドバイスを受けられます。" },
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

export default function CostInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "費用相場", href: "/cost/average" },
          { name: "火災保険" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            雨漏り修理に火災保険は使える？
          </h1>
          <p className="text-text leading-relaxed mb-6">
            台風や暴風雨などの自然災害が原因の雨漏りには、火災保険が適用される可能性があります。
            このページでは、火災保険が使えるケースと使えないケース、申請手順、必要書類、注意点を詳しく解説します。
          </p>
        </section>

        {/* 使えるケース */}
        <section className="py-8">
          <h2 className="section-title">火災保険が使えるケース</h2>
          <div className="space-y-3">
            {coveredCases.map((c) => (
              <div key={c.case} className="card-hover">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 flex-shrink-0 text-lg">&#10003;</span>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{c.case}</h3>
                    <p className="text-sm text-text-light">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 使えないケース */}
        <section className="py-8">
          <h2 className="section-title">火災保険が使えないケース</h2>
          <div className="space-y-3">
            {notCoveredCases.map((c) => (
              <div key={c.case} className="card-hover">
                <div className="flex items-start gap-3">
                  <span className="text-accent-dark mt-0.5 flex-shrink-0 text-lg">&#10007;</span>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{c.case}</h3>
                    <p className="text-sm text-text-light">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 申請手順5ステップ */}
        <section className="py-8">
          <h2 className="section-title">火災保険の申請手順 5ステップ</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.num} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-extrabold flex-shrink-0">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 必要書類 */}
        <section className="py-8">
          <h2 className="section-title">申請に必要な書類</h2>
          <div className="glass-card p-6">
            <ul className="space-y-2">
              {requiredDocs.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-dark mt-0.5 flex-shrink-0 font-bold">{i + 1}.</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 注意点 */}
        <section className="py-8">
          <h2 className="section-title">火災保険申請の注意点</h2>
          <div className="space-y-4">
            {cautions.map((c, i) => (
              <div key={i} className="card-hover !border-accent/30">
                <h3 className="font-bold text-accent-dark mb-1">{c.title}</h3>
                <p className="text-sm text-text-light">{c.desc}</p>
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
              { name: "屋根修理の費用", href: "/cost/roof", tag: "屋根" },
              { name: "外壁修理の費用", href: "/cost/wall", tag: "外壁" },
              { name: "天井修理の費用", href: "/cost/ceiling", tag: "天井" },
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
            <h2 className="text-2xl font-extrabold mb-3">火災保険申請にも対応した業者を探す</h2>
            <p className="text-white/80 text-sm mb-4">保険申請サポート付きの業者に無料相談しましょう</p>
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
