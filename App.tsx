
import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
// Added missing import for the Reviews component
import Reviews from './components/Reviews';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const t = CONTENT[lang];

  useEffect(() => {
    // Update document title and meta description for SEO based on language
    document.title = t.meta.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
    
    document.documentElement.lang = lang;
  }, [lang, t]);

  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50">
      <Navbar lang={lang} t={t} setLang={setLang} />
      
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Portfolio t={t} />
        {/* Render the Reviews component in the main section */}
        <Reviews t={t} />
        <Pricing t={t} />
        <Advantages t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
      <StickyCTA />

      {/* JSON-LD for Local Business SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Potolki 777",
          "image": "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=800",
          "@id": "https://potolki777.uz",
          "url": "https://potolki777.uz",
          "telephone": "+998901234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Amir Temur 107",
            "addressLocality": "Tashkent",
            "addressCountry": "UZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.311081,
            "longitude": 69.240562
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          },
          "priceRange": "$$"
        })}
      </script>
    </div>
  );
};

export default App;