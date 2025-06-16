import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaChartLine, FaHandshake, FaUniversity, FaFileAlt, FaChevronDown } from 'react-icons/fa';

const EntrepreneurshipAndBusiness = () => {
  const [expandedPrograms, setExpandedPrograms] = useState({});

  const programs = [
    {
      id: 'bba-entrepreneurship',
      title: 'BBA in Entrepreneurship',
      duration: '4 Years',
      icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
      description: 'Develop skills to launch and grow successful businesses.',
      highlights: [
        'Business plan development',
        'Startup financing',
        'Innovation management'
      ]
    },
    {
      id: 'mba-innovation',
      title: 'MBA in Innovation Management',
      duration: '2 Years',
      icon: <FaChartLine className="text-yellow-600 text-2xl" />,
      description: 'Advanced training in leading innovative organizations.',
      highlights: [
        'Corporate innovation strategies',
        'Design thinking',
        'Technology commercialization'
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaHandshake className="text-5xl text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Entrepreneurship & Business</h1>
          <p className="text-xl text-gray-600">Empowering future business leaders and innovators</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
        >
          <div className="bg-yellow-600 px-8 py-6 flex items-center">
            <FaHandshake className="text-3xl text-white mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white">Entrepreneurship Programs</h2>
              <p className="text-yellow-100 mt-1">Building the next generation of business innovators</p>
            </div>
          </div>

          <div className="p-8">
            {programs.map((program) => (
              <div key={program.id} className="mb-6 last:mb-0 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <button
                  onClick={() => setExpandedPrograms(prev => ({
                    ...prev,
                    [program.id]: !prev[program.id]
                  }))}
                  className="w-full text-left flex justify-between items-start"
                >
                  <div className="flex items-center">
                    {program.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedPrograms[program.id] ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedPrograms[program.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pl-12"
                    >
                      <p className="text-gray-700 mb-3">{program.description}</p>
                      <h4 className="font-medium text-gray-800 mb-2">Program Highlights:</h4>
                      <ul className="space-y-2 text-gray-700">
                        {program.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <a 
                          href={`/programs/${program.id}`} 
                          className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center"
                        >
                          <FaFileAlt className="mr-2" /> View Program Details
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="px-8 py-6 bg-yellow-50 border-t border-gray-200 text-center">
            <motion.a 
              href="/apply" 
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg shadow-md flex items-center justify-center mx-auto w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>


              <FaFileAlt className="mr-2" /> Start Application
                            </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default EntrepreneurshipAndBusiness;