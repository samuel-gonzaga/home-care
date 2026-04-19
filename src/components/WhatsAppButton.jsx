import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = ({ url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 lg:hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300">
        <MessageCircle className="h-7 w-7" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;