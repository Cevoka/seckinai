export interface Service {
  id: string;
  icon: string;
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
  skills: { label: string }[];
  gradient: string;
}

export const services: Service[] = [
  {
    id: 'ai-chatbots',
    icon: 'chat',
    title: { tr: 'AI Chatbotlar & Asistanlar', en: 'AI Chatbots & Assistants' },
    desc: {
      tr: 'WhatsApp\'tan web sitenize, Slack\'ten Discord\'a — her kanalda öğrenen, anlayan ve yanıt veren AI asistanlar.',
      en: 'From WhatsApp to your website, Slack to Discord — AI assistants that learn, understand, and respond across every channel.'
    },
    skills: [
      { label: 'LLM Chatbot' },
      { label: 'RAG Sistemi' },
      { label: 'Voice Bot' },
      { label: 'WhatsApp Bot' },
      { label: 'AI Agent' }
    ],
    gradient: 'from-[#6b13af]/20 to-[#e5b5ff]/5'
  },
  {
    id: 'automation',
    icon: 'account_tree',
    title: { tr: 'İş Akışı Otomasyonu', en: 'Workflow Automation' },
    desc: {
      tr: 'Manuel süreçleri n8n ve Zapier iş akışlarıyla otomatikleştirin. E-posta, form, CRM — her şey senkronda.',
      en: 'Automate manual processes with n8n and Zapier workflows. Email, forms, CRM — everything in sync.'
    },
    skills: [
      { label: 'n8n Workflow' },
      { label: 'Zapier' },
      { label: 'Email Otomasyonu' },
      { label: 'Web Scraping' },
      { label: 'Lead Capture' }
    ],
    gradient: 'from-[#30004c]/20 to-[#a270c0]/5'
  },
  {
    id: 'sector',
    icon: 'domain',
    title: { tr: 'Sektör Çözümleri', en: 'Sector Solutions' },
    desc: {
      tr: 'Diş kliniğinden hukuk bürosuna, restorantan emlak ofisine — sektörünüze özel tam yığın AI sistemleri.',
      en: 'From dental clinics to law firms, restaurants to real estate — full-stack AI systems tailored to your sector.'
    },
    skills: [
      { label: 'Diş Kliniği' },
      { label: 'Restoran POS' },
      { label: 'Hukuk Bürosu' },
      { label: 'Emlak Sistemi' },
      { label: 'Kuaför & Salon' }
    ],
    gradient: 'from-[#1a1a2e]/40 to-[#c6c4df]/5'
  },
  {
    id: 'integrations',
    icon: 'hub',
    title: { tr: 'Entegrasyonlar', en: 'Integrations' },
    desc: {
      tr: 'OpenAI, Google, HubSpot, Notion, Twilio — mevcut araçlarınızı AI ile birbirine bağlıyoruz.',
      en: 'OpenAI, Google, HubSpot, Notion, Twilio — we connect your existing tools with AI.'
    },
    skills: [
      { label: 'OpenAI / Anthropic' },
      { label: 'Google Workspace' },
      { label: 'HubSpot / Salesforce' },
      { label: 'Notion / Airtable' },
      { label: 'Twilio / WhatsApp' }
    ],
    gradient: 'from-[#6b13af]/15 to-[#FFD700]/5'
  },
  {
    id: 'web-saas',
    icon: 'dashboard',
    title: { tr: 'Web & SaaS', en: 'Web & SaaS' },
    desc: {
      tr: 'Sıfırdan SaaS, marketplace ve çok kiracılı uygulamalar. Fikirden ürüne en kısa sürede.',
      en: 'From-zero SaaS, marketplaces, and multi-tenant applications. From idea to product in record time.'
    },
    skills: [
      { label: 'SaaS MVP' },
      { label: 'Marketplace' },
      { label: 'Multi-Tenant' },
      { label: 'Admin Paneli' },
      { label: 'Dashboard Analytics' }
    ],
    gradient: 'from-[#30004c]/15 to-[#e5b5ff]/5'
  },
  {
    id: 'mobile',
    icon: 'smartphone',
    title: { tr: 'Mobil & PWA', en: 'Mobile & PWA' },
    desc: {
      tr: 'React Native, Expo ve PWA ile her platforma yönelik mobil deneyimler. Push bildirimlerinden offline desteğe.',
      en: 'Mobile experiences for every platform with React Native, Expo, and PWA. From push notifications to offline support.'
    },
    skills: [
      { label: 'React Native' },
      { label: 'Expo App' },
      { label: 'PWA' },
      { label: 'Push Notifications' },
      { label: 'Responsive Mobile' }
    ],
    gradient: 'from-[#6b13af]/10 to-[#c6c4df]/5'
  }
];
