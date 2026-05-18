'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

type FormData = z.infer<typeof schema>;

export default function FinalCTA() {
  const t = useTranslations('cta');
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setSubmitError(null);
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT
      ?? 'https://kehkxgouyjceypxmtvip.supabase.co/functions/v1/seckinai-contact';
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
    if (!res.ok) {
      setSubmitError('Bir hata oluştu. Lütfen tekrar deneyin.');
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="contact" className="w-full max-w-container mx-auto px-6 py-20 relative">
      <div className="glass-panel rounded-2xl md:rounded-3xl p-6 md:p-14 border border-tertiary/20 rim-light relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(107,19,175,0.4), transparent 60%)'
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/40 mb-6">
              <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="text-xs font-label tracking-widest uppercase text-on-secondary-container">
                Ücretsiz Görüşme
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">
              {t('title')}
            </h2>
            <p className="text-base font-body text-on-surface-variant leading-relaxed mb-8 max-w-sm">
              {t('subtitle')}
            </p>

            {/* Benefits */}
            {[
              '30 dakika, ücretsiz, taahhütsüz',
              'Projenize özel yol haritası',
              'Zaman ve maliyet tahmini'
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded-full bg-secondary-container/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 12 }}>
                    check
                  </span>
                </div>
                <span className="text-sm font-body text-on-surface-variant">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="flex-1 w-full">
            {submitted ? (
              <div data-testid="form-success" className="glass-panel-strong rounded-2xl p-8 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 32, fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <p className="text-base font-body font-semibold text-on-surface">{t('success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                <div>
                  <input
                    {...register('name')}
                    placeholder={t('namePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 bg-transparent text-on-surface placeholder-on-surface-variant text-sm font-body focus:outline-none focus:border-tertiary/50 transition-colors"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 mt-1 ml-1">{t('nameRequired')}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 bg-transparent text-on-surface placeholder-on-surface-variant text-sm font-body focus:outline-none focus:border-tertiary/50 transition-colors"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 mt-1 ml-1">{t('emailInvalid')}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 bg-transparent text-on-surface placeholder-on-surface-variant text-sm font-body focus:outline-none focus:border-tertiary/50 transition-colors resize-none"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 mt-1 ml-1">{t('messageRequired')}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-xs text-red-400 text-center">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-secondary-container hover:bg-secondary-container/80 text-on-secondary-container font-label tracking-widest uppercase text-sm transition-all duration-300 rim-light shadow-[0_0_20px_rgba(107,19,175,0.3)] hover:shadow-[0_0_30px_rgba(107,19,175,0.5)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin" style={{ fontSize: 18 }}>
                        progress_activity
                      </span>
                      {t('submitting')}
                    </>
                  ) : (
                    <>
                      {t('submit')}
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
