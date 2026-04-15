import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京の雨漏り修理おすすめ業者5選【2026年】費用相場・対応エリア",
  description:
    "東京で雨漏り修理を依頼できるおすすめ業者5社を比較。東京の費用相場、マンション・密集地ならではの注意点、各サービスの対応状況を詳しく解説します。",
};

const services = [
  { name: "雨漏り修理110番", coverage: "東京23区・多摩地区全域", speed: "最短30分で駆けつけ", feature: "24時間365日対応。東京の対応実績が豊富", href: "/review/amamori110" },
  { name: "ミツモア", coverage: "東京都全域", speed: "最短即日見積もり", feature: "複数業者の見積もりを一括比較。東京は登録業者が特に多い", href: "/review/mitsumora" },
  { name: "雨漏り修理の達人", coverage: "東京23区・多摩地区", speed: "最短即日対応", feature: "認定業者のみ掲載。品質重視の方におすすめ", href: "/review/tatsujin" },
  { name: "アメピタ", coverage: "東京都全域", speed: "最短30分で駆けつけ", feature: "部分修理に強い。最低価格保証あり", href: "/review/amepita" },
  { name: "くらしのマーケット", coverage: "東京都全域", speed: "業者により異なる", feature: "口コミ・料金を比較して選べる。東京は選択肢が豊富", href: "/review/kurashi" },
];

const tokyoCosts = [
  { type: "コーキング補修", range: "3〜8万円" },
  { type: "屋根部分補修", range: "5〜20万円" },
  { type: "屋根葺き替え", range: "120〜350万円" },
  { type: "外壁補修", range: "3〜18万円" },
  { type: "防水工事", range: "8〜35万円" },
];

const tokyoNotes = [
  { title: "マンション・集合住宅が多い", desc: "東京はマンションの割合が高く、雨漏り修理も戸建てとは異なる対応が必要です。分譲マンションの場合は管理組合との調整が必要になり、賃貸の場合は管理会社への連絡が先になります。" },
  { title: "住宅密集地の足場問題", desc: "東京の住宅密集地では隣家との距離が近く、足場の設置が困難なケースがあります。足場が組めない場合はロープアクセス工法など特殊な方法が必要になり、費用が割増になることがあります。" },
  { title: "費用相場がやや高め", desc: "東京は人件費や駐車場代などの経費が高いため、地方と比較して修理費用がやや高い傾向にあります。複数社から見積もりを取って比較することが特に重要です。" },
  { title: "業者の選択肢が多い", desc: "東京は対応可能な業者が多い分、品質にばらつきがあります。資格・実績・保証内容をしっかり確認して業者を選びましょう。" },
];

const faqs = [
  { q: "東京の雨漏り修理の費用相場はいくらですか？", a: "東京の雨漏り修理費用は、コーキング補修で3〜8万円、屋根部分補修で5〜20万円、屋根葺き替えで120〜350万円が目安です。東京は人件費が高めのため、地方よりやや高い傾向があります。" },
  { q: "東京で即日対応してくれる業者はありますか？", a: "雨漏り修理110番やアメピタは最短30分で駆けつけ可能です。ミツモアでも即日見積もり対応の業者が見つかります。緊急時は24時間対応の業者を選びましょう。" },
  { q: "マンションの雨漏りはどこに相談すればいいですか？", a: "分譲マンションの場合は管理組合に連絡し、共用部分の修理は管理組合負担になります。賃貸の場合はまず管理会社や大家に連絡しましょう。詳しくはマンション・賃貸の雨漏り対策ページをご覧ください。" },
  { q: "東京の住宅密集地でも修理は可能ですか？", a: "可能です。足場が設置できない狭小地でも、ロープアクセス工法や高所作業車を使って対応する業者があります。事前に現地調査で確認してもらいましょう。" },
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

export default function AreaTokyoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "地域別", href: "/area/tokyo" },
          { name: "東京" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            東京の雨漏り修理おすすめ業者5選【2026年最新】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            東京で雨漏り修理を依頼できるおすすめ業者5社の対応状況・特徴を比較します。
            マンションが多く住宅が密集する東京ならではの注意点や、費用相場も詳しく解説します。
          </p>
        </section>

        {/* 5サービスの東京対応状況 */}
        <section className="py-8">
          <h2 className="section-title">東京対応の雨漏り修理業者5選</h2>
          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={i} className="card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Link href={s.href} className="font-bold text-navy text-lg hover:underline">{s.name}</Link>
                  <span className="tag-pill tag-pill--amber text-xs">{s.speed}</span>
                </div>
                <p className="text-sm text-text-light mb-1"><strong>対応エリア:</strong> {s.coverage}</p>
                <p className="text-sm text-text-light">{s.feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 東京の費用相場 */}
        <section className="py-8">
          <h2 className="section-title">東京の雨漏り修理費用相場</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>修理内容</th>
                  <th>東京の費用相場</th>
                </tr>
              </thead>
              <tbody>
                {tokyoCosts.map((c) => (
                  <tr key={c.type}>
                    <td className="font-bold text-navy">{c.type}</td>
                    <td className="font-semibold text-amber-dark">{c.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">※東京は人件費・駐車場代等の影響で全国平均よりやや高めの傾向があります</p>
        </section>

        {/* 東京特有の注意点 */}
        <section className="py-8">
          <h2 className="section-title">東京で雨漏り修理を依頼する際の注意点</h2>
          <div className="space-y-4">
            {tokyoNotes.map((note, i) => (
              <div key={i} className="card-hover">
                <h3 className="font-bold text-navy text-lg mb-1">{note.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{note.desc}</p>
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
          <h2 className="section-title">他のエリアの情報</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "大阪の雨漏り修理", href: "/area/osaka", tag: "大阪" },
              { name: "名古屋の雨漏り修理", href: "/area/nagoya", tag: "名古屋" },
              { name: "福岡の雨漏り修理", href: "/area/fukuoka", tag: "福岡" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "全国" },
              { name: "業者の選び方", href: "/knowledge/how-to-choose", tag: "お役立ち" },
              { name: "マンション・賃貸", href: "/knowledge/apartment", tag: "マンション" },
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
            <h2 className="text-2xl font-extrabold mb-3">東京で雨漏り修理をお探しなら</h2>
            <p className="text-white/80 text-sm mb-4">複数業者の無料見積もりを比較して最適な業者を見つけましょう</p>
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
