import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button (Right) */}
      <motion.a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="fixed bottom-8 right-8 z-[50] bg-[#25D366] text-white p-5 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center group"
      >
        <MessageCircle size={28} fill="white" />
        <span className="absolute right-full mr-4 bg-white text-[#25D366] px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>
    </>
  );
};

export default FloatingButtons;
