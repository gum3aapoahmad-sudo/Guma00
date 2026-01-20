
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 gold-text">معرض الأعمال</h2>
            <p className="text-gray-400 text-lg">نحن لا نبيع خدمات، نحن نصنع قصص نجاح. شاهد لمحة من أعمالنا التي تم تنفيذها بأعلى معايير الجودة.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-amber-500/10 border border-amber-500/20 px-6 py-3 rounded-xl text-amber-500 font-bold">
               مشاريع مختارة ✓
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-[2rem] hover-lift">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-amber-500 text-xs font-black uppercase tracking-widest mb-2 block">{item.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="w-10 h-1 bg-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6 italic">هذا جزء بسيط مما نقدمه... هل أنت مستعد لتكون العميل القادم؟</p>
          <a 
            href="https://wa.me/905348292352" 
            className="inline-flex items-center gap-2 text-xl font-bold text-white hover:text-amber-500 transition-colors"
          >
            <span>اطلب عملك الخاص الآن</span>
            <span className="text-2xl">🔥</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
