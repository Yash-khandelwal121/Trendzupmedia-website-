import React from 'react';
import { servicesData } from '../data/siteData';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="pt-32 pb-20 animate-fadeIn bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: '#F5B400' }}>Our Solutions</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Comprehensive Digital Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">We offer a wide range of services to help your business thrive in the digital age. From concept to execution, we've got you covered.</p>
        </div>

        <div className="space-y-24">
          {servicesData.map((category, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8" style={{ background: 'rgba(255,30,30,0.1)', color: '#FF1E1E' }}>
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">{category.title}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We specialize in providing high-quality {category.title.toLowerCase()} services that drive real results. Our team of experts works closely with you to understand your goals and deliver a solution that exceeds your expectations.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: '#F5B400' }} />
                      <Link 
                        to={`/services/${category.slug}/${item.slug}`}
                        className="text-white hover:text-[#FF1E1E] transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
                  Get a Free Quote <ArrowRight size={20} />
                </Link>
              </div>
              <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img 
                  src={category.categoryImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"} 
                  alt={category.title} 
                  className="w-full h-auto transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
