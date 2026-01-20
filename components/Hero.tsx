
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-48 pb-32 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-700/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-amber-500 text-sm font-bold tracking-widest uppercase">
          الإبداع الرقمي بلا حدود
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tighter">
          <span className="block text-white drop-shadow-2xl">حلبي</span>
          <span className="gold-text gold-glow">للخدمات</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
          نصنع التميز، ونبني الهوية. خدمات رقمية متكاملة تجمع بين <span className="text-white font-medium">الذكاء الاصطناعي</span> واللمسة الفنية السورية الأصيلة.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="#services" 
            className="group relative px-10 py-5 bg-amber-500 hover:bg-amber-600 text-black font-black rounded-2xl text-xl transition-all shadow-[0_0_30px_-5px_rgba(251,191,36,0.5)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              تصفح الخدمات
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
          </a>
          
          <a 
            href="#portfolio"
            className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xl text-white font-bold transition-all backdrop-blur-sm"
          >
            مشاهدة أعمالنا
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">+500</span>
            <span className="text-xs text-gray-500 uppercase">عميل راضٍ</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">+1k</span>
            <span className="text-xs text-gray-500 uppercase">مشروع منجز</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">24/7</span>
            <span className="text-xs text-gray-500 uppercase">دعم فني</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-xs text-gray-500 uppercase">جودة مضمونة</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
