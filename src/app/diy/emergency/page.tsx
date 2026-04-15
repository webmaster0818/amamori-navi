import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り応急処置ガイド【自分でできる8ステップ】緊急時の対処法",
  description:
    "雨漏りが発生した時に自分でできる応急処置を8ステップで解説。バケツ設置・ブルーシート・写真撮影など緊急時の対処法と、やってはいけないNG行為5つもご紹介します。",
};

const emergencySteps = [
  { title: "バケツ・容器を設置する", desc: "雨漏り箇所の真下にバケツやたらいを置き、床への被害を防ぎます。バケツの中に雑巾やタオルを入れておくと、水はねを防げます。" },
  { title: "ブルーシートで応急防水する", desc: "屋根や外壁からの浸水が明らかな場合、安全に作業できる範囲でブルーシートを被せます。風で飛ばないよう土のうやレンガで固定しましょう。" },
  { title: "雑巾・タオルで水を吸い取る", desc: "床や壁に広がった水分を雑巾やタオルで拭き取ります。カビの発生を防ぐため、できるだけ早く水分を除去しましょう。" },
  { title: "家電・貴重品を避難させる", desc: "雨漏り箇所の周辺にある家電製品や貴重品を安全な場所に移動させます。特にパソコンやテレビなどの精密機器は水濡れに弱いため最優先で避難させましょう。" },
  { title: "電気系統に注意する", desc: "雨漏り箇所の近くにコンセントや照明がある場合、漏電の危険があります。該当箇所のブレーカーを落とすことを検討してください。" },
  { title: "写真・動画を撮影する", desc: "雨漏りの状況を写真や動画で記録します。修理業者への説明や火災保険の申請に必要な証拠になります。日時がわかるように撮影しましょう。" },
  { title: "保険会社に連絡する", desc: "火災保険に加入している場合、風災・雹災・雪災の補償で修理費用がカバーされる可能性があります。早めに保険会社へ連絡しましょう。" },
  { title: "修理業者を手配する", desc: "応急処置はあくまで一時的な対策です。根本的な修理のために、できるだけ早く専門業者に依頼しましょう。複数社から見積もりを取ることをおすすめします。" },
];

const ngActions = [
  { title: "屋根に登る", desc: "雨天時や強風時に屋根に登るのは非常に危険です。滑落事故のリスクがあるため、屋根の上での作業は絶対に行わないでください。" },
  { title: "むやみにコーキングを打つ", desc: "原因箇所が特定できていない状態でコーキングを打つと、水の逃げ道を塞いでしまい、別の場所から雨漏りが発生する可能性があります。" },
  { title: "雨漏りを放置する", desc: "「少量だから大丈夫」と放置すると、木材の腐食やカビの繁殖、シロアリの被害など深刻な二次被害につながります。" },
  { title: "自己判断で大規模な修理をする", desc: "防水シートの張り替えや屋根材の交換など大規模な修理をDIYで行うと、かえって状況を悪化させるリスクがあります。" },
  { title: "業者選びを焦る", desc: "緊急時は冷静さを失いがちですが、最初に来た業者に即決するのは避けましょう。悪徳業者に当たるリスクがあります。" },
];

