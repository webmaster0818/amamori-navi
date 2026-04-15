import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "雨漏り修理業者おすすめランキングTOP5【2026年最新】費用相場・口コミ比較",
  description:
    "雨漏り修理のおすすめ業者5社を徹底比較。費用相場は25,000円〜。24時間365日対応の緊急修理、火災保険活用、屋根・外壁・ベランダの修理費用をわかりやすく解説。無料見積もりで最適な業者が見つかります。",
};

const services = [
  {
    rank: 1,
    name: "雨漏り修理110番",
    slug: "amamori110",
    url: "sharing-tech.co.jp/amamori",
    hours: "24時間365日",
    cost: "25,000円〜",
    area: "全国",
    feature: "上場企業運営・累計500万件の実績",
    description: "東証上場企業のシェアリングテクノロジーが運営する業界最大手サービス。24時間365日全国対応で、累計500万件以上の相談実績を誇ります。",
    pros: ["24時間365日いつでも相談可能", "上場企業運営で信頼性が高い", "累計500万件の豊富な実績", "全国どこでも対応可能"],
    cons: ["実際の作業は加盟店が対応", "地域により対応速度に差がある場合も"],
    recommend: "緊急の雨漏りで今すぐ対応してほしい方、信頼できる大手に任せたい方",
  },
  {
    rank: 2,
    name: "ミツモア",
    slug: "mitsumora",
    url: "meetsmore.com",
    hours: "24時間受付",
    cost: "12,000〜48,380円",
    area: "全国",
    feature: "複数業者の一括見積もり・口コミ比較",
    description: "最大5社から一括で見積もりを取得できるマッチングプラットフォーム。口コミ評価を見ながら業者を比較検討できるのが強みです。",
    pros: ["最大5社から一括見積もり", "口コミ・評価で比較できる", "相場がわかりやすい", "チャットで事前相談可能"],
    cons: ["業者の質にばらつきがある", "見積もり後の営業連絡が多い場合も"],
    recommend: "複数業者を比較して最安値を見つけたい方、口コミを重視する方",
  },
  {
    rank: 3,
    name: "雨漏り修理の達人",
    slug: "tatsujin",
    url: "amamori-tatsujin.com",
    hours: "営業時間内",
    cost: "要見積もり",
    area: "全国（登録業者エリア）",
    feature: "職人直営・自社施工のみ登録",
    description: "自社施工の職人だけが登録するポータルサイト。仲介手数料がかからないため、適正価格での修理が期待できます。",
    pros: ["自社施工で中間マージンなし", "職人の技術力が高い", "仲介手数料がかからない", "厳しい審査を通過した業者のみ"],
    cons: ["対応エリアが限られる場合がある", "24時間対応ではない業者が多い"],
    recommend: "品質重視で職人の技術力にこだわりたい方、中間マージンを省きたい方",
  },
  {
    rank: 4,
    name: "アメピタ",
    slug: "amepita",
    url: "amepita.jp",
    hours: "24時間受付",
    cost: "要見積もり",
    area: "全国ネットワーク",
    feature: "無料点検・部分修理対応・明朗会計",
    description: "全国ネットワークを持つ雨漏り修理専門サービス。無料点検・調査から始められ、部分修理にも対応しているため、必要最小限の費用で修理できます。",
    pros: ["無料で点検・調査してもらえる", "部分修理で費用を抑えられる", "明朗会計で追加費用なし", "全国対応のネットワーク"],
    cons: ["地域により対応業者が少ない場合も", "大規模修理は別途相談が必要"],
    recommend: "まず無料で点検してもらいたい方、部分修理で費用を抑えたい方",
  },
  {
    rank: 5,
    name: "くらしのマーケット",
    slug: "kurashi",
    url: "curama.jp",
    hours: "24時間受付",
    cost: "業者により異なる",
    area: "全国",
    feature: "口コミランキング・料金透明性・個人業者も",
    description: "生活関連サービスの総合マッチングサイト。雨漏り修理も掲載されており、口コミランキングや料金の透明性が特徴です。",
    pros: ["口コミ・ランキングで選べる", "料金が事前にわかる", "個人業者で費用が安いことも", "予約システムが便利"],
    cons: ["雨漏り修理専門ではない", "個人業者の場合、保証が限定的"],
    recommend: "料金の透明性を重視する方、口コミで業者を選びたい方",
  },
];

