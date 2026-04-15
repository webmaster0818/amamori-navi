import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り室内対策10選【バケツ・タオル・ビニールシート】二次被害を防ぐ方法",
  description:
    "雨漏り発生時の室内対策を10個紹介。バケツ・タオル・ビニールシートの活用法から、家具の移動、二次被害防止、カビ対策まで詳しく解説します。",
};

const indoorMeasures = [
  { title: "バケツ・たらいで水を受ける", desc: "雨漏り箇所の真下にバケツやたらいを設置します。中にタオルを入れておくと水はねを防げます。大きな容器がない場合は鍋やボウルでも代用可能です。" },
  { title: "タオル・雑巾で水分を吸い取る", desc: "床や壁に広がった水分をタオルや雑巾で吸い取ります。吸水力の高いマイクロファイバータオルが特に効果的です。こまめに絞って吸水を繰り返しましょう。" },
  { title: "ビニールシートで床を保護する", desc: "広範囲に水が広がる場合はビニールシートやレジャーシートを床に敷きます。フローリングの膨張や畳のカビを防ぐ効果があります。" },
  { title: "家具・家電を安全な場所に移動", desc: "雨漏り箇所の周辺にある家具や家電を移動させます。特にテレビ・パソコン・冷蔵庫などの家電は水濡れで故障するため優先的に避難させましょう。" },
  { title: "吸水シート・ペットシーツを活用", desc: "高吸水性のペットシーツや吸水シートは大量の水を吸収できます。バケツの周りに敷いておくと、はねた水も吸い取ってくれます。" },
  { title: "天井からの水はビニール袋で誘導", desc: "天井のシミから水が滴る場合、画鋲でビニール袋を固定して水を一箇所に集める方法が有効です。ビニール袋の下にバケツを置きましょう。" },
  { title: "コンセント・電気系統を確認", desc: "雨漏り箇所の近くにコンセントや照明器具がある場合は漏電の危険があります。該当エリアのブレーカーを落とし、電気製品のプラグを抜きましょう。" },
  { title: "換気を行う", desc: "雨が止んだら窓を開けて換気を行い、湿気を逃がします。除湿機やサーキュレーターがあればさらに効果的です。カビ防止に重要なステップです。" },
  { title: "防カビスプレーを使用する", desc: "水分を拭き取った後、防カビスプレーを吹きかけておくとカビの発生を予防できます。特に壁紙の裏や床と壁の境目など湿気が溜まりやすい部分に効果的です。" },
  { title: "写真・動画で状況を記録する", desc: "被害状況を写真や動画で記録しておきましょう。修理業者への説明や火災保険の申請に役立ちます。日時が分かるように撮影するのがポイントです。" },
];

const secondaryDamages = [
  { title: "木材の腐食", desc: "湿気が木材に浸透し続けると腐食が進行します。柱や梁の腐食は家の構造に影響を与える深刻な問題です。" },
  { title: "カビの繁殖", desc: "湿度の高い状態が48時間以上続くとカビが発生しやすくなります。壁紙の裏や天井裏など見えない場所でも繁殖します。" },
  { title: "シロアリ被害", desc: "湿った木材はシロアリの好む環境です。雨漏りを放置するとシロアリ被害のリスクが大幅に高まります。" },
  { title: "漏電・火災リスク", desc: "電気配線が水に濡れると漏電し、最悪の場合は火災につながります。雨漏り箇所の近くの電気系統には特に注意が必要です。" },
];

const moldTips = [
  { title: "湿度を60%以下に保つ", desc: "カビは湿度60%以上で繁殖しやすくなります。除湿機やエアコンの除湿機能を活用して室内の湿度をコントロールしましょう。" },
  { title: "こまめに換気する", desc: "1日2〜3回、各10分程度の換気を行いましょう。対角線上の窓を開けると効率よく空気が入れ替わります。" },
  { title: "水分を速やかに除去する", desc: "雨漏りで濡れた部分はできるだけ早く乾かしましょう。48時間以内に乾燥させればカビの発生リスクを大幅に下げられます。" },
  { title: "防カビ剤を使用する", desc: "雨漏りが繰り返される場所には防カビスプレーを定期的に使用しましょう。壁紙の裏側にも処理しておくとより効果的です。" },
];

