import { getTranslations } from 'next-intl/server';

export default async function Stats() {
  const t = await getTranslations('stats');

  const items = [
    { value: '148+', label: t('templates'), icon: 'layers' },
    { value: '15+', label: t('sectors'), icon: 'domain' },
    { value: '20+', label: t('integrations'), icon: 'hub' },
    { value: '100%', label: t('custom'), icon: 'code' }
  ];

  return (
    <section className="w-full max-w-container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ value, label, icon }) => (
          <div
            key={label}
            className="glass-panel rounded-xl p-6 flex flex-col items-center text-center gap-2 rim-light card-hover"
          >
            <span className="material-symbols-outlined text-tertiary mb-1" style={{ fontSize: 28 }}>
              {icon}
            </span>
            <span className="text-3xl font-headline font-extrabold text-gradient">{value}</span>
            <span className="text-xs font-label tracking-widest uppercase text-on-surface-variant">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
