import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, portfolioData, blogData } from '../../data/siteData';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Compile all searchable items
  const allSearchableItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    ...servicesData.flatMap(cat => cat.items.map(item => ({
      name: item.name,
      path: `/services/${cat.slug}/${item.slug}`
    }))),
    ...portfolioData.map(item => ({
      name: item.title,
      path: '/portfolio'
    })),
    ...blogData.map(item => ({
      name: item.title,
      path: '/blog'
    }))
  ];

  useEffect(() => {
    if (query.length > 1) {
      const filtered = allSearchableItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0) {
        handleNavigate(suggestions[selectedIndex].path);
      } else if (suggestions.length > 0) {
        handleNavigate(suggestions[0].path);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full lg:w-[280px]" ref={searchRef}>
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 1 && setIsOpen(true)}
          placeholder="Search services, portfolio, blogs..."
          className="w-full bg-[#111111] text-white text-sm pl-10 pr-4 py-2.5 rounded-full border border-[#ff1e1e]/30 focus:border-[#ff1e1e] focus:outline-none focus:ring-2 focus:ring-[#ff1e1e]/20 transition-all duration-300 placeholder:text-[#999999]"
        />
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#999999] group-focus-within:text-[#ff1e1e] transition-colors duration-300 w-4 h-4" />
      </div>

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-full mt-2 bg-[#111111] border border-[#ff1e1e]/20 rounded-2xl shadow-2xl overflow-hidden z-[1001]"
          >
            <div className="py-2">
              {suggestions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigate(item.path)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left px-5 py-3 text-sm transition-colors duration-200 flex items-center gap-3 ${
                    index === selectedIndex ? 'bg-[#ff1e1e] text-white' : 'text-gray-300 hover:bg-[#ff1e1e]/10 hover:text-white'
                  }`}
                >
                  <Search className="w-3.5 h-3.5 opacity-50" />
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
