import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ onPlayVideo, onConsultation }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: '#000' }}>
      {/* Background glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(255,30,30,0.12)' }}></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(245,180,0,0.07)' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(11,31,58,0.3)' }}></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="font-bold uppercase tracking-widest text-sm mb-4 block"
            style={{ color: '#F5B400' }}
          >
            Welcome to Trendzup Media
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Grow Your Business with <br />
            <span className="gradient-text">Trendzup Media</span>
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl">
            We deliver result-oriented digital marketing strategies that help your brand stand out and dominate the digital landscape.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/services/website-designing/static-website-designing"
              className="text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              style={{ background: '#FF1E1E', boxShadow: '0 8px 25px rgba(255,30,30,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F5B400'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FF1E1E'; e.currentTarget.style.color = '#fff'; }}
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <button
              onClick={onConsultation}
              className="text-white border px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 backdrop-blur-md hover:scale-105"
              style={{ borderColor: '#F5B400', background: 'rgba(245,180,0,0.05)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,180,0,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,180,0,0.05)'; }}
            >
              Free Consultation
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="client" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-bold text-sm">500+ Happy Clients</p>
              <div className="flex" style={{ color: '#F5B400' }}>
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl group border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }}></div>
          </div>

          {/* Stats Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 p-8 rounded-3xl border shadow-2xl z-20"
            style={{ background: '#111', borderColor: '#222' }}
          >
            <p className="text-4xl font-bold" style={{ color: '#FF1E1E' }}>98%</p>
            <p className="text-white text-sm font-medium">Client Satisfaction</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
