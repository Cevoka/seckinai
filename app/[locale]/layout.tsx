import type { Metadata } from 'next';
import { Montserrat, Manrope, Space_Grotesk } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['600', '700', '800']
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['600']
});

export const metadata: Metadata = {
  title: 'Seçkin AI — AI Ajansı | Chatbot, Otomasyon, SaaS',
  description: '148+ hazır çözüm şablonu ile işinizi AI ile dönüştürüyoruz. Chatbot, otomasyon, sektör çözümleri ve entegrasyonlar.',
  keywords: 'ai ajansı, chatbot geliştirme, otomasyon, n8n, whatsapp bot, saas, yapay zeka',
  openGraph: {
    title: 'Seçkin AI — AI Ajansı',
    description: '148+ hazır çözüm ile işinizi AI ile dönüştürüyoruz.',
    type: 'website',
    locale: 'tr_TR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seçkin AI — AI Ajansı',
    description: '148+ hazır çözüm ile işinizi AI ile dönüştürüyoruz.'
  },
  robots: { index: true, follow: true }
};

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.variable} ${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
