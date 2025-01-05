import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import styles from '../styles/home.module.css';

export const Home: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${styles.hero} flex flex-col items-center justify-center min-h-screen pt-16 bg-gradient-to-b from-gray-800 to-black text-white`}
      >
        {/* Profile Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-full overflow-hidden border-4 border-gray-600 shadow-lg"
        >
          <img
           // src="src/image.png"
             src="src/photo.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 object-cover"
          />
        </motion.div>
        {/* Title Section */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold mt-6 text-center"
        >
          Hi, I'm <span className="text-blue-400">Aanchal Sawadh</span>
        </motion.h1>

        {/* Typewriter Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg md:text-2xl font-medium"
        >
          <TypeAnimation
            sequence={[
              '.NET Developer',
              3000,
              'ASP.NET Core Web API Developer',
              3000,
              'ASP.NET Core web App (MVC) Developer',
              3000,
              'React.js Enthusiast',
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Professional Summary */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="max-w-2xl mt-6 text-center text-gray-300 text-justify"
        >
          A passionate Full Stack .NET Developer skilled in building dynamic web solutions, efficient APIs, and seamless user interfaces. Proficient in ASP.NET Core Web API for creating robust APIs and ASP.NET Core MVC for scalable web applications. Experienced with modern frontend tools like React.js and Blazor to deliver intuitive user experiences. I specialize in crafting end-to-end solutions that drive business success.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { skill: 'C#', description: 'Programming' },
            { skill: 'ASP.NET Core Web API', description: 'Backend' },
            { skill: 'ASP.NET Core MVC', description: 'Backend' },
            { skill: 'React.js', description: 'Frontend' },
            { skill: 'Blazor', description: 'Frontend' },
            { skill: 'Dynamics 365', description: 'CRM' },
            { skill: 'Git', description: 'Version Control' },
            { skill: 'Azure DevOps', description: 'DevOps' },
          ].map(({ skill, description }, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <p className="text-white font-bold text-xl">{skill}</p>
              <p className="text-gray-400 text-sm mt-1">{description}</p>
            </div>
          ))}
        </motion.div>
        {/* Scroll Button */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {['🔴', '🟡', '🟢'].map((emoji, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3, // Stagger animations for each emoji
              }}
              className="text-3xl md:text-2xl"
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

  );
};
