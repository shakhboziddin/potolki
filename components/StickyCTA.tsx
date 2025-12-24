import React from 'react';
import { Phone, Send } from 'lucide-react';
import { PHONE_NUMBER, TELEGRAM_LINK } from '../constants';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Telegram Button */}
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#0088cc] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[#0088cc]/40 animate-fade-in"
        aria-label="Contact on Telegram"
      >
        <Send size={24} />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
        className="w-14 h-14 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-lg shadow-gold-900/30 hover:scale-110 transition-transform animate-pulse-slow"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(245, 158, 11, 0); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default StickyCTA;