import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', description: '.NET Technology' },
    { label: 'Projects Completed', value: '3+', description: 'Using AI Tools' },
    { label: 'Technologies', value: '10+', description: 'Want more to explore' },
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="space-y-4"
          >
            <p className="text-lg">
              I began my software development journey during my academic years amid the pandemic, working on an IoT-based application. This sparked my passion for programming, leading me to pursue a career in tech. I chose .NET development for its wide adoption, versatility, and open-source nature, and have since honed my skills in .NET, React.js, and cloud-based solutions, focusing on building scalable and impactful applications. 🌐🚀
            </p>
            <p className="text-lg">
              I specialize in building scalable APIs using ASP.NET Core Web API and ASP.NET Core MVC for the backend, while crafting intuitive user interfaces with React.js and Blazor for the frontend. Additionally, I customize solutions with Dynamics 365 to meet business needs and manage code using Git for version control. My focus is on delivering efficient, end-to-end solutions that drive business success. 🔧💻📈
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="grid grid-cols-1 gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
                <div className="text-gray-100">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
