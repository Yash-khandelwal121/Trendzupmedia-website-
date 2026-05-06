import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] font-black leading-none"
          style={{ color: '#FF1E1E' }}
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl lg:text-5xl font-bold mb-8"
        >
          Oops! Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-12 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            style={{ background: '#FF1E1E', boxShadow: '0 4px 15px rgba(255,30,30,0.4)' }}
          >
            <Home size={20} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
