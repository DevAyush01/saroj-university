import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const AiAndTechPage = () => {
  const [expandedCourses, setExpandedCourses] = useState({});
  const [expandedAdmission, setExpandedAdmission] = useState({
    regular: false,
    global: false
  });

  const toggleCourse = (courseId) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const toggleAdmission = (type) => {
    setExpandedAdmission(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Animation variants
  const accordionVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    }
  };

  const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Discover Your Academic Pathway</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our cutting-edge programs in AI, ML, Data Science, and Robotics designed to shape future technology leaders.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
        >
          {/* Section Header */}
          <div className="bg-blue-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Artificial Intelligence & Technology</h2>
            <p className="text-blue-100 mt-1">Cutting-edge programs in AI, ML, Data Science, and Robotics</p>
          </div>

          {/* Programs List */}
          <div className="p-8">
            {/* Undergraduate Programs */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">B.Tech Programs</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Program Card 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('btech-ai')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">B.Tech (AI, ML, Data Science, Robotics)</h4>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-4">4 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['btech-ai'] ? "open" : "closed"}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['btech-ai'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li>• Comprehensive curriculum covering AI fundamentals</li>
                          <li>• Hands-on projects with industry datasets</li>
                          <li>• Specializations in ML or Robotics</li>
                        </ul>
                        <a href="/programs/btech-ai-ml" className="text-blue-600 hover:text-blue-800 font-medium">View Full Details</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Program Card 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('btech-cse')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">B.Tech Computer Science & Engineering</h4>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-4">4 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['btech-cse'] ? "open" : "closed"}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['btech-cse'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li>• Core computer science principles</li>
                          <li>• Electives in AI/ML technologies</li>
                          <li>• Industry-aligned capstone project</li>
                        </ul>
                        <a href="/programs/btech-cse" className="text-blue-600 hover:text-blue-800 font-medium">View Full Details</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Postgraduate Programs */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">M.Tech Programs</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Program Card 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('mtech-ai')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">M.Tech (AI, ML, Data Science, Robotics)</h4>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-4">2 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['mtech-ai'] ? "open" : "closed"}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['mtech-ai'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li>• Advanced AI algorithms and techniques</li>
                          <li>• Research opportunities with faculty</li>
                          <li>• Industry internship component</li>
                        </ul>
                        <a href="/programs/mtech-ai-ml" className="text-blue-600 hover:text-blue-800 font-medium">View Full Details</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Program Card 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('mtech-cse')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">M.Tech Computer Science & Engineering</h4>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-4">2 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['mtech-cse'] ? "open" : "closed"}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['mtech-cse'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li>• Specialized tracks available</li>
                          <li>• Thesis or project-based options</li>
                          <li>• Cutting-edge research facilities</li>
                        </ul>
                        <a href="/programs/mtech-cse" className="text-blue-600 hover:text-blue-800 font-medium">View Full Details</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Admission Process */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Regular Admission */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  onClick={() => toggleAdmission('regular')}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold text-gray-800">Admission Process Overview</h3>
                  <motion.div
                    variants={arrowVariants}
                    animate={expandedAdmission.regular ? "open" : "closed"}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedAdmission.regular && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                    >
                      <div className="px-6 pb-6">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Regular Mode</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Submit online application with required documents</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Appear for entrance exam (if applicable)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Attend personal interview/counseling session</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Global Admission */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  onClick={() => toggleAdmission('global')}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold text-gray-800">Global Mode</h3>
                  <motion.div
                    variants={arrowVariants}
                    animate={expandedAdmission.global ? "open" : "closed"}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedAdmission.global && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                    >
                      <div className="px-6 pb-6">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Complete regular admission process</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Submit additional documents for international study</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Complete visa and travel formalities</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 text-center">
            <motion.a 
              href="/apply" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Application
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AiAndTechPage;