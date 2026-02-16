import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  delay?: number;
}

export function UseCaseCard({ icon, title, delay = 0 }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)' }}
      className="bg-gradient-to-br from-indigo-800/40 to-purple-900/40 border border-cyan-500/20 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-500/50"
    >
      <div className="text-cyan-400 mb-4 transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg text-white">{title}</h3>
    </motion.div>
  );
}
