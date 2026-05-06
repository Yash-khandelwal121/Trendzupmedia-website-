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
      <div className="container mx-auto px-6 flex justify-between items-center relative">
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
              className={`font-medium flex items-center gap-1 transition-colors duration-200 ${location.pathname.startsWith('/services') ? 'text-[#FF1E1E]' : 'text-[#111111] group-hover:text-[#FF1E1E]'}`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[95vw] max-w-[1450px] bg-white border border-gray-100 rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-12 z-[9999] overflow-hidden"
                  style={{ left: '50%', transform: 'translateX(-50%)', boxSizing: 'border-box' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 lg:gap-6 xl:gap-10">
                    {servicesData.map((category, idx) => (
                      <div key={idx} className="space-y-6">
                        <h3 className="text-[#FF1E1E] font-extrabold text-[13px] uppercase tracking-[0.15em] border-b border-gray-100 pb-4">
                          {category.title}
                        </h3>
                        <ul className="space-y-3.5">
                          {category.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={`/services/${category.slug}/${item.slug}`}
                                className="text-gray-600 hover:text-[#FF1E1E] transition-all text-[14px] font-medium block hover:translate-x-1.5"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
                  Services <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
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
