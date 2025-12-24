import React from 'react';
import { Translation } from '../types';
import { PHONE_NUMBER } from '../constants';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-heading font-bold text-white mb-2">Potolki 777</h3>
          <p className="text-sm">Premium stretch ceilings in Tashkent.</p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-gold-400 transition-colors">{t.nav.services}</a>
          <a href="#portfolio" className="hover:text-gold-400 transition-colors">{t.nav.portfolio}</a>
          <a href="#contact" className="hover:text-gold-400 transition-colors">{t.nav.contacts}</a>
        </div>

        <div className="text-center md:text-right">
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="block text-white font-bold text-lg hover:text-gold-400 mb-1">
            {PHONE_NUMBER}
          </a>
          <span className="text-xs text-slate-500">© {new Date().getFullYear()} Potolki 777. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;