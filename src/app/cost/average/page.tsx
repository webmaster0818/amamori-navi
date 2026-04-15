import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理の費用相場ガイド【2026年最新】箇所別・工事別の料金一覧",
  description:
    "雨漏り修理の費用相場を修理箇所別（屋根・外壁・天井・ベランダ・窓）、工事内容別（コーキング・部分補修・葺き替え・防水工事）に徹底解説。見積もりの見方や費用を抑えるコツもご紹介します。",
};

const locationCosts = [
  { location: "屋根", range: "3〜30万円", detail: "瓦のズレ修正・棟板金交換・防水シート補修・葺き替えなど。屋根の種類や損傷範囲で大きく変動します。", href: "/cost/roof" },
  { location: "外壁", range: "2〜15万円", detail: "コーキング補修・ひび割れ補修・塗装補修など。外壁材の種類や施工面積により異なります。", href: "/cost/wall" },
  { location: "天井", range: "5〜20万円", detail: "天井裏の防水処理・断熱材交換・内装修復など。原因箇所の特定費用が別途かかる場合も。", href: "/cost/ceiling" },
  { location: "ベランダ", range: "3〜15万円", detail: "防水層の補修・排水口清掃・トップコート塗り替えなど。防水工法により費用が異なります。" },
  { location: "窓・サッシ", range: "2〜10万円", detail: "コーキング打ち替え・サッシ交換・防水テープ補修など。窓の大きさや数で変動します。" },
];

const workCosts = [
  { work: "コーキング補修", range: "2〜6万円", detail: "劣化したコーキング材の打ち替え。最も手軽な修理方法で、外壁や窓周りの補修に多い。" },
  { work: "部分補修", range: "3〜15万円", detail: "破損した屋根材の差し替え、ひび割れ補修など。被害が限定的な場合に対応。" },
  { work: "カバー工法（重ね葺き）", range: "50〜120万円", detail: "既存の屋根の上に新しい屋根材を重ねる工法。葺き替えより安く工期も短い。" },
  { work: "葺き替え", range: "100〜300万円", detail: "既存の屋根材を全て撤去し新しい屋根材に交換。最も大規模な屋根修理。" },
  { work: "防水工事", range: "5〜30万円", detail: "ベランダや屋上の防水層を新設・補修。ウレタン・シート・FRPなど工法により異なる。" },
];

const savingTips = [
  { title: "複数業者から見積もりを取る", desc: "必ず2〜3社以上から見積もりを取り、金額と内容を比較しましょう。ミツモアなどの一括見積もりサービスを活用すると効率的です。" },
  { title: "火災保険を活用する", desc: "台風・雹・大雪など自然災害が原因の雨漏りは火災保険が適用される可能性があります。修理前に必ず保険会社に確認しましょう。" },
  { title: "早期発見・早期修理", desc: "雨漏りを放置すると被害が拡大し修理費用が大幅に増加します。小さな異変でも早めに対応することが最大の節約です。" },
  { title: "部分修理で対応できないか確認", desc: "全面的な修理が必要でない場合、部分修理で費用を大幅に抑えられます。アメピタなど部分修理に対応した業者に相談しましょう。" },
  { title: "補助金・助成金を調べる", desc: "自治体によってはリフォーム補助金や耐震改修助成金が利用できる場合があります。お住まいの自治体の制度を確認してみましょう。" },
];

