import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理の悪徳業者の見分け方【8つの手口と対処法】詐欺被害を防ぐ",
  description:
    "雨漏り修理の悪徳業者が使う8つの手口（訪問販売・不安煽り・大幅値引き・契約急かし等）と見分け方チェックリスト、被害に遭った場合の対処法を詳しく解説します。",
};

const scamTactics = [
  { title: "突然の訪問販売", desc: "「近くで工事をしていたら屋根が傷んでいるのが見えた」と突然訪問してくる業者は要注意です。不安を煽って契約を急がせるのが典型的な手口です。" },
  { title: "不安を過剰に煽る", desc: "「今すぐ修理しないと家が倒壊する」「このままでは住めなくなる」など、過度に不安を煽って冷静な判断をさせない業者は信用できません。" },
  { title: "大幅な値引きを提示する", desc: "「通常100万円のところ、今日契約すれば50万円」など大幅な値引きで即決を迫る業者は、最初の価格設定が不当に高い可能性があります。" },
  { title: "契約を急がせる", desc: "「今日中に契約しないとこの価格は適用できない」「他にも希望者がいる」など、考える時間を与えずに契約を急がせる業者は避けましょう。" },
  { title: "無料点検を口実にする", desc: "「無料で屋根を点検します」と言って屋根に登り、わざと壊したり、小さな問題を大げさに報告して高額な修理を勧める手口があります。" },
  { title: "見積書を出さない・口約束", desc: "正式な見積書を出さず、口頭だけで金額を伝えて契約を進めようとする業者は、後から追加費用を請求してくるリスクがあります。" },
  { title: "前払いを要求する", desc: "工事前に全額前払いを要求する業者は要注意です。前払い後に工事が行われない、手抜き工事をされるなどの被害が報告されています。" },
  { title: "保証書を発行しない", desc: "「口頭で保証する」と言いながら保証書を出さない業者は、再発時に対応してもらえない可能性が高いです。必ず書面での保証を求めましょう。" },
];

const checklist = [
  "訪問販売ではなく自分で探した業者か",
  "会社の所在地・連絡先が明確か",
  "建設業許可などの資格を保有しているか",
  "書面で見積書が提出されるか",
  "見積もりの内訳が明確か（一式表記ばかりではないか）",
  "契約を急がされていないか",
  "他社との相見積もりを嫌がらないか",
  "保証書を書面で発行してくれるか",
  "口コミやレビューで評判を確認したか",
  "クーリングオフの説明があるか",
];

const remedies = [
  { title: "クーリングオフを利用する", desc: "訪問販売で契約した場合、契約書を受け取ってから8日以内であればクーリングオフ（契約の無条件解除）が可能です。書面で通知しましょう。" },
  { title: "消費生活センターに相談する", desc: "消費者ホットライン（188番）に電話すれば、最寄りの消費生活センターにつながります。専門の相談員が対応してくれます。" },
  { title: "住宅リフォーム・紛争処理支援センターに相談", desc: "「住まいるダイヤル」（0570-016-100）では、住宅に関するトラブルの相談を受け付けています。" },
  { title: "弁護士に相談する", desc: "被害額が大きい場合は弁護士への相談も検討しましょう。法テラス（0570-078374）では無料法律相談を受けられる場合があります。" },
];

const faqs = [
  { q: "訪問販売の業者は全て悪徳ですか？", a: "全てが悪徳とは限りませんが、訪問販売はトラブルが多い販売形態です。訪問販売で契約する前に、必ず他社からも見積もりを取り、冷静に判断しましょう。クーリングオフ制度も活用できます。" },
  { q: "クーリングオフの方法を教えてください。", a: "契約書を受け取ってから8日以内に、はがきや内容証明郵便で「契約を解除する」旨を通知します。理由は不要です。控えを保管し、特定記録郵便や簡易書留で送りましょう。" },
  { q: "見積もりが相場より大幅に高い場合は？", a: "複数社から見積もりを取って比較することで、適正価格かどうか判断できます。1社だけ極端に高い場合は、その理由を業者に確認しましょう。納得できなければ断って問題ありません。" },
  { q: "工事中に追加費用を請求されたらどうすべき？", a: "追加工事は必ず事前に説明を受け、書面で確認してから承諾しましょう。不審な場合は工事を一旦中断し、第三者（消費生活センターや別の業者）に相談することをおすすめします。" },
  { q: "悪徳業者に騙されないために一番大切なことは？", a: "「即決しないこと」が最も大切です。どんなに急かされても、必ず複数社から見積もりを取り、家族や知人にも相談してから判断しましょう。焦って契約するのが最大のリスクです。" },
  { q: "保証書がない場合はどうなりますか？", a: "保証書がなければ、修理後に問題が発生しても無償で対応してもらえない可能性が高いです。口約束は証拠にならないため、必ず書面での保証書を要求しましょう。" },
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

export default function KnowledgeScamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "お役立ち", href: "/knowledge/how-to-choose" },
          { name: "悪徳業者の見分け方" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            雨漏り修理の悪徳業者の見分け方【8つの手口】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            雨漏り修理を装った悪徳業者による被害が後を絶ちません。
            このページでは悪徳業者が使う8つの手口、見分け方のチェックリスト、被害に遭った場合の対処法を詳しく解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">悪徳業者の手口8つ</h2>
          <div className="space-y-4">
            {scamTactics.map((t, i) => (
              <div key={i} className="card-hover border-l-4 border-red-500">
                <h3 className="font-bold text-red-600 text-lg mb-1">手口{i + 1}: {t.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">見分け方チェックリスト</h2>
          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-3">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-green-600 font-bold">□</span>
                  <p className="text-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">被害に遭った場合の対処法</h2>
          <div className="space-y-4">
            {remedies.map((r, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{r.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{r.desc}</p>
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
              { name: "保証・アフター", href: "/knowledge/warranty", tag: "保証" },
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
            <h2 className="text-2xl font-extrabold mb-3">信頼できる業者に依頼しましょう</h2>
            <p className="text-white/80 text-sm mb-4">当サイトでは実績のある信頼できる業者のみを掲載しています</p>
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
