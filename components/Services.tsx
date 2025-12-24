import React from 'react';
import { Translation } from '../types';
import { Check } from 'lucide-react';

interface ServicesProps {
  t: Translation;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            {t.services.title}
          </h2>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {t.services.items.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-t-2xl rounded-b-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100"
            >
              {/* Image Area */}
              <div className="relative h-64 w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors rounded-t-2xl"></div>
                
                {/* Floating Icon */}
                <div className="absolute -bottom-6 right-8 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white group-hover:scale-110 transition-transform duration-300">
                   <Check size={20} className="text-white stroke-[3]" />
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {item.description}
                </p>
                
                <a 
                  href="#contact"
                  className="w-full block text-center py-3.5 rounded-xl bg-slate-50 text-slate-900 font-bold border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
                >
                  {t.services.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;