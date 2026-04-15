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
    <header className="sticky top-0 z-50">
      {/* Main header bar */}
      <div className="glass-card !rounded-none border-x-0 border-t-0" style={{ background: 'rgba(255,255,255,0.92)', borderBottom: '1px solid rgba(0,143,122,0.1)' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-primary font-extrabold text-lg sm:text-xl tracking-tight">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white text-sm font-black">雨</span>
            雨漏り修理ナビ
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-text hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="text-primary font-bold text-sm hidden lg:inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              0120-XXX-XXX
            </span>
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
            <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Trust badges */}
      <div className="bg-surface-alt border-b border-border-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1 text-primary font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            24時間対応
          </span>
          <span className="inline-flex items-center gap-1 text-primary font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            全国対応
          </span>
          <span className="inline-flex items-center gap-1 text-primary font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            無料見積もり
          </span>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-white/95 backdrop-blur-md px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-text hover:text-primary border-b border-border-light"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 text-center text-primary font-bold text-sm mb-2">
            <svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            0120-XXX-XXX
          </div>
          <Link
            href="/#ranking"
            onClick={() => setOpen(false)}
            className="btn-accent !text-sm w-full"
          >
            無料相談はこちら
          </Link>
        </nav>
      )}
    </header>
  );
}
