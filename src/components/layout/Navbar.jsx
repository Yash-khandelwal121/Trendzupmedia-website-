import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { servicesData } from '../../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '../shared/SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-[1000] transition-all duration-300 ${isScrolled ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] py-1' : 'bg-white py-2 shadow-sm'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Trendzup Media"
            className="h-12 lg:h-14 w-auto object-contain"
          />
          <div className="hidden items-center text-2xl font-bold ml-2">
            <span className="text-[#111111]">Trendzup</span>
            <span className="ml-1" style={{ color: '#FF1E1E' }}>Media</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-[#FF1E1E]' : 'text-[#111111] hover:text-[#FF1E1E]'}`}
          >Home</Link>

          {/* Services with Mega Menu */}
          <div
            className="group"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button
              className={`font-medium flex items-center gap-1.5 transition-colors duration-200 ${location.pathname.startsWith('/services') ? 'text-[#FF1E1E]' : 'text-[#111111] group-hover:text-[#FF1E1E]'}`}
            >
              Services 
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isMegaMenuOpen ? 'rotate-180' : 'rotate-0'}`} 
                strokeWidth={2.5}
              />
            </button>

            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-gray-100 rounded-[24px] shadow-[0_30px_70px_rgba(0,0,0,0.15)] z-[9999] overflow-hidden"
                  style={{ 
                    width: 'min(90vw, 950px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxSizing: 'border-box'
                  }}
                >
                  <div className="flex min-h-[450px]">
                    {/* Left Sidebar - Categories */}
                    <div className="w-[35%] bg-gray-50/50 border-r border-gray-100 p-6 space-y-2">
                      {servicesData.map((category, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setActiveCategoryIdx(idx)}
                          className={`group flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer transition-all duration-200 ${
                            activeCategoryIdx === idx 
                              ? 'bg-white shadow-md text-[#FF1E1E]' 
                              : 'text-gray-600 hover:bg-white hover:text-[#FF1E1E] hover:shadow-sm'
                          }`}
                        >
                          <span className="font-bold text-[15px] tracking-tight">{category.title}</span>
                          <motion.div
                            animate={{ x: activeCategoryIdx === idx ? 3 : 0, opacity: activeCategoryIdx === idx ? 1 : 0 }}
                            className="text-[#FF1E1E]"
                          >
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    {/* Right Panel - Items */}
                    <div className="w-[65%] p-10 bg-white">
                      <div className="mb-8">
                        <h4 className="text-[12px] uppercase tracking-[0.2em] font-extrabold text-[#FF1E1E] mb-2">Explore Our Services</h4>
                        <h3 className="text-2xl font-bold text-[#111111]">{servicesData[activeCategoryIdx].title}</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                        {servicesData[activeCategoryIdx].items.map((item, i) => (
                          <Link
                            key={i}
                            to={`/services/${servicesData[activeCategoryIdx].slug}/${item.slug}`}
                            className="group flex flex-col space-y-1 py-1"
                          >
                            <span className="text-[15px] font-bold text-gray-800 group-hover:text-[#FF1E1E] transition-colors leading-snug">
                              {item.name}
                            </span>
                            <span className="text-[12px] text-gray-400 group-hover:text-gray-500 transition-colors line-clamp-1 font-medium">
                              {item.desc || 'Premium solutions for your business.'}
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-12 pt-8 border-t border-gray-100">
                        <Link 
                          to={`/services/${servicesData[activeCategoryIdx].slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#FF1E1E] transition-colors"
                        >
                          View All {servicesData[activeCategoryIdx].title}
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.875 7.5H13.125M13.125 7.5L7.5 1.875M13.125 7.5L7.5 13.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/portfolio"
            className={`font-medium transition-colors duration-200 ${location.pathname === '/portfolio' ? 'text-[#FF1E1E]' : 'text-[#111111] hover:text-[#FF1E1E]'}`}
          >Portfolio</Link>
          <Link
            to="/blog"
            className={`font-medium transition-colors duration-200 ${location.pathname === '/blog' ? 'text-[#FF1E1E]' : 'text-[#111111] hover:text-[#FF1E1E]'}`}
          >Blog</Link>
          <Link
            to="/about"
            className={`font-medium transition-colors duration-200 ${location.pathname === '/about' ? 'text-[#FF1E1E]' : 'text-[#111111] hover:text-[#FF1E1E]'}`}
          >About Us</Link>

          <div className="hidden lg:block lg:w-[200px] xl:w-[280px]">
            <SearchBar />
          </div>

          <Link
            to="/contact"
            className="btn-primary px-6 xl:px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-[#FF1E1E]/20 whitespace-nowrap"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#111111]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              <div className="mb-2">
                <SearchBar />
              </div>
              <Link to="/" className="text-lg font-bold text-[#111111] hover:text-[#FF1E1E]">Home</Link>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-lg font-bold text-[#111111]"
                >
                  Services 
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`} 
                    strokeWidth={2.5}
                  />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-6 overflow-hidden"
                    >
                      {servicesData.map((category, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-[#FF1E1E] font-bold text-sm uppercase tracking-wider">{category.title}</h4>
                          <div className="flex flex-col space-y-2">
                            {category.items.map((item, i) => (
                              <Link 
                                key={i} 
                                to={`/services/${category.slug}/${item.slug}`}
                                className="text-gray-600 text-base"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/portfolio" className="text-lg font-bold text-[#111111] hover:text-[#FF1E1E]">Portfolio</Link>
              <Link to="/blog" className="text-lg font-bold text-[#111111] hover:text-[#FF1E1E]">Blog</Link>
              <Link to="/about" className="text-lg font-bold text-[#111111] hover:text-[#FF1E1E]">About Us</Link>
              <Link to="/contact" className="btn-primary py-4 rounded-full text-center font-bold">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
