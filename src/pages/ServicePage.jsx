import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/siteData';
import { CheckCircle2, ArrowRight, ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicePage = () => {
  const { categorySlug, serviceSlug } = useParams();
  
  let category = null;
  let service = null;

  if (categorySlug) {
    category = servicesData.find(c => c.slug === categorySlug);
    service = category?.items.find(s => s.slug === serviceSlug);
  } else if (serviceSlug) {
    for (const c of servicesData) {
      const s = c.items.find(item => item.slug === serviceSlug);
      if (s) {
        category = c;
        service = s;
        break;
      }
    }
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="hover:underline" style={{ color: '#FF1E1E' }}>Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 animate-fadeIn min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 mb-12">
        <nav className="flex items-center space-x-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-[#FF1E1E] transition-colors flex items-center gap-1">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/services" className="hover:text-[#FF1E1E] transition-colors">Services</Link>
          <ChevronRight size={14} />
          <span className="text-white font-medium">{service.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: '#F5B400' }}>
              {category.title}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {service.name}
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl mb-10 leading-relaxed">
              {service.desc}
            </p>
            <div className="space-y-4 mb-10">
              {["Expert Professionals", "Customized Solutions", "Result Oriented", "24/7 Support"].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} style={{ color: '#FF1E1E' }} />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              style={{ background: '#FF1E1E', boxShadow: '0 8px 25px rgba(255,30,30,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F5B400'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FF1E1E'; e.currentTarget.style.color = '#fff'; }}
            >
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-video lg:aspect-square">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="py-20 border-t" style={{ borderColor: '#1a1a1a' }}>
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-white mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Strategic Approach", desc: "We develop customized strategies that align with your specific business goals." },
              { title: "Cutting-edge Tech", desc: "Our solutions are built using the latest technologies for maximum performance." },
              { title: "Measurable Results", desc: "Track your growth with detailed analytics and performance reports." }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] border transition-all group card-hover" style={{ background: '#111', borderColor: '#222' }}>
                <h3 className="text-xl font-bold text-white mb-4 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
