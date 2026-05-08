import { getTranslations } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations('hero');

  return (
    <section className="w-full max-w-container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-12 relative">
      {/* Left column */}
      <div className="flex-1 flex flex-col items-start z-10 max-w-[600px]">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-tertiary/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="text-xs font-label tracking-widest uppercase text-tertiary">
            {t('pill')}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-on-surface">{t('headline1')}</span>
          <br />
          <span className="text-gradient">{t('headline2')}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg font-body text-on-surface-variant mb-8 max-w-md leading-relaxed">
          {t('subheadline')}
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary-container hover:bg-secondary-container/80 text-on-secondary-container font-body font-semibold transition-all duration-300 rim-light shadow-[0_0_20px_rgba(107,19,175,0.4)] hover:shadow-[0_0_35px_rgba(107,19,175,0.6)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
            rocket_launch
          </span>
          {t('cta')}
        </a>

        {/* Trust indicators */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex -space-x-2">
            {['#6b13af', '#a270c0', '#e5b5ff'].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${color}, #141315)` }}
              >
                <span className="material-symbols-outlined text-white" style={{ fontSize: 14 }}>
                  person
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm font-body text-on-surface-variant">
            <span className="text-on-surface font-semibold">20+</span> aktif müşteri güveniyor
          </p>
        </div>
      </div>

      {/* Right column — visual */}
      <div className="flex-1 relative w-full max-w-[520px] flex flex-col gap-5">
        {/* Icon grid with background glow */}
        <div className="relative">
          {/* Central glow orb */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(107,19,175,0.35) 0%, rgba(229,181,255,0.1) 40%, rgba(20,19,21,0) 70%)',
                filter: 'blur(30px)'
              }}
            />
          </div>

          {/* Skill category icons */}
          <div className="relative z-10 grid grid-cols-3 gap-4 p-4">
            {[
              { icon: 'chat', label: 'Chatbot' },
              { icon: 'account_tree', label: 'Otomasyon' },
              { icon: 'domain', label: 'Sektör' },
              { icon: 'hub', label: 'Entegrasyon' },
              { icon: 'dashboard', label: 'SaaS' },
              { icon: 'smartphone', label: 'Mobil' },
              { icon: 'psychology', label: 'AI Agent' },
              { icon: 'insert_chart', label: 'Analitik' },
              { icon: 'security', label: 'Güvenlik' }
            ].map(({ icon, label }) => (
              <div
                key={icon}
                className="glass-panel rounded-xl p-3 flex flex-col items-center gap-1.5 card-hover cursor-default"
              >
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 24 }}>
                  {icon}
                </span>
                <span className="text-[10px] font-label tracking-wide text-on-surface-variant text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial — below the grid, no overlap */}
        <div className="glass-panel p-4 rounded-xl border-l-4 border-l-tertiary shadow-[0_8px_30px_rgba(107,19,175,0.3)] mx-4">
          <p className="text-sm font-body text-on-surface italic leading-relaxed mb-2">
            {t('testimonialQuote')}
          </p>
          <p className="text-xs font-label tracking-widest text-on-surface-variant flex items-center gap-2 uppercase">
            <span className="w-4 h-px bg-outline" />
            {t('testimonialAuthor')}
          </p>
        </div>

        {/* Ambient for visual area */}
        <div
          className="ambient-glow"
          style={{ width: 300, height: 300, top: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(229,181,255,0.12) 0%, rgba(20,19,21,0) 70%)' }}
        />
      </div>

      {/* Section ambient */}
      <div
        className="ambient-glow"
        style={{ width: 500, height: 500, bottom: -200, right: '10%' }}
      />
    </section>
  );
}
