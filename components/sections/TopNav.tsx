'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function TopNav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'services', href: '#services' },
    { key: 'solutions', href: '#featured' },
    { key: 'process', href: '#process' },
    { key: 'pricing', href: '#pricing' },
    { key: 'contact', href: '#contact' }
  ] as const;

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 py-3 max-w-container mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          {/* Crop container: shows only the top ~62% of the PNG (icon, no text) */}
          <div className="flex-shrink-0 rounded-xl overflow-hidden" style={{ width: 38, height: 38 }}>
            <img
              src={`${BASE}/logo.png`}
              alt="Seçkin AI"
              style={{ width: 38, height: 61, objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            />
          </div>
          <span className="text-base font-headline font-bold text-on-surface tracking-tight whitespace-nowrap">
            Seçkin <span className="text-gradient">AI</span>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-xs font-label tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 px-3 py-2 rounded-md"
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 rounded-full glass-panel rim-light text-xs font-label tracking-widest uppercase text-on-surface hover:bg-white/5 transition-all duration-300"
          >
            {t('cta')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-panel-strong border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-xs font-label tracking-widest uppercase text-on-surface-variant hover:text-on-surface py-2 border-b border-white/5"
            >
              {t(key)}
            </a>
          ))}
          <div className="flex items-center justify-between pt-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-xs font-label tracking-widest uppercase text-tertiary"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
