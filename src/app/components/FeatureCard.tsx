import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
      }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/50"
    >
      <div className="text-cyan-400 mb-4 flex items-center justify-center w-14 h-14 bg-cyan-500/10 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
