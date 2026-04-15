import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "外壁の雨漏り原因6つ【2026年最新】ひび割れ・コーキング劣化を解説",
  description:
    "外壁の雨漏り原因を6つに分類して解説。ひび割れ、コーキング劣化、塗膜劣化、通気層の問題、外壁材の反り、施工不良。原因別の対処法やよくある質問もまとめました。",
};

const causes = [
  { num: 1, title: "ひび割れ（クラック）", desc: "外壁のひび割れは雨漏りの最も一般的な原因です。幅0.3mm以下のヘアクラックは表面的な問題ですが、0.3mm以上の構造クラックは外壁の奥まで達し、雨水が侵入します。地震や建物の揺れ、乾燥収縮が原因で発生します。" },
  { num: 2, title: "コーキング（シーリング）の劣化", desc: "外壁材の目地やサッシ周りのコーキングは7〜10年で劣化します。硬化・ひび割れ・剥離が起こると隙間が生じ、雨水が侵入します。特にサイディング外壁は目地が多く、コーキング劣化が雨漏り原因の大半を占めます。" },
  { num: 3, title: "塗膜の劣化", desc: "外壁塗装の防水機能は10〜15年で低下します。チョーキング現象（手で触ると白い粉が付く）が出たら塗膜劣化のサインです。塗膜が劣化すると外壁材が雨水を吸収しやすくなり、内部への浸水が進行します。" },
  { num: 4, title: "通気層の問題", desc: "サイディング外壁の通気層は、外壁内の湿気を排出する重要な役割を担っています。通気層が詰まったり正しく機能していない場合、湿気が壁内にこもり、内部結露や雨漏りの原因になります。" },
  { num: 5, title: "外壁材の反り・浮き", desc: "サイディングボードは経年劣化で反りや浮きが発生することがあります。外壁材が反ると隙間ができ、そこから雨水が侵入します。特に直射日光が当たる南面や西面で起きやすい現象です。" },
  { num: 6, title: "施工不良", desc: "新築時やリフォーム時の施工不良も雨漏りの原因となります。コーキングの打設不良、防水テープの貼り忘れ、外壁材の取り付け不良などが代表的な施工不良です。築浅の雨漏りは施工不良を疑いましょう。" },
];

const faqs = [
  { q: "外壁の雨漏りで最も多い原因は？", a: "最も多いのはコーキング（シーリング）の劣化です。特にサイディング外壁はコーキング箇所が多く、劣化すると雨水の侵入経路になります。次いでひび割れ、塗膜劣化が多いです。" },
  { q: "外壁のひび割れはどのくらいの幅から危険ですか？", a: "幅0.3mm以上のひび割れは構造クラックと呼ばれ、雨水が侵入するリスクがあります。0.3mm以下のヘアクラックは直ちに問題ありませんが、放置すると拡大するため、早めの補修をおすすめします。" },
  { q: "外壁の雨漏りと結露の見分け方は？", a: "雨漏りは雨の日に症状が出る（水滴・シミ）のに対し、結露は冬の寒い日や温度差がある日に発生します。雨が降っていない日にも水滴がつく場合は結露の可能性が高いです。" },
  { q: "外壁の雨漏りは自分で修理できますか？", a: "コーキングの打ち替えは市販品で応急処置が可能ですが、根本的な修理は専門業者に依頼しましょう。外壁の構造や防水の仕組みを理解していないと、かえって被害を広げる恐れがあります。" },
  { q: "外壁の雨漏り修理費用はいくらですか？", a: "コーキング補修は2〜6万円、部分塗装は5〜15万円、全面塗装は60〜120万円が目安です。外壁のタイプや損傷の程度で費用が変わりますので、複数業者から見積もりを取りましょう。" },
  { q: "外壁の雨漏り予防にはどうすれば？", a: "10年ごとの外壁塗装、7〜10年ごとのコーキング打ち替え、定期的な目視点検が効果的です。ひび割れやコーキングの劣化を見つけたら早めに補修することで大きな修理を防げます。" },
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

export default function CauseWallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "原因別", href: "/cause/roof" },
          { name: "外壁" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            外壁の雨漏り原因6つ
          </h1>
          <p className="text-text leading-relaxed mb-6">
            外壁からの雨漏りは、ひび割れやコーキングの劣化が主な原因です。
            屋根からの雨漏りに比べて気づきにくく、壁内部で被害が進行していることもあります。
            このページでは外壁の雨漏り原因を6つに分類し、それぞれの対処法を解説します。
          </p>
        </section>

        {/* 原因6つ */}
        <section className="py-8">
          <h2 className="section-title">外壁の雨漏り原因</h2>
          <div className="space-y-4">
            {causes.map((c) => (
              <div key={c.num} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-lg font-extrabold flex-shrink-0">
                  {c.num}
                </span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{c.title}</h3>
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
              { name: "外壁修理の費用", href: "/cost/wall", tag: "費用相場" },
              { name: "屋根の雨漏り原因", href: "/cause/roof", tag: "屋根" },
              { name: "窓・サッシの雨漏り", href: "/cause/window", tag: "窓" },
              { name: "ベランダの雨漏り", href: "/cause/balcony", tag: "ベランダ" },
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
            <h2 className="text-2xl font-extrabold mb-3">外壁の雨漏りを無料で点検</h2>
            <p className="text-white/80 text-sm mb-4">原因の特定から修理まで、プロに任せて安心</p>
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
