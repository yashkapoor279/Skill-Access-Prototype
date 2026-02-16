import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function StepCard({ number, icon, title, description, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-cyan-400 text-white font-bold">
        {number}
      </div>
      <h3 className="text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
