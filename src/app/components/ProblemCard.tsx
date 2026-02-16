import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  delay?: number;
}

export function ProblemCard({ icon, title, delay = 0 }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6 flex items-center gap-4"
    >
      <div className="text-red-400 flex-shrink-0">
        {icon}
      </div>
      <p className="text-gray-300">{title}</p>
    </motion.div>
  );
}
