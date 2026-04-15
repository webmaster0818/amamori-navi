import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ミツモアの口コミ・評判｜雨漏り修理の一括見積もり比較を徹底解説",
  description:
    "ミツモアで雨漏り修理の一括見積もり。最大5社比較、口コミ評価、相場12,000〜48,380円。利用の流れ、メリット・デメリット、よくある質問をまとめました。",
};

const steps = [
  { num: "1", title: "依頼内容を入力", desc: "雨漏りの状況や修理箇所、希望日時などの簡単な質問に回答します。最短2分で完了。" },
  { num: "2", title: "見積もり受取", desc: "最大5社の業者から見積もりが届きます。料金・口コミ・実績を比較検討できます。" },
  { num: "3", title: "業者を選んで依頼", desc: "チャットで業者と直接やり取りし、納得したら依頼。日程調整もチャットで完結します。" },
  { num: "4", title: "施工・完了", desc: "選んだ業者が施工。完了後に口コミを投稿して、次のユーザーの参考にします。" },
];

const pros = [
  "最大5社から一括で見積もりを取得できる",
  "口コミ・評価で業者の質を事前に確認できる",
  "チャットで気軽に業者と相談できる",
  "相場感がつかめるので適正価格がわかる",
  "登録・見積もり依頼は完全無料",
  "雨漏り以外の住宅サービスも一括で頼める",
];

const cons = [
  "登録業者の質にばらつきがある場合がある",
  "見積もり依頼後に複数業者から連絡が来る",
  "24時間対応ではない業者が多い",
  "緊急の雨漏りには不向きな場合がある",
];

const faqs = [
  { q: "ミツモアの利用料金はかかりますか？", a: "利用者側は完全無料です。見積もり依頼、業者とのチャット、依頼まですべて無料でご利用いただけます。費用が発生するのは実際に業者に修理を依頼した場合のみです。" },
  { q: "ミツモアの雨漏り修理の相場はいくらですか？", a: "ミツモアでの雨漏り修理の相場は12,000円〜48,380円程度です。ただし、修理箇所や程度により大きく異なるため、実際の見積もりで確認することをおすすめします。" },
  { q: "最大何社から見積もりがもらえますか？", a: "最大5社から見積もりを受け取ることができます。複数の業者を比較することで、適正価格や最適な業者を見つけやすくなります。" },
  { q: "見積もりをもらった後、断っても大丈夫ですか？", a: "はい、見積もり後のお断りは自由です。チャット上で丁寧にお断りすれば問題ありません。複数社を比較検討するためのサービスですので、気軽にご利用ください。" },
  { q: "緊急の雨漏りにも対応していますか？", a: "ミツモアは見積もり比較サービスのため、緊急対応には向いていません。今すぐ対応が必要な場合は、雨漏り修理110番など24時間対応のサービスをご利用ください。" },
  { q: "業者の口コミは信頼できますか？", a: "ミツモアの口コミは実際にサービスを利用したユーザーのみが投稿できる仕組みです。自作自演を防ぐシステムがあるため、比較的信頼性の高い口コミが集まっています。" },
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

export default function MitsumoraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "ランキング", href: "/" },
          { name: "ミツモア" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="rank-badge rank-badge--2">2</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-dark">ミツモア</h1>
              <p className="text-sm text-text-light">meetsmore.com</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="tag-pill">最大5社一括見積もり</span>
            <span className="tag-pill tag-pill--amber">12,000〜48,380円</span>
            <span className="tag-pill tag-pill--green">全国対応</span>
            <span className="tag-pill">口コミ比較</span>
          </div>
          <p className="text-text leading-relaxed">
            ミツモアは、複数の雨漏り修理業者から一括で見積もりを取得できるマッチングプラットフォームです。
            最大5社から見積もりが届き、口コミ評価や料金を比較しながら最適な業者を選べます。
            利用は完全無料で、チャットを通じて業者と直接やり取りできるのも便利なポイントです。
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

        {/* Comparison */}
        <section className="py-8">
          <h2 className="section-title">ミツモアが向いている人・向いていない人</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-hover">
              <h3 className="font-bold text-primary mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>&#10003; 複数業者を比較して最安値を見つけたい方</li>
                <li>&#10003; 口コミ・評価を見て業者を選びたい方</li>
                <li>&#10003; じっくり検討してから依頼したい方</li>
                <li>&#10003; 雨漏り修理以外のリフォームも検討中の方</li>
              </ul>
            </div>
            <div className="card-hover">
              <h3 className="font-bold text-accent-dark mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>&#9650; 今すぐ緊急で修理が必要な方</li>
                <li>&#9650; 複数業者からの連絡を受けたくない方</li>
                <li>&#9650; 深夜・早朝に即対応してほしい方</li>
              </ul>
            </div>
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
            <h2 className="text-2xl font-extrabold mb-3">ミツモアで無料一括見積もり</h2>
            <p className="text-white/80 text-sm mb-4">最大5社比較・完全無料・最短2分で依頼完了</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="btn-accent">無料で見積もりを取る</a>
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
              { name: "雨漏り修理の達人", slug: "tatsujin", tag: "職人直営" },
              { name: "アメピタ", slug: "amepita", tag: "無料点検" },
              { name: "くらしのマーケット", slug: "kurashi", tag: "口コミ" },
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
