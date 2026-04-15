import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ベランダの雨漏り原因5つ【2026年最新】防水層劣化・排水口詰まりを解説",
  description:
    "ベランダの雨漏り原因を5つに分類して解説。防水層の劣化、排水口の詰まり、手すり根元の劣化、笠木の劣化、ひび割れ。原因別の対処法やよくある質問もまとめました。",
};

const causes = [
  { num: 1, title: "防水層の劣化", desc: "ベランダの床面を覆う防水層（ウレタン・FRP・シート防水）は10〜15年で劣化します。防水層のひび割れや剥がれ、膨れが発生すると雨水が下階に浸入します。トップコートの定期的な塗り替え（5〜7年ごと）で防水層の寿命を延ばせます。" },
  { num: 2, title: "排水口（ドレン）の詰まり", desc: "落ち葉やゴミ、砂が排水口に詰まると、ベランダに水が溜まり防水層に負担がかかります。水位が上がると防水層の立ち上がり部分を超えて室内に浸水することもあります。定期的な掃除（月1回程度）で予防できます。" },
  { num: 3, title: "手すり・柵の根元の劣化", desc: "手すりや柵がベランダの床面を貫通している部分は、コーキングで防水されています。コーキングが劣化すると手すりの根元から雨水が侵入します。手すりのぐらつきがある場合は根元の防水も劣化している可能性が高いです。" },
  { num: 4, title: "笠木（かさぎ）の劣化", desc: "ベランダの手すり壁の上部を覆う笠木は、雨水から壁を守る役割があります。笠木のジョイント部分のコーキング劣化や、笠木自体の歪み・浮きが原因で雨水が壁内部に浸入します。笠木の下には防水シートが施工されていますが、これも経年劣化します。" },
  { num: 5, title: "床面のひび割れ", desc: "ベランダの床面にひび割れが発生すると、防水層が破壊されて雨水が浸入します。FRP防水は硬く割れやすい傾向があり、建物の揺れや温度変化でひびが入ることがあります。ウレタン防水はひび割れに強いですが、紫外線劣化で表面が荒れやすいです。" },
];

const faqs = [
  { q: "ベランダの雨漏りで最も多い原因は？", a: "最も多いのは防水層の劣化です。ベランダの防水層は10〜15年で寿命を迎え、ひび割れや剥がれから雨水が浸入します。トップコートの定期的な塗り替え（5〜7年ごと）で予防できます。" },
  { q: "ベランダの防水工事の費用はいくら？", a: "トップコート塗り替えは3〜5万円、ウレタン防水は5〜15万円、FRP防水は8〜20万円、シート防水は5〜15万円が目安です。ベランダの広さや劣化の程度で費用が変わります。" },
  { q: "ベランダの排水口の掃除頻度は？", a: "月に1回程度の掃除が理想的です。特に秋の落ち葉シーズンや台風前後はこまめに確認しましょう。排水口が詰まると水が溜まり、防水層に大きな負担がかかります。" },
  { q: "ベランダの雨漏りは下の階に影響しますか？", a: "はい、ベランダの雨漏りは直下の部屋の天井に影響します。天井のシミやカビ、水滴の落下の原因がベランダの防水層劣化であることは珍しくありません。マンションの場合は管理組合への報告も必要です。" },
  { q: "ベランダの雨漏りは自分で修理できますか？", a: "排水口の掃除やトップコートの塗り替えは DIY で可能ですが、防水層の補修は専門知識と技術が必要です。誤った施工は被害を拡大させるため、防水工事は専門業者に依頼しましょう。" },
  { q: "ベランダの防水工事の種類はどう選ぶ？", a: "ウレタン防水は柔軟性があり複雑な形状に対応、FRP防水は耐久性が高く歩行頻度が高いベランダに最適、シート防水は均一な厚さで広い面積に向いています。業者と相談して最適な工法を選びましょう。" },
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

export default function CauseBalconyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "原因別", href: "/cause/roof" },
          { name: "ベランダ" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
            ベランダの雨漏り原因5つ
          </h1>
          <p className="text-text leading-relaxed mb-6">
            ベランダからの雨漏りは、防水層の劣化や排水口の詰まりが主な原因です。
            下の階の天井にシミやカビが発生している場合、ベランダの防水不良が原因の可能性があります。
            このページではベランダの雨漏り原因5つと、それぞれの対処法を解説します。
          </p>
        </section>

        {/* 原因5つ */}
        <section className="py-8">
          <h2 className="section-title">ベランダの雨漏り原因</h2>
          <div className="space-y-4">
            {causes.map((c) => (
              <div key={c.num} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-extrabold flex-shrink-0">
                  {c.num}
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{c.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{c.desc}</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "費用相場ガイド", href: "/cost/average", tag: "費用" },
              { name: "屋根の雨漏り原因", href: "/cause/roof", tag: "屋根" },
              { name: "外壁の雨漏り原因", href: "/cause/wall", tag: "外壁" },
              { name: "窓・サッシの雨漏り", href: "/cause/window", tag: "窓" },
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
            <h2 className="text-2xl font-extrabold mb-3">ベランダの雨漏りを無料で点検</h2>
            <p className="text-white/80 text-sm mb-4">防水層の状態をプロが診断します</p>
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
