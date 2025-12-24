import React from 'react';
import { Translation } from '../types';
import { Gem, Users, Sparkles, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

interface AdvantagesProps {
  t: Translation;
}

const iconMap = {
  Gem: Gem,
  Users: Users,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
};

const Advantages: React.FC<AdvantagesProps> = ({ t }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            {t.advantages.title}
          </h2>
          <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch mb-16">
          {t.advantages.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  {IconComponent && <IconComponent size={32} className="text-gold-500 group-hover:text-white transition-colors duration-300" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg shadow-gold-900/20 transform transition-all hover:-translate-y-1"
          >
            {t.advantages.cta}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Advantages;