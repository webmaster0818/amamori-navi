import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理業者の選び方【7つのポイント】信頼できる業者の見分け方",
  description:
    "雨漏り修理業者の選び方を7つのポイント（資格・保証・実績・見積もり・保険対応・対応速度・アフター）で解説。信頼できる業者の特徴5つも紹介します。",
};

const selectPoints = [
  { title: "資格・許認可の有無", desc: "建設業許可や防水施工技能士などの資格を持っているか確認しましょう。資格保有は一定の技術力と信頼性の証です。特に500万円以上の工事には建設業許可が必要です。" },
  { title: "保証内容の充実度", desc: "施工後の保証が付いているか、保証期間はどのくらいかを確認します。一般的には5〜10年の保証が目安です。保証書の有無と保証対象範囲も事前に確認しましょう。" },
  { title: "施工実績の豊富さ", desc: "雨漏り修理の施工実績が豊富な業者を選びましょう。ホームページや口コミで過去の施工事例を確認し、自分と似たケースの対応実績があるかチェックします。" },
  { title: "見積もりの透明性", desc: "見積書の内容が明確で、材料費・工賃・足場代などの内訳がきちんと記載されているか確認します。「一式」表記ばかりの見積もりは要注意です。" },
  { title: "火災保険への対応力", desc: "火災保険の申請サポートに対応しているかも重要なポイントです。保険対応の経験が豊富な業者であれば、申請手続きのアドバイスも受けられます。" },
  { title: "対応速度", desc: "問い合わせへの返答スピードや現地調査までの所要時間を確認します。雨漏りは緊急性が高いため、迅速に対応してくれる業者を選びましょう。" },
  { title: "アフターフォロー体制", desc: "修理後のフォローアップがあるかも重要です。定期点検の有無や、再発時の対応方針を事前に確認しておきましょう。" },
];

const trustSigns = [
  { title: "現地調査を丁寧に行う", desc: "原因を特定するために時間をかけて現地調査を行う業者は信頼できます。散水テストや赤外線カメラを使った調査を行う業者はさらに安心です。" },
  { title: "説明がわかりやすい", desc: "専門用語を使わず、写真や図を使って状況と修理内容をわかりやすく説明してくれる業者は、顧客目線で対応してくれる証拠です。" },
  { title: "複数の修理プランを提案する", desc: "予算や状況に合わせて複数の修理プランを提案してくれる業者は、無理な押し売りをしない信頼できる業者です。" },
  { title: "書面で見積もり・保証を出す", desc: "口約束ではなく、見積書・契約書・保証書を書面で提出してくれる業者を選びましょう。トラブル防止の基本です。" },
  { title: "口コミ・評判が良い", desc: "Googleレビューやくらしのマーケットなどで口コミ評価が高い業者は実績の裏付けがあります。極端に良い口コミだけの業者は注意が必要です。" },
];

const faqs = [
  { q: "雨漏り修理の見積もりは何社に頼むべきですか？", a: "最低でも2〜3社から見積もりを取ることをおすすめします。金額だけでなく、修理内容・保証期間・対応の丁寧さを総合的に比較しましょう。ミツモアなどの一括見積もりサービスを使うと効率的です。" },
  { q: "雨漏り修理に必要な資格はありますか？", a: "防水施工技能士、建築板金技能士、瓦葺き技能士などの資格が関連します。500万円以上の工事には建設業許可が必要です。資格の有無は業者の技術力の一つの判断基準になります。" },
  { q: "相見積もりを取ると業者に嫌がられませんか？", a: "いいえ。相見積もりは業者側も一般的なことと理解しています。むしろ相見積もりを嫌がる業者は要注意です。見積もり時に「他社にも見積もりを依頼している」と伝えても問題ありません。" },
  { q: "大手と地元業者、どちらを選ぶべきですか？", a: "それぞれメリットがあります。大手は安定したサービスと保証体制が強み。地元業者は地域の気候や建物事情に詳しく、小回りが利きます。両方から見積もりを取って比較するのがベストです。" },
  { q: "見積もり金額が業者によって大きく違うのはなぜ？", a: "修理方法の違い（部分補修vs全面補修）、使用する材料のグレード、足場の有無、保証期間の違いなどが主な理由です。単純な金額だけでなく、内容を比較することが大切です。" },
  { q: "修理後に再び雨漏りした場合はどうなりますか？", a: "保証期間内であれば無料で再修理してもらえるのが一般的です。保証書の内容（期間・対象範囲・免責事項）を事前に確認し、保証書は大切に保管しましょう。" },
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

export default function KnowledgeHowToChoosePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "お役立ち", href: "/knowledge/how-to-choose" },
          { name: "業者の選び方" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            雨漏り修理業者の選び方【7つのポイント】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            雨漏り修理は業者選びで仕上がりが大きく変わります。
            このページでは、信頼できる業者を選ぶための7つのポイントと、良い業者の特徴5つを詳しく解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">業者選びの7つのポイント</h2>
          <div className="space-y-4">
            {selectPoints.map((p, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{p.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">信頼できる業者の特徴5つ</h2>
          <div className="space-y-4">
            {trustSigns.map((s, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="rank-badge rank-badge--4 flex-shrink-0 !w-10 !h-10 !text-base">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{s.desc}</p>
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
              { name: "悪徳業者の見分け方", href: "/knowledge/scam", tag: "注意" },
              { name: "保証・アフター", href: "/knowledge/warranty", tag: "保証" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
              { name: "火災保険の活用", href: "/cost/insurance", tag: "保険" },
              { name: "よくある質問", href: "/faq", tag: "FAQ" },
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
            <h2 className="text-2xl font-extrabold mb-3">信頼できる業者を見つけよう</h2>
            <p className="text-white/80 text-sm mb-4">当サイト厳選のおすすめ業者から無料見積もりを取れます</p>
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
