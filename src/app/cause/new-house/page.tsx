import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "新築・築浅の雨漏り原因と対処法【2026年最新】保証・保険の活用ガイド",
  description:
    "新築・築浅でも雨漏りする理由（施工不良・設計ミス）を解説。住宅瑕疵担保責任保険の活用方法、10年保証の内容、ハウスメーカーへの対応手順もまとめました。",
};

const causes = [
  { title: "施工不良（防水処理の不備）", desc: "防水シートの施工ミス、コーキングの打設不良、防水テープの貼り忘れなど、施工段階での不備が原因の雨漏りです。新築の雨漏り原因の約60%を占めます。特に窓周りや屋根と壁の取り合い部分での施工不良が多いです。" },
  { title: "設計ミス（防水計画の不備）", desc: "複雑な屋根形状、軒の出が少ないデザイン、防水層の設計不足など、設計段階での問題が雨漏りにつながることがあります。デザイン性を重視するあまり防水性が犠牲になるケースもあります。" },
  { title: "材料の不良・選定ミス", desc: "防水材の品質不良や、建物の条件に合わない材料の選定が原因のケースです。気候条件（多雨地域、積雪地域）に適さない材料を使用すると早期に問題が発生します。" },
  { title: "建物の初期変形", desc: "新築直後は建物が微妙に動き（初期沈下）、それによりコーキングや防水層にひびが入ることがあります。木造住宅は木材の乾燥収縮で特に起きやすい現象です。" },
];

const warrantyInfo = [
  { title: "住宅瑕疵担保責任保険とは", desc: "品確法（住宅の品質確保の促進等に関する法律）に基づき、新築住宅の構造耐力上主要な部分と雨水の浸入を防止する部分について、引き渡しから10年間の保証が義務付けられています。" },
  { title: "保証の対象範囲", items: ["屋根・外壁からの雨漏り", "窓・サッシ周りからの雨漏り", "ベランダ・バルコニーの防水不良", "基礎・土台からの浸水", "排水管の設置不良による浸水"] },
  { title: "保証の対象外", items: ["経年劣化による雨漏り（10年超）", "施主の改修工事による不具合", "自然災害による損傷（火災保険で対応）", "維持管理の不備による劣化"] },
];

const steps = [
  { num: "1", title: "雨漏りの記録", desc: "雨漏りの状況を写真・動画で記録します。発生日時、天候、雨漏りの量と場所を詳細にメモしましょう。記録は保証請求の重要な証拠になります。" },
  { num: "2", title: "ハウスメーカー・工務店に連絡", desc: "建築した会社に電話またはメールで連絡します。保証書に記載の連絡先を確認し、雨漏りの状況を伝えましょう。書面（メール）での連絡がエビデンスとして残ります。" },
  { num: "3", title: "現地調査の実施", desc: "ハウスメーカーが現地調査を行い、雨漏りの原因を特定します。調査結果と修理方針の説明を受けましょう。調査結果も書面でもらうようにしてください。" },
  { num: "4", title: "修理の実施", desc: "保証期間内であれば、施工会社の責任で無償修理が行われます。修理内容と使用する材料の説明を受け、工期を確認しましょう。" },
  { num: "5", title: "修理完了の確認", desc: "修理完了後、実際に散水テストなどで雨漏りが止まったか確認します。修理完了報告書を受け取り、再発した場合の対応も確認しておきましょう。" },
];

const faqs = [
  { q: "新築なのに雨漏りすることはあるのですか？", a: "残念ながらあります。国土交通省の住宅相談統計によると、新築住宅の不具合相談のうち雨漏りは常に上位に入っています。施工不良や設計ミスが主な原因で、特に複雑なデザインの住宅で発生しやすい傾向があります。" },
  { q: "新築の雨漏りは無料で修理してもらえますか？", a: "はい、引き渡しから10年以内であれば、品確法に基づく瑕疵担保責任により、施工会社が無償で修理する義務があります。修理費用を請求された場合は不当な可能性がありますので、住宅紛争処理センターに相談しましょう。" },
  { q: "ハウスメーカーが対応してくれない場合はどうすれば？", a: "住宅リフォーム・紛争処理支援センター（住まいるダイヤル: 0570-016-100）に相談しましょう。無料で専門家のアドバイスが受けられます。それでも解決しない場合は、弁護士に相談して法的手段を検討してください。" },
  { q: "施工会社が倒産した場合、保証はどうなりますか？", a: "住宅瑕疵担保責任保険に加入している場合、施工会社が倒産しても保険法人から直接保険金を受け取れます。保険証券を確認し、保険法人に連絡しましょう。保険に加入していない場合は供託金から補償を受けられます。" },
  { q: "築浅（3〜5年）で雨漏りした場合の対応は？", a: "10年以内であれば瑕疵担保責任の対象ですので、施工会社に無償修理を求められます。雨漏りの状況を記録し、書面で修理を依頼しましょう。施工会社の対応が遅い場合は住まいるダイヤルに相談してください。" },
  { q: "新築の雨漏りを予防するにはどうすれば？", a: "建築中の現場確認（特に防水工事のタイミング）、第三者機関による住宅検査（ホームインスペクション）の利用、引き渡し前の入念な確認が効果的です。信頼できるハウスメーカー・工務店選びも重要です。" },
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

export default function CauseNewHousePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "原因別", href: "/cause/roof" },
          { name: "新築・築浅" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            新築・築浅の雨漏り原因と対処法
          </h1>
          <p className="text-text leading-relaxed mb-6">
            新築や築浅の住宅でも雨漏りは発生します。主な原因は施工不良や設計ミスです。
            新築住宅には10年間の瑕疵担保責任保証があり、無償修理を求めることができます。
            このページでは新築の雨漏り原因、保証の活用方法、ハウスメーカーへの対応手順を解説します。
          </p>
        </section>

        {/* 新築で雨漏りする理由 */}
        <section className="py-8">
          <h2 className="section-title">新築でも雨漏りする理由</h2>
          <div className="space-y-4">
            {causes.map((c, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-lg font-extrabold flex-shrink-0">
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

        {/* 住宅瑕疵担保責任保険 */}
        <section className="py-8">
          <h2 className="section-title">住宅瑕疵担保責任保険・10年保証</h2>
          <div className="space-y-6">
            {warrantyInfo.map((info, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-bold text-navy text-lg mb-3">{info.title}</h3>
                {info.desc && <p className="text-sm text-text-light leading-relaxed">{info.desc}</p>}
                {info.items && (
                  <ul className="space-y-2">
                    {info.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className={`mt-0.5 flex-shrink-0 ${info.title.includes("対象外") ? "text-amber-dark" : "text-green"}`}>
                          {info.title.includes("対象外") ? "\u2717" : "\u2713"}
                        </span>
                        <span className="text-text-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ハウスメーカーへの対応手順 */}
        <section className="py-8">
          <h2 className="section-title">ハウスメーカーへの対応手順</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.num} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white text-xl font-extrabold flex-shrink-0">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{s.desc}</p>
                </div>
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
              { name: "屋根の雨漏り原因", href: "/cause/roof", tag: "屋根" },
              { name: "外壁の雨漏り原因", href: "/cause/wall", tag: "外壁" },
              { name: "窓・サッシの雨漏り", href: "/cause/window", tag: "窓" },
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
            <h2 className="text-2xl font-extrabold mb-3">新築の雨漏りもプロに相談</h2>
            <p className="text-white/80 text-sm mb-4">第三者の専門家に原因を診断してもらいましょう</p>
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
