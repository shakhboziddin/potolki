import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.contacts, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex flex-col items-center ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg pb-2'
          : 'bg-transparent pb-4'
      }`}
    >
      {/* Quick Number Top Bar - Premium Style */}
      <div 
        className={`w-full bg-slate-900 border-b border-white/5 transition-all duration-500 overflow-hidden flex justify-center items-center ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-xs font-medium tracking-wider text-slate-400">
           {/* Left: Work Hours */}
           <div className="hidden md:flex items-center gap-2">
              <Clock size={12} className="text-gold-500" />
              <span>{t.nav.workHours}</span>
           </div>

           {/* Right: Call Center */}
           <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors ml-auto md:ml-0">
             <span className="uppercase hidden sm:inline">{t.nav.callCenter}:</span>
             <div className="flex items-center gap-2 text-white">
                <Phone size={12} className="text-gold-500 fill-current" />
                <span className="font-bold font-mono text-sm">{PHONE_NUMBER}</span>
             </div>
          </a>
        </div>
      </div>

      <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between w-full transition-all duration-300 ${isScrolled ? 'mt-2' : 'mt-4'}`}>
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => {
             e.preventDefault();
             window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center shadow-lg border border-gold-500/30 group-hover:scale-105 transition-transform overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/20 blur-sm"></div>
            <span className="relative text-gold-500 font-heading font-bold text-xl">777</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-xl tracking-wider leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              POTOLKI
            </span>
            <span className={`text-[10px] tracking-[0.2em] font-medium uppercase ${isScrolled ? 'text-gold-600' : 'text-gold-400'}`}>
              Tashkent
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-nav font-bold uppercase tracking-wider hover:text-gold-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-slate-700' : 'text-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className={`h-6 w-px ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`}></div>

          <LanguageSwitcher currentLang={lang} onSwitch={setLang} scrolled={isScrolled} />
          
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={18} className="fill-white/20" />
            <span>{t.nav.callBtn}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
           <LanguageSwitcher currentLang={lang} onSwitch={setLang} scrolled={isScrolled} />
           <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-xl border transition-colors ${
              isScrolled 
                ? 'text-slate-800 border-slate-200 bg-slate-50' 
                : 'text-white border-white/20 bg-white/10 backdrop-blur-md'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 md:hidden flex flex-col p-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-4 text-slate-800 font-nav font-bold text-lg border-b border-slate-100 last:border-0 hover:text-gold-600 flex justify-between items-center group"
            >
              {link.name}
              <span className="text-slate-300 group-hover:text-gold-500 transition-colors">→</span>
            </a>
          ))}
          <div className="mt-6 pt-2">
             <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex w-full items-center justify-center gap-2 bg-slate-900 text-white px-5 py-4 rounded-xl font-bold shadow-xl"
            >
              <Phone size={20} className="text-gold-500" />
              <span>{t.nav.callBtn}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;