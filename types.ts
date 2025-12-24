
export type Language = 'uz' | 'ru';

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface PricingTier {
  type: string;
  price: string;
}

// Added ReviewItem interface to support customer feedback data
export interface ReviewItem {
  name: string;
  text: string;
  rating: number;
}

export interface Translation {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    pricing: string;
    contacts: string;
    callBtn: string;
    callCenter: string;
    workHours: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaMain: string;
    ctaTg: string;
    ctaFree: string;
  };
  advantages: {
    title: string;
    items: AdvantageItem[];
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
    cta: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    expand: string;
    items: PortfolioItem[];
  };
  // Added reviews section to Translation interface to fix "Property 'reviews' does not exist" errors
  reviews: {
    title: string;
    items: ReviewItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  offer: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successSubtitle: string;
  };
  contact: {
    title: string;
    phone: string;
    telegram: string;
    address: string;
    workHours: string;
  };
  meta: {
    title: string;
    description: string;
  };
}