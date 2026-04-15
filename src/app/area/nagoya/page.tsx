import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "名古屋の雨漏り修理おすすめ業者5選【2026年】費用相場・地域特性",
  description:
    "名古屋で雨漏り修理を依頼できるおすすめ業者5社を比較。名古屋の費用相場、東海地方の気候特性に合わせた注意点、各サービスの対応状況を詳しく解説します。",
};

const services = [
  { name: "雨漏り修理110番", coverage: "名古屋市内・愛知県全域", speed: "最短30分で駆けつけ", feature: "24時間365日対応。名古屋市内の対応実績が豊富", href: "/review/amamori110" },
  { name: "ミツモア", coverage: "愛知県全域", speed: "最短即日見積もり", feature: "名古屋エリアの登録業者が多く、複数社から見積もりを比較可能", href: "/review/mitsumora" },
  { name: "雨漏り修理の達人", coverage: "名古屋市内・愛知県主要エリア", speed: "最短即日対応", feature: "認定業者のみ掲載。東海地方の気候に詳しい業者を紹介", href: "/review/tatsujin" },
  { name: "アメピタ", coverage: "愛知県全域", speed: "最短30分で駆けつけ", feature: "部分修理に強い。名古屋市内は特にスピード対応が可能", href: "/review/amepita" },
  { name: "くらしのマーケット", coverage: "愛知県全域", speed: "業者により異なる", feature: "口コミ評価で業者を選べる。名古屋エリアも対応業者が充実", href: "/review/kurashi" },
];

const nagoyaCosts = [
  { type: "コーキング補修", range: "2〜6万円" },
  { type: "屋根部分補修", range: "4〜16万円" },
  { type: "屋根葺き替え", range: "100〜280万円" },
  { type: "外壁補修", range: "2〜14万円" },
  { type: "防水工事", range: "5〜28万円" },
];

const nagoyaNotes = [
  { title: "夏の猛暑と冬の乾燥", desc: "名古屋は夏の高温多湿と冬の乾燥が激しい地域です。温度差による屋根材・外壁材の伸縮がコーキングの劣化を早めるため、定期的な点検が重要です。" },
  { title: "ゲリラ豪雨の増加", desc: "近年、名古屋エリアではゲリラ豪雨の発生頻度が増加しています。短時間に大量の雨が降ると、普段は問題ない箇所からも雨漏りが発生することがあります。" },
  { title: "台風・暴風雨への備え", desc: "東海地方は台風の通過ルートに当たることがあり、暴風雨による雨漏り被害が発生します。火災保険の風災補償を確認しておきましょう。" },
  { title: "戸建て住宅の比率が高い", desc: "名古屋は東京・大阪と比較して戸建て住宅の割合が高く、屋根や外壁のメンテナンスを自分で管理する必要があります。10年に一度の定期点検がおすすめです。" },
];

const faqs = [
  { q: "名古屋の雨漏り修理の費用相場はいくらですか？", a: "名古屋の雨漏り修理費用は、コーキング補修で2〜6万円、屋根部分補修で4〜16万円、屋根葺き替えで100〜280万円が目安です。東京と比較するとやや安い傾向がありますが、業者によって差があるため複数社から見積もりを取りましょう。" },
  { q: "名古屋で急な雨漏りに対応してくれる業者はありますか？", a: "雨漏り修理110番やアメピタは最短30分で名古屋市内に駆けつけ可能です。24時間365日対応なので、夜間や休日の急な雨漏りにも対応してくれます。" },
  { q: "名古屋の気候で特に注意すべきことは？", a: "名古屋は夏の猛暑と冬の乾燥の温度差が大きく、屋根材やコーキングの劣化が進みやすい地域です。また近年はゲリラ豪雨も増加しているため、定期的な点検と早めの補修を心がけましょう。" },
  { q: "愛知県の補助金は雨漏り修理に使えますか？", a: "名古屋市や愛知県内の一部自治体では、住宅リフォーム補助金や耐震改修助成金が利用できる場合があります。雨漏り修理が対象になるかはお住まいの自治体に確認してみてください。" },
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

export default function AreaNagoyaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "地域別", href: "/area/tokyo" },
          { name: "名古屋" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            名古屋の雨漏り修理おすすめ業者5選【2026年最新】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            名古屋で雨漏り修理を依頼できるおすすめ業者5社の対応状況を比較します。
            夏の猛暑・冬の乾燥・ゲリラ豪雨など東海地方の気候特性に合わせた注意点も解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">名古屋対応の雨漏り修理業者5選</h2>
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
          <h2 className="section-title">名古屋の雨漏り修理費用相場</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>修理内容</th>
                  <th>名古屋の費用相場</th>
                </tr>
              </thead>
              <tbody>
                {nagoyaCosts.map((c) => (
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
          <h2 className="section-title">名古屋で雨漏り修理を依頼する際の注意点</h2>
          <div className="space-y-4">
            {nagoyaNotes.map((note, i) => (
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
              { name: "大阪の雨漏り修理", href: "/area/osaka", tag: "大阪" },
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
            <h2 className="text-2xl font-extrabold mb-3">名古屋で雨漏り修理をお探しなら</h2>
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
