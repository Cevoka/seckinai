import { getTranslations } from 'next-intl/server';

interface Plan {
  key: 'pilot' | 'growth' | 'enterprise';
  icon: string;
  featured: boolean;
  priceNote?: boolean;
}

const plans: Plan[] = [
  { key: 'pilot', icon: 'explore', featured: false },
  { key: 'growth', icon: 'trending_up', featured: true, priceNote: true },
  { key: 'enterprise', icon: 'business', featured: false }
];

export default async function Pricing() {
  const t = await getTranslations('pricing');

  const featuresMap: Record<string, string[]> = {
    pilot: t.raw('pilot.features') as string[],
    growth: t.raw('growth.features') as string[],
    enterprise: t.raw('enterprise.features') as string[]
  };

  return (
    <section id="pricing" className="w-full max-w-container mx-auto px-6 py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-on-surface">
          {t('title')}
        </h2>
        <p className="text-lg font-body text-on-surface-variant max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(({ key, icon, featured, priceNote }) => (
          <div
            key={key}
            className={`glass-panel rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden card-hover ${
              featured
                ? 'border border-tertiary/40 shadow-[0_0_40px_rgba(229,181,255,0.12)]'
                : 'border border-white/5'
            }`}
          >
            {/* Popular badge */}
            {featured && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary-container text-xs font-label tracking-widest uppercase text-on-secondary-container">
                {t('growth.badge')}
              </div>
            )}

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 24 }}>
                {icon}
              </span>
            </div>

            {/* Plan name & price */}
            <div>
              <p className="text-xs font-label tracking-widest uppercase text-on-surface-variant mb-1.5">
                {t(`${key}.name`)}
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-headline font-bold text-gradient">
                  {t(`${key}.price`)}
                </span>
                {priceNote && (
                  <span className="text-xs font-body text-on-surface-variant">
                    {t('growth.priceNote')}
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm font-body text-on-surface-variant leading-relaxed">
              {t(`${key}.desc`)}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 flex-1">
              {featuresMap[key].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm font-body text-on-surface">
                  <span className="material-symbols-outlined text-tertiary mt-0.5 flex-shrink-0" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className={`mt-2 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-label tracking-widest uppercase transition-all duration-300 ${
                featured
                  ? 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80 shadow-[0_0_20px_rgba(107,19,175,0.3)] hover:shadow-[0_0_30px_rgba(107,19,175,0.5)] rim-light'
                  : 'glass-panel text-on-surface hover:bg-white/5 rim-light'
              }`}
            >
              {t(`${key}.cta`)}
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>

            {/* Ambient glow */}
            <div
              className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-50 pointer-events-none bg-secondary-container"
              style={{ opacity: featured ? 0.3 : 0.1 }}
            />
          </div>
        ))}
      </div>

      <div
        className="ambient-glow"
        style={{ width: 500, height: 500, top: '20%', right: -150, background: 'radial-gradient(circle, rgba(229,181,255,0.06) 0%, rgba(20,19,21,0) 70%)' }}
      />
    </section>
  );
}
