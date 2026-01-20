
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-900 pt-20 pb-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="text-2xl font-black gold-text mb-6">حلبي للخدمات</h4>
            <p className="text-gray-400 leading-relaxed">
              نحن نقدم حلولاً رقمية مبتكرة تجمع بين الخبرة المحلية والجودة العالمية. التزامنا هو تقديم الأفضل دائماً.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">الدفع الحصري</h4>
            <div className="bg-neutral-800 p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">💳</span>
                <span className="text-xl font-black">شام كاش - Sham Cash</span>
              </div>
              <p className="text-sm text-gray-400">
                نقبل الدفع حصراً عبر خدمة "شام كاش" لسهولة التعامل الموثوق والآمن داخل سوريا.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">معلومات التواصل</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-amber-500">📞</span>
                <span>+905348292352 (جمعة محيميد)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">📧</span>
                <span>Gum3aapoahmad@gmail.com</span>
              </li>
              <li className="flex gap-4 mt-6">
                <a href="https://instagram.com/j_x_003" target="_blank" className="hover:text-pink-500 transition-colors">Instagram</a>
                <a href="https://tiktok.com/@halabi_4_4" target="_blank" className="hover:text-white transition-colors">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} حلبي للخدمات. جميع الحقوق محفوظة.</p>
          <p className="mt-2 text-xs text-amber-500/50">آخر تحديث للموقع: مارس 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