const faqs = [
  { q: "雨漏り修理の費用相場はいくらですか？", a: "雨漏り修理の費用は修理箇所や程度により大きく異なります。コーキング補修なら2〜6万円、部分補修なら3〜15万円、屋根の葺き替えなら100〜300万円が目安です。まずは複数業者から無料見積もりを取ることをおすすめします。" },
  { q: "見積もりは無料ですか？", a: "多くの業者が無料で現地調査・見積もりを行っています。雨漏り修理110番やアメピタなど当サイトで紹介している業者はいずれも無料見積もりに対応しています。見積もり後のキャンセルも無料です。" },
  { q: "見積書のどこをチェックすべきですか？", a: "工事内容の詳細・材料費と工賃の内訳・足場代の有無・保証期間と保証内容・追加費用の可能性の5点を必ず確認しましょう。「一式」表記が多い見積書は詳細を確認するべきです。" },
  { q: "追加費用が発生することはありますか？", a: "施工中に予想外の損傷が見つかった場合、追加費用が発生することがあります。事前に「追加費用が発生する場合は必ず連絡してもらう」ことを業者と取り決めておきましょう。" },
  { q: "火災保険で修理費用を軽減できますか？", a: "台風・暴風雨・雹・大雪などの自然災害が原因の雨漏りは、火災保険の風災・雹災・雪災補償で対応できる場合があります。経年劣化は対象外ですが、一度保険会社に確認する価値があります。" },
  { q: "修理費用を分割払いにできますか？", a: "業者によってはクレジットカード払いやローンでの分割払いに対応しています。大規模な修理の場合は、リフォームローンの利用も選択肢です。事前に支払い方法を業者に確認しましょう。" },
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

export default function CostAveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[
          { name: "費用相場", href: "/cost/average" },
          { name: "費用相場ガイド" },
        ]} />

        {/* Hero */}
        <section className="py-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            雨漏り修理の費用相場ガイド
          </h1>
          <p className="text-text leading-relaxed mb-6">
            雨漏り修理にかかる費用は、修理箇所・損傷の程度・工事内容によって大きく異なります。
            このページでは、修理箇所別・工事内容別の費用相場を詳しく解説し、見積もりの見方や費用を抑えるコツもご紹介します。
            適正価格で修理を行うための参考にしてください。
          </p>
        </section>

        {/* 修理箇所別の費用相場 */}
        <section className="py-8">
          <h2 className="section-title">修理箇所別の費用相場</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>修理箇所</th>
                  <th>費用相場</th>
                  <th>主な工事内容</th>
                </tr>
              </thead>
              <tbody>
                {locationCosts.map((c) => (
                  <tr key={c.location}>
                    <td className="font-bold text-navy">
                      {c.href ? (
                        <Link href={c.href} className="hover:underline">{c.location}</Link>
                      ) : c.location}
                    </td>
                    <td className="font-semibold text-amber-dark">{c.range}</td>
                    <td className="text-sm">{c.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 工事内容別の費用 */}
        <section className="py-8">
          <h2 className="section-title">工事内容別の費用相場</h2>
          <div className="space-y-4">
            {workCosts.map((w) => (
              <div key={w.work} className="card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-navy text-lg">{w.work}</h3>
                  <span className="tag-pill tag-pill--amber">{w.range}</span>
                </div>
                <p className="text-sm text-text-light">{w.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 見積もりの見方 */}
        <section className="py-8">
          <h2 className="section-title">見積もりの見方</h2>
          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-4">
              {[
                { title: "工事内容の詳細", desc: "「一式」ではなく、具体的な工事内容が記載されているか確認。何をどこまで修理するのか明確になっているかがポイントです。" },
                { title: "材料費と工賃の内訳", desc: "材料費と人件費が分かれて記載されているか。内訳が不明確な見積もりは追加費用のリスクがあります。" },
                { title: "足場代の有無", desc: "2階以上の修理では足場が必要になることが多く、10〜20万円程度かかります。見積もりに含まれているか確認しましょう。" },
                { title: "保証期間と保証内容", desc: "施工後の保証が付いているか。一般的には5〜10年の保証が目安です。保証の対象範囲も確認しましょう。" },
                { title: "追加費用の条件", desc: "追加費用が発生する条件が記載されているか。施工中に問題が見つかった場合の対応方針を事前に確認しましょう。" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 費用を抑える5つのコツ */}
        <section className="py-8">
          <h2 className="section-title">費用を抑える5つのコツ</h2>
          <div className="space-y-4">
            {savingTips.map((tip, i) => (
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
          <h2 className="section-title">費用相場の関連ページ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "屋根修理の費用", href: "/cost/roof", tag: "3〜300万円" },
              { name: "外壁修理の費用", href: "/cost/wall", tag: "2〜120万円" },
              { name: "天井修理の費用", href: "/cost/ceiling", tag: "5〜20万円" },
              { name: "火災保険の活用", href: "/cost/insurance", tag: "保険適用" },
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
            <h2 className="text-2xl font-extrabold mb-3">まずは無料で見積もりを比較</h2>
            <p className="text-white/80 text-sm mb-4">複数業者の見積もりを比較して、適正価格で修理しましょう</p>
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
