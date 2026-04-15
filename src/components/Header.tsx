'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'ランキング', href: '/#ranking' },
  { label: '費用相場', href: '/#cost' },
  { label: '選び方', href: '/#how-to-choose' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-card !rounded-none border-x-0 border-t-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-navy font-extrabold text-lg sm:text-xl tracking-tight">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-white text-sm font-black">雨</span>
          雨漏り修理ナビ
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-text hover:text-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#ranking" className="btn-accent !py-2 !px-4 !text-sm !rounded-lg">
            無料相談はこちら
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニュー"
        >
          <span className={`block h-0.5 w-6 bg-navy transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-navy transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-white/95 backdrop-blur-md px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-text hover:text-navy border-b border-border-light"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#ranking"
            onClick={() => setOpen(false)}
            className="btn-accent !text-sm mt-3 w-full"
          >
            無料相談はこちら
          </Link>
        </nav>
      )}
    </header>
  );
}
