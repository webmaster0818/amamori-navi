import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "福岡の雨漏り修理おすすめ業者5選【2026年】費用相場・梅雨対策",
  description:
    "福岡で雨漏り修理を依頼できるおすすめ業者5社を比較。福岡の費用相場、梅雨・台風が多い九州ならではの注意点、各サービスの対応状況を詳しく解説します。",
};

const services = [
  { name: "雨漏り修理110番", coverage: "福岡市内・福岡県全域", speed: "最短30分で駆けつけ", feature: "24時間365日対応。梅雨・台風シーズンの緊急対応にも強い", href: "/review/amamori110" },
  { name: "ミツモア", coverage: "福岡県全域", speed: "最短即日見積もり", feature: "福岡の登録業者から複数社の見積もりを一括比較可能", href: "/review/mitsumora" },
  { name: "雨漏り修理の達人", coverage: "福岡市内・北九州市・久留米市", speed: "最短即日対応", feature: "認定業者のみ掲載。九州の気候に精通した業者を紹介", href: "/review/tatsujin" },
  { name: "アメピタ", coverage: "福岡県全域", speed: "最短30分で駆けつけ", feature: "部分修理が得意。台風後の緊急修理にも迅速対応", href: "/review/amepita" },
  { name: "くらしのマーケット", coverage: "福岡県全域", speed: "業者により異なる", feature: "口コミ評価で業者を選べる。福岡エリアの対応業者も充実", href: "/review/kurashi" },
];

const fukuokaCosts = [
  { type: "コーキング補修", range: "2〜6万円" },
  { type: "屋根部分補修", range: "3〜15万円" },
  { type: "屋根葺き替え", range: "90〜270万円" },
  { type: "外壁補修", range: "2〜13万円" },
  { type: "防水工事", range: "5〜25万円" },
];

const fukuokaNotes = [
  { title: "梅雨の降水量が多い", desc: "福岡を含む九州北部は梅雨の降水量が全国的に多い地域です。長期間の雨にさらされることで、普段は問題ない箇所からも雨漏りが発生しやすくなります。梅雨前の点検が特に重要です。" },
  { title: "台風の直撃を受けやすい", desc: "九州は台風の上陸回数が最も多い地域の一つです。暴風雨による屋根材の飛散やズレが雨漏りの原因になります。台風シーズン前に屋根の状態を確認しておきましょう。" },
  { title: "全国平均より費用が抑えめ", desc: "福岡は東京・大阪と比較して人件費が低い傾向にあり、修理費用も全国平均よりやや抑えめです。ただし台風後は需要が集中して価格が上がることもあります。" },
  { title: "集中豪雨への備え", desc: "近年、福岡では線状降水帯による集中豪雨が増加しています。短時間に記録的な大雨が降ることがあるため、排水設備の点検や雨どいの清掃も合わせて行いましょう。" },
];

const faqs = [
  { q: "福岡の雨漏り修理の費用相場はいくらですか？", a: "福岡の雨漏り修理費用は、コーキング補修で2〜6万円、屋根部分補修で3〜15万円、屋根葺き替えで90〜270万円が目安です。東京・大阪よりやや安い傾向がありますが、台風後は需要集中で高くなることがあります。" },
  { q: "梅雨時期に雨漏りが増えるのはなぜですか？", a: "梅雨は長期間にわたって雨にさらされるため、普段は問題ない微細なひび割れやコーキングの劣化箇所から水が浸入しやすくなります。また、高湿度により建材が膨張し、隙間が生じることも原因の一つです。" },
  { q: "台風後の修理は混み合いますか？", a: "はい。大きな台風の後は修理依頼が集中し、数週間〜1ヶ月以上待つこともあります。応急処置を行った上で、早めに複数の業者に連絡を取ることをおすすめします。" },
  { q: "福岡で信頼できる業者の選び方は？", a: "九州地方の気候（梅雨・台風・集中豪雨）に精通している地元業者がおすすめです。施工実績・保証内容・口コミ評価を確認し、複数社から見積もりを取って比較しましょう。" },
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

export default function AreaFukuokaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "地域別", href: "/area/tokyo" },
          { name: "福岡" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            福岡の雨漏り修理おすすめ業者5選【2026年最新】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            福岡で雨漏り修理を依頼できるおすすめ業者5社の対応状況を比較します。
            梅雨の降水量が多く台風の直撃も受けやすい九州ならではの注意点も詳しく解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">福岡対応の雨漏り修理業者5選</h2>
          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={i} className="card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Link href={s.href} className="font-bold text-dark text-lg hover:underline">{s.name}</Link>
                  <span className="tag-pill tag-pill--amber text-xs">{s.speed}</span>
                </div>
                <p className="text-sm text-text-light mb-1"><strong>対応エリア:</strong> {s.coverage}</p>
                <p className="text-sm text-text-light">{s.feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">福岡の雨漏り修理費用相場</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>修理内容</th>
                  <th>福岡の費用相場</th>
                </tr>
              </thead>
              <tbody>
                {fukuokaCosts.map((c) => (
                  <tr key={c.type}>
                    <td className="font-bold text-dark">{c.type}</td>
                    <td className="font-semibold text-accent-dark">{c.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">福岡で雨漏り修理を依頼する際の注意点</h2>
          <div className="space-y-4">
            {fukuokaNotes.map((note, i) => (
              <div key={i} className="card-hover">
                <h3 className="font-bold text-dark text-lg mb-1">{note.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{note.desc}</p>
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
          <h2 className="section-title">他のエリアの情報</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "東京の雨漏り修理", href: "/area/tokyo", tag: "東京" },
              { name: "大阪の雨漏り修理", href: "/area/osaka", tag: "大阪" },
              { name: "名古屋の雨漏り修理", href: "/area/nagoya", tag: "名古屋" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "全国" },
              { name: "梅雨対策", href: "/knowledge/rainy-season", tag: "梅雨" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-hover text-center">
                <h3 className="font-bold text-dark mb-1">{link.name}</h3>
                <span className="tag-pill text-xs">{link.tag}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">福岡で雨漏り修理をお探しなら</h2>
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