const costData = [
  { location: "屋根", range: "3〜30万円", detail: "瓦のズレ修正・棟板金交換・防水シート補修など" },
  { location: "外壁", range: "2〜15万円", detail: "コーキング補修・ひび割れ補修・塗装補修など" },
  { location: "天井", range: "5〜20万円", detail: "天井裏の防水処理・断熱材交換・内装修復など" },
  { location: "ベランダ", range: "3〜15万円", detail: "防水層の補修・排水口清掃・トップコート塗り替えなど" },
];

const choosePoints = [
  { title: "資格・許可の確認", desc: "建設業許可や防水施工技能士などの資格を持っているか確認しましょう。資格保有は技術力の証明になります。" },
  { title: "複数業者の見積もり比較", desc: "必ず2〜3社以上から見積もりを取り、内容と金額を比較しましょう。極端に安い・高い業者は要注意です。" },
  { title: "保証内容の確認", desc: "施工後の保証期間と保証内容を必ず確認。一般的には5〜10年の保証が付く業者が安心です。" },
  { title: "口コミ・実績の確認", desc: "実際の利用者の口コミや施工実績を確認しましょう。写真付きの施工事例があるとより信頼できます。" },
  { title: "火災保険対応の確認", desc: "火災保険が適用できるかどうかの調査・申請サポートを行ってくれる業者を選ぶと、自己負担を軽減できます。" },
];

