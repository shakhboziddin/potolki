import React, { useState } from 'react';
import { Translation } from '../types';
import { Plus } from 'lucide-react';

interface PortfolioProps {
  t: Translation;
}

const Portfolio: React.FC<PortfolioProps> = ({ t }) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const showMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, t.portfolio.items.length));
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Responsive Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14 md:mb-18">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-5 leading-tight">
            {t.portfolio.title}
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-gold-500 rounded-full mb-6"></div>
          <p className="text-slate-600 text-base md:text-xl font-light max-w-2xl leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.portfolio.items.slice(0, visibleItems).map((item) => (
            <div 
              key={item.id} 
              className="group relative h-80 md:h-96 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer shadow-xl border-4 border-white transform transition-all hover:-translate-y-2"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <span className="text-gold-400 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-heading font-bold transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < t.portfolio.items.length && (
          <div className="mt-12 md:mt-16 text-center">
            <button 
              onClick={showMore}
              className="inline-flex items-center gap-2.5 px-8 md:px-10 py-3.5 md:py-4 bg-white border-2 border-gold-500 text-gold-600 rounded-2xl font-bold text-base md:text-lg hover:bg-gold-500 hover:text-white transition-all shadow-lg hover:shadow-gold-500/20 active:scale-95"
            >
              <Plus size={20} />
              {t.portfolio.expand}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;