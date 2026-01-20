
import React from 'react';
import { Service } from '../types';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="group glass-card hover-lift p-10 rounded-[2.5rem] flex flex-col h-full relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
      
      <div className="text-6xl mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 origin-right">
        {service.icon}
      </div>
      
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
          {service.title}
        </h3>
        {service.badge && (
          <span className="bg-amber-500/20 text-amber-500 text-[10px] font-black px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-tighter">
            {service.badge}
          </span>
        )}
      </div>
      
      <p className="text-gray-400 mb-10 flex-grow leading-relaxed text-lg">
        {service.description}
      </p>
      
      <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
        <div>
          <span className="block text-gray-500 text-xs font-bold uppercase mb-1">يبدأ من</span>
          <span className="text-3xl font-black text-amber-400 gold-glow">{service.price}</span>
        </div>
        <a 
          href={`https://wa.me/905348292352?text=أريد طلب خدمة: ${service.title}`}
          className="w-14 h-14 bg-white/5 hover:bg-amber-500 hover:text-black rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-amber-500/20"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
