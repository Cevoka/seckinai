import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Footer() {
  const t = await getTranslations('footer');

  const serviceLinks = [
    { key: 'aiChatbots', href: '#services' },
    { key: 'automation', href: '#services' },
    { key: 'sectorSolutions', href: '#services' },
    { key: 'integrations', href: '#services' },
    { key: 'webSaas', href: '#services' },
    { key: 'mobile', href: '#services' }
  ] as const;

  const companyLinks = [
    { key: 'about', href: '#' },
    { key: 'process', href: '#process' },
    { key: 'pricing', href: '#pricing' },
    { key: 'contact', href: '#contact' }
  ] as const;

  const legalLinks = [
    { key: 'privacy', href: '#' },
    { key: 'terms', href: '#' }
  ] as const;

  return (
    <footer className="w-full border-t border-white/5 relative z-20 mt-auto">
      <div className="max-w-container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Seçkin AI" width={32} height={32} className="rounded-lg" />
              <span className="text-base font-headline font-bold text-on-surface">
                Seçkin <span className="text-gradient-subtle">AI</span>
              </span>
            </div>
            <p className="text-sm font-body text-on-surface-variant leading-relaxed mb-5">
              {t('tagline')}
            </p>
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-tertiary transition-colors"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>link</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-label tracking-widest uppercase text-on-surface-variant mb-4">
              {t('services')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm font-body text-on-surface-variant hover:text-tertiary transition-colors"
                  >
                    {t(`links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-label tracking-widest uppercase text-on-surface-variant mb-4">
              {t('company')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm font-body text-on-surface-variant hover:text-tertiary transition-colors"
                  >
                    {t(`links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <p className="text-xs font-label tracking-widest uppercase text-on-surface-variant mb-4">
              {t('legal')}
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {legalLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm font-body text-on-surface-variant hover:text-tertiary transition-colors"
                  >
                    {t(`links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel rim-light text-xs font-label tracking-widest uppercase text-on-surface hover:bg-white/5 transition-all"
            >
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 14 }}>
                chat
              </span>
              İletişim
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-on-surface-variant">{t('copyright')}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-body text-on-surface-variant">Powered by</span>
            <span className="text-xs font-label tracking-widest uppercase text-gradient">AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
