
import React, { useState } from 'react';
import { generateMarketingIdea, generateAdImage } from '../services/gemini';
import { SERVICES } from '../constants';
import { AdSuggestion } from '../types';

const GeminiAssistant: React.FC = () => {
  const [loadingText, setLoadingText] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [suggestion, setSuggestion] = useState<AdSuggestion | null>(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);

  const handleGenerateText = async () => {
    setLoadingText(true);
    setGeneratedImageUrl(null);
    try {
      const result = await generateMarketingIdea(selectedService);
      setSuggestion(result);
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setLoadingText(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!suggestion) return;
    setLoadingImage(true);
    try {
      const imageUrl = await generateAdImage(selectedService, suggestion.headline);
      setGeneratedImageUrl(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoadingImage(false);
    }
  };

  return (
    <div className="bg-neutral-800 rounded-3xl p-8 border border-white/5 max-w-4xl mx-auto my-20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl -z-10"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-gradient-to-tr from-amber-400 to-amber-600 p-2 rounded-lg text-black font-bold">AI</span>
        <h3 className="text-2xl font-bold">المصمم الذكي لخدمات حلبي</h3>
      </div>
      
      <p className="text-gray-400 mb-8 max-w-xl">
        حول أفكارك إلى تصاميم احترافية. ابدأ بتوليد نص إعلاني جذاب، ثم اطلب من الذكاء الاصطناعي رسم التصميم البصري المناسب لستوري الواتساب أو الانستغرام.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <select 
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="flex-grow bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none appearance-none cursor-pointer text-white"
        >
          {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
        </select>
        <button
          onClick={handleGenerateText}
          disabled={loadingText || loadingImage}
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-xl disabled:opacity-50 transition-all whitespace-nowrap shadow-lg shadow-amber-500/20"
        >
          {loadingText ? 'جاري التفكير...' : 'توليد فكرة إعلانية'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {suggestion && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="bg-neutral-900 rounded-2xl p-6 border border-amber-500/20 shadow-inner">
              <h4 className="text-amber-400 font-bold mb-3 text-xl">{suggestion.headline}</h4>
              <p className="text-gray-300 mb-4 whitespace-pre-wrap leading-relaxed">{suggestion.body}</p>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-black p-2 bg-black/30 rounded inline-block">
                CTA: {suggestion.cta}
              </div>
            </div>

            {!generatedImageUrl && !loadingImage && (
              <button
                onClick={handleGenerateImage}
                className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">🎨</span>
                تحويل النص إلى تصميم بصري (Story)
              </button>
            )}
            
            {loadingImage && (
              <div className="w-full p-8 border border-white/5 bg-neutral-900/50 rounded-2xl flex flex-col items-center gap-4 text-white">
                <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-amber-400 font-bold animate-pulse text-center">جاري تصميم الإعلان بصرياً...<br/><span className="text-xs text-gray-500">نستخدم أحدث تقنيات التصميم الرقمي</span></p>
              </div>
            )}
          </div>
        )}

        {generatedImageUrl && (
          <div className="flex flex-col items-center animate-in zoom-in-95 fade-in duration-700">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-amber-500 to-amber-700 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black p-3 rounded-[2.5rem] shadow-2xl border border-white/10">
                <img 
                  src={generatedImageUrl} 
                  alt="Generated Ad" 
                  className="rounded-[2rem] w-full max-w-[300px] aspect-[9/16] object-cover"
                />
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">التصميم جاهز للنشر كـ Story</p>
            <button 
              onClick={() => window.open(generatedImageUrl, '_blank')}
              className="mt-2 text-amber-500 hover:underline text-sm font-bold"
            >
              تحميل الصورة بدقة كاملة
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiAssistant;
