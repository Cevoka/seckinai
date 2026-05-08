'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function switchPath(newLocale: string) {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/') || `/${newLocale}`;
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel text-xs font-label tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>language</span>
        {locale.toUpperCase()}
        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 glass-panel-strong rounded-xl overflow-hidden z-50">
          {(['tr', 'en'] as const).map((l) => (
            <Link
              key={l}
              href={switchPath(l)}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-label tracking-widest uppercase transition-colors ${
                locale === l
                  ? 'text-tertiary bg-secondary-container/20'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
              }`}
            >
              {locale === l && (
                <span className="material-symbols-outlined" style={{ fontSize: 12 }}>check</span>
              )}
              {l === 'tr' ? 'Türkçe' : 'English'}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
