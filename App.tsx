
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import GeminiAssistant from './components/GeminiAssistant';
import PhotoAnalyzer from './components/PhotoAnalyzer';
import LatestUpdates from './components/LatestUpdates';
import Footer from './components/Footer';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-black py-2.5 px-4 text-center text-sm font-black relative z-[60] shadow-xl">
        ⭐ أهلاً بكم في عالم حلبي للخدمات الرقمية - التميز هو خيارنا الوحيد
      </div>
      
      <Navbar />
      
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-32 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 gold-text">خدماتنا النخبوية</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">نقدم باقة من الحلول الرقمية المصممة بعناية لتلبي طموحاتكم الإبداعية داخل وخارج سوريا.</p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-10 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <Portfolio />

        {/* Latest Updates Section */}
        <LatestUpdates />

        {/* AI Lab Section Header */}
        <section className="pt-32 pb-10 px-4 max-w-7xl mx-auto text-center">
            <span className="px-4 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-black uppercase tracking-widest border border-amber-500/20 mb-6 inline-block">HALABI AI LAB</span>
            <h2 className="text-4xl md:text-6xl font-black gold-text">مختبر حلبي للذكاء الاصطناعي</h2>
            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">استخدم أحدث تقنيات Gemini لتوليد الأفكار وتحليل التصاميم مجاناً قبل طلب الخدمة.</p>
        </section>

        {/* AI Integration Section 1: Content Generation */}
        <section className="pb-10 px-4">
          <GeminiAssistant />
        </section>

        {/* AI Integration Section 2: Photo Analysis */}
        <section className="pb-32 px-4">
          <PhotoAnalyzer />
        </section>

        {/* Visual Showcase / Process */}
        <section className="py-32 bg-neutral-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2">
                <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight">كيف نعمل؟<br/><span className="text-amber-500">البساطة في قمة الفخامة</span></h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl font-black group-hover:bg-amber-500 group-hover:text-black transition-all">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">تواصل مباشر</h4>
                      <p className="text-gray-400">تحدث معنا عبر الواتساب واشرح فكرتك أو الخدمة التي تطلبها بكل بساطة.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group text-right">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl font-black group-hover:bg-amber-500 group-hover:text-black transition-all">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">دفع آمن (شام كاش)</h4>
                      <p className="text-gray-400">نوفر لك أسهل طريقة دفع داخل سوريا عبر خدمة شام كاش الموثوقة.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl font-black group-hover:bg-amber-500 group-hover:text-black transition-all">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">استلام بجودة 4K</h4>
                      <p className="text-gray-400">استلم عملك النهائي بدقة احترافية وسرعة لم تشهدها من قبل.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=400" alt="Process" className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10" />
                  <div className="flex flex-col gap-4 mt-12">
                    <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=400" alt="Process" className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10" />
                    <img src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&q=80&w=400" alt="Process" className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