const faqs = [
  { q: "雨漏り修理の費用相場はいくらですか？", a: "雨漏り修理の費用は修理箇所や程度により大きく異なります。部分的な補修であれば1〜5万円程度、屋根全体の修理であれば10〜30万円程度が相場です。まずは無料見積もりを取ることをおすすめします。" },
  { q: "雨漏りの原因で多いものは何ですか？", a: "最も多い原因は屋根材の劣化・破損（約40%）、次いでコーキングの劣化（約25%）、防水シートの劣化（約20%）、排水不良（約15%）です。築10年を超えると雨漏りリスクが高まります。" },
  { q: "雨漏り修理は火災保険で対応できますか？", a: "台風・暴風雨・雹などの自然災害が原因の雨漏りは、火災保険の「風災・雹災・雪災」補償で対応できる場合があります。経年劣化は対象外ですが、一度保険会社に確認する価値があります。" },
  { q: "雨漏りを放置するとどうなりますか？", a: "雨漏りを放置すると、木材の腐食・カビの発生・シロアリ被害・断熱材の劣化・漏電リスクなど、被害が拡大します。修理費用も大幅に増加するため、早期対応が重要です。" },
  { q: "雨漏り修理にかかる期間はどのくらいですか？", a: "部分的な補修であれば1日〜数日、屋根全体の修理であれば1〜2週間程度が目安です。天候や修理内容により変動しますので、業者に確認しましょう。" },
  { q: "自分で雨漏りを修理できますか？", a: "応急処置としてブルーシートやコーキング材での一時的な止水は可能ですが、根本的な修理は専門業者に依頼することを強くおすすめします。誤った修理は被害を拡大させる恐れがあります。" },
  { q: "雨漏りの調査は無料でしてもらえますか？", a: "多くの業者が無料で現地調査・見積もりを行っています。当サイトで紹介している雨漏り修理110番やアメピタは無料調査に対応しています。" },
  { q: "マンションの雨漏りは誰が修理費用を負担しますか？", a: "共用部分（屋上・外壁など）からの雨漏りは管理組合の負担、専有部分内の配管などが原因の場合は所有者負担が一般的です。まずは管理会社に連絡しましょう。" },
  { q: "雨漏り修理業者を選ぶポイントは？", a: "資格の有無・見積もりの明確さ・保証内容・口コミ評価・火災保険対応の5点が重要です。必ず複数社から見積もりを取り比較しましょう。" },
  { q: "雨漏りの応急処置はどうすればいいですか？", a: "室内ではバケツで水を受け、雨漏り箇所周辺の家具を移動させましょう。屋外からはブルーシートで覆うのが効果的です。ただし屋根に上がるのは危険なため、無理せず業者に連絡してください。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== Hero ===== */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 text-center">
          <p className="inline-block tag-pill !bg-white/15 !text-accent text-sm mb-4">
            2026年4月最新版
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            雨漏りの不安、<br className="sm:hidden" />
            <span className="text-accent">今すぐ解消</span>しませんか？
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            厳選5社の料金・口コミ・対応力を徹底比較。最短30分で駆けつけ、24時間365日対応の業者も。あなたの状況に合った業者がすぐ見つかります。
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { num: "5社", label: "厳選比較" },
              { num: "30分〜", label: "最短対応" },
              { num: "24h", label: "365日対応" },
              { num: "全国", label: "対応エリア" },
            ].map((s) => (
              <div key={s.label} className="glass-card !bg-white/10 !border-white/20 p-4 text-center">
                <p className="text-2xl font-extrabold text-accent">{s.num}</p>
                <p className="text-xs text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="glass-card !bg-white/10 !border-accent/30 p-6 max-w-lg mx-auto">
            <p className="text-sm text-accent font-bold mb-2">
              今まさに雨漏りしている方へ
            </p>
            <p className="text-white/80 text-sm mb-4">
              24時間365日対応。電話一本で最短30分で駆けつけます。
            </p>
            <a href="#ranking" className="btn-accent w-full sm:w-auto">
              今すぐ無料相談する
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumb items={[{ name: "雨漏り修理業者ランキング" }]} />

        {/* ===== Comparison Table ===== */}
        <section className="py-12" id="ranking">
          <h2 className="section-title">雨漏り修理業者 比較一覧表</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>業者名</th>
                  <th>対応時間</th>
                  <th>費用目安</th>
                  <th>対応エリア</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.slug}>
                    <td>
                      <span className={`rank-badge rank-badge--${s.rank}`}>{s.rank}</span>
                    </td>
                    <td className="font-bold text-primary-dark">
                      <Link href={`/review/${s.slug}/`} className="hover:underline">
                        {s.name}
                      </Link>
                    </td>
                    <td>{s.hours}</td>
                    <td className="font-semibold text-accent-dark">{s.cost}</td>
                    <td>{s.area}</td>
                    <td className="text-sm">{s.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== TOP5 Detailed Ranking ===== */}
        <section className="py-12">
          <h2 className="section-title">おすすめ雨漏り修理業者 TOP5 詳細レビュー</h2>
          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.slug} className="card-hover" id={`rank-${s.rank}`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className={`rank-badge rank-badge--${s.rank}`}>{s.rank}</span>
                  <div>
                    <h3 className="text-xl font-extrabold text-dark">{s.name}</h3>
                    <p className="text-sm text-text-light">{s.url}</p>
                  </div>
                </div>
                <p className="mb-4 text-text leading-relaxed">{s.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag-pill">{s.hours}</span>
                  <span className="tag-pill tag-pill--amber">{s.cost}</span>
                  <span className="tag-pill tag-pill--green">{s.area}</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-2">メリット</h4>
                    <ul className="space-y-1">
                      {s.pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent-dark text-sm mb-2">デメリット</h4>
                    <ul className="space-y-1">
                      {s.cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-accent-dark mt-0.5 flex-shrink-0">&#9650;</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-sm bg-surface-alt px-4 py-3 rounded-lg mb-4">
                  <span className="font-bold text-dark">こんな方におすすめ：</span>{s.recommend}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href={`/review/${s.slug}/`} className="btn-primary !text-sm">
                    詳細レビューを見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Cost Overview ===== */}
        <section className="py-12" id="cost">
          <h2 className="section-title">修理箇所別の費用相場</h2>
          <p className="text-text-light mb-6">
            雨漏り修理の費用は、修理箇所や損傷の程度、建物の構造によって大きく異なります。以下は一般的な費用相場の目安です。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {costData.map((c) => (
              <div key={c.location} className="card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="tag-pill tag-pill--amber text-lg font-bold px-4 py-1">
                    {c.location}
                  </span>
                  <span className="text-xl font-extrabold text-dark">{c.range}</span>
                </div>
                <p className="text-sm text-text-light">{c.detail}</p>
              </div>
            ))}
          </div>
          <div className="glass-card p-6 mt-6">
            <p className="text-sm text-text-light">
              ※ 上記は目安です。実際の費用は現地調査の上、見積もりで確定します。複数業者から見積もりを取り比較することをおすすめします。
              火災保険が適用される場合は自己負担が大幅に軽減される可能性があります。
            </p>
          </div>
        </section>

        {/* ===== How to Choose ===== */}
        <section className="py-12" id="how-to-choose">
          <h2 className="section-title">雨漏り修理業者の選び方 5つのポイント</h2>
          <div className="space-y-4">
            {choosePoints.map((p, i) => (
              <div key={i} className="card-hover flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-extrabold text-base flex-shrink-0">
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

        {/* ===== Insurance Section ===== */}
        <section className="py-12">
          <h2 className="section-title">火災保険で雨漏り修理できる？簡単解説</h2>
          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-dark text-lg mb-2">火災保険が適用されるケース</h3>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-start gap-2"><span className="text-primary flex-shrink-0">&#10003;</span>台風・暴風雨による屋根の損傷</li>
                  <li className="flex items-start gap-2"><span className="text-primary flex-shrink-0">&#10003;</span>雹（ひょう）による外壁・屋根の破損</li>
                  <li className="flex items-start gap-2"><span className="text-primary flex-shrink-0">&#10003;</span>大雪による雨どいの破損</li>
                  <li className="flex items-start gap-2"><span className="text-primary flex-shrink-0">&#10003;</span>落雷による建物の損傷</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-dark text-lg mb-2">火災保険が適用されないケース</h3>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-start gap-2"><span className="text-accent-dark flex-shrink-0">&#10007;</span>経年劣化による雨漏り</li>
                  <li className="flex items-start gap-2"><span className="text-accent-dark flex-shrink-0">&#10007;</span>施工不良が原因の雨漏り</li>
                  <li className="flex items-start gap-2"><span className="text-accent-dark flex-shrink-0">&#10007;</span>被害発生から3年以上経過したもの</li>
                </ul>
              </div>
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                <p className="text-sm font-bold text-dark mb-1">火災保険申請のポイント</p>
                <p className="text-sm text-text-light">
                  被害を発見したら早めに保険会社へ連絡し、修理前の写真を必ず残しておきましょう。
                  火災保険の申請サポートに対応した修理業者を選ぶと、手続きがスムーズに進みます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-12" id="faq">
          <h2 className="section-title">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ===== Bottom CTA ===== */}
        <section className="py-12">
          <div className="bg-gradient-to-r from-primary to-dark rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              まずは無料で相談・見積もりを
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              雨漏りは放置すると被害が拡大し、修理費用も増大します。早めの対応が大切です。まずは無料見積もりから始めましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#ranking" className="btn-accent">
                ランキングを見て選ぶ
              </a>
              <Link href="/review/amamori110/" className="btn-primary !bg-white/10 !shadow-none border border-white/30">
                おすすめ1位の詳細を見る
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
