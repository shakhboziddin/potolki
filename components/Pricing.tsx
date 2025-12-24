import React from 'react';
import { Translation } from '../types';

interface PricingProps {
  t: Translation;
}

const Pricing: React.FC<PricingProps> = ({ t }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            {t.pricing.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-lg font-medium">Mat / Satin</span>
                    <span className="text-xl font-bold text-gold-400">~80,000 UZS / m²</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-lg font-medium">Glyanets (Lak)</span>
                    <span className="text-xl font-bold text-gold-400">~90,000 UZS / m²</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-lg font-medium">Photo Print</span>
                    <span className="text-xl font-bold text-gold-400">~150,000 UZS / m²</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                    <span className="text-lg font-medium">LED Lines</span>
                    <span className="text-xl font-bold text-gold-400">Individual</span>
                </div>
            </div>
            
            <div className="bg-gold-500/10 p-6 rounded-2xl border border-gold-500/20 text-center">
                <p className="text-gold-200 mb-4 text-sm uppercase tracking-widest">{t.pricing.title}</p>
                <p className="text-slate-300 italic mb-6">
                    "{t.pricing.disclaimer}"
                </p>
                <a href="#contact" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-gold-900/50">
                    {t.nav.callBtn}
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;