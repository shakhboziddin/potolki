import React from 'react';
import { Translation } from '../types';
import { PHONE_NUMBER, TELEGRAM_LINK } from '../constants';
import { Phone, Send, Ruler, ShieldCheck, Star } from 'lucide-react';

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
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=90&w=1920" 
          alt="Premium Stretch Ceiling Interior" 
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
        {/* Advanced Multi-layer Overlays */}
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-transparent to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/20 to-transparent hidden md:block"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col justify-center h-full">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-gold-400/30 rounded-full bg-slate-900/40 backdrop-blur-md animate-fade-in-down mx-auto md:mx-0">
            <Star size={12} className="text-gold-500 fill-gold-500" />
            <span className="text-gold-400 font-bold tracking-[0.2em] text-[10px] uppercase">
              #1 Premium Quality in Tashkent
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-[1.15] md:leading-tight drop-shadow-2xl animate-fade-in-up">
            {t.hero.headline}
          </h1>
          
          <p className="text-base md:text-xl text-slate-100 mb-10 font-light leading-relaxed max-w-2xl mx-auto md:mx-0 md:border-l-4 border-gold-500 md:pl-6 py-1 animate-fade-in-up reveal-delay-2 opacity-90">
            {t.hero.subheadline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up reveal-delay-3">
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-gold-900/30 transition-all hover:-translate-y-1 active:scale-95"
            >
              <Ruler size={20} className="group-hover:rotate-12 transition-transform" />
              {t.hero.ctaFree}
            </a>
            
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 active:scale-95"
            >
              <Phone size={20} />
              {t.hero.ctaMain}
            </a>

            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden w-full flex items-center justify-center gap-3 bg-[#0088cc] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl"
            >
              <Send size={20} />
              Telegram
            </a>
          </div>

          {/* Mobile Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6 opacity-60 animate-fade-in reveal-delay-3">
            <div className="flex items-center gap-2 text-white/80 text-xs font-medium uppercase tracking-widest">
              <ShieldCheck size={16} className="text-gold-500" />
              <span>10 Yil Kafolat</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs font-medium uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>1 Kunda O'rnatish</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#services"
        onClick={(e) => handleScroll(e, '#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold-500 rounded-full animate-scroll-mouse"></div>
        </div>
      </a>

      <style>{`
        @keyframes scroll-mouse {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @keyframes slow-zoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
        .animate-scroll-mouse { animation: scroll-mouse 2s infinite; }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .reveal-delay-1 { animation-delay: 0.1s; }
        .reveal-delay-2 { animation-delay: 0.2s; }
        .reveal-delay-3 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default Hero;