const faqs = [
  { q: "バケツ以外で水を受ける方法はありますか？", a: "鍋・ボウル・たらい・洗面器・収納ケースなど、水を溜められる容器であれば何でも代用できます。大きめの容器を選ぶと溢れる心配が減ります。ペットシーツや吸水シートをバケツの周りに敷いておくとさらに安心です。" },
  { q: "天井のシミは放置しても大丈夫ですか？", a: "天井のシミは雨漏りのサインです。放置すると天井材の劣化が進み、最悪の場合は天井が抜け落ちることもあります。シミを見つけたら早めに専門業者に相談することをおすすめします。" },
  { q: "雨漏り後のカビ対策はどうすればいいですか？", a: "まず水分を速やかに拭き取り、換気を行って乾燥させます。防カビスプレーを使用し、除湿機で湿度管理をしましょう。カビが広範囲に発生した場合は、専門のカビ除去業者への相談をおすすめします。" },
  { q: "フローリングが水で膨らんでしまいました。", a: "フローリングの膨張は水分を吸収したことが原因です。早急に水分を拭き取り、除湿機で乾燥させましょう。軽度であれば乾燥後に元に戻る場合もありますが、重度の場合は張り替えが必要になります。" },
  { q: "漏電の危険がある場合はどうしますか？", a: "雨漏り箇所の近くにコンセントや照明がある場合は、該当エリアのブレーカーを落としてください。電気製品のプラグを抜き、乾燥するまで使用しないでください。漏電が疑われる場合は電気工事業者にも相談しましょう。" },
  { q: "賃貸の場合、室内の被害は誰が負担しますか？", a: "賃貸の場合、建物の構造に起因する雨漏りの修理費用は大家（管理会社）が負担するのが一般的です。ただし入居者の家財被害は入居者負担の場合もあるため、家財保険（借家人賠償保険）の加入状況を確認しましょう。" },
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

export default function DiyBucketPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "DIY・応急処置", href: "/diy/emergency" },
          { name: "室内対策" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            雨漏り室内対策10選【バケツ・タオル・ビニールシート】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            雨漏りが発生した時、室内の被害を最小限に抑えるための対策を10個ご紹介します。
            バケツやタオルなど身近なものを使った応急処置から、二次被害の防止、カビ対策まで詳しく解説します。
          </p>
        </section>

        {/* 室内対策10個 */}
        <section className="py-8">
          <h2 className="section-title">室内の雨漏り対策10個</h2>
          <div className="space-y-4">
            {indoorMeasures.map((m, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{m.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 二次被害防止 */}
        <section className="py-8">
          <h2 className="section-title">放置すると起こる二次被害</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {secondaryDamages.map((d, i) => (
              <div key={i} className="card-hover border-l-4 border-red-500">
                <h3 className="font-bold text-red-600 text-lg mb-1">{d.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* カビ対策 */}
        <section className="py-8">
          <h2 className="section-title">雨漏り後のカビ対策</h2>
          <div className="space-y-4">
            {moldTips.map((tip, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="rank-badge rank-badge--4 flex-shrink-0 !w-10 !h-10 !text-base">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{tip.title}</h3>
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
              { name: "コーキング補修DIY", href: "/diy/caulking", tag: "DIY" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
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
            <h2 className="text-2xl font-extrabold mb-3">雨漏りの根本解決は専門業者に</h2>
            <p className="text-white/80 text-sm mb-4">室内対策は一時的な応急処置です。根本的な修理で安心を取り戻しましょう</p>
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
