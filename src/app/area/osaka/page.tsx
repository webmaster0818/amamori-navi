import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "大阪の雨漏り修理おすすめ業者5選【2026年】費用相場・台風対策",
  description:
    "大阪で雨漏り修理を依頼できるおすすめ業者5社を比較。大阪の費用相場、台風が多い地域特性に合わせた注意点、各サービスの対応状況を詳しく解説します。",
};

const services = [
  { name: "雨漏り修理110番", coverage: "大阪市内・大阪府全域", speed: "最短30分で駆けつけ", feature: "24時間365日対応。台風シーズンの緊急対応にも強い", href: "/review/amamori110" },
  { name: "ミツモア", coverage: "大阪府全域", speed: "最短即日見積もり", feature: "大阪の登録業者が多く、複数社の見積もりを一括比較可能", href: "/review/mitsumora" },
  { name: "雨漏り修理の達人", coverage: "大阪市内・堺市・北摂エリア", speed: "最短即日対応", feature: "認定業者のみ掲載。施工品質を重視する方におすすめ", href: "/review/tatsujin" },
  { name: "アメピタ", coverage: "大阪府全域", speed: "最短30分で駆けつけ", feature: "部分修理が得意。台風後の緊急修理にも対応", href: "/review/amepita" },
  { name: "くらしのマーケット", coverage: "大阪府全域", speed: "業者により異なる", feature: "口コミ評価で業者を選べる。大阪は対応業者が豊富", href: "/review/kurashi" },
];

const osakaCosts = [
  { type: "コーキング補修", range: "2〜7万円" },
  { type: "屋根部分補修", range: "4〜18万円" },
  { type: "屋根葺き替え", range: "100〜300万円" },
  { type: "外壁補修", range: "2〜15万円" },
  { type: "防水工事", range: "6〜30万円" },
];

const osakaNotes = [
  { title: "台風の影響を受けやすい", desc: "大阪は台風の直撃を受けやすい地域です。2018年の台風21号では大阪府内で多数の雨漏り被害が発生しました。台風シーズン前の点検・補修が特に重要です。" },
  { title: "木造住宅・古い建物が多い", desc: "大阪市内には木造住宅や築年数の古い建物が多く残っています。経年劣化による雨漏りリスクが高いため、定期的なメンテナンスが欠かせません。" },
  { title: "長屋・連棟住宅の修理", desc: "大阪には長屋や連棟住宅が多く、隣家と壁を共有しているため修理の際に隣家との調整が必要になるケースがあります。事前に確認しておきましょう。" },
  { title: "火災保険の風災補償を活用", desc: "台風による雨漏りは火災保険の風災補償の対象になる可能性が高いです。台風後の修理は保険会社への連絡を忘れずに行いましょう。" },
];

const faqs = [
  { q: "大阪の雨漏り修理の費用相場はいくらですか？", a: "大阪の雨漏り修理費用は、コーキング補修で2〜7万円、屋根部分補修で4〜18万円、屋根葺き替えで100〜300万円が目安です。大阪は全国平均に近い水準ですが、業者によって差があるため複数社から見積もりを取りましょう。" },
  { q: "台風の後に雨漏りが始まりました。保険は使えますか？", a: "台風が原因の雨漏りは、火災保険の風災補償で対応できる可能性が高いです。被害状況の写真を撮影し、できるだけ早く保険会社に連絡しましょう。申請期限は被害発生から3年以内が一般的です。" },
  { q: "大阪で24時間対応の業者はありますか？", a: "雨漏り修理110番は24時間365日対応で、大阪府全域をカバーしています。アメピタも大阪で最短30分の駆けつけ対応が可能です。台風時など緊急の場合に頼れます。" },
  { q: "古い木造住宅の雨漏り修理はどのくらいかかりますか？", a: "古い木造住宅の場合、雨漏りの原因が複合的なことが多く、5〜50万円以上かかるケースもあります。まずは無料の現地調査で原因を特定し、適切な修理方法を提案してもらいましょう。" },
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

export default function AreaOsakaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "地域別", href: "/area/tokyo" },
          { name: "大阪" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            大阪の雨漏り修理おすすめ業者5選【2026年最新】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            大阪で雨漏り修理を依頼できるおすすめ業者5社の対応状況を比較します。
            台風の影響を受けやすく、木造住宅や古い建物が多い大阪ならではの注意点も詳しく解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">大阪対応の雨漏り修理業者5選</h2>
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

        <section className="py-8">
          <h2 className="section-title">大阪の雨漏り修理費用相場</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>修理内容</th>
                  <th>大阪の費用相場</th>
                </tr>
              </thead>
              <tbody>
                {osakaCosts.map((c) => (
                  <tr key={c.type}>
                    <td className="font-bold text-navy">{c.type}</td>
                    <td className="font-semibold text-amber-dark">{c.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">大阪で雨漏り修理を依頼する際の注意点</h2>
          <div className="space-y-4">
            {osakaNotes.map((note, i) => (
              <div key={i} className="card-hover">
                <h3 className="font-bold text-navy text-lg mb-1">{note.title}</h3>
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
              { name: "名古屋の雨漏り修理", href: "/area/nagoya", tag: "名古屋" },
              { name: "福岡の雨漏り修理", href: "/area/fukuoka", tag: "福岡" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "全国" },
              { name: "業者の選び方", href: "/knowledge/how-to-choose", tag: "お役立ち" },
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
            <h2 className="text-2xl font-extrabold mb-3">大阪で雨漏り修理をお探しなら</h2>
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
