import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏りコーキング補修を自分でやる方法【7ステップ】費用・道具・コツ",
  description:
    "雨漏りのコーキング補修を自分でやる方法を7ステップで解説。必要な道具と費用（2,000〜5,000円）、DIYで対応できる範囲と限界、失敗しないコツを紹介します。",
};

const caulkingSteps = [
  { title: "雨漏り箇所を特定する", desc: "コーキングの劣化箇所（ひび割れ・剥がれ・痩せ）を確認します。窓周り・外壁の目地・ベランダの接合部など、既存のコーキングが劣化している箇所をチェックしましょう。" },
  { title: "古いコーキングを撤去する", desc: "カッターナイフやコーキング撤去用ヘラを使って、劣化した古いコーキングを丁寧に除去します。新しいコーキングの密着性を高めるため、できるだけきれいに取り除きましょう。" },
  { title: "マスキングテープで養生する", desc: "コーキングを打つ部分の両側にマスキングテープを貼ります。テープの幅は均一に、直線的に貼ることで仕上がりが美しくなります。" },
  { title: "プライマーを塗布する", desc: "コーキングの密着性を高めるため、プライマー（下塗り材）を塗布します。プライマーを省略するとコーキングが早期に剥がれる原因になります。" },
  { title: "コーキング材を充填する", desc: "コーキングガンにカートリッジをセットし、目地に沿ってコーキング材を均一に充填します。奥までしっかり充填することが防水性能のポイントです。" },
  { title: "ヘラで表面を整える", desc: "充填後すぐにヘラ（コーキング仕上げ用）で表面を押さえて整えます。一方向に均一な力でなぞると美しく仕上がります。" },
  { title: "マスキングテープを剥がして乾燥", desc: "コーキングが固まる前にマスキングテープを剥がします。その後24時間以上乾燥させて完成です。乾燥前に雨が降る可能性がある場合は天気予報を確認してから作業しましょう。" },
];

const tools = [
  { name: "コーキングガン", price: "300〜1,000円", note: "カートリッジ式のコーキング材を押し出す器具" },
  { name: "コーキング材（変成シリコン系）", price: "500〜1,000円", note: "外壁用は変成シリコン系を選ぶ。塗装可能なタイプが便利" },
  { name: "プライマー", price: "500〜1,500円", note: "密着性を高める下塗り材。コーキング材に合った製品を選ぶ" },
  { name: "マスキングテープ", price: "200〜400円", note: "養生用。幅18〜24mmが使いやすい" },
  { name: "カッターナイフ", price: "100〜300円", note: "古いコーキングの除去に使用" },
  { name: "ヘラ（仕上げ用）", price: "200〜500円", note: "コーキング表面を整える。複数サイズがあると便利" },
];

const diyScope = [
  { ok: true, text: "1階の窓周りのコーキング補修" },
  { ok: true, text: "ベランダ接合部の小さなひび割れ補修" },
  { ok: true, text: "外壁の目地（手が届く範囲）の補修" },
  { ok: false, text: "2階以上の外壁・屋根のコーキング作業" },
  { ok: false, text: "原因箇所が特定できていない雨漏り" },
  { ok: false, text: "広範囲にわたるコーキングの劣化" },
  { ok: false, text: "防水層自体の損傷が疑われる場合" },
];

const tips = [
  { title: "天候を選ぶ", desc: "コーキングは乾燥した晴れの日に行いましょう。気温5℃以上が目安です。湿度が高いと密着不良の原因になります。" },
  { title: "コーキング材の種類を間違えない", desc: "外壁には変成シリコン系、浴室にはシリコン系など用途に合った種類を選びましょう。シリコン系は塗装ができないため外壁には不向きです。" },
  { title: "プライマーを省略しない", desc: "面倒でもプライマー塗布は必ず行いましょう。密着不良による早期剥がれの最大の原因はプライマーの省略です。" },
  { title: "マスキングテープは先に剥がす", desc: "コーキングが硬化してからテープを剥がすと、コーキングが一緒に剥がれてしまいます。充填後すぐに剥がしましょう。" },
  { title: "奥までしっかり充填する", desc: "表面だけ塗るのではなく、目地の奥までコーキング材を押し込むことが防水性能の鍵です。" },
];

