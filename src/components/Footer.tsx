import Link from 'next/link';

const serviceLinks = [
  { label: '雨漏り修理110番', href: '/review/amamori110/' },
  { label: 'ミツモア', href: '/review/mitsumora/' },
  { label: '雨漏り修理の達人', href: '/review/tatsujin/' },
  { label: 'アメピタ', href: '/review/amepita/' },
  { label: 'くらしのマーケット', href: '/review/kurashi/' },
];

const guideLinks = [
  { label: 'ランキング', href: '/#ranking' },
  { label: '費用相場', href: '/#cost' },
  { label: '業者の選び方', href: '/#how-to-choose' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-lg mb-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white text-sm font-black">雨</span>
              雨漏り修理ナビ
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              信頼できる雨漏り修理業者を厳選比較。あなたに最適な業者が見つかります。
            </p>
          </div>

          {/* Service links */}
          <div>
            <h3 className="font-bold text-sm text-primary-light mb-3">サービス比較</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guide links */}
          <div>
            <h3 className="font-bold text-sm text-primary-light mb-3">お役立ち情報</h3>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} 雨漏り修理ナビ All Rights Reserved.</p>
          <p className="mt-1">※ 当サイトはアフィリエイトプログラムに参加しています。</p>
        </div>
      </div>
    </footer>
  );
}
