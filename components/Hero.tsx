import React from 'react';
import { Translation } from '../types';
import { PHONE_NUMBER, TELEGRAM_LINK } from '../constants';
import { Phone, Ruler, ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-slate-900 pt-20">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=90&w=1920" 
          alt="Ceiling" 
          className="w-full h-full object-cover brightness-[0.6] scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Quality Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
          <span className="text-gold-400 font-bold tracking-[0.1em] text-[10px] uppercase">
            #1 Premium Quality in Tashkent
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-[1.1] max-w-5xl drop-shadow-lg animate-fade-in-up">
          {t.hero.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t.hero.subheadline}
        </p>

        {/* Dynamic Buttons - Stacks on mobile, Rows on desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-gold-500/20 active:scale-95"
          >
            <Ruler size={20} />
            {t.hero.ctaFree}
          </a>
          
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95"
          >
            <Phone size={20} />
            {t.hero.ctaMain}
          </a>
        </div>

        {/* Clean Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:flex items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-500/50 transition-colors">
              <ShieldCheck size={20} className="text-gold-500" />
            </div>
            <span className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest">10 Yil Kafolat</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-500/50 transition-colors">
              <Clock size={20} className="text-gold-500" />
            </div>
            <span className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest">1 Kunda O'rnatish</span>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent animate-bounce-slow"></div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate linear; }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default Hero;