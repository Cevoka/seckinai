import { getTranslations } from 'next-intl/server';

export default async function Testimonials() {
  const t = await getTranslations('testimonials');

  const testimonials = ['t1', 't2', 't3'] as const;

  return (
    <section className="w-full max-w-container mx-auto px-6 py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-on-surface">
          {t('title')}
        </h2>
        <p className="text-lg font-body text-on-surface-variant max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((key, i) => (
          <div
            key={key}
            className="glass-panel rounded-2xl p-7 flex flex-col gap-5 rim-light card-hover relative overflow-hidden"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="material-symbols-outlined text-[#FFD700]" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm font-body text-on-surface-variant italic leading-relaxed flex-1">
              {t(`${key}.quote`)}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-secondary-container to-tertiary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>
                  person
                </span>
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-on-surface">
                  {t(`${key}.name`)}
                </p>
                <p className="text-xs font-label tracking-wide text-tertiary">
                  {t(`${key}.role`)}
                </p>
              </div>
            </div>

            {/* Subtle glow */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-xl opacity-30 bg-secondary-container pointer-events-none" />
          </div>
        ))}
      </div>

      <div
        className="ambient-glow"
        style={{ width: 400, height: 400, top: '50%', left: -100, opacity: 0.3 }}
      />
    </section>
  );
}
