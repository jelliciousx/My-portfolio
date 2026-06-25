import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ progress, onComplete }) => {
  // Trigger completion slightly before 100% for smoother transition
  React.useEffect(() => {
    if (progress >= 99.5) {
      setTimeout(onComplete, 300);
    }
  }, [progress, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-zinc-900 z-50 flex items-center justify-center"
      animate={{ opacity: progress >= 99.5 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute right-10 text-white text-7xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {Math.floor(progress)}%
      </motion.div>
    </motion.div>
  );
};

export default Preloader;