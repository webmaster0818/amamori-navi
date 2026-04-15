import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "梅雨の雨漏り対策ガイド【点検5項目】梅雨前にやるべき準備と台風への備え",
  description:
    "梅雨前にやるべき点検5項目、梅雨時期の雨漏りの特徴、台風シーズンへの備えを詳しく解説。事前準備で雨漏り被害を防ぎましょう。",
};

const inspectionItems = [
  { title: "屋根の状態チェック", desc: "瓦のズレ・割れ、スレートのひび割れ、棟板金の浮きなどを確認します。地上から双眼鏡で確認するか、専門業者に点検を依頼しましょう。屋根に自分で登るのは危険なので避けてください。" },
  { title: "コーキング・シーリングの確認", desc: "窓周り・外壁の目地・ベランダのコーキングにひび割れや剥がれがないか確認します。コーキングの寿命は5〜10年なので、築10年以上の建物は特に注意が必要です。" },
  { title: "雨どい・排水口の清掃", desc: "雨どいに落ち葉やゴミが詰まっていないか確認し、清掃します。排水不良は雨水の溢れや外壁への浸水の原因になります。ベランダの排水口も同様に確認しましょう。" },
  { title: "外壁のひび割れチェック", desc: "外壁にひび割れ（クラック）がないか目視で確認します。0.3mm以上のひび割れは雨水が浸入するリスクがあるため、補修が必要です。" },
  { title: "ベランダ・屋上の防水層確認", desc: "ベランダや屋上の防水層に膨れ・剥がれ・ひび割れがないか確認します。防水層の寿命は10〜15年程度なので、劣化が見られたら梅雨前に補修しましょう。" },
];

const rainySeasonFeatures = [
  { title: "長期間の雨で浸水リスクが高まる", desc: "梅雨は1ヶ月以上にわたって雨が続くため、普段は問題ない微細な隙間からも水が浸入しやすくなります。短時間の雨では発見できなかった弱点が露呈します。" },
  { title: "湿度の高さがカビを誘発", desc: "梅雨時期の室内湿度は70〜80%に達することもあり、雨漏りと重なるとカビが急速に繁殖します。換気と除湿を心がけましょう。" },
  { title: "集中豪雨の頻度が増加", desc: "近年、梅雨末期の集中豪雨が増加しています。短時間に大量の雨が降ると、排水能力を超えて雨漏りが発生するケースがあります。" },
  { title: "修理業者が混み合う", desc: "梅雨時期は雨漏り修理の依頼が集中するため、業者の予約が取りにくくなります。梅雨前に点検・補修を済ませておくことが重要です。" },
];

const typhoonPrep = [
  { title: "屋根材の固定を確認", desc: "瓦のズレや棟板金の浮きは台風の暴風で飛散するリスクがあります。梅雨前に補修しておけば台風シーズンも安心です。" },
  { title: "飛散物対策", desc: "ベランダの植木鉢やアンテナなど、強風で飛ばされる可能性のあるものは固定するか室内に移動させましょう。" },
  { title: "火災保険の内容確認", desc: "台風による雨漏り被害は火災保険の風災補償で対応できます。梅雨前に保険の内容と連絡先を確認しておきましょう。" },
  { title: "応急処置グッズの準備", desc: "ブルーシート・防水テープ・バケツなどの応急処置グッズを事前に用意しておくと、台風による雨漏り発生時に迅速に対応できます。" },
];

const faqs = [
  { q: "梅雨前の点検は自分でできますか？", a: "地上からの目視確認や1階のコーキングチェックは自分でできます。ただし屋根の上の点検は危険なため、専門業者に依頼しましょう。多くの業者が無料点検を行っています。" },
  { q: "梅雨前の点検はいつ頃が最適ですか？", a: "関東では5月上旬〜中旬、九州では4月下旬〜5月上旬が目安です。梅雨入りの1ヶ月前に点検し、問題があれば梅雨前に補修を完了させるスケジュールが理想です。" },
  { q: "梅雨時期に雨漏り修理はできますか？", a: "緊急の応急処置は可能ですが、本格的な屋根修理は雨天では作業できません。梅雨の合間の晴れた日に施工するため、工期が長くなる場合があります。できれば梅雨前に修理を済ませましょう。" },
  { q: "梅雨時期のカビ対策はどうすればいいですか？", a: "除湿機やエアコンの除湿機能で室内湿度を60%以下に保ちましょう。こまめな換気も効果的です。雨漏りで濡れた場所は速やかに乾かし、防カビスプレーを使用しましょう。" },
  { q: "台風で雨漏りしたら火災保険は使えますか？", a: "台風が原因の雨漏りは火災保険の風災補償で対応できる可能性が高いです。被害状況の写真を撮影し、保険会社に連絡しましょう。経年劣化は対象外ですが、一度確認する価値があります。" },
  { q: "点検費用はいくらかかりますか？", a: "多くの業者が無料で現地調査・点検を行っています。当サイトで紹介している業者はいずれも無料点検に対応していますので、気軽に依頼してみましょう。" },
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

export default function KnowledgeRainySeasonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "お役立ち", href: "/knowledge/how-to-choose" },
          { name: "梅雨対策" },
        ]} />

        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            梅雨の雨漏り対策ガイド【点検5項目と台風への備え】
          </h1>
          <p className="text-text leading-relaxed mb-6">
            梅雨や台風シーズンは雨漏りのリスクが最も高まる時期です。
            梅雨前にやるべき点検5項目、梅雨時期の雨漏りの特徴、台風シーズンへの備えを詳しく解説します。
          </p>
        </section>

        <section className="py-8">
          <h2 className="section-title">梅雨前にやるべき点検5項目</h2>
          <div className="space-y-4">
            {inspectionItems.map((item, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">梅雨時期の雨漏りの特徴</h2>
          <div className="space-y-4">
            {rainySeasonFeatures.map((f, i) => (
              <div key={i} className="card-hover">
                <h3 className="font-bold text-dark text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="section-title">台風シーズンへの備え</h2>
          <div className="space-y-4">
            {typhoonPrep.map((t, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="rank-badge rank-badge--4 flex-shrink-0 !w-10 !h-10 !text-base">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{t.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{t.desc}</p>
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
              { name: "応急処置ガイド", href: "/diy/emergency", tag: "緊急" },
              { name: "室内対策", href: "/diy/bucket", tag: "室内" },
              { name: "火災保険の活用", href: "/cost/insurance", tag: "保険" },
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
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
            <h2 className="text-2xl font-extrabold mb-3">梅雨前の点検は専門業者に</h2>
            <p className="text-white/80 text-sm mb-4">無料点検で雨漏りリスクを事前に把握しましょう</p>
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
