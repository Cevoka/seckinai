import { getTranslations } from 'next-intl/server';

export default async function HowItWorks() {
  const t = await getTranslations('howItWorks');

  const steps = [
    { key: 'step1', icon: 'search', color: 'from-[#6b13af]/20 to-transparent' },
    { key: 'step2', icon: 'construction', color: 'from-[#30004c]/20 to-transparent' },
    { key: 'step3', icon: 'rocket_launch', color: 'from-[#1a1a2e]/40 to-transparent' }
  ] as const;

  return (
    <section id="process" className="w-full max-w-container mx-auto px-6 py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-on-surface">
          {t('title')}
        </h2>
        <p className="text-lg font-body text-on-surface-variant max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-tertiary/20 via-tertiary/50 to-tertiary/20 z-0" />

        {steps.map(({ key, icon, color }, i) => (
          <div key={key} className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center gap-4 relative z-10 rim-light card-hover">
            {/* Number badge */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-secondary-container to-tertiary-container flex items-center justify-center shadow-[0_0_20px_rgba(107,19,175,0.4)]">
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 28, fontVariationSettings: "'FILL' 1" }}>
                  {icon}
                </span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary-container border-2 border-background flex items-center justify-center">
                <span className="text-[10px] font-headline font-bold text-on-secondary-container">
                  {i + 1}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-headline font-bold text-on-surface">
              {t(`${key}.title`)}
            </h3>
            <p className="text-sm font-body text-on-surface-variant leading-relaxed">
              {t(`${key}.desc`)}
            </p>
          </div>
        ))}
      </div>

      <div
        className="ambient-glow"
        style={{ width: 400, height: 400, bottom: -100, left: '50%', transform: 'translateX(-50%)' }}
      />
    </section>
  );
}
