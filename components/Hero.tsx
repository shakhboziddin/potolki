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
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=90&w=1920" 
          alt="Premium Stretch Ceiling Interior" 
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gold-400/40 rounded-full bg-slate-900/60 backdrop-blur-md animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase">Potolki 777 Tashkent</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-[1.1] md:leading-tight drop-shadow-2xl animate-fade-in-up">
            {t.hero.headline}
          </h1>
          
          <p className="text-base md:text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl border-l-4 border-gold-500 pl-6 py-2 animate-fade-in-up reveal-delay-2">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up reveal-delay-3">
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-gold-900/30 transform transition-all hover:-translate-y-1 hover:scale-[1.02]"
            >
              <Ruler size={20} className="group-hover:rotate-12 transition-transform" />
              {t.hero.ctaFree}
            </a>
            
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1"
            >
              <Phone size={20} />
              {t.hero.ctaMain}
            </a>

            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center justify-center gap-3 bg-[#0088cc] text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl"
            >
              <Send size={20} />
              Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#services"
        onClick={(e) => handleScroll(e, '#services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-scroll-mouse"></div>
        </div>
      </a>

      <style>{`
        @keyframes scroll-mouse {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes slow-zoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
        .animate-scroll-mouse { animation: scroll-mouse 2s infinite; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;