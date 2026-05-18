import { getTranslations } from 'next-intl/server';

const icons = [
  { main: 'rocket_launch', accent: 'layers' },
  { main: 'psychology', accent: 'account_tree' },
  { main: 'domain', accent: 'build' }
];

export default async function Featured() {
  const t = await getTranslations('featured');

  const items = [
    { key: 'item1', ...icons[0], tags: ['SaaS MVP', 'Multi-Tenant', 'CI/CD', 'Onboarding'] },
    { key: 'item2', ...icons[1], tags: ['Tool Calling', 'RAG', 'OpenAI', 'Anthropic'] },
    { key: 'item3', ...icons[2], tags: ['KVKK', 'Diş Kliniği', 'Hukuk Bürosu', 'Restoran'] }
  ] as const;

  return (
    <section id="featured" className="w-full max-w-container mx-auto px-6 py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-on-surface">
          {t('title')}
        </h2>
        <p className="text-lg font-body text-on-surface-variant max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <div
            key={item.key}
            className={`glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } card-hover group`}
          >
            {/* Visual panel */}
            <div className="md:w-2/5 min-h-[160px] md:min-h-[220px] relative flex items-center justify-center p-6 md:p-8 overflow-hidden bg-gradient-to-br from-surface-container to-background">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `radial-gradient(circle at ${i % 2 === 0 ? '30% 60%' : '70% 40%'}, rgba(107,19,175,0.4), transparent 60%)`
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-secondary-container to-tertiary-container flex items-center justify-center shadow-[0_0_30px_rgba(107,19,175,0.5)]">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 40, fontVariationSettings: "'FILL' 1" }}>
                    {item.main}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[11px] font-label tracking-wide text-tertiary bg-tertiary-container/40 border border-tertiary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center gap-4">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/40">
                <span className="text-xs font-label tracking-widest uppercase text-on-secondary-container">
                  {t(`${item.key}.tag`)}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface">
                {t(`${item.key}.title`)}
              </h3>
              <p className="text-base font-body text-on-surface-variant leading-relaxed">
                {t(`${item.key}.desc`)}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 w-fit text-sm font-label tracking-widest uppercase text-[#FFD700] group-hover:gap-3 transition-all"
              >
                {t(`${item.key}.cta`)}
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className="ambient-glow"
        style={{ width: 500, height: 500, top: '30%', right: -100 }}
      />
    </section>
  );
}