const faqs = [
  { q: "DIYコーキングの費用はいくらですか？", a: "道具と材料を合わせて2,000〜5,000円程度です。コーキングガン、コーキング材、プライマー、マスキングテープ、ヘラなどが必要になります。一度道具を揃えれば、コーキング材の追加購入だけで済みます。" },
  { q: "どのコーキング材を選べばいいですか？", a: "外壁には変成シリコン系がおすすめです。塗装が可能で耐久性も高い製品が多いです。シリコン系は耐水性が高いですが塗装できないため注意が必要です。ホームセンターで用途に合った製品を選びましょう。" },
  { q: "コーキングの乾燥時間はどのくらい？", a: "表面は30分〜1時間で乾きますが、完全硬化には24時間以上かかります。その間は水がかからないようにしましょう。冬場は乾燥時間が長くなります。" },
  { q: "DIYコーキングで雨漏りは止まりますか？", a: "原因がコーキングの劣化のみであれば、DIY補修で改善する場合があります。ただし雨漏りの原因は複合的なことが多く、コーキング補修だけでは解決しないケースも多いです。改善しない場合は専門業者に相談してください。" },
  { q: "失敗した場合はどうすればいいですか？", a: "コーキングが完全に硬化する前であれば、ヘラやカッターで除去してやり直せます。硬化後でもカッターで除去可能です。何度やっても改善しない場合は、原因が別にある可能性が高いため業者に相談しましょう。" },
  { q: "コーキングの寿命はどのくらいですか？", a: "一般的なコーキング材の寿命は5〜10年程度です。紫外線や温度変化の影響で徐々に劣化します。定期的に状態をチェックし、ひび割れや痩せが見られたら早めに補修しましょう。" },
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

export default function DiyCaulkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "DIY・応急処置", href: "/diy/emergency" },
          { name: "コーキング補修" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            雨漏りコーキング補修を自分でやる方法【7ステップ】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            コーキングの劣化による雨漏りは、DIYで補修できるケースがあります。
            このページでは、必要な道具・費用（2,000〜5,000円）から具体的な手順、失敗しないコツまで詳しく解説します。
            ただしDIYには限界があるため、対応できる範囲を見極めることが大切です。
          </p>
        </section>

        {/* 手順7ステップ */}
        <section className="py-8">
          <h2 className="section-title">DIYコーキング補修の手順7ステップ</h2>
          <div className="space-y-4">
            {caulkingSteps.map((step, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 必要な道具と費用 */}
        <section className="py-8">
          <h2 className="section-title">必要な道具と費用</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>道具</th>
                  <th>費用目安</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((t) => (
                  <tr key={t.name}>
                    <td className="font-bold text-dark">{t.name}</td>
                    <td className="font-semibold text-accent-dark">{t.price}</td>
                    <td className="text-sm">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">合計費用の目安: <strong className="text-dark">2,000〜5,000円</strong>程度</p>
        </section>

        {/* DIYの対応範囲と限界 */}
        <section className="py-8">
          <h2 className="section-title">DIYで対応できる範囲と限界</h2>
          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-3">
              {diyScope.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 text-lg ${item.ok ? "text-primary-600" : "text-red-500"}`}>
                    {item.ok ? "○" : "×"}
                  </span>
                  <p className="text-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 失敗しないコツ */}
        <section className="py-8">
          <h2 className="section-title">失敗しないコツ5つ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="rank-badge rank-badge--4 flex-shrink-0 !w-10 !h-10 !text-base">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{tip.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{tip.desc}</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "応急処置ガイド", href: "/diy/emergency", tag: "緊急" },
              { name: "室内対策・バケツ活用", href: "/diy/bucket", tag: "室内" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-hover text-center">
                <h3 className="font-bold text-dark mb-1">{link.name}</h3>
                <span className="tag-pill text-xs">{link.tag}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">DIYで解決しない場合はプロに相談</h2>
            <p className="text-white/80 text-sm mb-4">無料見積もりで適正価格を確認しましょう</p>
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