const faqs = [
  { q: "雨漏りの応急処置は自分でできますか？", a: "室内の応急処置（バケツ設置・水の拭き取り・家電の避難など）は自分でできます。ただし屋根の上での作業は危険なため、専門業者に任せてください。応急処置はあくまで一時的な対策であり、根本的な修理は業者に依頼することをおすすめします。" },
  { q: "夜間に雨漏りが発生した場合はどうすれば？", a: "まず室内の応急処置（バケツ設置・家電避難・タオルで水分除去）を行いましょう。夜間の屋根作業は非常に危険なので絶対に行わないでください。雨漏り修理110番など24時間対応の業者に電話で相談することもできます。" },
  { q: "ブルーシートの正しい使い方は？", a: "屋根にブルーシートを被せる場合は、雨漏り箇所より上の棟（むね）から覆い、風で飛ばないよう土のうで固定します。ただし雨天時の屋根作業は非常に危険なため、可能であれば業者に依頼してください。" },
  { q: "応急処置にかかる費用はいくらですか？", a: "自分で行う室内の応急処置であれば、バケツやタオルなど家にあるもので対応できるため費用はほぼかかりません。ブルーシートや防水テープを購入する場合でも1,000〜3,000円程度です。" },
  { q: "応急処置後、業者にはいつ連絡すべきですか？", a: "できるだけ早く連絡しましょう。雨漏りは放置するほど被害が拡大し、修理費用も増加します。応急処置をした当日〜翌日には業者に連絡することをおすすめします。" },
  { q: "写真撮影はなぜ重要ですか？", a: "写真は修理業者への状況説明、火災保険の申請、賃貸の場合の証拠として重要です。雨漏り箇所・被害状況・日時を記録しておくことで、スムーズに対応が進みます。" },
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

export default function DiyEmergencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "DIY・応急処置", href: "/diy/emergency" },
          { name: "応急処置ガイド" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            雨漏り応急処置ガイド【自分でできる8ステップ】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            突然の雨漏りに慌てないために、自分でできる応急処置の方法を8ステップで解説します。
            正しい手順で対処することで被害を最小限に抑え、その後の修理もスムーズに進みます。
            ただし応急処置はあくまで一時的な対策です。根本的な解決は専門業者に依頼しましょう。
          </p>
        </section>

        {/* 応急処置8ステップ */}
        <section className="py-8">
          <h2 className="section-title">雨漏り発生時の応急処置8ステップ</h2>
          <div className="space-y-4">
            {emergencySteps.map((step, i) => (
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

        {/* やってはいけないNG行為 */}
        <section className="py-8">
          <h2 className="section-title">やってはいけないNG行為5つ</h2>
          <div className="space-y-4">
            {ngActions.map((ng, i) => (
              <div key={i} className="card-hover border-l-4 border-red-500">
                <h3 className="font-bold text-red-600 text-lg mb-1">NG{i + 1}: {ng.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{ng.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 応急処置の限界 */}
        <section className="py-8">
          <h2 className="section-title">応急処置の限界 — 根本解決は業者へ</h2>
          <div className="glass-card p-6 sm:p-8">
            <p className="text-text leading-relaxed mb-4">
              応急処置はあくまで被害の拡大を防ぐための一時的な対策です。雨漏りの根本原因（屋根材の破損、防水層の劣化、コーキングの劣化など）を解決しなければ、雨が降るたびに同じ問題が繰り返されます。
            </p>
            <p className="text-text leading-relaxed mb-4">
              放置すると木材の腐食・カビの繁殖・シロアリ被害・漏電リスクなど深刻な二次被害につながり、修理費用も大幅に増加します。
            </p>
            <p className="text-text leading-relaxed font-semibold">
              応急処置を行ったら、できるだけ早く専門業者に相談しましょう。複数社から見積もりを取ることで、適正価格で修理できます。
            </p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "コーキング補修DIY", href: "/diy/caulking", tag: "DIY" },
              { name: "室内対策・バケツ活用", href: "/diy/bucket", tag: "室内対策" },
              { name: "業者の選び方", href: "/knowledge/how-to-choose", tag: "お役立ち" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
              { name: "火災保険の活用", href: "/cost/insurance", tag: "保険" },
              { name: "悪徳業者の見分け方", href: "/knowledge/scam", tag: "注意" },
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
            <h2 className="text-2xl font-extrabold mb-3">応急処置の後は専門業者に相談</h2>
            <p className="text-white/80 text-sm mb-4">根本的な修理は専門業者に任せましょう。無料見積もりで適正価格を確認できます</p>
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
