import React from 'react';
import { Translation } from '../types';
import { Star } from 'lucide-react';

interface ReviewsProps {
  t: Translation;
}

const Reviews: React.FC<ReviewsProps> = ({ t }) => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center text-slate-900 mb-12">
          {t.reviews.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-gold-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-slate-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;