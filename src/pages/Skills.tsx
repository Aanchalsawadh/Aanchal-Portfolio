import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 75, category: 'backend' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};