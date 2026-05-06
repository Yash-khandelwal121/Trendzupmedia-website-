import React, { useState } from 'react';
import { portfolioData } from '../data/siteData';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioData.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 animate-fadeIn min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: '#FF1E1E' }}>Our Work</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Case Studies & Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our portfolio of successful projects where we've helped brands achieve their digital goals.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filter === cat 
                  ? 'text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
              style={filter === cat ? { background: '#FF1E1E' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <span className="font-bold text-sm mb-2" style={{ color: '#FF1E1E' }}>{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex gap-4">
                    <button 
                      className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center transition-colors"
                      onMouseEnter={e => { e.currentTarget.style.background = '#FF1E1E'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
                    >
                      <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white/10 text-white backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
