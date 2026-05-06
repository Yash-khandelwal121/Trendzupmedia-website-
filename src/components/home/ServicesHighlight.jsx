import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, Smartphone, BarChart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Web Designing",
    desc: "Stunning, user-centric designs that capture your brand essence and engage visitors.",
    icon: <Layout className="w-8 h-8" />,
    iconColor: '#F5B400',
    path: "/services/website-designing/static-website-designing"
  },
  {
    title: "Web Development",
    desc: "Robust and scalable web applications built with the latest technologies for performance.",
    icon: <Code className="w-8 h-8" />,
    iconColor: '#FF1E1E',
    path: "/services/website-development/php-website-development"
  },
  {
    title: "Mobile App Development",
    desc: "Custom iOS and Android apps that provide seamless experiences on every device.",
    icon: <Smartphone className="w-8 h-8" />,
    iconColor: '#F5B400',
    path: "/services/mobile-app/android-app-development"
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that increase visibility and drive conversions.",
    icon: <BarChart className="w-8 h-8" />,
    iconColor: '#FF1E1E',
    path: "/services/digital-marketing/seo"
  }
];

const ServicesHighlight = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(255,30,30,0.04)' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            style={{ color: '#F5B400' }}
          >
            What We Do Best
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We provide comprehensive digital solutions tailored to your business needs, ensuring exponential growth and market dominance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="p-10 rounded-[2.5rem] relative overflow-hidden group card-hover"
              style={{
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid #222',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12 blur-2xl transition-all duration-500 group-hover:scale-150"
                style={{ background: `${service.iconColor}15` }}></div>

              <div className="mb-8 transition-transform duration-500 group-hover:scale-110" style={{ color: service.iconColor }}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">{service.desc}</p>
              <Link
                to={service.path}
                className="font-bold flex items-center gap-1 group-hover:gap-3 transition-all"
                style={{ color: '#FF1E1E' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F5B400'}
                onMouseLeave={e => e.currentTarget.style.color = '#FF1E1E'}
              >
                Learn More <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
