'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as { q: string; a: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full max-w-container mx-auto px-6 py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-on-surface">
          {t('title')}
        </h2>
        <p className="text-lg font-body text-on-surface-variant max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`glass-panel rounded-xl overflow-hidden border transition-all duration-300 ${
              openIndex === i ? 'border-tertiary/40' : 'border-white/5'
            }`}
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="text-base font-body font-semibold text-on-surface">
                {item.q}
              </span>
              <span
                className={`material-symbols-outlined text-tertiary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
                style={{ fontSize: 20 }}
              >
                expand_more
              </span>
            </button>

            {openIndex === i && (
              <div className="px-6 pb-5 border-t border-white/5">
                <p className="text-sm font-body text-on-surface-variant leading-relaxed pt-4">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="ambient-glow"
        style={{ width: 400, height: 400, bottom: -100, right: '10%' }}
      />
    </section>
  );
}
