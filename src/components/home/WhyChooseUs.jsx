import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, Users, Target, Rocket } from 'lucide-react';

const reasons = [
  { title: "Experienced Team", desc: "Our professionals have years of industry experience and deep technical expertise.", icon: <Users className="w-10 h-10" />, color: '#FF1E1E' },
  { title: "Strategic Planning", desc: "We develop customized strategies based on real-time data and market research.", icon: <Target className="w-10 h-10" />, color: '#F5B400' },
  { title: "Fast Delivery", desc: "We value your time and ensure projects are completed with speed and precision.", icon: <Zap className="w-10 h-10" />, color: '#FF1E1E' },
  { title: "Innovative Ideas", desc: "We bring fresh, creative perspectives to every unique business challenge.", icon: <Rocket className="w-10 h-10" />, color: '#F5B400' },
  { title: "Proven Results", desc: "Our track record is defined by measurable success and high ROI for our clients.", icon: <Award className="w-10 h-10" />, color: '#FF1E1E' },
  { title: "24/7 Support", desc: "We are always here to assist you, ensuring your business never sleeps.", icon: <CheckCircle2 className="w-10 h-10" />, color: '#F5B400' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(255,30,30,0.08)' }}></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(245,180,0,0.06)' }}></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-bold uppercase tracking-[0.3em] text-xs mb-4 block" style={{ color: '#F5B400' }}>
              The Trendzup Edge
            </span>
            <h2 className="text-3xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Why Choose <br /><span className="gradient-text">Trendzup Media?</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl">
              We don't just build websites; we build scalable digital ecosystems. Our holistic approach to growth ensures that every aspect of your online presence is synchronized for maximum impact.
            </p>
            <div className="space-y-5">
              {['Result Oriented Approach', 'Experienced Digital Experts', 'Transparent Communication', 'Latest Technology Stack'].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(255,30,30,0.1)' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FF1E1E'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,30,30,0.1)'}
                  >
                    <CheckCircle2 size={20} style={{ color: '#FF1E1E' }} />
                  </div>
                  <span className="text-white font-semibold text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] border transition-all duration-300 shadow-2xl card-hover"
                style={{ background: '#111', borderColor: '#222' }}
              >
                <div className="mb-6" style={{ color: reason.color }}>{reason.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
