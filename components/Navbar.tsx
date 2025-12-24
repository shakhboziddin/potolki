import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Language, Translation } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import { PHONE_NUMBER } from '../constants';

interface NavbarProps {
  lang: Language;
  t: Translation;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, t, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 group">
          <span className={`text-2xl font-heading font-black tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            POTOLKI <span className="text-gold-500">777</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {['services', 'portfolio', 'pricing', 'contact'].map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={(e) => handleNavClick(e, `#${key}`)}
                className={`text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {(t.nav as any)[key] || key}
              </a>
            ))}
          </div>
          
          <div className="h-4 w-px bg-slate-400/20"></div>
          
          <LanguageSwitcher currentLang={lang} onSwitch={setLang} scrolled={isScrolled} />

          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-gold-500/20 transition-all active:scale-95">
            {t.nav.callBtn}
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} onSwitch={setLang} scrolled={isScrolled} />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-x-0 top-[100%] bg-white shadow-2xl transition-all duration-300 overflow-hidden md:hidden ${
        isMobileMenuOpen ? 'max-h-[100vh] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col p-8 gap-6">
          {['services', 'portfolio', 'pricing', 'contact'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={(e) => handleNavClick(e, `#${key}`)}
              className="text-xl font-heading font-bold text-slate-900 hover:text-gold-600 border-b border-slate-50 pb-4"
            >
              {(t.nav as any)[key] || key}
            </a>
          ))}
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl mt-4">
            <Phone size={18} className="text-gold-500" />
            {t.nav.callBtn}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;