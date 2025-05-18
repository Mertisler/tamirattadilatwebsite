'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Problem = {
  title: string;
  icon: string;
  description: string;
};

type ProblemListProps = {
  problems: Problem[];
};

export default function ProblemList({ problems }: ProblemListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {problems.map((problem, index) => (
        <div
          key={problem.title}
          className="bg-gray-50 p-6 rounded-lg shadow-lg cursor-pointer transition hover:bg-blue-50"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-center gap-3">
            <div className="text-4xl mb-4">{problem.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 mt-2">{problem.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
} 