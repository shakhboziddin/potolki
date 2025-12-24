import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onSwitch: (lang: Language) => void;
  scrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onSwitch, scrolled }) => {
  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
      <button
        onClick={() => onSwitch('uz')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          currentLang === 'uz'
            ? 'bg-gold-500 text-white shadow-md'
            : scrolled ? 'text-slate-600 hover:text-gold-600' : 'text-slate-800 lg:text-white hover:text-gold-400'
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => onSwitch('ru')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          currentLang === 'ru'
            ? 'bg-gold-500 text-white shadow-md'
            : scrolled ? 'text-slate-600 hover:text-gold-600' : 'text-slate-800 lg:text-white hover:text-gold-400'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;