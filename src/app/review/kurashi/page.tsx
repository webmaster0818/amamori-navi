import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "くらしのマーケットの口コミ・評判｜雨漏り修理の料金・業者比較を徹底解説",
  description:
    "くらしのマーケットで雨漏り修理業者を比較。口コミランキング、料金透明性、個人業者も掲載。利用の流れ、メリット・デメリット、よくある質問をまとめました。",
};

const steps = [
  { num: "1", title: "サービス検索", desc: "「雨漏り修理」で検索し、お住まいの地域で対応可能な業者一覧を表示します。" },
  { num: "2", title: "業者を比較", desc: "口コミ評価・料金・実績を比較。ランキングや絞り込み機能で最適な業者を見つけます。" },
  { num: "3", title: "オンライン予約", desc: "気に入った業者をそのままオンラインで予約。メッセージで事前に詳細を相談できます。" },
  { num: "4", title: "施工・口コミ投稿", desc: "予約日に業者が訪問し施工。完了後に口コミを投稿して、次のユーザーの参考にします。" },
];

const pros = [
  "口コミ・ランキングで業者の評判を確認できる",
  "料金が事前にわかる透明性の高い仕組み",
  "個人業者も掲載されているため費用が安いことも",
  "オンライン予約システムが便利",
  "メッセージで事前に業者と相談できる",
  "雨漏り修理以外の住宅サービスもまとめて探せる",
];

const cons = [
  "雨漏り修理専門のサービスではない",
  "個人業者の場合、保証が限定的な場合がある",
  "業者の技術力にばらつきがある",
  "緊急対応には不向きな場合がある",
];

const faqs = [
  { q: "くらしのマーケットの利用は無料ですか？", a: "はい、くらしのマーケットの利用（検索・予約・メッセージ）は無料です。費用が発生するのは実際にサービスを利用した場合のみです。" },
  { q: "くらしのマーケットの口コミは信頼できますか？", a: "くらしのマーケットでは、実際にサービスを利用したユーザーのみが口コミを投稿できます。不正な口コミを防ぐシステムが導入されており、比較的信頼性の高い口コミが集まっています。" },
  { q: "個人業者に依頼しても大丈夫ですか？", a: "くらしのマーケットに登録している個人業者は、本人確認や資格確認を経ています。口コミ評価を参考に選べば、個人業者でも質の高いサービスを受けられます。ただし、保証内容は事前に確認しましょう。" },
  { q: "雨漏り修理の料金相場はどのくらいですか？", a: "くらしのマーケットでの雨漏り修理は、業者や修理内容により幅がありますが、部分的な補修で数万円から、本格的な修理で10万円以上が目安です。各業者のページに料金が明示されています。" },
  { q: "予約のキャンセルはできますか？", a: "はい、各業者のキャンセルポリシーに従ってキャンセル可能です。多くの業者は施工日の前日までは無料キャンセルに対応していますが、事前に確認してください。" },
  { q: "緊急の雨漏りにも対応してもらえますか？", a: "くらしのマーケットは予約制のため、緊急対応には向いていない場合があります。今すぐ対応が必要な場合は、雨漏り修理110番など24時間対応のサービスをご利用ください。" },
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

export default function KurashiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "ランキング", href: "/" },
          { name: "くらしのマーケット" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="rank-badge rank-badge--5">5</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">くらしのマーケット</h1>
              <p className="text-sm text-text-light">curama.jp</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="tag-pill">口コミランキング</span>
            <span className="tag-pill tag-pill--amber">料金透明性</span>
            <span className="tag-pill tag-pill--green">全国対応</span>
            <span className="tag-pill">個人業者も掲載</span>
            <span className="tag-pill">オンライン予約</span>
          </div>
          <p className="text-text leading-relaxed">
            くらしのマーケットは、生活関連サービスの総合マッチングプラットフォームです。
            雨漏り修理も多数の業者が掲載されており、口コミランキングや料金の透明性が特徴。
            個人業者も掲載されているため、大手よりリーズナブルな価格で依頼できる場合もあります。
            オンラインで予約が完結する便利さも魅力です。
          </p>
        </section>

        {/* Steps */}
        <section className="py-8">
          <h2 className="section-title">利用の流れ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="card-hover text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-extrabold mb-3">
                  {s.num}
                </span>
                <h3 className="font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="py-8">
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-hover !border-primary/30">
              <h3 className="font-bold text-primary text-lg mb-3">メリット</h3>
              <ul className="space-y-2">
                {pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-hover !border-accent/30">
              <h3 className="font-bold text-accent-dark text-lg mb-3">デメリット</h3>
              <ul className="space-y-2">
                {cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent-dark mt-0.5 flex-shrink-0">&#9650;</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to use effectively */}
        <section className="py-8">
          <h2 className="section-title">くらしのマーケットを上手に活用するコツ</h2>
          <div className="space-y-4">
            {[
              { title: "口コミ件数と評価の両方を確認", desc: "評価点が高くても口コミ件数が少ない業者は判断材料が不足しています。評価4.5以上で口コミ10件以上の業者を目安に選びましょう。" },
              { title: "料金とサービス内容を詳しく確認", desc: "同じ「雨漏り修理」でも、業者によって含まれるサービス内容が異なります。料金に含まれる範囲（調査費用・材料費・出張費など）を事前に確認しましょう。" },
              { title: "メッセージで事前に相談", desc: "予約前にメッセージ機能で雨漏りの状況を説明し、対応可能か・追加費用の有無を確認しておくと安心です。" },
              { title: "保証内容を事前に確認", desc: "個人業者の場合、施工後の保証が限定的な場合があります。保証期間・保証内容を予約前に必ず確認しましょう。" },
            ].map((item, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="rank-badge rank-badge--5 flex-shrink-0 !w-10 !h-10 !text-base">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.desc}</p>
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

        {/* CTA */}
        <section className="py-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">くらしのマーケットで業者を探す</h2>
            <p className="text-white/80 text-sm mb-4">口コミランキング・料金透明性・オンライン予約</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="btn-accent">業者を探す</a>
              <Link href="/" className="btn-primary !bg-white/10 !shadow-none border border-white/30">
                ランキングに戻る
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-8">
          <h2 className="section-title">他の業者も比較する</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "雨漏り修理110番", slug: "amamori110", tag: "24h対応" },
              { name: "ミツモア", slug: "mitsumora", tag: "一括見積もり" },
              { name: "雨漏り修理の達人", slug: "tatsujin", tag: "職人直営" },
              { name: "アメピタ", slug: "amepita", tag: "無料点検" },
            ].map((s) => (
              <Link key={s.slug} href={`/review/${s.slug}/`} className="card-hover text-center">
                <h3 className="font-bold text-dark mb-1">{s.name}</h3>
                <span className="tag-pill text-xs">{s.tag}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
