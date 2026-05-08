import { getTranslations, getLocale } from 'next-intl/server';
import { services } from '@/lib/services-data';

export default async function Services() {
  const t = await getTranslations('services');
  const resolvedLocale = await getLocale();

  return (
    <section id="services" className="w-full max-w-container mx-auto px-6 py-20 relative">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-tertiary/30 mb-4">
          <span className="text-xs font-label tracking-widest uppercase text-tertiary">
            148+ Çözüm Şablonu
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-on-surface">
          {t('title')}
        </h2>
        <p className="text-lg font-body text-on-surface-variant max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Services bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <div
            key={service.id}
            className="glass-panel rounded-2xl p-6 flex flex-col gap-4 group card-hover relative overflow-hidden border border-white/5"
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 pointer-events-none`}
            />

            {/* Icon */}
            <div className="relative z-10 w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 24 }}>
                {service.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl font-headline font-semibold text-on-surface">
              {resolvedLocale === 'tr' ? service.title.tr : service.title.en}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm font-body text-on-surface-variant leading-relaxed">
              {resolvedLocale === 'tr' ? service.desc.tr : service.desc.en}
            </p>

            {/* Skill chips */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-1">
              {service.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill.label}
                  className="px-2.5 py-1 rounded-full text-[11px] font-label tracking-wide text-on-surface-variant bg-surface-container border border-outline-variant/50"
                >
                  {skill.label}
                </span>
              ))}
              {service.skills.length > 3 && (
                <span className="px-2.5 py-1 rounded-full text-[11px] font-label tracking-wide text-tertiary bg-tertiary-container/30 border border-tertiary/20">
                  +{service.skills.length - 3} daha
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-label tracking-widest uppercase text-[#FFD700]">
                {t('explore')}
              </span>
              <span className="material-symbols-outlined text-[#FFD700] group-hover:translate-x-1 transition-transform" style={{ fontSize: 18 }}>
                arrow_forward
              </span>
            </div>

            {/* Hover glow */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-secondary-container/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      <div
        className="ambient-glow"
        style={{ width: 400, height: 400, bottom: -100, left: -50 }}
      />
    </section>
  );
}
