import React from 'react';
import { Translation } from '../types';
import { PHONE_NUMBER, TELEGRAM_LINK } from '../constants';
import { Phone, Send, Ruler, ChevronDown } from 'lucide-react';

interface HeroProps {
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[650px] w-full flex items-center overflow-hidden">
      {/* Background Image - Using a clearer interior shot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=90&w=1920" 
          alt="Premium Stretch Ceiling Interior" 
          className="w-full h-full object-cover object-center"
        />
        {/* Lighter overlays to show the image better while keeping text legible */}
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center pt-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gold-400/40 rounded-full bg-slate-900/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 font-semibold tracking-[0.15em] text-[10px] md:text-xs uppercase">Potolki 777 Tashkent</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.15] md:leading-tight drop-shadow-xl">
            {t.hero.headline}
          </h1>
          
          <p className="text-sm md:text-lg text-slate-100 mb-10 font-light leading-relaxed max-w-xl border-l-4 border-gold-500 pl-4 bg-slate-900/40 backdrop-blur-md py-3 rounded-r-xl">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white px-7 py-4 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-gold-900/20 transform transition-all hover:-translate-y-1"
            >
              <Ruler size={18} className="group-hover:rotate-12 transition-transform" />
              {t.hero.ctaFree}
            </a>
            
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-7 py-4 rounded-xl font-bold text-base md:text-lg transition-all hover:-translate-y-1"
            >
              <Phone size={18} />
              {t.hero.ctaMain}
            </a>

            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center justify-center gap-2.5 bg-[#0088cc] text-white px-7 py-4 rounded-xl font-bold text-base shadow-lg transform transition-all hover:-translate-y-1"
            >
              <Send size={18} />
              Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#services"
        onClick={(e) => handleScroll(e, '#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-gold-500/50 transition-all duration-300">
          <ChevronDown className="text-white w-5 h-5 animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;